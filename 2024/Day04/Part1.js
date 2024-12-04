function aoc() {
  let inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);
  let ttl = 0;

  // Left + Right
  for (i = 0; i < inpt.length; i++) {
    let xmas = inpt[i].match(/XMAS/g) || [];
    let samx = inpt[i].match(/SAMX/g) || [];
    ttl += xmas.length + samx.length;

    inpt[i] = inpt[i].split('');
  }

  // Rotate array
  let rows = inpt.length, cols = inpt[0].length;
  let rotateArr = [];
  for (let j = 0; j < cols; j++) {
    rotateArr[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rotateArr[j][i] = inpt[i][j];
    }
  }

  // Up + Down (rotated so we can use Left + Right again)
  for (i = 0; i < rotateArr.length; i++) {
    let xmas = rotateArr[i].join('').match(/XMAS/g) || [];
    let samx = rotateArr[i].join('').match(/SAMX/g) || [];
    ttl += xmas.length + samx.length;

    // Diagonals
    if (i > 2) {
      for (let j = 0; j < rotateArr[i].length; j++) {
        if (j > 2) {
          if (
            (rotateArr[i][j] == 'X' && rotateArr[i - 1][j - 1] == 'M' && rotateArr[i - 2][j - 2] == 'A' && rotateArr[i - 3][j - 3] == 'S')
            || (rotateArr[i][j] == 'S' && rotateArr[i - 1][j - 1] == 'A' && rotateArr[i - 2][j - 2] == 'M' && rotateArr[i - 3][j - 3] == 'X')
          )
            ttl++;
        }
        if (j < rotateArr[i].length - 3) {
          if (
            (rotateArr[i][j] == 'X' && rotateArr[i - 1][j + 1] == 'M' && rotateArr[i - 2][j + 2] == 'A' && rotateArr[i - 3][j + 3] == 'S')
            || (rotateArr[i][j] == 'S' && rotateArr[i - 1][j + 1] == 'A' && rotateArr[i - 2][j + 2] == 'M' && rotateArr[i - 3][j + 3] == 'X')
          )
            ttl++;
        }
      }
    }
  }

  console.log(ttl);
}

aoc()