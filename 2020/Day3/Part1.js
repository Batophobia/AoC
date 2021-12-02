function aoc(){
  wid = a[0].length;
  y=0;x=0;ttl=0;
  for(;y<a.length;y++){
    if(a[y][x]) ttl++;
    x+=3; x = x % wid;
  }
  return ttl;
}
