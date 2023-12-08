function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n\n/g);

  var dir = inpt[0].replaceAll('L', '0').replaceAll('R', '1');
  var locs = inpt[1].split(/\n/g);
  var curLoc = 'AAA';
  var dirIdx = 0;
  var locMap = {};

  for (var i = 0; i < locs.length; i++) {
    var key = locs[i].split('=')[0].trim();
    var [left, right] = locs[i].split('=')[1].trim().replace(/[()\s]/g, '').split(',');
    locMap[key] = [left, right];
  }

  while (curLoc != 'ZZZ' && dirIdx < 99999) {
    curLoc = locMap[curLoc][dir[dirIdx % dir.length]]
    dirIdx++;
  }

  console.log(dirIdx);
}