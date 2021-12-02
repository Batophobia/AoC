function getInput(){
  let inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v => v);
  return inpt;
}
function aoc(){
  ipt = getInput();
  // TODO
}
