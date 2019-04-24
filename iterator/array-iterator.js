const arr = [1, 2, 3, 4];

// iterator
let iterator = arr[Symbol.iterator]();
for(let res; (res = iterator.next()) && !res.done;) {
  console.log(res.value)
}