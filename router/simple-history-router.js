function Router() {
  this.routers = {};
  this.currentUrl = '';
}

Router.prototype.init = function() {
  window.addEventListener('popstate', e => {
    const path = e.state && e.state.path;
    this.routers[path] && this.routers[path]();
  })
}

Router.prototype.route = function(path, callback) {
  this.routers[path] = callback || function() {};
}

Router.prototype.go = function(path) {
  history.pushState({ path: path }, null, path);
  this.routers[path] && this.routers[path]();
}

Router.prototype.back = function() {
  history.back();
}
