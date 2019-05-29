// 控制 dom
let imgFunc = (function() {
  let imgNode = document.createElement('img');
  document.body.appendChild(imgNode);

  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  }
})();

// 代理 控制逻辑
let proxyImage = (function() {
  let img = new Image();
  img.onload = function() {
    imgFunc.setSrc(this.src);
  }

  return {
    setSrc: function(src) {
      imgFunc.setSrc('./loading.gif');
      img.src = src;
    }
  }
})();

proxyImage.setSrc('./pic.png');

/*
为一个对象提供一个代用品或占位符，以便控制对它的访问。

常用的虚拟代理形式：某一个花销很大的操作，可以通过虚拟代理的方式延迟到这种需要它的时候才去创建（例：使用虚拟代理实现图片懒加载） 图片懒加载的方式：先通过一张loading图占位，然后通过异步的方式加载图片，等图片加载好了再把完成的图片加载到img标签里面。

  - 当我们想要隐藏某个类时，可以为其提供代理类
  - 当一个类需要对不同的调用者提供不同的调用权限时，可以使用代理类来实现（代理类不一定只有一个，我们可以建立多个代理类来实现，也可以在一个代理类中进行权限判断来进行不同权限的功能调用）
  - 当我们要扩展某个类的某个功能时，可以使用代理模式，在代理类中进行简单扩展（只针对简单扩展，可在引用委托类的语句之前与之后进行）
*/