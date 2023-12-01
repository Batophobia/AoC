function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);
  ttl = 0;

  for (i = 0; i < inpt.length - 1; i++) {
    nums = inpt[i];

    nums = nums.replaceAll('one', 'o1e');
    nums = nums.replaceAll('two', 't2o');
    nums = nums.replaceAll('three', 't3e');
    nums = nums.replaceAll('four', 'f4r');
    nums = nums.replaceAll('five', 'f5e');
    nums = nums.replaceAll('six', 's6x');
    nums = nums.replaceAll('seven', 's7n');
    nums = nums.replaceAll('eight', 'e8t');
    nums = nums.replaceAll('nine', 'n9e');

    nums = nums.replace(/\D/g, '');
    num1 = nums[0];
    num2 = nums[nums.length - 1];

    //console.log(`${nums}: ${num1}${num2}`)

    ttl += parseInt(num1 + num2);
  }

  console.log(ttl);
}