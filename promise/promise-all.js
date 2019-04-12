Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;
    for(let i = 0, len = promises.length ; i < len ; i++) {
      promises[i].then((res) => {
        results[i] = res;
        count++;
        if(count === len) {
          resolve(results);
        }
      }, (err) => {
        return reject(err);
      });
    }
  })
}