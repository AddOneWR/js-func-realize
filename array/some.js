Array.prototype.some = function(fn, context) {
  let arr = [].slice.call(this);
  
  if(!arr.length) return false;
  let res;
  for(let i = 0 ; i < arr.length ; i++) {
    if(!arr.hasOwnProperty(i)) continue;
    res = fn.call(context, arr[i], i, this);
    if(res) return true;
  }

  return false;
}