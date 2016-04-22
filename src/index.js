const uniqueRandomArray = require('unique-random-array');
const philosopherNames = require('./philosophers.json');
const getRandomItem = uniqueRandomArray(philosopherNames);

module.exports = {
  all: philosopherNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i += 1) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
