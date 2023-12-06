function aoc() {
  var inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  var ttl = 0;

  for (var i = 0; i < inpt.length - 1; i++) {
    var [wins, nums] = inpt[i].substring(inpt[i].indexOf(':') + 1).split('|');
    wins = wins.trim().split(/\s+/g);
    nums = nums.trim().split(/\s+/g);

    var points = 0.5;
    for (var n = 0; n < nums.length; n++) {
      for (var w = 0; w < wins.length; w++) {
        if (nums[n] == wins[w]) {
          points *= 2;
        }
      }
    }

    ttl += Math.floor(points);
  }
  console.log(ttl);
}