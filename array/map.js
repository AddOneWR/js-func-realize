Array.prototype.map = function(fn, context) {
  let arr = [].slice.call(this);
  let res = [];

  for(let i = 0 ; i < arr.length ; i++) {
    // 判断稀疏数组
    if(!arr.hasOwnProperty(i)) continue;

    res.push(fn.call(context, arr[i], i, this));
  }

  return res;
}