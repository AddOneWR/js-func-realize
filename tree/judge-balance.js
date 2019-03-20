let isBalanced = true;

function judgeBalance(t) {
  getDepth(t);
  return isBalanced;
}

function getDepth(t) {
  if(t === null) return 0;
  let left = getDepth(t.left);
  let right = getDepth(t.right);
  if(Math.abs(left - right) > 1) {
    isBalanced = false;
  }
  
  return right > left ? right + 1 : left + 1;
}
