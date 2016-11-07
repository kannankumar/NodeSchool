// LearnYouNode - Exercise 6
// Date - 7th Nov 2016


module.exports = function (dirname, ext, callback) {


	var fs = require('fs');
	var path = require('path');

	ext = "." + ext;

	fs.readdir(dirname, function (err, files) {
		if (err) {
			callback(err, null);
		} else {
			filteredList = [];
			files.forEach(function (item) {
				if (path.extname(item) === ext) {
					filteredList.push(item);
				}
			});
			callback(null, filteredList);
		}
	});
};