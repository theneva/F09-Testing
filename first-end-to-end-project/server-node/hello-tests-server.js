var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/../angular'));

app.get('/api/env', function(req, res) {
	res.send('Hello!');
});

app.listen(port, function() {
	console.log('Listening on port ' + port);
});
