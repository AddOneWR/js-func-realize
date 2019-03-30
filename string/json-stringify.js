function jsonStringify(obj) {
  const type = typeof obj;
  // 基本类型直接返回
  if(type !== 'object' || type === null) {
    return String(obj);
  }

  let json = [];
  // 是否为数组
  let isArr = obj && obj.constructor === Array;
  for(let key in obj) {
    let value = obj[key];
    let type = typeof value;
    if(type === 'object') {
      value = jsonStringify(value);
    } else {
      value = '"' + value + '"';
    }
    // 推入json，是数组则忽略key
    json.push((isArr ? "" : '"' + key + '":') + String(value));
  }

  return (isArr ? '[' : '{') + String(json) + (isArr ? ']' : '}')
} 

console.log(jsonStringify({x : 5, b : 2}));
console.log(jsonStringify([1, "false", false]));