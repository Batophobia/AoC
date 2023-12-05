function aoc() {
  var inpt = document.body.textContent || document.body.innerText;
  inpt = inpt.split(/\n/g);

  var ttl = 0;
  var regex = RegExp(/[^.\d]/);

  for (var i = 0; i < inpt.length - 1; i++) {
    var j = 0;
    var num = '';
    var startX = -1;

    for (var j = 0; j < inpt[i].length; j++) {
      if (!isNaN(inpt[i][j])) {
        if (startX < 0)
          startX = j;
        num += inpt[i][j];
      }

      if (isNaN(inpt[i][j]) || j == inpt[i].length - 1) {
        if (startX >= 0) {
          var hasSymbol = false;
          for (var x = startX - 1; x <= j; x++) {
            if (x < 0 || x > inpt[i].length)
              continue;

            if (i > 0) {
              // Check prev row
              if (regex.test(inpt[i - 1][x])) {
                hasSymbol = true;
                break;
              }
            }

            // Check this row
            if (regex.test(inpt[i][x])) {
              hasSymbol = true;
              break;
            }

            if (i < inpt.length - 2) {
              // Check next row
              if (regex.test(inpt[i + 1][x])) {
                hasSymbol = true;
                break;
              }
            }
          }

          if (hasSymbol) {
            ttl += parseInt(num);
          }
        }
        num = '';
        startX = -1;
      }
    }
  }

  console.log(ttl);
}