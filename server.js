
var express = require('express');

var app = express();
var server = app.listen(8000);
app.use(express.static('public'));

console.log("My server is running");
 
var socket = require('socket.io');
var io = socketlisten(server);



io.sockets.on('connection', newConnection);



function newConnection(socket)
{
	
	socket.on('mouse', mouseMessage)

	
}

function mouseMessage(data)
{
		socket.broadcast.emit('mouse', data);

}