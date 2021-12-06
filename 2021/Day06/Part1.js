function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/,/g).filter(v=>v).map(v=>parseInt(v));
  for(day = 0; day < 80; day++){
    for(i = inpt.length; --i >= 0;){
			if(--inpt[i] < 0){
				inpt[i] = 6;
				inpt.push(8);
      }
    }
  }
	return inpt.length;
}
