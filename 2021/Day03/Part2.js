function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  ox = 0, co = 0;
  ox = doThing(true, inpt.slice(0), 0);
  co = doThing(false, inpt.slice(0), 0);
	return parseInt( ox, 2 ) * parseInt( co, 2 );
}
function doThing(isOx, arr, idx){
	if(arr.length == 1) return arr[0];
  if(idx === undefined || idx > arr[0].length - 1) idx = 0;
  commn = 0;
  for(i = 0; i < arr.length; i++){
    commn += arr[i][idx] == "1" ? 1 : 0;
  }
  commn = commn * 2 < arr.length ? 0 : 1;
  for(i = arr.length - 1; i >= 0; i--){
		if((parseInt(arr[i][idx]) != commn && isOx)
    || (parseInt(arr[i][idx]) == commn && !isOx))
      arr.splice(i, 1);
  }
  return doThing(isOx, arr, idx+1);
}
