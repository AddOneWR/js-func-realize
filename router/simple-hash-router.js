function Router() {
  this.routers = {};
  this.currentUrl = '';
}

Router.prototype.route = function(path, callback) {
  this.routers[path] = callback || function(){};
}

Router.prototype.refresh = function() {
  // www.baidu.com/#/abc -> /abc
  this.currentUrl = location.hash.slice(1) || '/';
  this.routers[currentUrl] && this.routers[currentUrl]();
}

Router.prototype.init = function() {
  window.addEventListener('load', this.refresh());
  window.addEventListener('hashchange', this.refresh());
}

window.Router = new Router();
window.Router.init();

/* 
<ul> 
    <li><a href="#/">turn white</a></li> 
    <li><a href="#/blue">turn blue</a></li> 
    <li><a href="#/green">turn green</a></li> 
</ul> 
*/


var content = document.querySelector('body');

function changeBgColor(color) {
  content.style.backgroundColor = color;
}

Router.route('/', function() {
    changeBgColor('white');
});
