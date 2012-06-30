var net = require("net");
var sockets=[];
var idCont=0;
/*chat para node*/
var server = net.createServer(function(socket) { 
  console.log('chat arriba');

  var enviarMensaje= function(id, mensaje){
  	for(var i=0; i<sockets.length; i++){
  		console.log(sockets[i].id);
  		if(sockets[i].id!=id){
  			sockets[i].write(mensaje);
  		}
  	}
  }

  socket.on('end', function() {
    console.log('bye');
  });

  socket.on('connect', function(){
  	socket.write('hola campusero al nodechat!\r\n');
  	socket.id= idCont++;
  	sockets.push(socket);
  });

  socket.on('data', function(data){
  	enviarMensaje(socket.id, data.toString());
  });
});

server.listen(5001, function() { 
  console.log('server iniciado');
});