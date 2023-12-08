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

    var numJoker = (sortedHand.match(/W/g) || []).length;

    var score = 0;

    // 5-of-a-kind
    if (RegExp(/(.)\1{4}/).test(sortedHand)) {
      score = 6;
    }

    // 4-of-a-kind
    else if (RegExp(/(.)\1{3}/).test(sortedHand)) {
      // Possible: 4 + 1 Joker || 4 Joker + 1
      score = 5 + (numJoker > 0);
    }

    // Full House
    else if (RegExp(/(.)\1{2}(.)\2/).test(sortedHand) || RegExp(/(.)\1(.)\2{2}/).test(sortedHand)) {
      // Possible: 2 + 3 Joker || 3 + 2 Joker
      score = 4;
      if (RegExp(/(.)[\1]{4}/).test(sortedHand.replace(/'0'/g, sortedHand[0])))
        score = 6;
    }

    // 3-of-a-kind
    else if (RegExp(/(.)\1{2}/).test(sortedHand)) {
      // Possible: 3 + 1 Joker + 1 || 3 Joker + 1 + 1 (full house lesser option)
      score = 3;
      if (numJoker > 0)
        score = 5;
    }

    // 2 Pair
    else if (RegExp(/(.)\1(.)\2/).test(sortedHand) || RegExp(/(.)\1.(.)\2/).test(sortedHand)) {
      // Possible: 2 + 2 Joker + 1 (4 of kind) || 2 + 2 + 1 Joker (full house)
      score = 2;
      if (numJoker > 0)
        score += numJoker + 1;
    }

    // Pair
    else if (RegExp(/(.)\1/).test(sortedHand)) {
      // Possible: 2 + 1 Joker + 1 + 1 || 2 Joker + 1 + 1 + 1 (3 of kind)
      score = 1;
      if (numJoker > 0)
        score = 3;
    }

    else {
      score = numJoker;
    }

    hands.push({
      cards: hand.replace(/W/g, '0'),
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

  console.log(hands);
  console.log(ttl);
}