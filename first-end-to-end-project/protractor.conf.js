exports.config = {
	framework: 'mocha',
	specs: [
		'test/e2e/**/*.spec.js'
	],
	onPrepare: function() {
		process.env.PORT = 3001;
		require('./server-node/hello-tests-server.js');
	}
};
