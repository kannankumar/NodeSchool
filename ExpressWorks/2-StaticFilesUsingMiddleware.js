// ExpressWorks - Exercise 2 - Static Middleware
// Date - 7th Nov 2016

var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(process.argv[2])