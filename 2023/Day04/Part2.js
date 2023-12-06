function aoc() {
  var inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  var ttl = 0;
  var copies = Array(inpt.length - 1).fill(1);

  for (var i = 0; i < inpt.length - 1; i++) {
    var [wins, nums] = inpt[i].substring(inpt[i].indexOf(':') + 1).split('|');
    wins = wins.trim().split(/\s+/g);
    nums = nums.trim().split(/\s+/g);

    var matches = 0;

    for (var n = 0; n < nums.length; n++) {
      for (var w = 0; w < wins.length; w++) {
        if (nums[n] == wins[w]) {
          matches++;
        }
      }
    }

    for (var c = 1; c <= matches; c++) {
      copies[i + c] += copies[i];
    }

    ttl += copies[i];
  }

  console.log(ttl);
}