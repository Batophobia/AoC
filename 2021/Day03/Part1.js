function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  g = [];
	for(i = 0; i < inpt[0].length; i++){
    g.push(0);
  }
  for(i = 0; i < inpt.length; i++){
    console.log(inpt[i]);
    for(j = 0; j < g.length; j++){
      g[j] += parseInt(inpt[i][j]);
    }
  }
  gamma = 0, epsilon = 0;
  for(i = 0; i < g.length; i++){
    if(g[i] * 2 > inpt.length) gamma += 2**(g.length - i - 1);
    else epsilon += 2**(g.length - i - 1);
  }
  return gamma * epsilon;
}
