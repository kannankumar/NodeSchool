// LearnYouNode - Exercise 6
// Date - 7th Nov 2016

var readDirModule = require('./6A-ReadDirectoryModule.js')

readDirModule(process.argv[2], process.argv[3], function (err, data) {
	if (err) {
		console.log(err);
		return;
	}
	data.forEach(function (item) {
		console.log(item);
	});
})