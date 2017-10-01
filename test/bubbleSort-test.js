const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('sorting functionality', function(){
  context('sorting function', function(){
    it('it can sort an array', function(){
      var testArray = [4,2,3,1];
      assert.deepEqual(bubbleSort(testArray), [1,2,3,4]);
    });
  });
});

