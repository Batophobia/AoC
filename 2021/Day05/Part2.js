function incGrid(x, y){
	if(!grid[x]) grid[x] = {};
	if(!grid[x][y]) grid[x][y] = 0;
	grid[x][y]++;
}
grid = {};
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  for(i = 0; i < inpt.length; i++){
    pts = inpt[i].split(' -> ').map(v => v.split(',').map(n=>parseInt(n)));
      incX = pts[0][0] - pts[1][0];
			incY = pts[0][1] - pts[1][1];
			if(incX != 0){
				incX = incX / Math.abs(pts[0][0] - pts[1][0]);
      }
			if(incY != 0){
				incY = incY / Math.abs(pts[0][1] - pts[1][1]);
      }
			y = pts[1][1], x = pts[1][0];
			while(x != pts[0][0] || y != pts[0][1]){
				incGrid(x, y);
				x += incX;
				y += incY;
     	}
			incGrid(x, y);
  }
	ttl = 0;
  for(x in grid){
    for(y in grid[x]){
			if(grid[x][y] > 1) ttl++;
		}
	}
  return ttl;
}
