const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort')

describe('sorting functionality', function(){
  context('sorting function', function(){
    var testArray = [4,2,3,1];
    it('it can sort an array', function(){
      assert.deepEqual(bubbleSort(testArray), [1,2,3,4]);
    });

    it('it returns an array', function(){
      assert.isArray(bubbleSort(testArray));
    });

    it('it can sort arrays of different sizes', function(){
      var newArray = [8,9,4,3,2,0]
      assert.deepEqual(bubbleSort(newArray), [0,2,3,4,8,9]);
    });
  });
});

