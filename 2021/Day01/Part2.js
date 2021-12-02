function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v).map(v=>parseInt(v));
  ttl = 0; prev = inpt[0] + inpt[1] + inpt[2];
  for(i=1;++i<inpt.length;){
    tmp = inpt[i-2] + inpt[i-1] + inpt[i];
    if(tmp > prev){
      ttl++;
    }
    prev = tmp;
  }
  return ttl;
}
