var http = require("http");

var server = http.createServer(function (req, res) {
	
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var agent= req.headers["user-agent"];
  res.end("Hola Campusero, estas usando: \n"+agent,"utf8");
});
console.log("server arriba");
server.listen(8001);