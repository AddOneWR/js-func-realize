Array.prototype.reduce = function(fn, initial) {
  let arr = [].slice.call(this);
  let res;
  let startIndex = 0;
  // 找到第一个非空元素
  if(!initial) {
    for(let i = 0 ; i < arr.length ; i++) {
      if(!arr.hasOwnProperty(i)) continue;
      startIndex = i;
      res = arr[i];
      break;
    }
  } else {
    res = initial;
  }

  for(let i = ++startIndex ; i < arr.length ; i++) {
    if(!arr.hasOwnProperty(i)) continue;

    res = fn.call(null, res, arr[i], i, this);
  }

  return res;
}