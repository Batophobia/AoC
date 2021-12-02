function aoc(){
  ipt = document.body.textContent || document.body.innerText;
  ipt = ipt.split(/\n\n/g);
  ttl = 0;
  for(i=0;i<ipt.length;i++){
    mp = {};
    r = ipt[i].split(/\n/g).filter(v => v);
    for(j=0;j<r.length;j++){
      y = r[j].split('').filter((v, i, a) => a.indexOf(v) === i);
      for(k=0;k<y.length;k++){
        mp[y[k]] = mp[y[k]] ? mp[y[k]]+1 : 1;
      }
    }
    for(a in mp){
      if(mp[a] == r.length) ttl++;
    }
  }
  return ttl;
}
