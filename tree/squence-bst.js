// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果

// 递归
function VerifySquenceOfBST(sequence) {
  if(!sequence.length) return false;
  return judge(sequence, 0, sequence.length - 1);
}

function judge(t, left, right) {
  if(left >= right) return true;
  // 拿到根节点
  let i = right;

  // 遍历右子树
  while(t[i - 1] > t[right] && i > 1) {
    i--;
  }

  // 遍历左子树， 若发现有节点大于根节点则返回false
  for(let j = i - 1 ; j >= 1 ; j--) {
    if(t[j] > t[right]) {
      return false;
    }
  }

  return judge(t, left, i - 1) && judge(t, i, right - 1);
}

// 非递归
function VerifySquenceOfBST2(sequence) {
  let n = sequence.length,
    i = 0;
  if (!n) return false;
  while (n--) {
    while (sequence[i] < sequence[n]) i++;
    while (sequence[i] > sequence[n]) i++;
    if (i < n) return false;
    i = 0;
  }
  return true;
}