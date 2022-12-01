function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n\n/g);

  topVals = [];
  for (i = 0; i < inpt.length; i++) {
    foods = inpt[i].split(/\n/g);

    ttl = 0;
    for (j = 0; j < foods.length; j++) {
      ttl += parseInt(foods[j]);
    }

    topVals.push(ttl);
  }

  topVals.sort((x, y) => y - x);
  console.log(topVals[0] + topVals[1] + topVals[2]);
}