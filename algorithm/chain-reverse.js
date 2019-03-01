// 输入一个链表，反转链表后，输出新链表的表头

function ReverseList(pHead) {
  let p = pHead;
  let pre = null;
  let next;
  if(!pHead) return null;
  while(p.next) {
    next = p.next
    p.next = pre;
    pre = p;
    p = next;
  }
  p.next = pre;
  
  return p;
}