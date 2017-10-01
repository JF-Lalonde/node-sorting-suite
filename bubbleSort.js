unsortedArray = [6,7,0,3, 4, 2, 1]
function bubbleSort(unsortedArray){
  var loopTimes = unsortedArray.length;
  for (var i = 0; i < loopTimes; i++){
    for (var n = 0; n < loopTimes - 1 - i; n++){
      if (unsortedArray[n] > unsortedArray[n + 1]){
        var temp = unsortedArray[n + 1]
        unsortedArray[n + 1] = unsortedArray[n]
        unsortedArray[n] = temp
      };
    };
  };
};


module.exports = bubbleSort
bubbleSort(unsortedArray)
console.log(unsortedArray)
