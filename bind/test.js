require('./bind');

let height = 200;
var you = {
  height: 180
};
function person(name, age) {
  this.habit = 'shopping';
  this.height = 160;
  console.log(this.height);
  console.log(name);
  console.log(age);
}

person.prototype.friend = 'Tom';

var bindPerson = person.myBind(you, 'Sam');
var obj = new bindPerson(20);

console.log(obj.habit);

console.log(obj.friend);

obj.__proto__.friend = 'Bill';

console.log(person.prototype.friend);
