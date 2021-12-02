function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v).map(v=>parseInt(v));;
  inpt = [0,...inpt.sort((a,b) => a-b)];
  ttl = {1:0,3:1};
  for(i=0;++i<inpt.length;){
    switch(inpt[i] - inpt[i-1]){
      case 1: ttl[1]++; break;
      case 3: ttl[3]++; break;
    }
  }
  return ttl[1] * ttl[3];
}
