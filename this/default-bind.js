// 严格模式下，全局对象不能用于默认绑定，this被绑定到undefined
function foo() {
  "use strict";
  
  console.log(this.a);
}

var a = 2;

foo(); // TypeError: Cannot read property 'a' of undefined

function bar() {
  console.log(this.b);
}

var b = 2;

// 严格模式下调用函数则不影响默认绑定
// iife分割作用域自成一块，类似闭包
(function() {
  "use strict";
  var b = 3;
  console.log(b) // 3
  bar(); // 2
})();