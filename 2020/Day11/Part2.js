function getInput(){
  let inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);
  for(i=0;i<inpt.length;i++){
    inpt[i] = inpt[i].replaceAll('.',"9").replaceAll('L',"0").split('').map(v=>parseInt(v));
  }
  return inpt;
}
function changeCell(grid){
  if(grid[1][1] == -1) return -1;
  else if(grid[1][1] == 0){
    for(a=0;a<3;a++){
      for(b=0;b<3;b++){
        if(a==1 && b==1) continue;
        if(grid[a][b] == 1) return 0;
      }
    }
    return 1;
  } else if(grid[1][1] == 1){
    tmpTTL = 0;
    for(a=0;a<3;a++){
      for(b=0;b<3;b++){
        if(a==1 && b==1) continue;
        if(grid[a][b] == 1) tmpTTL++;
      }
    }
    if(tmpTTL > 4) return 0;
  }
	return grid[1][1];
}
function aoc(){
  ipt = { 0: getInput(), 1: getInput() };
  cnt = 0;
  do{
    for(x=0;x<ipt[cnt%2].length;x++){
      for(y=0;y<ipt[cnt%2][x].length;y++){
        tmpGrid = [[0,0,0],[0,0,0],[0,0,0]];
        tmpGrid[1][1] = ipt[cnt%2][x][y];
        t=1; while(ipt[cnt%2][x-t] && ipt[cnt%2][x-t][y-t] && ipt[cnt%2][x-t][y-t] == 9) { t++; }
        if(ipt[cnt%2][x-t] && ipt[cnt%2][x-t][y-t]) tmpGrid[0][0] = ipt[cnt%2][x-t][y-t];
        t=1; while(ipt[cnt%2][x-t] && ipt[cnt%2][x-t][y] == 9) { t++; }
        if(ipt[cnt%2][x-t]) tmpGrid[0][1] = ipt[cnt%2][x-t][y];
        t=1; while(ipt[cnt%2][x-t] && ipt[cnt%2][x-t][y+t] && ipt[cnt%2][x-t][y+t] == 9) { t++; }
        if(ipt[cnt%2][x-t] && ipt[cnt%2][x-t][y+t]) tmpGrid[0][2] = ipt[cnt%2][x-t][y+t];
        t=1; while(ipt[cnt%2][x][y-t] && ipt[cnt%2][x][y-t] == 9) { t++; }
        if(ipt[cnt%2][x][y-t]) tmpGrid[1][0] = ipt[cnt%2][x][y-t];
        t=1; while(ipt[cnt%2][x][y+t] && ipt[cnt%2][x][y+t] == 9) { t++; }
        if(ipt[cnt%2][x][y+t]) tmpGrid[1][2] = ipt[cnt%2][x][y+t];
        t=1; while(ipt[cnt%2][x+t] && ipt[cnt%2][x+t][y-t] && ipt[cnt%2][x+t][y-t] == 9) { t++; }
        if(ipt[cnt%2][x+t] && ipt[cnt%2][x+t][y-t]) tmpGrid[2][0] = ipt[cnt%2][x+t][y-t];
        t=1; while(ipt[cnt%2][x+t] && ipt[cnt%2][x+t][y] == 9) { t++; }
        if(ipt[cnt%2][x+t]) tmpGrid[2][1] = ipt[cnt%2][x+t][y];
        t=1; while(ipt[cnt%2][x+t] && ipt[cnt%2][x+t][y+t] && ipt[cnt%2][x+t][y+t] == 9) { t++; }
        if(ipt[cnt%2][x+t] && ipt[cnt%2][x+t][y+t]) tmpGrid[2][2] = ipt[cnt%2][x+t][y+t];
        ipt[(1+cnt)%2][x][y] = changeCell(tmpGrid);
      }
    }
  } while(JSON.stringify(ipt[++cnt%2]) !== JSON.stringify(ipt[(1+cnt)%2]));
  return ipt[0].map(a => a.map( b => b==1?1:0)).reduce((prev,nxt) => { return prev + nxt.reduce((p,n) => p+n) }, 0);
}
