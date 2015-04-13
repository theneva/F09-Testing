var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/itemsApp', function() {
	console.log('Connected to MongoDB!');
});

module.exports = mongoose;
