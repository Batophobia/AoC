function aoc() {
  inpt = (document.body.textContent || document.body.innerText).trim()
  ttl = 0;
  muls = inpt.match(/mul\(\d+,\d+\)/g)

  for (i = 0; i < muls.length; i++) {
    nums = muls[i].split("(")[1].split(")")[0].split(",");
    ttl += parseInt(nums[0]) * parseInt(nums[1])
  }

  console.log(ttl);
}

aoc()