function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  ttl = 0;

  for (i = 0; i < inpt.length - 1; i++) {
    curr = inpt[i].split(':')[1].trim();
    curr = curr.split(/[,;]/);

    var maxR = 0;
    var maxG = 0;
    var maxB = 0;

    for (j in curr) {
      var [num, clr] = curr[j].trim().split(' ');
      num = parseInt(num);
      switch (clr) {
        case 'red':
          if (num > maxR) {
            maxR = num;
          }
          break;
        case 'green':
          if (num > maxG) {
            maxG = num;
          }
          break;
        case 'blue':
          if (num > maxB) {
            maxB = num;
          }
          break;
      }
    }
    ttl += (maxR * maxG * maxB);
  }
  console.log(ttl);
}