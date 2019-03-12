// 判断回文字符串
function palindrome(str) {
  // \W匹配任何非单词字符， 等价于 [^A-Za-z0-9_]
  let reg = /[\W_]/g;

  let lowRegStr = str.toLowerCase().replace(reg, '');

  if(lowRegStr.length === 0) return true;

  if(lowRegStr[0] != lowRegStr[lowRegStr.length - 1]) return false;

  return palindrome(lowRegStr.slice(1, lowRegStr.length - 1));
}