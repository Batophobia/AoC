inpt = [];
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  sizes = [];
  for(y = 0; y < inpt.length; y++){
    inpt[y] = inpt[y].split('').map(n => parseInt(n));
  }
  for(y = 0; y < inpt.length; y++){
    for(x = 0; x < inpt[0].length; x++){
      if(inpt[y][x] > -1 && inpt[y][x] < 9)
        sizes.push(flood(y, x));
    }
  }
  sizes = sizes.sort((a,b) => b-a);
  return sizes[0] * sizes[1] * sizes[2];
}
function flood(row, col){
  return fill(row, col, 0);
}
function fill(row, col, size){
  if(inpt[row][col]==9 || inpt[row][col]==-1) return size;
  inpt[row][col] = -1;
  size++;
  if(row < inpt.length-1)
    size = fill(row+1, col, size);
  if(row > 0)
    size = fill(row-1, col, size);
  if(col > 0)
    size = fill(row, col-1, size);
  if(col < inpt[0].length-1)
    size = fill(row, col+1, size);
  return size;
}
