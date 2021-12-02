function aoc(r,d){
  wid = a[0].length;
  y=0;x=0;ttl=0;
  for(;y<a.length;y+=d){
    if(a[y][x]) ttl++;
    x+=r; x = x % wid;
  }
  return ttl;
}

//aoc(1,1)*aoc(3,1)*aoc(5,1)*aoc(7,1)*aoc(1,2)
