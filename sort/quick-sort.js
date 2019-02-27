function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  var leftArr = [];
  var rightArr = [];
  var q = arr[0];
  for(var i = 1, len = arr.length ; i < len ; i++) {
    if(arr[i] > q) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }

  return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
}

module.exports = quickSort;
