let obj = {
  name: 'Tom',
  age: 20,
  hobby: 'Rap',
  [Symbol.iterator]() {
    let that = this;
    let keys = Object.keys(this);
    let index = 0;

    function next() {
      if(index < keys.length) {
        return {
          value: that[keys[index++]],
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }

    return {
      next
    }
  }
}

var iterator = obj[Symbol.iterator]();
for(let res; (res = iterator.next()) && !res.done;) {
  console.log(res.value)
}
