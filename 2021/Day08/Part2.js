function replaceCode(inpt, code){
	for(r = 0; r < code.length; r++) inpt = inpt.replace(code[r],'');
  return inpt;
}
function getNum(code, codes){
  cd = code.split('').sort().join('');
  for(c = 0; c < Object.keys(codes).length; c++){
    if(codes[c] == cd){
      return c;
    }
  }
}
function aoc(){
  inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g).filter(v=>v);
  ttl = 0;
  for(i = 0; i < inpt.length; i++){
    tmp = inpt[i].split(' | ');
    nums = tmp[0].split(' ');
    otpt = tmp[1].split(' ');
    codes = {};
    segs = {top: null, topL: null, topR: null, mid: null, botL: null, botR: null, bot: null};
    for(n = 0; n < nums.length; n++){
      switch(nums[n].length){
        case 2: codes[1] = nums[n].split('').sort().join(''); break;
				case 3: codes[7] = nums[n].split('').sort().join(''); break;
				case 4: codes[4] = nums[n].split('').sort().join(''); break;
        case 7: codes[8] = nums[n].split('').sort().join(''); break;
      }
    }
    segs.top = replaceCode(codes[7], codes[1]);
    for(n = 0; n < nums.length; n++){
      if(nums[n].length == 5){
        x = nums[n];
        for(j = 0; j < codes[7].length; j++)
        	x = x.replace(codes[7][j],"");
        if(x.length == 2) codes[3] = nums[n].split('').sort().join('');
			}
      else if(nums[n].length == 6){
        x = nums[n];
        for(j = 0; j < codes[4].length; j++)
        	x = x.replace(codes[4][j],"");
        if(x.length == 2) codes[9] = nums[n].split('').sort().join('');
			}
    }
    segs.bot = replaceCode(codes[9], codes[4]).replace(segs.top,"");
    segs.mid = replaceCode(codes[3], codes[1]).replace(segs.top,"").replace(segs.bot,"");
    segs.botL = replaceCode(codes[8], codes[9]);
		segs.topL = replaceCode(codes[4], codes[1]).replace(segs.mid,"");
    for(n = 0; n < nums.length; n++){
      if(nums[n].length == 6){
        x = nums[n].replace(segs.top,"").replace(segs.bot,"").replace(segs.mid,"").replace(segs.botL,"").replace(segs.topL,"");
        if(x.length == 1) codes[6] = nums[n].split('').sort().join('');
			}
    }
    segs.topR = replaceCode(codes[8], codes[6]);
    segs.botR = codes[1].replace(segs.topR,"");
    codes[0] = [segs.top, segs.topR, segs.topL, segs.botL, segs.botR, segs.bot].sort().join('');
    codes[2] = [segs.top, segs.topR, segs.mid, segs.botL, segs.bot].sort().join('');
    codes[5] = [segs.top, segs.topL, segs.mid, segs.botR, segs.bot].sort().join('');
    ttl += 1000 * getNum(otpt[0], codes);
		ttl += 100 * getNum(otpt[1], codes);
		ttl += 10 * getNum(otpt[2], codes);
		ttl += getNum(otpt[3], codes);
  }
  return ttl;
}
