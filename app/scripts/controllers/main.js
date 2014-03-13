'use strict';

angular.module('todoApp')
	.controller('MainCtrl', function($scope, localStorageService) {
		var todosInStore = localStorageService.get('todos');

		$scope.todos = todosInStore && todosInStore.split('\n') || [];

		$scope.$watch('todos', function() {
			localStorageService.add('todos', $scope.todos.join('\n'));
		}, true);
		$scope.addTodo = function() {
			$scope.todos.push($scope.todo);
			$scope.todo = '';
		};
		$scope.removeTodo = function(index) {
			$scope.todos.splice(index, 1);
		};
	});


// Exception handling example 1

// 'use strict';

// angular.module('todoApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
//     $scope.addTodo = function() {
//			try {
// 		$scope.todos.push($scope.todo);
// 		$scope.todo = ''; }
// 		catch (e) {
// 			alert("Encountered an error: " + e);
// 		}
//     };
//   });

// Exception handling example 2

// 'use strict';

// angular.module('todoApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
//     $scope.addTodo = function(err, result) {
//		if (err) {
// 			console.log("Encountered an error: " + err);
// 		} else {
// 			$scope.todos.push($scope.todo);
// 			$scope.todo = ''; 
// 		}
//     };
//   });
