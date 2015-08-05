var fs = require('fs');
var httpServer = require('http').createServer().listen(8000);
    // change later!!!
var WSServer = require('websocket').server;
var webSocketServer = new WSServer({
  httpServer: httpServer
});

webSocketServer.on('request', function (request) {
  var connection = request.accept(null, request.origin);

  connection.on('message', function(message) {
    var json = JSON.parse(message.utf8Data);
    // change later!!!
    console.log('port : '+ json.port + ', slider : ' + json.brightness);
  });

  connection.on('close', function() {
    // change later!!!
    console.log('connection closed');
  });
});

