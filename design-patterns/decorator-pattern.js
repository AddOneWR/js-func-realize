Function.prototype.before = function(beforefn) {
  let self = this;
  return function() {
    beforefn.apply(this, arguments);
    return self.apply(this, arguments);
  }
}

Function.prototype.after = function(afterfn) {
  let self = this;
  return function() {
    let ret = self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  }
}

let func = function() {
  console.log(2);
}

let func1 = function() {
  console.log(1);
}

let func3 = function() {
  console.log(3);
}

func = func.before(func1).after(func3);
func();

/*
在不改变对象自身的基础上，在程序运行期间给对象动态地添加方法。

  - 原有方法维持不变，在原有方法上再挂载其他方法来满足现有需求
  - 函数的解耦，将函数拆分成多个可复用的函数，再将拆分出来的函数挂载到某个函数上，实现相同的效果但增强了复用性
*/