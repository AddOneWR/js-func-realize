function after(targer, key, desc) {
  const { value } = desc;
  desc.value = function(...args) {
    let res = value.apply(this, args);
    console.log('--after--');
    return res;
  }

  return desc;
}

class Test {
  @after
  fn() {
    console.log('fn');
  }
}

let t = new Test();
t.fn();