/*

    1
   / \
  2   2
 / \ / \
3  4 4  3
*/
function judgeSymmetry(t) {
  if(t == null) return true;

  return isSymmetry(t.left, t.right);
}

function isSymmetry(l, r) {
  if(l == null && r == null) return true;
  if((l == null && r != null) || (l != null && r == null)) return false;

  return l.val == r.val && isSymmetry(l.left, l.right) && (r.left, r.right);
}