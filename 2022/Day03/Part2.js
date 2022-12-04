function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);

  ttl = 0;
  for (i = 0; i < inpt.length; i += 3) {
    sacks = [inpt[i], inpt[i + 1], inpt[i + 2]];
    for (j = 0; j < sacks[0].length; j++) {
      if (sacks[1].indexOf(sacks[0][j]) > -1
        && sacks[2].indexOf(sacks[0][j]) > -1) {
        ttl += sacks[0].charCodeAt(j) - (sacks[0].charCodeAt(j) > 96 ? 96 : 38);
        break;
      }
    }
  }

  console.log(ttl);
}