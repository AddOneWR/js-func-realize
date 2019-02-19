// 若有上下文存在则自动绑定this
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2

// 
function bar() {
  console.log(this.b);
}

var obj2 = {
  b: 2,
  bar: bar
};

// 这里bar保存的是bar的引用，并不包含调用栈
var bar = obj2.bar;

var b = "oops, global";

// 全局调用，this为window
bar(); // oops, global