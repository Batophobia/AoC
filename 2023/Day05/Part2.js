function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n\n/g);

  var maps = {};
  var mapOrder = ['seed'];
  var tmpSeeds = inpt[0].split(':')[1].trim().split(' ');
  var seeds = [];

  // Seed list
  for (var i = 0; i < tmpSeeds.length; i += 2) {
    seeds.push({ start: parseInt(tmpSeeds[i]), end: parseInt(tmpSeeds[i]) + parseInt(tmpSeeds[i + 1]) })
  }

  // Mappings
  for (var i = 1; i < inpt.length; i++) {
    var tempMap = inpt[i].trim().split(/\n/g);

    var mapName = tempMap[0].split(' ')[0];
    mapOrder.push(mapName.split('-')[2]);

    maps[mapName] = {}

    for (var m = 1; m < tempMap.length; m++) {
      var tempVals = tempMap[m].split(' ');
      maps[mapName][tempVals[0]] = [tempVals[1], tempVals[2]];
    }
  }

  mapOrder = mapOrder.reverse();
  var loc = 1;
  var invalidSeed = true;

  // Go through increasing locations
  do {
    var tmp = loc;

    // Map location to seed
    for (var m = 1; m < mapOrder.length; m++) {
      var currMap = `${mapOrder[m]}-to-${mapOrder[m - 1]}`;

      for (var mapping in maps[currMap]) {
        var curMapping = parseInt(mapping);
        var mappedVal = parseInt(maps[currMap][mapping][0]);
        var mapRange = parseInt(maps[currMap][mapping][1]);

        if (tmp >= curMapping && tmp < curMapping + mapRange) {
          var diff = tmp - mapping;
          tmp = mappedVal + diff;

          break;
        }
      }
    }

    // Check if valid seed
    for (var i = 0; i < seeds.length; i++) {
      if (seeds[i].start <= tmp && seeds[i].end > tmp)
        invalidSeed = false;
    }

    if (invalidSeed) loc++;
  } while (invalidSeed)

  console.log(loc);
}