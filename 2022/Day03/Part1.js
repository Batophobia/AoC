function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);

  ttl = 0;
  for (i in inpt) {
    itms = [inpt[i].substr(0, inpt[i].length / 2), inpt[i].substr(inpt[i].length / 2)];
    for (j = 0; j < itms[0].length; j++) {
      if (itms[1].indexOf(itms[0][j]) > -1) {
        ttl += itms[0].charCodeAt(j) - (itms[0].charCodeAt(j) > 96 ? 96 : 38);
        break;
      }
    }
  }

  console.log(ttl);
}