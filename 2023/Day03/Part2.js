function getNumber(x, row) {
  while (x > 0 && !isNaN(row[x])) {
    x--;
  }

  if (isNaN(row[x])) x++;

  var num = '';
  while (x < row.length && !isNaN(row[x])) {
    num += row[x];
    x++;
  }

  return num;
}

function aoc() {
  var inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  var ttl = 0;

  for (var i = 0; i < inpt.length - 1; i++) {
    var j = 0;

    for (var j = 0; j < inpt[i].length; j++) {
      if (inpt[i][j] == '*') {
        var nums = [];
        var temp = -1;

        // Check up
        if (i > 0) {
          if (!isNaN(inpt[i - 1][j])) {
            temp = getNumber(j, inpt[i - 1]);
            if (temp != '')
              nums.push(temp);
          } else {
            if (j > 0 && !isNaN(inpt[i - 1][j - 1])) {
              temp = getNumber(j - 1, inpt[i - 1]);
              if (temp != '')
                nums.push(temp);
            }
            if (j < inpt[i].length - 1 && !isNaN(inpt[i - 1][j + 1])) {
              temp = getNumber(j + 1, inpt[i - 1]);
              if (temp != '')
                nums.push(temp);
            }
          }
        }

        // Check down
        if (i < inpt.length - 2) {
          if (!isNaN(inpt[i + 1][j])) {
            temp = getNumber(j, inpt[i + 1]);
            if (temp != '')
              nums.push(temp);
          } else {
            if (j > 0 && !isNaN(inpt[i + 1][j - 1])) {
              temp = getNumber(j - 1, inpt[i + 1]);
              if (temp != '')
                nums.push(temp);
            }
            if (j < inpt[i].length - 1 && !isNaN(inpt[i + 1][j + 1])) {
              temp = getNumber(j + 1, inpt[i + 1]);
              if (temp != '')
                nums.push(temp);
            }
          }
        }

        // Check left
        if (j > 0 && !isNaN(inpt[i][j - 1])) {
          temp = getNumber(j - 1, inpt[i]);
          if (temp != '')
            nums.push(temp);
        }

        // Check right
        if (j < inpt[i].length - 1 && !isNaN(inpt[i][j + 1])) {
          temp = getNumber(j + 1, inpt[i]);
          if (temp != '')
            nums.push(temp);
        }

        if (nums.length == 2) {
          ttl += nums[0] * nums[1];
        }
      }
    }
  }
  console.log(ttl);
}