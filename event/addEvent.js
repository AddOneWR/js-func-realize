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