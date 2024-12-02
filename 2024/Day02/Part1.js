function aoc() {
  inpt = (document.body.textContent || document.body.innerText).trim()
  inpt = inpt.split(/\n/g);
  ttl = 0;

  for (i = 0; i < inpt.length; i++) {
    nums = inpt[i].split(/\s+/g);
    prvNum = parseInt(nums[0]);
    dir = 0;
    isSafe = true;

    for (j = 1; j < nums.length; j++) {
      curNum = parseInt(nums[j]);
      if ((prvNum < curNum && dir < 0)
        || (prvNum > curNum && dir > 0)
        || Math.abs(prvNum - curNum) > 3
        || Math.abs(prvNum - curNum) < 1
      ) {
        isSafe = false;
        break;
      }

      if (j == 1) {
        dir = prvNum > curNum ? -1 : 1
      }
      prvNum = curNum
    }

    if (isSafe) ttl++;
  }

  console.log(ttl);
}

aoc()