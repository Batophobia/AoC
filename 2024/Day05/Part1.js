function aoc() {
  let inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n\n/g);
  let rules = inpt[0].split(/\n/g);
  let updates = inpt[1].split(/\n/g);
  let ttl = 0;

  for (i = 0; i < updates.length; i++) {
    let cur = updates[i];

    let valid = true;
    for (j = 0; j < rules.length; j++) {
      let rule = rules[j].split("|");
      if (cur.indexOf(rule[0]) > -1 && cur.indexOf(rule[1]) > -1
        && cur.indexOf(rule[0]) > cur.indexOf(rule[1])
      )
        valid = false;
    }

    if (valid) {
      ttl += parseInt(cur.split(",")[(cur.split(",").length - 1) / 2])
    }
  }

  console.log(ttl);
}

aoc()