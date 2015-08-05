var fs = require('fs');
var httpServer = require('http').createServer().listen(8000);
    // change later!!!
var port = 0; // <- here
var piblaster = require('pi-blaster.js'); // <- here
var WSServer = require('websocket').server;
var webSocketServer = new WSServer({
  httpServer: httpServer
});

webSocketServer.on('request', function (request) {
  var connection = request.accept(null, request.origin);

  connection.on('message', function(message) {
    var json = JSON.parse(message.utf8Data);
    // change later!!!
    port = json.port; // <- here
    piblaster.setPwm(json.port,json.brightness / 100); // <- here
    console.log('port : '+ json.port + ', slider : ' + json.brightness);
  });
  connection.on('close', function() {
      // change later!!!
    piblaster.setPwm(port,0); // <- here
    console.log('connection closed');
  });
});
