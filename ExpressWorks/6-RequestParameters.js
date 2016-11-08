// ExpressWorks - Exercise 6 - Request Parameters
// Date - 8th Nov 2016

var express = require('express')
var crypto = require('crypto')

var app = express()


app.put('/message/:ID', funciton(req, res) {
	var hash = crypto.createHash('sha1')
		.update(new Date().toDateString() + req.params.ID)
		.digest('hex')
	res.send(hash);
})

app.listen(process.argv[2])