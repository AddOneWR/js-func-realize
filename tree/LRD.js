// 后序遍历 左右根

// 递归
function recLrd(t) {
  if(t.left) {
    recLrd(t.left);
  }
  if(t.right) {
    recLrd(t.right);
  }
  console.log(t.value);
}

// 非递归
function lrd(t) {
  var stack = [], res = [];
  var temp;
  stack.push(t);
  while(stack.length !== 0) {
    temp = stack.pop();
    res.push(temp.value);
    if(temp.left) {
      stack.push(temp.left);
    }
    if(temp.right) {
      stack.push(temp.right);
    }
  }

  return res.reverse();
}
