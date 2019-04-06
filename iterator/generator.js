function generator(arg) {
  let index = 0;
  return function next() {
    return arg[index++];
  }
}

const next = getGeneratorFromList([1, 2, 3]);
next(); // 1
next(); // 2
next(); // 3
next(); // undefined