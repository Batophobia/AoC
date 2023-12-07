function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();
  inpt = inpt.split(/\n/g);

  var time = parseInt(inpt[0].split(':')[1].replace(/\s/g, ''));
  var distance = parseInt(inpt[1].split(':')[1].replace(/\s/g, ''));

  var ttl = 0;

  for (var t = time - 1; t > 0; t--) {
    var dist = t * (time - t);
    if (dist > distance)
      ttl++;
  }

  console.log(ttl);
}