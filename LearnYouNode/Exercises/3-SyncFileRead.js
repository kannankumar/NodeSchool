/*Learn YouNode - Exercise 3
date -12th October 2014
time- 5:45pm
*/
var fs = require('fs');

var filePath = process.argv[2]; 
//console.log('Reading the file... ' + filePath);

var buf = fs.readFileSync(filePath);
var lines = buf.toString().split('\n');
//console.log(lines);
//console.log(lines.length + ' lines in the file');
console.log(lines.length-1);
