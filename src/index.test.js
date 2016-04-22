var expect = require('chai')
  .expect;
var philosophers = require('./index');

describe('philosophers-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(philosophers.all)
        .to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Jeremy Bentham`', function() {
      expect(philosophers.all)
        .to.include('Jeremy Bentham');
    });
  });

  describe('random', function() {
    it('should return a random item from philosophers.random', function() {
      var randomItem = philosophers.random();
      expect(philosophers.all)
        .to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = philosophers.random(3);
      expect(randomItems)
        .to.have.length(3);
      randomItems.forEach(function(item) {
        expect(philosophers.all)
          .to.include(item);
      });
    });
  });
});
