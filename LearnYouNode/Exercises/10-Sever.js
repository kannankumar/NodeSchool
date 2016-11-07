// LearnYouNode - Exercise 10
// Date - 7th Nov 2016

var net = require('net')
var server = net.createServer(function (socket) {
	// socket handling logic
	var dt = new Date();
	var data = dt.getFullYear() + '-' + ((dt.getMonth() + 1) < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1) + '-' + (dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate()) + ' ' + dt.getHours() + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes());
	data += "\n";
	socket.write(data);
	socket.end();

	//Alternatively -> socket.end(data);
})
server.listen(process.argv[2]);