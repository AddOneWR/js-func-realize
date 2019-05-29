let goods = {
  'red|32G': 3,
  'red|64G': 1,
  'blue|32G': 7,
  'blue|32G': 6
}

// 中介者
let mediator = (function() {
  let colorSelect = document.getElementById('colorSelect');
  let memorySelect = document.getElementById('memorySelect');
  let numSelect = document.getElementById('numSelect');

  return {
    changed: function(obj) {
      switch(obj) {
        case colorSelect:
          // TODO
          break;

        case memorySelect:
          // TODO
          break;

        case numSelect:
          // TODO
          break;
      }
    }
  }
})();

colorSelect.onchange = function() {
  mediator.changed(this);
};
memorySelect.onchange = function() {
  mediator.changed(this);
};
numSelect.onchange = function() {
  mediator.changed(this);
};

/*
通过一个中介者对象，其他所有的相关对象都通过该中介者对象来通信，而不是相互引用，当其中的一个对象发生改变时，只需要通知中介者对象即可。通过中介者模式可以解除对象与对象之间的紧耦合关系。

  - 当一组对象要进行沟通或者业务上的交互，但是其关系却又很复杂混乱时，可以采用此模式
  - 当一个对象与其他的对象要进行紧密的交互，但又想服用该对象而不依赖其他的对象时
  - 想创造一个运行于多个类之间的对象，又不想生成新的子类时
*/