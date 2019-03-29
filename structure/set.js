class Set {
  constructor() {
    this.set = [];
  }

  // 添加
  add(el) {
    if(!this.has(el)) return false;
    this.set.push(el);
    return true;
  }

  // 大小
  size() {
    return this.set.length;
  }

  // 打印集合
  print() {
    return this.set;
  }

  // 是否存在
  has(el) {
    return this.set.indexOf(el) >= 0;
  }

  // 获取位置
  indexOf(el) {
    return this.set.indexOf(el);
  }

  // 移除
  remove(el) {
    let index = this.set.indexOf(el);
    if(index < 0) return false;
    this.set.splice(index, 1);
    return true;
  }

  // 合并
  union(otherSet) {
    let newSet = new Set();
    newSet.set = [...this.set];
    for(let i = 0 ; i < otherSet.set.length ; i++) {
      if(!newSet.has(otherSet.set[i])) {
        newSet.set.push(otherSet.set[i]);
      }
    }

    return newSet;
  }

  // 交集
  intersect(otherSet) {
    let newSet = new Set();
    for(let i = 0 ; i < this.set.length ; i++) {
      if(otherSet.has(this.set[i])) {
        newSet.add(this.set[i]);
      }
    }

    return newSet;
  }

  // 子集判断
  isSubsetOf(subSet) {
    if(this.size() > subSet.size()) return false;
    this.set.forEach(item => {
      if(!subSet.has(item)) return false;
    });

    return true;
  }
}