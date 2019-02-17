function Parent(age) {
  this.age = age;
  this.arr = [1, 2];
}

Parent.prototype.getAge = function() {
  console.log(this.age);
}

function Child(age) {
  Parent.call(this, age);
}

// Child.prototype.__proto__ = Parent.prototype
Child.prototype = new Parent();

// 调整constructor指向自身构造函数
Child.prototype.constructor = Child();
Child.prototype.getArr = function() {
  console.log(this.arr);
}

let instance = new Child(10);

instance.getAge(); // 10
instance.getArr(); // [1, 2]

instance.arr.push(3);
let instance2 = new Child(20);
instance2.getAge(); // 20
instance2.getArr(); // [1, 2]

// 显然，原型中还会有一份同样的属性