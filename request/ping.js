const Ping = function(opt = {}) {
  this.opt = opt;
  this.favicon = this.opt.favicon || '/favicon.con';
  this.timeout = this.opt.timeout || 0;
  this.logError = this.opt.logError || false;
}

Ping.prototype.ping = (url, callback) => {
  let self = this;
  self.isSuccess = false;
  self.img = new Image();
  self.img.onload = onload;
  self.img.onerror = onerror;

  let timer;
  let start = new Date();

  function onload(e) {
    self.isSuccess = true;
    pingCheck.call(self, e);
  }

  function onerror(e) {
    self.isSuccess = false;
    pingCheck.call(self, e);
  }

  if(self.timeout) {
    timer = setTimeout(() => {
      pingCheck.call(self, undefined);
    }, self.timeout)
  }

  function pingCheck() {
    if(timer) {
      clearTimeout(timer);
    }

    let duration = new Date() - start;
    if(typeof callback === 'function') {
      if(!self.isSuccess) {
        if (self.logError) {
          console.error("error loading resource");
        }

        return callback("error", duration);
      }

      callback(null, duration);
    }
  }
}