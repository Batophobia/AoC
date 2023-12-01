function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);
  ttl = 0;

  for (i = 0; i < inpt.length - 1; i++) {
    nums = inpt[i].replace(/\D/g, '');
    num1 = nums[0];
    num2 = nums[nums.length - 1];

    ttl += parseInt(num1 + num2);
  }

  console.log(ttl);
}