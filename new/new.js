function myNew() {
  // 创建空对象
  let obj = new Object();

  // 获取构造函数
  let Constructor = [].shift.call(arguments);

  // 链接原型
  obj.__proto__ = Constructor.prototype;

  // 调用父构造函数继承
  let res = Constructor.apply(obj, arguments);

  // 只返回对象 优先级: 构造函数返回 > 新创建
  return res instanceof Object ? res : obj;
}
