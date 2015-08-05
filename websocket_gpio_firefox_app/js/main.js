'use strict';

window.addEventListener('load', function() {
  var wsUri = 'ws://192.168.11.3:8000/';
  var output = document.getElementById('output');
  var slider = document.getElementById('slider');
  var brightness = document.getElementById('brightness');
  var websocket = new WebSocket(wsUri);

  slider.value = 0.0;
  slider.addEventListener('change', function() {
    brightness.innerHTML = slider.value;
    websocket.send('{ "port": "18", "brightness": "' + slider.value + '"}');
  });

  websocket.addEventListener('open', function(evt) {
    output.innerHTML = 'CONNECTED';
  });

  websocket.addEventListener('close', function(evt) {
    output.innerHTML = 'DISCONNECTED';
  });

  websocket.addEventListener('message', function(evt) {
    output.innerHTML = evt.data;
  });

  websocket.addEventListener('error', function(evt) {
    var str = '';
    for (var i in evt) {
      str += i + '=' + evt[i] + '<br/>';
    }

    for (var i in evt.target) {
      str += i + '=' + evt.target[i] + '<br/>';
    }
    output.innerHTML = str;
  });
});
