class Multitask {
  constructor(maxLimit = 5, callback = null) {
    // 最大并发
    this.maxLimit = maxLimit;
    // 当前并发数
    this.currentRunning = 0;
    // 请求队列
    this.requestQueue = [];
    // 回调函数
    this.callback = callback;
    // 保存结果
    this.results = [];
  }

  pushRequest(req) {
    this.requestQueue.push(req);
  }

  loop() {
    while(this.currentRunning < this.maxLimit && this.requestQueue.length) {
      let req = this.requestQueue.shift();
      this.currentRunning++;

      req()
        .then(res => this.results.push(res))
        .catch(err => this.results.push(err))
        .finally(() => {
          this.currentRunning--;
          this.loop();
        })
    }

    if(this.callback && this.currentRunning === 0) {
      callback(this.results);
    }
  }
}

function callback(res) {
  console.log(res);
}

const requestQueue = new Multitask(5, callback);
const urls = Array(10).fill('https://www.baidu.com/');

urls.forEach(url => {
  let task = () => {
    return fetch(url);
  }
  requestQueue.pushRequest(task);
})

requestQueue.loop();
