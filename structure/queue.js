class Queue {
  constructor() {
    this.queue = [];
  }

  // 入队
  enqueue(el) {
    if(!el) return this;
    this.queue.push(el);
    return this;
  }

  // 出队
  dequeue() {
    this.queue.shift();
    return this;
  }

  // 查看队首
  front() {
    return this.queue[0];
  }

  // 判空
  empty() {
    return this.queue.length === 0;
  }

  // 获取队列长度
  len() {
    return this.queue.length;
  }
  
  // 打印队列
  print() {
    return this.queue;
  }
}