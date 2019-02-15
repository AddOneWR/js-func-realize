Function.prototype.myBind = function(ctx) {
  // 保存this
  let self = this;

  // 截取参数
  let args = [...arguments].slice(1);

  let fn = function() {
    // 判断this是否为当前函数，若是则是new出的构造函数，绑定this，若不是则绑定传入的对象
    return self.apply(
      this instanceof fn ? this : ctx,
      args.concat([...arguments])
    );
  }

  // 修改原型，创建新对象防止this与fn浅拷贝
  fn.prototype = Object.create(this.prototype);

  return fn;
}