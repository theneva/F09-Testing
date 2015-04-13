var router = require('express').Router();

router.get('/env', function(req, res) {
	res.send('Hello!');
});

router.use('/items', require('./items'));

module.exports = router;
