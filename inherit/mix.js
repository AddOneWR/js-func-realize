function Parent() {

}

function GrandParent() {

}

function Child() {
  Parent.call(this);
  GrandParent.call(this);
}

// 挂载
Child.prototype = Object.create(Parent.prototype);

// 混合
Object.assign(Child.prototype, GrandParent.prototype);

// 调整constructor
Child.prototype.constructor = Child;
