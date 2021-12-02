function aoc(){
  ipt = document.body.textContent || document.body.innerText;
  ipt = ipt.replace(/[BR]/g,1).replace(/[FL]/g,0)
  ipt = ipt.split(/\s+/g);
  ipt = ipt.map(n => parseInt(n,2)).filter(r=>!!r).sort((a,b) => a-b);
  for(i=0;++i<ipt.length;){
    if(ipt[i] != ipt[i-1]+1) return [ipt[i-1], ipt[i]];
  }
}
