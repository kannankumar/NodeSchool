// LearnYouNode - Exercise 8
// Date - 7th Nov 2016

var http = require('http');

var url = process.argv[2];
var dataStr = '';

http.get(url, function (response) {

	response.setEncoding('utf8')
	response.on('data', function (data) {
		dataStr += data;
	})
	response.on('error', console.error)
	response.on('end', function () {
		console.log(dataStr.length)
		console.log(dataStr)
	})
});