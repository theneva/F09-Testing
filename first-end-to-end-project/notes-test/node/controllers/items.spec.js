var expect = require('chai').expect;

var controller = require('../../../server-node/controllers/items');

describe('controllers.items', function() {
	it('should exist', function() {
		expect(controller).to.exist;
	});
});
