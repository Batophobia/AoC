function aoc() {
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n\n/g);

  startGrid = inpt[0].split(/\n/g).filter(v => v);
  moves = inpt[1].split(/\n/g).filter(v => v);

  numCols = startGrid[startGrid.length - 1].replace(/\s/g, '').length;
  grid = [];
  for (r = startGrid.length - 2; r >= 0; r--) {
    for (i = 0; i < numCols; i++) {
      if (!grid[i]) grid.push([]);
      if (startGrid[r][1 + i * 4] != " ") {
        grid[i].push(startGrid[r][1 + i * 4]);
      }
    }
  }

  for (i = 0; i < moves.length; i++) {
    nums = moves[i].replace(/^\D*(\d+)\D*(\d+)\D*(\d+)/g, '$1,$2,$3').split(',');
    num = parseInt(nums[0]);
    from = parseInt(nums[1]) - 1;
    to = parseInt(nums[2]) - 1;

    temp = [];
    while (num-- > 0) {
      temp.push(grid[from].pop(num));
    }
    while (temp.length) {
      grid[to].push(temp.pop(num));
    }
  }

  retVal = "";
  for (i = 0; i < numCols; i++) {
    retVal += grid[i][grid[i].length - 1];
  }
  console.log(retVal);
}