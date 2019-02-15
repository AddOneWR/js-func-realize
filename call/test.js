require('./call');

let you = {
  age: 17,
  name: 'stupid'
};

function person(age, name) {
  console.log(age);
  console.log(name);
  console.log(this.age, this.name);
}

person.myCall(you, 16, 'smart');
