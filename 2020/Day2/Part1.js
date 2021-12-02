function aoc(){
  ttl = 0;
  for(r in a){
    min = a[r][0];
    max = a[r][1];
    letter = a[r][2];
    pass = a[r][3];
    re = new RegExp(letter,"g");
    arr = pass.match(re) || [];
    if(arr.length >= min && arr.length <= max){
      ttl++;
    }
  }
  return ttl;
}
