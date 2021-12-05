function incGrid(x, y){
	if(!grid[x]) grid[x] = {};
	if(!grid[x][y]) grid[x][y] = 0;
	grid[x][y]++;
}
grid = {};
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  //inpt = ['0,9 -> 5,9','8,0 -> 0,8','9,4 -> 3,4','2,2 -> 2,1','7,0 -> 7,4','6,4 -> 2,0','0,9 -> 2,9','3,4 -> 1,4','0,0 -> 8,8','5,5 -> 8,2'];
  for(i = 0; i < inpt.length; i++){
    pts = inpt[i].split(' -> ').map(v => v.split(',').map(n=>parseInt(n)));
    if(pts[0][0] == pts[1][0] || pts[0][1] == pts[1][1]){
      incX = pts[0][0] - pts[1][0];
			incY = pts[0][1] - pts[1][1];
			if(incX != 0){
				incX = incX / Math.abs(pts[0][0] - pts[1][0]);
				y = pts[0][1], x = pts[1][0];
				for(; x != pts[0][0]; x += incX){
					incGrid(x, y);
      	}
				incGrid(x, y);
      }
			if(incY != 0){
				incY = incY / Math.abs(pts[0][1] - pts[1][1]);
				x = pts[0][0], y = pts[1][1];
        for(; y != pts[0][1]; y += incY){
					incGrid(x, y);
      	}
				incGrid(x, y);
      }
    }
  }
	ttl = 0;
  for(x in grid){
    for(y in grid[x]){
			if(grid[x][y] > 1) ttl++;
		}
	}
  return ttl;
}
