function baz() {
  // 调用栈；baz
  // 调用位置window
  console.log( "baz" );
  bar();
}

function bar() {
  // 调用栈：baz -> bar
  // 调用位置baz
  console.log( "bar" );
  foo();
}

function foo() {
  // 调用栈：baz -> bar -> foo
  // 调用位置bar
  console.log("foo");
}

baz();