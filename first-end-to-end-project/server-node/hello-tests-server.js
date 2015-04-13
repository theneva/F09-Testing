var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/../angular'));

app.use('/api', require('./controllers'));

app.listen(port, function() {
	console.log('Listening on port ' + port);
});
