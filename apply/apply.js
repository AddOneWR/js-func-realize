Function.prototype.myApply = function(ctx, arg) {
  // 转基本类型为object，若不存在则挂到window上
  ctx = ctx ? Object(ctx) : window;

  // 获取调用函数并挂到第一个参数(被call者)
  ctx.fn = this;
  let res;

  // 判断数组是否存在
  if(!arg) {
    res = ctx.fn();
  } else {
    res = ctx.fn(...arg);
  }

  // 删除fn
  delete ctx.fn;

  return res;
}