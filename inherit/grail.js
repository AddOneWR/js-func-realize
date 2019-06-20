var inherit = (function() {
  var fn = function() {};
  return function(target, origin) {
    fn.prototype = origin.prototype;
    target.prototype = new fn();
    target.prototype.constructor = target;
  }
})();