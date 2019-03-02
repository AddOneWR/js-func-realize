const { deepclone } = require('./deepclone');

let test = {
  num: 1,
  arr: [1, 2, 3],
  string: 'aaa',
  null: null,
  undefined: undefined,
  child: {
    childNum: 2,
    childArr: [
      2,
      {
        obj: 123
      }
    ],
    child: {
      child: {
        childString: 'child'
      }
    }
  }
}
// 模拟循环引用
test.self = test;
// symbol测试
let symbol = Symbol("symbol");
test[symbol] = symbol;

let res = deepclone(test);

res.child.childNum = 1111;
res.child.childArr = [9999, {obj: 321}];

console.log(test)
console.log(res)
