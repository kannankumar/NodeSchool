// LearnYouNode - Exercise 4
// Date - 13th Oct 2014

var fs = require('fs');

var filePath = process.argv[2];
fs.readFile(filePath,'utf8',function(err,data){
	if(!err){
		var lineCount = data.split('\n').length;
		console.log(lineCount-1);
	}
	else{
		console.log(err);
	}
});
