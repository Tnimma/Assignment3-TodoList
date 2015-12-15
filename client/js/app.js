todoApp = angular.module('todoApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/half/todo.html',
        controller: 'TodoCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });