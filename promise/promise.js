const PENDING = 'pending';
const FULFILL = 'fulfill';
const REJECT = 'reject';
function Promise(fn) {
  console.log('begin')
  let state = PENDING; // 初始化状态
  let value = undefined; // 保存resolve值
  let deferred = null; // 保存异步回调函数
  let res;

  function resolve(newValue) {
    console.log('resolve ' + newValue)
    value = newValue; // PENDING ---> FULFILL
    state = FULFILL;

    if(deferred) {
      handle(deferred); // 调用回调函数
    }
  }
  
  function handle(handler) {
    console.log('handle')
    console.log(handler)
    if(state === PENDING) {
      console.log('def');
      deferred = handler;
      return;
    }

    if(!handler.callback) {
      console.log('!callback')
      handler.resolve(value);
      return;
    }

    res = handler.callback(value);
    handler.resolve(res);
  }

  this.then = function(callback) {
    console.log('then')
    return new Promise(function(resolve) {
      handle({
        callback: callback,
        resolve: resolve
      });
    });
  };

  console.log('go')
  fn(resolve);
}

function test() {
  return new Promise(function(resolve){
    setTimeout(() => {
      resolve('promise finish');
    }, 500);
  });
}

let func = test();

func.then(res => {
  console.log(res + ' first');
  return res + ' first';
})
  .then(res => console.log(res + ' second'))
