function jsonp(url, callback, success) {
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.type = 'text/javascript';

  window[callback] = function(data) {
    success && success(data);
  }

  document.appendChild(script);
}

jsonp('http://..', 'callback', (data) => {
  console.log(data);
}) 