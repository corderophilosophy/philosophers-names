const uniqueRandomArray = require('unique-random-array');
const philosopherNames = require('./philosophers.json');

module.exports = {
  all: philosopherNames,
  random: uniqueRandomArray(philosopherNames)
};
