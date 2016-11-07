// LearnYouNode - Exercise 11
// Date - 7th Nov 2016

var http = require('http');
var fs = require('fs');

var filePath = process.argv[3];

var server = http.createServer(function (request, response) {
	var readStream = fs.createReadStream(filePath);
	readStream.pipe(response);
	//response.write(dst);
})

server.listen(Number(process.argv[2]))