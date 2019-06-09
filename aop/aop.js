Function.prototype.before = function(beforefn) {
  let self = this;
  return function() {
    beforefn.apply(this, arguments);
    return self.apply(this, arguments);
  }
}

Function.prototype.after = function(afterfn) {
  let self = this;
  return function() {
    let res = self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return res;
  }
}

let fn = () => console.log('fn');

fn = fn.before(() => { console.log('--before--')})
      .after(() => console.log('--after--'));

fn();