exports.config = {
	framework: 'mocha',
	specs: [
		'test/e2e/**/*.spec.js'
	],
	onPrepare: function() {
		require('./server-node/hello-tests-server.js');
	}
};
