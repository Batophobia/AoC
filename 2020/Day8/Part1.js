function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);
  acc = 0;
  jmp = 1;
  mp = {};
  for(i=0; i<inpt.length; i+=jmp){
    if(mp[i]) return acc;
    mp[i] = true;
    jmp = 1;
    c = inpt[i].split(" ");
    switch(c[0]){
      case "acc": acc += parseInt(c[1]); break;
      case "jmp": jmp = parseInt(c[1]); break;
    }
  }
  return acc;
}
