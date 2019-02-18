function object(obj) {
  let res = Object(obj);
  res.test = function() {
    console.log('enhance')
  }
  return res;
}

// 通过Object创建新对象，然后添加方法增强函数
// 缺点同原型继承
