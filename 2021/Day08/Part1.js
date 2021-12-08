function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  ttl = 0;
  for(i = 0; i < inpt.length; i++){
    otpt = inpt[i].split(' | ')[1].split(' ');
    for(o = 0; o < otpt.length; o++){
      switch(otpt[o].length){
        case 2:
        case 3:
        case 4:
        case 7: ttl++; break;
      }
    }
  }
  return ttl;
}
