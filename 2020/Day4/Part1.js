function aoc(){
  ipt = document.body.textContent || document.body.innerText;
  ipt = ipt.split(/\n\n/g);
  req = ["byr","iyr","eyr","hgt","hcl","ecl","pid"];
  ttl = 0;
  for(pas in ipt){
    valid = true;
    for(r in req){
      if(ipt[pas].indexOf(req[r]+':') < 0){
        valid=false;
        break;
      }
    }
    if(valid) ttl++;
  }
  return ttl;
}
