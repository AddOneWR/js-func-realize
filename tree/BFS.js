// 层次遍历
function bfs(t) {
  var queue = [];
  var res = [];
  if(t !== null) {
    queue.push(t);
  }
  while(queue.length !== 0) {
    var level = [];
    var len = queue.length;
    for(var i = 0 ; i < len ; i++) {
      var cur = queue.shift();
      level.push(cur.val);
      if(cur.left) queue.push(cur.left);
      if(cur.right) queue.push(cur.right);
    }
    res.push(level);
  }
  
  return res.reverse();
}