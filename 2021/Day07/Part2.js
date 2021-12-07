function calcFuel(arr, mid, best, offset){
  fuel1 = 0, fuel2 = 0;
  for(i = 0; i < inpt.length; i++){
		tmp = Math.abs(inpt[i] - mid + offset);
    fuel1 += (tmp * (tmp + 1)) / 2;
    tmp = Math.abs(inpt[i] - mid - offset);
    fuel2 += (tmp * (tmp + 1)) / 2;
  }
  return fuel1 < fuel2 ? fuel1 : fuel2;
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/,/g).filter(v=>v).map(v=>parseInt(v));
	mid = Math.round(inpt.reduce((t, n) => t + n) / inpt.length);
  best = calcFuel(inpt, mid, 9999, 0);
  offset = 0, tmp = best;
  do {
    best = tmp;
  	tmp = calcFuel(inpt, mid, best, ++offset);
  } while(best > tmp);
  return best;
}
