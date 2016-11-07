// LearnYouNode - Exercise 5
// Date - 13th Oct 2014

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, function (err, list) {
	if (!err) {
		//alternatively can use list.forEach() also here
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === ext) {
				console.log(list[i]);
			}
		}
	} else {
		console.log(err);
	}

});