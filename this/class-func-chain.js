class ManagerClass {
  constructor(name) {
    this.taskList = [];
    console.log(`Hi I am ${name}`);
    setTimeout(() => this.next(), 0);
  }

  sleepFirst(time) {
    let fn = () => {
      console.log(`Sleep ${time}s...`);
      setTimeout(() => {
        this.next();
      }, time * 1000);
    }

    this.taskList.unshift(fn);
    return this;
  }

  sleep(time) {
    let fn = () => {
      console.log(`Sleep ${time}s...`);
      setTimeout(() => {
        this.next();
      }, time * 1000);
    }

    this.taskList.push(fn);
    return this;
  }

  eat(name) {
    let fn = () => {
      console.log(`I am eating ${name}`);
      this.next();
    }

    this.taskList.push(fn);
    return this;
  }

  next() {
    let fn = this.taskList.shift();

    fn && fn();
  }
}

function Manager(name) {
  return new ManagerClass(name);
}

Manager('AddOne').eat('breakfast').eat('lunch').sleepFirst(2).sleep(1).eat('dinner');