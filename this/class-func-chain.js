class LazyManClass {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    console.log(`Hi I am ${this.name}`);
    setTimeout(() => {
      this.next();
    }, 0);
  }

  eat(name) {
    let that = this;
    let fn = (function() {
      return function() {
        console.log(`I am eating ${name}`);
        that.next();
      }
    })(name);

    this.taskList.push(fn);
    return this;
  }

  sleep(time) {
    let that = this;
    let fn = (function() {
      return function() {
        setTimeout(() => {
          console.log(`等待了${time}秒...`);
          that.next();
        }, time * 1000)
      }
    })(time);

    this.taskList.push(fn);
    return this;
  }

  sleepFirst(time) {
    let that = this;
    let fn = (function() {
      return function() {
        setTimeout(() => {
          console.log(`等待了${time}秒...`);
          that.next();
        }, time * 1000)
      }
    })(time);

    this.taskList.unshift(fn);
    return this;
  }

  next() {
    let fn = this.taskList.shift();
    fn && fn();
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(2).sleep(1).eat('junk food');