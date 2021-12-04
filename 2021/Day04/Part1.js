function getBoards(ipt){
  boards = [];
  while(ipt.length){
    if(!(ipt.length%5)) boards.push([]);
    boards[boards.length-1].push(inpt.splice(0,1)[0].split(/\s+/).map(v=>parseInt(v)));
  }
  return boards;
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  nums = inpt.splice(0,1)[0].split(',').map(v=>parseInt(v));
  boards = getBoards(inpt);
  win = -1;
  while(win < 0){
    win = checkBoards(boards, nums.splice(0,1)[0]);
  }
	return win;
}
function calcWin(board){
  ttl = 0;
  for(i = 0; i < board.length; i++){
    for(j = 0; j < board[i].length; j++){
      ttl += board[i][j] < 0 ? 0 : board[i][j];
    }
  }
  return ttl;
}
function checkWin(board){
  // Horizontals
	if(board[0].reduce((a, b) => a + b) < 0) return true;
  if(board[1].reduce((a, b) => a + b) < 0) return true;
  if(board[2].reduce((a, b) => a + b) < 0) return true;
  if(board[3].reduce((a, b) => a + b) < 0) return true;
  if(board[4].reduce((a, b) => a + b) < 0) return true;
  // Verticals
  if(board[0][0] < 0 && board[1][0] < 0 && board[2][0] < 0 && board[3][0] < 0 && board[4][0] < 0) return true;
  if(board[0][1] < 0 && board[1][1] < 0 && board[2][1] < 0 && board[3][1] < 0 && board[4][1] < 0) return true;
  if(board[0][2] < 0 && board[1][2] < 0 && board[2][2] < 0 && board[3][2] < 0 && board[4][2] < 0) return true;
  if(board[0][3] < 0 && board[1][3] < 0 && board[2][3] < 0 && board[3][3] < 0 && board[4][3] < 0) return true;
  if(board[0][4] < 0 && board[1][4] < 0 && board[2][4] < 0 && board[3][4] < 0 && board[4][4] < 0) return true;
  // Diagonals
  //if(board[0][0] < 0 && board[1][1] < 0 && board[2][2] < 0 && board[3][3] < 0 && board[4][4] < 0) return true;
  //if(board[0][4] < 0 && board[1][3] < 0 && board[2][2] < 0 && board[3][1] < 0 && board[4][0] < 0) return true;
  return false;
}
function checkBoards(boards, num){
  for(i = 0; i < boards.length; i++){
    for(j = 0; j < boards[i].length; j++){
      boards[i][j] = boards[i][j].map(v => v == num ? -1 : v);
    }
    temp = checkWin(boards[i]);
    if(temp){
      ttl = calcWin(boards[i]);
      return ttl * num;
    }
  }
  return -1;
}
