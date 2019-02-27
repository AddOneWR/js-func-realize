const bubbleSort = require('./bubble-sort');
const selectSort = require('./select-sort');
const insertSort = require('./insert-sort');
const quickSort = require('./quick-sort');

let arr = [3, 1, 4, 5, 2];

console.log(bubbleSort(arr));
console.log(selectSort(arr));
console.log(insertSort(arr));
console.log(quickSort(arr));
