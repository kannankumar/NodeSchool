// LearnYouNode - Exercise 13
// Date - 7th Nov 2016

var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	var oUrl = url.parse(req.url, true);

	var endpoint = oUrl.pathname.split('/')[2]
	var query = oUrl.query;
	var t = new Date(query.iso)
	var resJSON = {};
	switch (endpoint) {
	case 'parsetime':
		{
			resJSON.hour = t.getHours();
			resJSON.minute = t.getMinutes();
			resJSON.second = t.getSeconds();
			break;
		}
	case 'unixtime':
		{
			var epochTime = t.getTime();
			resJSON.unixtime = epochTime;
			break;
		}
	}
	if (resJSON) {
		res.write(JSON.stringify(resJSON))
		res.end()
	} else {
		res.writeHead(404)
		res.end()
	}


})

server.listen(Number(process.argv[2]))