function aoc() {
  var inpt = (document.body.textContent || document.body.innerText).trim();

  // Change face cards to sort easily
  inpt = inpt.replace(/A/g, 'Z');
  inpt = inpt.replace(/K/g, 'Y');
  inpt = inpt.replace(/Q/g, 'X');
  inpt = inpt.replace(/J/g, 'W');

  inpt = inpt.split(/\n/g);

  var hands = [];

  for (var i = 0; i < inpt.length; i++) {
    var [hand, bet] = inpt[i].split(' ');

    // Sort hand, high to low
    var sortedHand = hand.split('').sort().reverse().join('');

    var score = 0;

    // 5-of-a-kind
    if (RegExp(/(.)\1{4}/).test(sortedHand)) {
      score = 6;
    }

    // 4-of-a-kind
    else if (RegExp(/(.)\1{3}/).test(sortedHand)) {
      score = 5;
    }

    // Full House
    else if (RegExp(/(.)\1{2}(.)\2/).test(sortedHand) || RegExp(/(.)\1(.)\2{2}/).test(sortedHand)) {
      score = 4;
    }

    // 3-of-a-kind
    else if (RegExp(/(.)\1{2}/).test(sortedHand)) {
      score = 3;
    }

    // 2 Pair - TODO
    else if (RegExp(/(.)\1(.)\2/).test(sortedHand) || RegExp(/(.)\1.(.)\2/).test(sortedHand)) {
      score = 2;
    }

    // Pair
    else if (RegExp(/(.)\1/).test(sortedHand)) {
      score = 1;
    }

    hands.push({
      cards: hand,
      bet: parseInt(bet),
      score: score,
    })
  }

  hands.sort((x, y) => x.cards > y.cards ? 1 : x.cards < y.cards ? -1 : 0)
  hands.sort((x, y) => x.score > y.score ? 1 : x.score < y.score ? -1 : 0)

  var ttl = 0;
  for (var i = 0; i < hands.length; i++) {
    ttl += hands[i].bet * (i + 1);
  }

  console.log(ttl);
}