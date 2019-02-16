require('./assign');

let a = {
  name: "tom",
  age: 18
}
let b = {
  name: "sam",
  other: {
    age: 23
  }
}

let c = Object.myAssign(a, b);
console.log(c);

console.log(a === c);