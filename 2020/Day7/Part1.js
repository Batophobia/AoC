bags = {};
function getParents(ipt){
  for(i = 0; i < ipt.length; i++){
    rule = /^(.*) bags contain (.*)$/.exec(ipt[i]).slice(1);
    if(rule[1]=="no other bags.") continue;
    inside = rule[1].split(",").filter(v => v);
    for(j = 0; j < inside.length; j++){
      color = /^\s*(\d+) (.*) bag[s]*.*$/.exec(inside[j]).slice(1);
      //bags[rule[0]][color[1]] = parseInt(color[0]);
      if(!bags[color[1]]) bags[color[1]] = {};
      bags[color[1]][rule[0]] = parseInt(color[0]);
    }
  }
}
options = [];
function getParent(clr){
  for(option in bags[clr]){
    options.push(option);
    getParent(option);
  }
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);
  getParents(inpt);
  getParent("shiny gold");
  return options.filter((v, i, a) => a.indexOf(v) === i);
}
