for (var i = 0; i < 3; i++) {
  // 闭包传参
  ((i) => {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}

for (var i = 0; i < 3; i++) {
  // 闭包传参，但是因为传入立即执行函数，不会等1s后打印
  setTimeout(((i) => {
    console.log(i);
  })(i), 1000);
}

// 对于上者的iffe，这里iffe中返回一个函数
for (var i = 0; i < 3; i++) {
  setTimeout(((i) => {
    return function() {
      console.log(i);
    }
  })(i), 1000);
}

for (var i = 0; i < 3; i++) {
  // setTimeout传参
  setTimeout((i) => {
    console.log(i)
  }, 1000, i);
}

for (let i = 0; i < 3; i++) {
  // setTimeout传参
  setTimeout((i) => {
    console.log(i)
  }, 1000, i);
}
// 0
// 1
// 2
