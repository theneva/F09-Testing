var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/../angular'));

app.get('/api/env', function(req, res) {
	res.send('Hello!');
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});
