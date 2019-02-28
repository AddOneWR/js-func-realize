// 前序遍历 根左右

// 递归
function recDlr(t) {
  console.log(t.value);
  if(t.left) {
    recDlr(t.left);
  }
  if(t.right) {
    recDlr(t.right);
  }
}

// 非递归
function dlr(t) {
  console.log(t.value);
  var stack = [];
  var temp;
  if(t !== null) {
    stack.push(t);
  }
  while(arr.length !== 0) {
    temp = stack.pop();
    console.log(temp.value);
    if(temp.right) {
      stack.push(temp.right);
    }
    if(temp.left) {
      stack.push(temp.left);
    }
  }
}