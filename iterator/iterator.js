const arr = [1, 2, 3, 4];

// for of
for(let item of arr) {
  console.log(item)
}

// iterator
let iterator = arr[Symbol.iterator]();
for(let res; (res = iterator.next()) && !res.done;) {
  console.log(res.value)
}