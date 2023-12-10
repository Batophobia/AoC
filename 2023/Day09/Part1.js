function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);

  var ttl = 0;

  for (var i = 0; i < inpt.length; i++) {
    var curLine = inpt[i].split(' ').map(Number);

    var maxDiffs = [curLine[curLine.length - 1]];
    var isDiff = true;
    while (isDiff) {
      var changes = [];
      for (var j = 1; j < curLine.length; j++) {
        changes.push(curLine[j] - curLine[j - 1]);
      }
      maxDiffs.push(changes[changes.length - 1]);

      isDiff = !changes.every((val, x, arr) => val === arr[0]);

      curLine = changes;
    }

    ttl += maxDiffs.reduce((t, v) => t + v, 0);
  }

  console.log(ttl);
}