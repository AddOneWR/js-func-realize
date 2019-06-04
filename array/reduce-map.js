Array.prototype.map = function(fn, context) {
  let arr = [].slice.call(this);

  return arr.reduce((pre, cur) => {
    return [...pre, fn.call(context, cur, index, this)];
  }, [])
}