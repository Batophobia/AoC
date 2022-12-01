function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n\n/g);

  maxIdx = 0;
  maxVal = 0;
  for (i = 0; i < inpt.length; i++) {
    foods = inpt[i].split(/\n/g);

    ttl = 0;
    for (j = 0; j < foods.length; j++) {
      ttl += parseInt(foods[j]);
    }
    if (ttl > maxVal) {
      maxIdx = i;
      maxVal = ttl;
    }
  }

  console.log(maxVal);
}