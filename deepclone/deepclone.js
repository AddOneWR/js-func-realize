
/**
 * @description: 深拷贝
 * @param {any} object 被深拷贝的变量
 * @return: target 深拷贝后的变量
 */
function deepclone(object, hash = new WeakMap()) {
  if(!isObject(object)) return object;
  // hash处理循环引用
  if(hash.has(object)) return hash.get(object);

  let target = Array.isArray(object) ? [] : {};
  let value;

  hash.set(object, target);
  // 拿到键值，包括symbol，但是不能遍历原型链，若要遍历使用for in
  Reflect.ownKeys(object).forEach(key => {
    value = object[key];

    if(isObject(value)) {
      if(Array.isArray(value)) {
        let array = initArray(value);
        target[key] = copyArray(array, value, hash);
      } else {
        target[key] = deepclone(value, hash);
      }
    } else {
      target[key] = value;
    }
  })

  return target;
}

/**
 * @description: 判断是否为对象
 * @param {any} value 被判断目标
 * @return: bool 是否为对象
 */
function isObject(value) {
  const type = typeof value;
  
  return value != null && (type === 'object' || type === 'function');
}

/**
 * @description: 生成指定长度数组
 * @param {array} array 被生成数组 
 * @return: result 生成的数组
 */
function initArray(array) {
  const { length } = array;

  let result = array.constructor(length);

  return result;
}

/**
 * @description: 复制数组
 * @param {array} array 生成数组 
 * @param {array} value 被复制数组
 * @param {hash} hash 哈希表
 * @return: array 复制后的数组
 */
function copyArray(array, value, hash) {
  let item;
  for(let i = 0 ; i < value.length ; i++) {
    item = value[i];
    if(!isObject(item)) {
      array[i] = item;
    } else {
      if(Array.isArray(item)) {
        let temp = initArray(item);
        array[i] = copyArray(temp, item, hash);
      } else {
        array[i] = deepclone(item, hash);
      }
    }
  }

  return array;
}

module.exports = {
  deepclone,
  initArray,
  copyArray
}