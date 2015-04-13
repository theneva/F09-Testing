var db = require('../db');

var Item = db.model('Item', {
	name: String,
	author: String
});

module.exports = Item;
