function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);

  ttl = 0;
  for (i = 0; i < inpt.length; i++) {
    elf = inpt[i].split(',');

    elf[0] = elf[0].split('-').map(v => parseInt(v));
    elf[0] = { min: elf[0][0], max: elf[0][1] };

    elf[1] = elf[1].split('-').map(v => parseInt(v));
    elf[1] = { min: elf[1][0], max: elf[1][1] };

    elf.sort((x, y) => x.min - y.min);

    if (elf[0].max >= elf[1].min) ttl++;
  }

  console.log(ttl);
}