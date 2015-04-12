var app = angular.module('firstTestedApp');

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {controller: 'MainController', templateUrl: 'templates/index.html'})
		.when('/login', {controller: 'LoginController', templateUrl: 'templates/login.html'})
		.otherwise({controller: 'NotFoundController', templateUrl: 'templates/not_found.html'});
});
