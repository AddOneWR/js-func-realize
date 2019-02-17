function Parent() {
  this.age = 30;
  this.name = 'Tom';
}

Parent.prototype.getAge = function() {
  console.log(this.age);
}

function Child() {
  this.age = 10;
}

// Child.prototype.__proto__ = Parent.prototype
Child.prototype = new Parent();
Child.prototype.getName = function() {
  console.log(this.name);
}

// instance.__proto__ = Child.prototype
let instance = new Child();

instance.getAge();
instance.getName();

// 缺点： 父元素会被修改