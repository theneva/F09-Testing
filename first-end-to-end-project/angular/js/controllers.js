var app = angular.module('firstTestedApp');

app.controller('ApplicationController', function($scope, $location) {
	$scope.$on('login', function(event, username) {
		$scope.currentUser = username;
	});

	$scope.logout = function() {
		delete $scope.currentUser;
		$location.path('/login');
	};
});

app.controller('MainController', function($scope, $rootScope) {
	$scope.items = [
	];

	$scope.newItem = {};

	$scope.saveItem = function(newItem) {
		if (!newItem.name) {
			alert('Invalid name!');
			return;
		}

		$scope.items.unshift({
			name: newItem.name,
			author: $scope.currentUser
		});

		$scope.newItem = {};
	};
});

app.controller('LoginController', function($scope, $location) {
	$scope.login = function(username, password) {
		if (username !== 'theneva'
				|| password !== '1234') {
			alert('Wrong username or password');
			return;
		}

		$scope.$emit('login', username);
		$location.path('/');
	};
});