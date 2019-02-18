function inherit(child, parent) {
  // 创建原型副本
  let prototype = Object.create(parent.prototype);

  // 增强对象，构造函数调整
  prototype.constructor = child;

  // 挂载原型
  child.prototype = prototype;
}

function Parent(age) {
  this.age = age;
  this.arr = [1, 2];
}

Parent.prototype.getArr = function() {
  console.log(this.arr);
}

function Child(age) {
  Parent.call(this, age);
}

// 继承原型
inherit(Child, Parent);

let instance = new Child();
instance.arr.push(3);
let instance2 = new Child();

console.log(instance.arr); // [1, 2, 3]
console.log(instance2.arr); // [1, 2]

// 只调用一次父构造函数，同时保持原型链，正常使用instanceof等，是较成熟的方法
