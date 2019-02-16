Object.prototype.myAssign = function(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  // 获取剩余参数
  let args = [...arguments].slice(1);

  // 转成对象
  let obj = Object(target);

  args.forEach(arg => {
    Reflect.ownKeys(arg).forEach(key => {
      obj[key] = arg[key];
    })
  })
  
  return obj;
}