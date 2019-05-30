// 策略类
let levelObj = {
  "A": function(money) {
    return money * 4;
  },
  "B": function(money) {
    return money * 3;
  },
  "C": function(money) {
    return money * 2;
  }
};

// 环境类
let calculateBouns = function(level, money) {
  return levelObj[level](money);
};

console.log(calculateBouns('A', 10000)); // 40000

/*
定义一系列的算法，把他们一个个封装起来，并且使他们可以相互替换。
策略模式的目的就是将算法的使用算法的实现分离开来。
一个基于策略模式的程序至少由两部分组成：
 1. 策略类(可变)：封装方法
 2. 环境类(不可变)：接受客户请求，委托给策略类(需要维持对某个策略对象的引用)

  - 多个类只区别在表现行为不同，可以使用策略模式，在运行时动态选择具体要执行的行为
  - 需要在不同情况下使用不同的策略(算法)，或者策略还可能在未来用其它方式来实现。
  - 对客户隐藏具体策略(算法)的实现细节，彼此完全独立。
*/