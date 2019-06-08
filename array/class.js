function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype, {
    constructor: {
      enumerable: false,
      configurable: true,
      writable: true,
      value: subType.constructor
    }
  });

  Object.setPrototypeOf(subType, superType);
}