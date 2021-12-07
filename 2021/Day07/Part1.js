function calcFuel(arr, mid, best, offset){
  fuel1 = 0, fuel2 = 0;
  for(i = 0; i < inpt.length; i++){
    fuel1 += Math.abs(inpt[i] - mid + offset);
    fuel2 += Math.abs(inpt[i] - mid - offset);
  }
  return fuel1 < fuel2 ? fuel1 : fuel2;
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/,/g).filter(v=>v).map(v=>parseInt(v));
	inpt.sort();
  mid = inpt.length % 2 == 0 ? inpt[inpt.length / 2] : inpt[(inpt.length / 2) - 1];
  best = calcFuel(inpt, mid, 9999, 0);
  offset = 0, tmp = best;
  do {
    best = tmp;
  	tmp = calcFuel(inpt, mid, best, ++offset);
  } while(best > tmp);
  return best;
}
