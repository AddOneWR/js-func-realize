Array.prototype.filter = function(fn, context) {
  let arr = [].slice.call(this);
  let res = [];

  for(let i = 0 ; i < arr.length ; i++) {
    if(!arr.hasOwnProperty(i)) continue;

    fn.call(context, arr[i], i, this) && res.push(arr[i]);
  }

  return res;
}