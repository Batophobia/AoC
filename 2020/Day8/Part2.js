tries = {};
function tryRun(ipt){
  acc = 0;
  jmp = 1;
  prev = 0;
  mp = {};
  for(i=0; i<ipt.length; i+=jmp){
    if(mp[i]) { return prev; }
    mp[i] = true;
    jmp = 1;
    c = ipt[i].split(" ");
    switch(c[0]){
      case "acc": acc += parseInt(c[1]); break;
      case "jmp": jmp = parseInt(c[1]);
      default: if(!tries[i]) prev=i; break;
    }
  }
  console.log(acc);
  return false;
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);
  newTry = [...inpt];
  change = true;
  while(change){
    change = tryRun(newTry);
    if(change){
      tries[change]=true;
      newTry = [...inpt];
      newTry[change] = newTry[change].replace(/(jmp)|(nop)/, newTry[change].substr(0,3) == "nop" ? "jmp" : "nop");
    }
	}
}
