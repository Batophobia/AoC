function aoc() {
  inpt = (document.body.textContent || document.body.innerText).trim()
  ttl = 0;
  muls = inpt.match(/mul\(\d+,\d+\)|do\(\)|don\'t\(\)/g)
  skipping = false;

  for (i = 0; i < muls.length; i++) {
    if (muls[i] == "don't()") {
      skipping = true;
      continue;
    } else if (muls[i] == "do()") {
      skipping = false;
      continue;
    }

    if (skipping) continue;

    nums = muls[i].split("(")[1].split(")")[0].split(",");
    ttl += parseInt(nums[0]) * parseInt(nums[1])
  }

  console.log(ttl);
}

aoc()