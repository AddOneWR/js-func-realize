function Parent() {
  this.age = 30;
  this.arr = [1, 2];
}

Parent.prototype.getAge = function() {
  console.log(this.age);
}

function Child() {
  this.age = 10;
}

// Child.prototype.__proto__ = Parent.prototype
Child.prototype = new Parent();
Child.prototype.getArr = function() {
  console.log(this.arr);
}

// instance.__proto__ = Child.prototype
let instance = new Child();
instance.getAge(); // 10
instance.getArr(); // [1, 2]

instance.arr.push(3);
let instance2 = new Child();
instance2.getArr(); // [1, 2, 3]

// 缺点： 父元素引用会被修改