function throttle(func, delay) {
  let last, timer;
  return function() {
    let now = +new Date();
    let _this = this;
    let args = arguments;

    if(last && now - last < delay) {
      if(timer) clearTimeout(timer);
      timer = setTimeout(function() {
        last = now;
        func.apply(_this, args);
      }, delay)
    } else {
      last = now;
      func.apply(_this, args);
    }
  }
}
