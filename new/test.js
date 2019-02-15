const myNew = require('./new');

function Person(age, name) {
  this.age = age;
  this.name = name;

  return 'test';
}

var me = myNew(Person, 12, 'tom')