const str = '12345';

function permutate(str) {
  var result = [];
  if(str.length > 1) {
    var left = str[0];
    var rest = str.slice(1);
    var preResult = permutate(rest);
    console.log(preResult)
    for(var i = 0; i < preResult.length; i++) {
      for(var j = 0; j <= preResult[i].length; j++) {
        var tmp = preResult[i].slice(0, j) + left + preResult[i].slice(j);
        result.push(tmp);
      }
    }
  } else if (str.length == 1) {
    return [str];
  }

  return result;
}

var res = permutate(str);
console.log(res);