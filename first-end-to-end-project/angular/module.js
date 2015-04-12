var app = angular.module('firstTestedApp', [
	'ngRoute'
]);

app.run(function() {
	delete localStorage.currentUser;
});
