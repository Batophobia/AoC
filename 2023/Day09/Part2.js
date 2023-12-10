function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);

  var ttl = 0;

  for (var i = 0; i < inpt.length; i++) {
    var curLine = inpt[i].split(' ').map(Number);

    var minDiffs = [curLine[0]];
    var isDiff = true;
    while (isDiff) {
      var changes = [];
      for (var j = 1; j < curLine.length; j++) {
        changes.push(curLine[j] - curLine[j - 1]);
      }
      minDiffs.push(changes[0]);

      isDiff = !changes.every((val, x, arr) => val === arr[0]);

      curLine = changes;
    }

    for (var j in minDiffs) {
      ttl += minDiffs[j] * (j % 2 > 0 ? -1 : 1);
    }
  }

  console.log(ttl);
}