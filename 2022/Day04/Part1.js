function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);

  ttl = 0;
  for (i = 0; i < inpt.length; i++) {
    elf = inpt[i].split(',');
    elf[0] = elf[0].split('-').map(v => parseInt(v));
    elf[1] = elf[1].split('-').map(v => parseInt(v));

    if (elf[0][0] <= elf[1][0] && elf[0][1] >= elf[1][1]) ttl++;
    else if (elf[1][0] <= elf[0][0] && elf[1][1] >= elf[0][1]) ttl++;
  }

  console.log(ttl);
}