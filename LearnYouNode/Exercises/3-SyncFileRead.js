// Learn YouNode - Exercise 3
// Date - 12th October 2014

var fs = require('fs');

var filePath = process.argv[2]; 
var buf = fs.readFileSync(filePath);
var lines = buf.toString().split('\n');

console.log(lines.length-1);
