const a = {
  i: 1,
  toString() {
    return a.i++;
  }
}

if(a == 1 && a == 2 && a == 3) return true;


// 隐式转换时会调用对象的toString或valueOf方法，获取值进行运算就调用valueOf，其他则调用toString，然后重写了哪个就调用哪个                                                                                                                                    