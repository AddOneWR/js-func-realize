class Dictionary {
  constructor() {
    this.dic = {};
  }

  // 添加
  set(key, value) {
    this.dic[key] = value;
    return this;
  }

  // 获取
  get(key) {
    return this.has(key) ? this.dic(key) : undefined;
  }

  // 判断是否存在
  has(key) {
    return this.dic.hasOwnProperty(key);
  }

  // 移除
  remove(key) {
    if(!this.has(key)) return false;
    delete this.dic[key];
    return true;
  }

  // 返回所有key
  keys() {
    return Object.keys(this.dic);
  }

  // 获取大小
  size() {
    return Object.keys(this.dic).length;
  }

  // 返回所有value
  values() {
    return Object.values(this.dic);
  }

  // 清空
  clear() {
    this.dic = {};
    return this;
  }
}