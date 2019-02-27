function selectSort(target) {
  var temp;
  var arr = target;
  for(var i = 0, len = arr.length ; i < len - 1 ; i++) {
    for(var j = i + 1 ; j < len ; j++) {
      if(arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

module.exports = selectSort;