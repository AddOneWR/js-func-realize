class CraeteUser {
  constructor(name) {
    this.name = name;
    this.getName();
  }
  getName() {
    return this.name;
  }
}

// 通过代理实现单例模式
let ProxyMode = (function() {
  var instance = null;
  return function(name) {
    if(!instance) {
      instance = new CraeteUser(name);
    }

    return instance;
  }
})();

// 测试单体模式的实例
let a = new ProxyMode("aaa");
let b = new ProxyMode("bbb");
// 因为单体模式是只实例化一次，所以下面的实例是相等的
console.log(a === b);

/* 
保证一个类仅有一个实例，并提供一个访问它的全局访问点。实现的方法为先判断实例存在与否，如果存在则直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。

  - 某些管理类，保证资源的一致访问性。
  - 创建对象时耗时过多或耗费资源过多，但又经常用到的对象；
  - 工具类对象
  - 频繁访问数据库或文件的对象。
*/
