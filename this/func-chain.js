function Person(name) {
  console.log('I am ' + name);
  this.isSleep = false;
  this.deferer = [];
  this.timer = 0;
};

Person.prototype.eat = function() {
  if(!this.isSleep) {
    console.log('Eat');
  } else {
    this.deferer.push(() => console.log('Eat'));
  }

  return this;
};

Person.prototype.sleep = function(time) {
  this.isSleep = true;
  setTimeout(() => {
    console.log('sleep' + time);
    this.isSleep = false;
    while(this.deferer.length !== 0) {
      this.deferer.shift()();
    }
  }, time + this.timer);
  this.timer = time;

  return this;
};

Person.prototype.walk = function() {
  if(!this.isSleep) {
    console.log('Walk');
  } else {
    this.deferer.push(() => console.log('Walk'));
  }
  return this;
}

var bob = new Person('KK');

bob.sleep(500).eat().sleep(200).walk();

// 大体思路就是这样，后面怎么想写了，因为不知道自己的想法是不是最优解，不过最后肯定是可以实现的

// 所有函数挂在prototype上，里面返回this，这样创建实例后调用函数返回的this就是这个实例，可以继续调用函数

// 重点就在sleep上，这里的延时为了保证正确的顺序同步执行不能让他们按照原来的计时，否则后面的sleep 200 会比前面的sleep 500先输出，所以每次记录上一次的sleep时间，然后相加，比如sleep 200变成sleep 200+500来hack出同步的效果

// 另外每个sleep应该绑定一个数组，这个数组记录了从这个sleep到下个sleep之间的其他函数，每次sleep完成后清空数组(这一节代码中未实现)，若不这样，sleep 500会把sleep 200后的函数也绑定到数组中，最后导致walk在sleep200前输出。
