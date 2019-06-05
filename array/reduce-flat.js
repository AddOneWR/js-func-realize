Array.prototype.flat = function(depth = 1) {
  let arr = [].slice.call(this);
  if(depth === 0) return arr;
  return arr.reduce((pre, cur) => {
    if(Array.isArray(cur)) {
      return [...pre, ...Array.prototype.flat.call(cur, depth - 1)];
    } else {
      return [...pre, cur];
    }
  }, []);
}