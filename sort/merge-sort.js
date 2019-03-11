function mergeSort(target) {
  if(target.length < 2) return target;

  let mid = Math.floor(target.length / 2);
  let left = mergeSort(target.slice(0, mid));
  let right = mergeSort(target.slice(mid));
  let res = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  res.push(...left, ...right);

  return res;
}
