// ExpressWorks - Exercise 7 - Query Parameters
// Date - 8th Nov 2016

var express = require('express')

var app = express()


app.get('/search', function (req, res) {

	res.send(req.query);
})

app.listen(process.argv[2])