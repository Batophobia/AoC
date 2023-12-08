function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n\n/g);

  var dir = inpt[0].replaceAll('L', '0').replaceAll('R', '1');
  var locs = inpt[1].split(/\n/g);
  var curLocs = {};
  var locMap = {};

  for (var i = 0; i < locs.length; i++) {
    var key = locs[i].split('=')[0].trim();
    var [left, right] = locs[i].split('=')[1].trim().replace(/[()\s]/g, '').split(',');
    locMap[key] = [left, right];

    if (key[key.length - 1] == 'A')
      curLocs[key] = -1;
  }

  for (var loc in curLocs) {
    var curLoc = loc;
    var inMaze = true;
    var dirIdx = 0;

    while (inMaze && dirIdx < 99999999999) {
      inMaze = false;

      if (locMap[curLoc].length > 2) {
        dirIdx += locMap[curLoc][2];
      }
      curLoc = locMap[curLoc][dir[dirIdx % dir.length]]

      if (curLoc[curLoc.length - 1] != 'Z')
        inMaze = true;

      dirIdx++;
    }

    curLocs[loc] = dirIdx;
  }

  var nums = Object.values(curLocs);
  nums = nums.reduce((x, y) => (x * y) / gcd(x, y));
  console.log(nums);
}

function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}