// ExpressWorks - Exercise 1 - Hello World
// Date - 7th Nov 2016

var express = require('express')
var app = express()

app.get('/home', function (req, res) {
	res.end('Hello World!')
})

app.listen(process.argv[2])