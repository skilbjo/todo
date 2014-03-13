'use strict';

angular.module('todoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui',
  'LocalStorageModule'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  .config(['localStorageServerProvider', function(localStorageServerProvider)
  {
    localStorageServerProvider.setPrefix('ls');
  }]);
