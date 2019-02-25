function ajax(url, method, body, success, fail) {
  var request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      if(request.status >= 200 && request.status < 300) {
        success.call(undefined, request.responseText);
      } else if (request.status >= 400) {
        fail.call(undefined, request);
      }
    }
  }

  request.send(body);
}