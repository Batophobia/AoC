function checkLine(line){
	expect=[];
	for(c = 0; c < line.length; c++){
    switch(line[c]){
      case "(": expect.push(")"); break;
      case "[": expect.push("]"); break;
      case "{": expect.push("}"); break;
      case "<": expect.push(">"); break;
		  case expect[expect.length-1]: expect.pop(); break;
      default: return 0;
    }
  }
  tmp = 0;
  for(e = expect.length; --e >= 0;){
    tmp = tmp * 5;
    switch(expect[e]){
      case ")": tmp += 1; break;
      case "]": tmp += 2; break;
      case "}": tmp += 3; break;
      case ">": tmp += 4; break;
    }
  }
  return tmp;
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  scores = [];
  for(i = 0; i < inpt.length; i++){
    scores.push(checkLine(inpt[i]));
  }
  scores = scores.sort((a,b) => b-a).filter(v => v > 0);
  return scores[Math.floor(scores.length/2)];
}
