function aoc() {
  let inpt = (document.body.textContent || document.body.innerText).trim()
  inpt = inpt.split(/\n/g);
  let ttl = 0;

  for (i = 0; i < inpt.length; i++) {
    let nums = inpt[i].split(/\s+/g);

    let errors = checkSafe(nums);

    if (errors > 0) {
      for (x = 0; x < nums.length; x++) {
        errors = checkSafe(nums.filter((v, i) => i != x))
        if (errors < 1) break;
      }
    }

    if (errors < 1) ttl++;
  }

  console.log(ttl);
}

function checkSafe(arr) {
  let prvNum = parseInt(arr[0]);
  let dir = 0;
  let errors = 0;

  for (j = 1; j < arr.length; j++) {
    curNum = parseInt(arr[j]);
    if ((prvNum < curNum && dir < 0)
      || (prvNum > curNum && dir > 0)
      || Math.abs(prvNum - curNum) > 3
      || Math.abs(prvNum - curNum) < 1
    ) {
      errors++;
      continue;
    }

    if (j == 1) {
      dir = prvNum > curNum ? -1 : 1
    }
    prvNum = curNum
  }

  return errors
}

aoc()