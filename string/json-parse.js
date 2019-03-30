// 慎用，且需要校验
function jsonParse(str) {
  return eval('(' + str + ')');
}

// eval 与 Function 都有着动态编译js代码的作用
function jsonParse(str) {
  return (new Function('return ' + str))()
}