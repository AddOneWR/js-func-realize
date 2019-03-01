// 输入一个链表，输出该链表中倒数第k个结点。

function FindKthToTail(head, k) {
  if (head === null || k <= 0) return null;
  let k1 = head, k2 = head;
  while(--k) {
    if(k1.next) k1 = k1.next;
    else return null;
  }
  while(k1.next) {
    k2 = k2.next;
    k1 = k1.next;
  }
  
  return k2;
}