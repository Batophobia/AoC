function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  ttl = 0;
  for (i in inpt) {
    if (!inpt[i]) continue;
    opp = inpt[i].charCodeAt(0) - 65;
    ply = inpt[i].charCodeAt(2) - 88;

    ttl += ply + 1;

    switch (ply) {
      case 0: // Rock
        if (opp == 0) ttl += 3;
        else if (opp == 2) ttl += 6;
        break;
      case 1: // Paper
        if (opp == 0) ttl += 6;
        else if (opp == 1) ttl += 3;
        break;
      case 2: // Scissors
        if (opp == 1) ttl += 6;
        else if (opp == 2) ttl += 3;
        break;
    }
  }

  console.log(ttl);
}