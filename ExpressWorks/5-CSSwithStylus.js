// ExpressWorks - Exercise 5 - CSSWithStylus 
// Date - 8th Nov 2016

var express = require('express')
var path = require('path')

var app = express()
console.log(process.argv[3])
console.log(process.argv[2])
app.use(express.static(process.argv[3]))
app.use(require('stylus').middleware(process.argv[3]))

app.listen(process.argv[2])