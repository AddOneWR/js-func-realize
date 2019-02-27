function insertSort(target) {
  var arr = target;
  var key, j;
  for(var i = 1, len = arr.length ; i < len ; i++) {
    key = arr[i];
    j = i - 1;
    while(arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

module.exports = insertSort;