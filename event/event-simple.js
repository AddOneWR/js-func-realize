class EventEmitter {
  constructor() {
    this.subs = {};
  }

  // 事件注册
  on(event, cb) {
    (this.subs[event] || (this.subs[event] = [])).push(cb);
  }

  // 触发事件
  trigger(event, ...args) {
    this.subs[event] &&
      this.subs[event].forEach(cb => {
        cb(...args);
      });
  }

  // 只触发一次
  once(event, onceCb) {
    const cb = (...args) => {
      onceCb(...args);
      this.off(event, onceCb);
    }
    this.on(event, cb);
  }

  // 事件注销
  off(event, offCb) {
    if(this.subs[event]) {
      let index = this.subs[event].findIndex(cb => cb === offCb);
      this.subs[event].splice(index, 1);
      if(!this.subs[event].length) delete this.subs[event];
    }
  }
}