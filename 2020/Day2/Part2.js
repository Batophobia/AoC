function aoc(){
  ttl = 0;
  for(r in a){
    idx1 = a[r][0]-1;
    idx2 = a[r][1]-1;
    letter = a[r][2];
    pass = a[r][3];
    if(pass[idx1] == letter && pass[idx2] != letter){
      ttl++;
    } else if(pass[idx1] != letter && pass[idx2] == letter){
      ttl++;
    }
  }
  return ttl;
}
