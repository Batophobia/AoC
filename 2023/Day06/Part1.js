function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);

  var times = inpt[0].split(/\s+/g);
  var distances = inpt[1].split(/\s+/g);

  var ttl = 1;

  for (var i = 1; i < times.length; i++) {
    var curTime = times[i];
    var curDist = distances[i];
    var numWins = 0;

    for (var t = curTime - 1; t > 0; t--) {
      var dist = t * (curTime - t);
      if (dist > curDist)
        numWins++;
    }

    ttl *= numWins;
  }

  console.log(ttl);
}