class HashTable {
  constructor() {
    this.table = new Array(137);
  }

  // hash处理
  hash(data) {
    let total = 0;
    for(let i = 0 ; i < data.length ; i++) {
      // 获取data第i个位置的字符Unicode编码
      total += data.charCodeAt(i);
    }

    return total % this.table.length;
  }

  // 添加
  put(data) {
    let index = this.hash(data);
    this.table[index] = data;
    return this;
  }

  // 打印
  print() {
    this.table && this.table.forEach((item, index) => {
      if(item != undefined) {
        console.log(index + ' => ' + item);
      }
    })
  }
}