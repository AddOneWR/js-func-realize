// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则

function Merge(pHead1, pHead2) {
  let p = null;
  if(pHead1 == null) return pHead2;
  if(pHead2 == null) return pHead1;
  if(pHead1.val < pHead2.val){
    p = pHead1;
    p.next = Merge(pHead1.next, pHead2);
  }else{
    p = pHead2;
    p.next = Merge(pHead1, pHead2.next);
  }
  
  return p;
}