// ExpressWorks - Exercise 3 - Jade templates
// Date - 7th Nov 2016

var express = require('express')
var bodyparser = require('body-parser')

var app = express()

app.use(bodyparser.urlencoded({
	extended: false
}))

app.post('/form', function (req, res) {
	res.write(req.body.str.split('').reverse().join(''))
	res.end()

	//Can combine both 'write' and 'end' using 'send' ->
	//res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])