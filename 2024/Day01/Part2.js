function aoc() {
  inpt = (document.body.textContent || document.body.innerText).trim()
  inpt = inpt.split(/\n/g);
  ttl = 0;

  leftCol = inpt.map(v => parseInt(v.split(/\s+/g)[0])).sort();
  rightCol = inpt.map(v => parseInt(v.split(/\s+/g)[1])).sort();

  for (i = 0; i < inpt.length; i++) {
    num = leftCol[i];
    ttl += num * rightCol.filter(v => v == num).length
  }

  console.log(ttl);
}

aoc()