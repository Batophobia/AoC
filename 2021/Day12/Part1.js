function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  paths = {};
  for(i = 0; i< inpt.length; i++){
    cave = inpt[i].split('-');
    if(!paths[cave[0]]) paths[cave[0]] = { exits: [] };
    if(!paths[cave[1]]) paths[cave[1]] = { exits: [] };
    if(cave[0] != "end" && cave[1] != "start")
      paths[cave[0]].exits.push(cave[1]);
    if(cave[1] != "end" && cave[0] != "start")
      paths[cave[1]].exits.push(cave[0]);
  }
}
