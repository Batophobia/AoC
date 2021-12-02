function isNum(ipt, max, min){
  t = parseInt(ipt);
  if(t==NaN) return false;
  if(t<min || t>max) return false;
  return true;
}
function isHgt(ipt){
  unt = ipt.slice(-2);
  if(["cm","in"].includes(unt)){
    return isNum(ipt.substr(0,ipt.length-2),unt=="cm"?193:76,unt=="cm"?150:59);
  }
  return false;
}
function aoc(){
  req = ["byr","iyr","eyr","hgt","hcl","ecl","pid"];
  ttl = 0;
  for(pas in a){
    valid = true;
    for(r in req){
      if(!a[pas][req[r]]){
        valid=false;
      } else {
        switch(req[r]){
          case 'byr': if(!isNum(a[pas][req[r]], 2002, 1920)) valid=false; break;
          case 'iyr': if(!isNum(a[pas][req[r]], 2020, 2010)) valid=false; break;
          case 'eyr': if(!isNum(a[pas][req[r]], 2030, 2020)) valid=false; break;
          case 'hgt': if(!isHgt(a[pas][req[r]])) valid=false; break;
          case 'hcl': if(!a[pas][req[r]].match(/^#[0-9a-f]{6}$/)) valid=false; break;
          case 'ecl': if(!["amb","blu","brn","gry","grn","hzl","oth"].includes(a[pas][req[r]])) valid=false; break;
          case 'pid': if(!a[pas][req[r]].match(/^\d{9}$/)) valid=false; break;
        }
      }
      if(!valid) break;
    }
    if(valid) ttl++;
  }
  return ttl;
}
