function getIdx(ipt){
  for(cur=25;cur<ipt.length;cur++){
    valid = false;
    for(i=cur-25;!valid && i<cur-2;i++){
      for(j=cur-1;!valid && j>i;j--){
        if(ipt[j] + ipt[i] == ipt[cur]) valid = true;
      }
    }
    if(!valid) return cur;
  }
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v).map(v=>parseInt(v));;
  idx = getIdx(inpt);
  for(m=0; m<idx; m++){
    ttl = inpt[idx] - inpt[m];
    x = m;
    while(ttl > 0){
      ttl -= inpt[++x];
    }
    if(ttl==0){
      rng = inpt.slice(m,x+1).sort((a,b)=>a-b);
      return rng[0] + rng[rng.length-1];
    }
  }
}
