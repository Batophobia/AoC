function aoc(){
  inpt = document.body.textContent || document.body.innerText;
inpt = '2199943210\n3987894921\n9856789892\n8767896789\n9899965678';
  inpt = inpt.split(/\n/g).filter(v=>v);
  sizes = [];
  for(y = 0; y < inpt.length; y++){
    inpt[y] = inpt[y].split('').map(n => parseInt(n));
    for(x = 0; x < inpt[0].length; x++){
      if(inpt[y][x] > -1 && inpt[y][x] < 9)
        [tmpArr, tmpSize] = flood(inpt, y, x);
        inpt = tmpArr;
        sizes.push(tmpSize);
    }
  }
  sizes = sizes.sort().reverse();
  return sizes[0] * sizes[1] * sizes[2];
}
function flood(arr, row, col){
  return fill(arr, arr[row][col], row, col, 0);
}
function fill(arr, row, col, size){
  if(row < 0 || col < 0 || row > arr.length-1 || col > arr[0].length-1) return [arr, size];
  if(arr[row][col]==9 || arr[row][col]==-1) return [arr, size];
  arr[row][col] = -1;
  size++;
  [arr, size] = fill(arr, row+1, col, size);
  [arr, size] = fill(arr, row-1, col, size);
  [arr, size] = fill(arr, row, col-1, size);
  [arr, size] = fill(arr, row, col+1, size);
  return [arr, size];
}
