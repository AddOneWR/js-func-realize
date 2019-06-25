let fn = () => console.log('fn');

Object.defineProperty(fn, 'before', {
  writable: true,
  value: () => console.log('--before--')
});

Object.defineProperty(fn, 'after', {
  writable: true,
  value: () => console.log('--after--')
});

let aop = fn => () => {
  fn.before();
  fn();
  fn.after();
}

fn = aop(fn);
fn();