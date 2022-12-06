function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split('');

  idx = 0;
  while (inpt.slice(idx, idx + 14)
    .filter((v, i, s) => s.indexOf(v) === i).length < 14) {
    idx++;
  }

  console.log(idx + 14);
}