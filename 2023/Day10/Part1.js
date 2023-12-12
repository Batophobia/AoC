function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);

  // Find the pipes and starting point
  var start = { x: -1, y: -1 }
  var pipes = {};
  for (var y = 0; y < inpt.length; y++) {
    for (var x = 0; x < inpt[y].length; x++) {
      switch (inpt[y][x]) {
        case 'S':
          start.x = x;
          start.y = y;
          pipes[`${x},${y}`] = { x: [], y: [] };
          break;
        case '|':
          pipes[`${x},${y}`] = { x: [], y: [-1, 1] };
          break;
        case '-':
          pipes[`${x},${y}`] = { x: [-1, 1], y: [] };
          break;
        case 'L':
          pipes[`${x},${y}`] = { x: [1], y: [-1] };
          break;
        case 'J':
          pipes[`${x},${y}`] = { x: [-1], y: [-1] };
          break;
        case '7':
          pipes[`${x},${y}`] = { x: [-1], y: [1] };
          break;
        case 'F':
          pipes[`${x},${y}`] = { x: [1], y: [1] };
          break;
      }
    }
  }

  // Figure out starting point pipe
  var x = start.x;
  var y = start.y;
  if (`${x - 1},${y}` in pipes && pipes[`${x - 1},${y}`].x.includes(1)) {
    pipes[`${x},${y}`].x.push(-1);
  }
  if (`${x + 1},${y}` in pipes && pipes[`${x + 1},${y}`].x.includes(-1)) {
    pipes[`${x},${y}`].x.push(1);
  }
  if (`${x},${y - 1}` in pipes && pipes[`${x},${y - 1}`].y.includes(1)) {
    pipes[`${x},${y}`].y.push(-1);
  }
  if (`${x},${y + 1}` in pipes && pipes[`${x},${y + 1}`].y.includes(-1)) {
    pipes[`${x},${y}`].y.push(1);
  }

  // Pick a starting dir
  var delta = [];
  if (pipes[`${x},${y}`].x.length > 0)
    delta = [pipes[`${x},${y}`].x[0], 0];
  else
    delta = [0, pipes[`${x},${y}`].y[0]];

  // Enter start loc
  var path = [[x, y]];
  var prev = [x, y];
  x += delta[0];
  y += delta[1];

  // Map path
  while (inpt[y][x] != 'S') {
    var xVals = [...pipes[`${x},${y}`].x].filter(e => e !== -delta[0]);
    var yVals = [...pipes[`${x},${y}`].y].filter(e => e !== -delta[1]);

    prev = [x, y];
    if (xVals.length > 0) {
      x += xVals[0];
      delta = [xVals[0], 0];
    } else {
      y += yVals[0];
      delta = [0, yVals[0]];
    }

    path.push([x, y]);
  }

  console.log(path.length / 2);
}