function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  maxR = 12;
  maxG = 13;
  maxB = 14;

  ttl = 0;

  for (i = 0; i < inpt.length - 1; i++) {
    curr = inpt[i].split(':')[1].trim();
    curr = curr.split(/[,;]/);
    var valid = true;

    for (j in curr) {
      var [num, clr] = curr[j].trim().split(' ');
      switch (clr) {
        case 'red':
          if (num > maxR) {
            valid = false;
          }
          break;
        case 'green':
          if (num > maxG) {
            valid = false;
          }
          break;
        case 'blue':
          if (num > maxB) {
            valid = false;
          }
          break;
      }
    }

    if (valid) {
      ttl += i + 1;
    }
  }

  console.log(ttl);
}