var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8, -1];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    console.log(array[j] > 9)
    while (array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array));