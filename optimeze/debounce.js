// 非立即执行
function debounce(fn, delay) {
  return function() {
    let _this = this;
    let args = arguments;

    if(fn.id) clearTimeout(fn.id);
    fn.id = setTimeout(function() {
      fn.apply(_this, args);
    }, delay)
  }
}