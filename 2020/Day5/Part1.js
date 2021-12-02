function aoc(){
  max = 0;
  for(i in a){
    r = parseInt(a[i][0],2);
    c = parseInt(a[i][1],2);
    t = r * 8 + c;
    if(t>max) max = t;
  }
  return max;
}
