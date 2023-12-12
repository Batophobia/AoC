// Bad assumption, space between positions can still count as getting out
function removeDots(x, y, inpt) {
  inpt[y][x] = ' ';
  if (x > 0 && inpt[y][x - 1] == '.')
    inpt = removeDots(x - 1, y, inpt);
  if (x < inpt[y].length - 1 && inpt[y][x + 1] == '.')
    inpt = removeDots(x + 1, y, inpt);
  if (y > 0 && inpt[y - 1][x] == '.')
    inpt = removeDots(x, y - 1, inpt);
  if (y < inpt.length - 1 && inpt[y + 1][x] == '.')
    inpt = removeDots(x, y + 1, inpt);
  return inpt;
}

function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);

  for (var y = 0; y < inpt.length; y++) {
    inpt[y] = inpt[y].split('');
  }

  for (var y = 0; y < inpt.length; y++) {
    if (inpt[y][0] == '.')
      inpt = removeDots(0, y, inpt);
    if (inpt[y][inpt[0].length - 1] == '.')
      inpt = removeDots(inpt[0].length - 1, y, inpt);
  }

  for (var x = 0; x < inpt[0].length; x++) {
    if (inpt[0][x] == '.')
      inpt = removeDots(x, 0, inpt);
    if (inpt[inpt.length - 1][x] == '.')
      inpt = removeDots(x, inpt.length - 1, inpt);
  }

  console.log(inpt.map(l => l.join('')).join('').replace(/[^.]/g, '').length);
}