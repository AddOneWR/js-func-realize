// 初始化事件
function initEvent(node) {
  let ev = {};
  
  // 绑定target
  ev.target = node;

  // 初始化
  ev.isPropagationStoped = false;
  ev.isDefaultPrevented = false;

  ev.stopPropagation = function() {
    this.isPropagationStoped = true;
  }

  ev.preventDefault = function() {
    this.isDefaultPrevented = true;
  }

  return ev;
}

// 计算触发事件的节点到根节点的路径
function getNodePath(ev) {
  let target = ev.target;
  let els = [];

  // 从内到外
  while(target) {
    els.push(target);
    target = target.parentNode;
  }

  // [target, ..., html]
  return els;
}

// 触发capture
function executeCaptureHandler(els, ev) {
  // [html, ..., target]
  els.reverse();
  let cur;
  for(let i = 0 ; i < els.length ; i++) {
    if(ev.isPropagationStoped) break;

    cur = els[i];
    let handles = cur.__handles && cur.handles[ev.type] && cur.__handles[ev.type]['capture'] || [];
    ev.currentTarget = el;
    handles.forEach(handler => {
      handler.call(cur, ev);
    })
  }
}

// 触发绑定的事件
function executeBindHandler(ev) {
  ev.target['on' + ev.type].call(ev.target, ev);
}

// 触发冒泡事件
function executeBubbleHandler(els, ev) {
  let cur;
  for(let i = 0 ; i < els.length ; i++) {
    if(ev.isPropagationStoped) break;

    cur = els[i];
    let handles = cur.__handles && cur.handles[ev.type] && cur.__handles[ev.type]['bubble'] || [];
    ev.currentTarget = el;
    handles.forEach(handler => {
      handler.call(cur, ev);
    })
  }
}

// 触发默认事件
function executeDefaultHandler(ev) {
  if(!ev.isDefaultPrevented) {
    // a标签默认事件
    if (ev.type === 'click' && ev.tagName.toLowerCase() === 'a') {
      window.location = ev.target.href
    }
  }
}

// 事件添加
HTMLNode.prototype.addEventListener = function(eventName, handler, useCapture = false) {
  if(!this.__handlers) this.__handlers = {};
  if(!this.__handlers[eventName]) {
    this.__handlers[eventName] = {
      capture: [],
      bubble: []
    }
  }
  this.__handlers[eventName][useCapture ? 'capture' : 'bubble'].push(handler);
}