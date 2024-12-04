function aoc() {
  let inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);
  let ttl = 0;

  for (i = 1; i < inpt.length - 1; i++) {
    for (let j = 1; j < inpt[i].length - 1; j++) {
      if (
        inpt[i][j] == 'A'
        && (
          (inpt[i - 1][j - 1] == 'M' && inpt[i + 1][j + 1] == 'S')
          || (inpt[i - 1][j - 1] == 'S' && inpt[i + 1][j + 1] == 'M')
        )
        && (
          (inpt[i - 1][j + 1] == 'M' && inpt[i + 1][j - 1] == 'S')
          || (inpt[i - 1][j + 1] == 'S' && inpt[i + 1][j - 1] == 'M')
        )
      )
        ttl++;
    }
  }
  console.log(ttl);
}

aoc()