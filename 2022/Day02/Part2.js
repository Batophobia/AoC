function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  ttl = 0;
  for (i in inpt) {
    if (!inpt[i]) continue;
    opp = inpt[i].charCodeAt(0) - 65;
    ply = inpt[i].charCodeAt(2) - 88;

    ttl += ply * 3;

    switch (ply) {
      case 0: // Lose
        if (opp == 0) ttl += 3;
        else if (opp == 1) ttl += 1;
        else if (opp == 2) ttl += 2;
        break;
      case 1: // Tie
        ttl += opp + 1;
        break;
      case 2: // Win
        if (opp == 0) ttl += 2;
        else if (opp == 1) ttl += 3;
        else if (opp == 2) ttl += 1;
        break;
    }
  }

  console.log(ttl);
}