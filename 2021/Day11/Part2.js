function incCell(x, y, tmp){
	if(inpt[x] === undefined || inpt[x][y] === undefined || inpt[x][y] < 0) return tmp;
  inpt[x][y]++;
  if(inpt[x][y] > 9){
    inpt[x][y] = -1;
    tmp++;
    tmp = incCell(x-1, y-1, tmp);
    tmp = incCell(x-1, y, tmp);
    tmp = incCell(x-1, y+1, tmp);
    tmp = incCell(x+1, y-1, tmp);
    tmp = incCell(x+1, y, tmp);
    tmp = incCell(x+1, y+1, tmp);
    tmp = incCell(x, y-1, tmp);
    tmp = incCell(x, y+1, tmp);
  }
  return tmp;
}
function doThing(){
  flashes = 0;
  for(i = 0; i < inpt.length; i++){
    for(j = 0; j < inpt[i].length; j++){
      flashes += incCell(i, j, 0);
    }
  }
  for(i = 0; i < inpt.length; i++){
    for(j = 0; j < inpt[i].length; j++){
      if(inpt[i][j] < 0) inpt[i][j] = 0;
    }
  }
  return flashes;
}
inpt=[];
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  for(x = 0; x < inpt.length; x++) inpt[x] = inpt[x].split('').map(v => parseInt(v));
  step = 0, ttl = 0, numCells = inpt.length * inpt[0].length;
  while(ttl < numCells){
    ttl = doThing();
    step++;
  }
  return step;
}
