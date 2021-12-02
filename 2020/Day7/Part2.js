bags = {};
function getRules(ipt){
  for(i = 0; i < ipt.length; i++){
    rule = /^(.*) bags contain (.*)$/.exec(ipt[i]).slice(1);
    bags[rule[0]] = { };
    if(rule[1]=="no other bags.") continue;
    inside = rule[1].split(",").filter(v => v);;
    for(j = 0; j < inside.length; j++){
      color = /^\s*(\d+) (.*) bag[s]*.*$/.exec(inside[j]).slice(1);
      bags[rule[0]][color[1]] = parseInt(color[0]);
    }
  }
}
ttl = 0;
function addKids(mlt, clr){
  for(option in bags[clr]){
    ttl += mlt * bags[clr][option];
    addKids(mlt * bags[clr][option], option);
  }
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);
  getRules(inpt);
  ttl = 0;
  addKids(1, "shiny gold");
  return ttl;
}
