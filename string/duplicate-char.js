// 统计出现最多次数字母
function findMaxDuplicateChar(str) {
  if(str.length === 1) return str;
  let obj = {};

  for(let i = 0, len = str.length ; i < len ; i++) {
    if(!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  let maxChar = '';
  let max = 0;
  for(let key in obj) {
    if(obj[key] > max) {
      maxChar = key;
      max = obj[key];
    }
  }

  return maxChar + ': ' + max;
}