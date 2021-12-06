function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/,/g).filter(v=>v).map(v=>parseInt(v));
  fish = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
  for(i = 0; i < inpt.length; i++) fish[inpt[i]]++;
	for(d = 0; d < 256; d++){
		tmp = fish[0];
		for(i = 1; i < 9; i++) fish[i-1] = fish[i];
		fish[8] = tmp;
    fish[6] += tmp;
  }
	return Object.values(fish).reduce((t, n) => t + n);
}
