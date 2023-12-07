function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n\n/g);

  var maps = {};
  var mapOrder = ['seed'];
  var seeds = inpt[0].split(':')[1].trim().split(' ');

  for (var i = 1; i < inpt.length; i++) {
    var tempMap = inpt[i].trim().split(/\n/g);

    var mapName = tempMap[0].split(' ')[0];
    mapOrder.push(mapName.split('-')[2]);

    maps[mapName] = {}

    for (var m = 1; m < tempMap.length; m++) {
      var tempVals = tempMap[m].split(' ');
      maps[mapName][tempVals[1]] = [tempVals[0], tempVals[2]];
    }
  }

  var lowest = 99999999999;

  for (var i = 0; i < seeds.length; i++) {
    var tmp = parseInt(seeds[i]);

    for (var m = 1; m < mapOrder.length; m++) {
      var currMap = `${mapOrder[m - 1]}-to-${mapOrder[m]}`;

      for (var mapping in maps[currMap]) {
        var curMapping = parseInt(mapping);
        var mappedVal = parseInt(maps[currMap][mapping][0]);
        var mapRange = parseInt(maps[currMap][mapping][1]);

        if (tmp > curMapping && tmp < curMapping + mapRange) {
          var diff = tmp - mapping;
          tmp = mappedVal + diff;
          break;
        }
      }
    }

    if (tmp < lowest)
      lowest = tmp;
  }

  console.log(lowest);
}