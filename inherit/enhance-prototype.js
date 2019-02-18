function object(obj) {
  let res = Object(obj);
  res.test = function() {
    console.log('enhance')
  }
  return res;
}

// 通过Object创建新对象，然后添加方法增强函数
// 实质为浅拷贝，所以存在引用修改且不能传递参数