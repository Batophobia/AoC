function aoc(){
  ipt = document.body.textContent || document.body.innerText;
  ipt = ipt.split(/\n\n/g);
  ttl = 0;
  for(i=0;i<ipt.length;i++){
    y = ipt[i].replace(/\n/g,'');
    ttl += y.split('').filter((v, i, a) => a.indexOf(v) === i).length;
  }
  return ttl;
}
