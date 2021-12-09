function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  ttl = 0;
  for(y = 0; y < inpt.length; y++){
    inpt[y] = inpt[y].split('').map(n => parseInt(n));
    for(x = 0; x < inpt[0].length; x++){
      low = true;
      if(y < inpt.length-1 && inpt[y][x] >= inpt[y+1][x]) low = false;
      if(y > 0 && inpt[y][x] >= inpt[y-1][x]) low = false;
      if(x < inpt[0].length-1 && inpt[y][x] >= inpt[y][x+1]) low = false;
      if(x > 0 && inpt[y][x] >= inpt[y][x-1]) low = false;
      if(low) ttl += inpt[y][x] + 1;
    }
  }
  return ttl;
}
