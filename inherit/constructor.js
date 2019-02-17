function Parent() {
  this.age = 30;
  this.arr = [1, 2];
}

function Child() {
  Parent.call(this);
}

/*
  这个过程内部发生了很多事.. 分析一下
  obj.__proto__ = Child.prototype
  instance = Child.apply(obj)
*/
/* 
  Child.apply(obj):
    obj.Child() -> Parent.call(obj) -> obj.Parent()
*/
let instance = new Child();
instance.arr.push(3);
let instance2 = new Child();

console.log(instance.arr); // [1, 2, 3]
console.log(instance2.arr); // [1, 2]

// 显然 不能继承原型，并且每个子类都有父类的实例副本，浪费性能