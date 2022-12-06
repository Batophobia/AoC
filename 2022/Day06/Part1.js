function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split('');

  idx = 0;
  while (inpt.slice(idx, idx + 4)
    .filter((v, i, s) => s.indexOf(v) === i).length < 4) {
    idx++;
  }

  console.log(idx + 5);
}