function insertionSort(array){
  for(var i = 0; i < array.length; i++){
    var number = array[i]
    var n = i - 1
    while(n >= 0 && array[n] > number){
      array[n + 1] = array[n]
      n--
    };
    array[n + 1] = number
  };
  return array
};

module.exports = insertionSort
