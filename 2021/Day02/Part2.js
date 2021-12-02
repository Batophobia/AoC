function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);
  x = 0; y = 0; aim = 0;
  for(i = 0; i < inpt.length; i++){
    line = inpt[i].split(' ');
    switch(line[0]){
      case 'up': aim -= parseInt(line[1]); break;
      case 'down': aim += parseInt(line[1]); break;
      case 'forward':
        x += parseInt(line[1]);
        y += aim * parseInt(line[1]);
        break;
    }
  }
  return x * y;
}
