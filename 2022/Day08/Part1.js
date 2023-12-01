function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  for (i = 0; i < inpt.length; i++) {
    inpt[i] = inpt[i].split('');
  }

  for (x = 1; x < inpt.length - 1; x++) {
    for (y = 1; y < inpt[x].length - 1; y++) {
      inpt[i] = inpt[i].split('');
    }
  }
}