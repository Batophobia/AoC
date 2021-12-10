function checkLine(line){
	expect=[];
	for(c = 0; c < line.length; c++){
    switch(line[c]){
      case "(": expect.push(")"); break;
      case "[": expect.push("]"); break;
      case "{": expect.push("}"); break;
      case "<": expect.push(">"); break;
		  case expect[expect.length-1]: expect.pop(); break;
      default: return line[c];
    }
  }
  return 0;
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  ttl = 0;
  for(i = 0; i < inpt.length; i++){
    bad = checkLine(inpt[i]);
    switch(bad){
      case ")": ttl += 3; break;
      case "]": ttl += 57; break;
      case "}": ttl += 1197; break;
      case ">": ttl += 25137; break;
      default: break;
    }
  }
  return ttl;
}
