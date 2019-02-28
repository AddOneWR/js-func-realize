// 中序遍历 左根右

// 递归
function recLdr(t) {
  if(t.left) {
    recDlr(t.left);
  }
  console.log(t.value);
  if(t.right) {
    recDlr(t.right);
  }
}

// 非递归
function ldr(t) {
  var stack = [];
  var temp;
  while(true) {
    while(t !== null) {
      stack.push(t);
      t = t.left;
    }
    if(stack.length === 0) {
      break;
    }
    temp = stack.pop();
    console.log(temp.value);
    t = temp.right;
  }
}