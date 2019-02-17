function object(obj) {
  function res() {};
  res.prototype = obj;
  return new res();
}

// 创建空对象作为中介来传递原型
// 实质为浅拷贝，所以存在引用修改且不能传递参数