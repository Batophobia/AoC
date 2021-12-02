function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v).map(v=>parseInt(v));;
  for(cur=25;i<inpt.length;cur++){
    valid = false;
    for(i=cur-25;!valid && i<cur-2;i++){
      for(j=cur-1;!valid && j>i;j--){
        if(inpt[j] + inpt[i] == inpt[cur]) valid = true;
      }
    }
    if(!valid) return inpt[cur];
  }
}
