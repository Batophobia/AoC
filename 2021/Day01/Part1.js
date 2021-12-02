function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v).map(v=>parseInt(v));
  ttl = 0;
  for(i=0;++i<inpt.length;){
    if(inpt[i] > inpt[i-1]){
      ttl++;
    }
  }
  return ttl;
}
