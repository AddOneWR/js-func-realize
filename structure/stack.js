class Stack {
  constructor() {
    this.stack = [];
  }

  // 入栈
  push(el) {
    if(!el) return this;
    this.stack.push(el);
    return this;
  }

  // 出栈
  pop() {
    this.stack.pop();
    return this;
  }

  // 获取栈顶元素
  peek() {
    return this.stack[this.size() - 1];
  }

  // 判空
  empty() {
    return this.stack.length === 0;
  }

  // 获取栈大小
  size() {
    return this.stack.length;
  }

  // 打印栈
  print() {
    return this.stack;
  }
}