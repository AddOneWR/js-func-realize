Function.prototype.apply = function (ctx, arr) {
  ctx = ctx ? Object(ctx) : window; 
  ctx.fn = this;

  var res;

  if (!arr) {
    result = ctx.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    res = eval('ctx.fn(' + args + ')');
  }

  delete ctx.fn
  return res;
}