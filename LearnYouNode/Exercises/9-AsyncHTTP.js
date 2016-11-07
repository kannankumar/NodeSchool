// LearnYouNode - Exercise 9
// Date - 7th Nov 2016

var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var dataStr1 = dataStr2 = dataStr3 = '';
var finish1 = finish2 = finish3 = false;

http.get(url1, function (response) {

	response.setEncoding('utf8')
	response.on('data', function (data) {
		dataStr1 += data;
	})
	response.on('error', console.error)
	response.on('end', function () {
		finish1 = true;
		printIfFinished();
	})
});

http.get(url2, function (response) {

	response.setEncoding('utf8')
	response.on('data', function (data) {
		dataStr2 += data;
	})
	response.on('error', console.error)
	response.on('end', function () {
		finish2 = true;
		printIfFinished();
	})
});

http.get(url3, function (response) {

	response.setEncoding('utf8')
	response.on('data', function (data) {
		dataStr3 += data;
	})
	response.on('error', console.error)
	response.on('end', function () {
		finish3 = true;
		printIfFinished();
	})
});

function printIfFinished() {
	if (finish1 && finish2 && finish3) {
		console.log(dataStr1);
		console.log(dataStr2);
		console.log(dataStr3);
	}
}