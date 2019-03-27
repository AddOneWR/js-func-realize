class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.length = 0;
    this.head = new Node('head');
  }

  // 查找元素，若未找到则返回链表尾部
  find(el) {
    let currNode = this.head;
    while(currNode.element !== el && currNode.next) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 查找指定元素的前一个元素
  findPrevious(el) {
    let currNode = this.head;
    while(currNode.next && (currNode.next.element !== el)) {
      currNode = currNode.next;
    }

    return currNode;
  }

  // 插入， 将newElement追加到element后面
  insert(newElement, element) {
    if(!newElement) return;
    let newNode = new Node(newElement);
    let currNode = this.find(element);
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.length++;

    return this;
  }

  // 打印链表
  print() {
    let currNode = this.head;
    let arr = [];
    while(currNode.next) {
      arr.push(currNode.next.element);
      currNode = currNode.next;
    }

    return arr;
  }

  // 获取链表长度
  size() {
    return this.length;
  }

  // 判空
  empty() {
    return this.length === 0;
  }

  // 获取元素索引
  indexOf(el) {
    let currNode = this.head;
    let index = 0;
    while(currNode.next) {
      index++;
      if(currNode.next.element == el) {
        return index;
      }
      currNode = currNode.next;
    }

    return -1;
  }

  // 移除指定元素
  remove(el) {
    let preNode = findPrevious(el);
    preNode.next = preNode.next ? preNode.next.next : null;
  }
}