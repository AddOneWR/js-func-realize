class App {
  // 存放use的函数模块
  static modules = [];
  constructor(options) {
    this.options = options;
    this.init();
  }

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      this.initModules();
      this.options.onReady(this);
    })
  }
 
  // 遍历添加module
  static use(module) {
    Array.isArray(module) ? module.map(item => App.use(item)) : App.modules.push(module);
  }
  
  // 调用每个module的初始化函数
  initModules() {
    App.modules.map(module => module.init && typeof module.init === 'function' && module.init(this));
  }
}