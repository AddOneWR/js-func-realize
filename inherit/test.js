var inherit = (function() {
  var fn = function() {};
  return function(target, origin) {
    fn.prototype = origin.prototype;
    target.prototype = new fn();
    target.prototype.constructor = target;
  }
})();

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