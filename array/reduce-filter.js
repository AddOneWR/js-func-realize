Array.prototype.filter = function(fn, context) {
  let arr = [].slice.call(this);

  return arr.reduce((pre, cur, index) => {
    return fn.call(context, cur, index, this) ? [...pre] : [...pre, cur];
  }, []);
}