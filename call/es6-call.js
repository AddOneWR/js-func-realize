Function.prototype.myCall = function(ctx) {
  ctx = context ? Object(ctx) : window; 
  ctx.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  var res = eval('ctx.fn(' + args +')');

  delete ctx.fn;
  return res;
}
