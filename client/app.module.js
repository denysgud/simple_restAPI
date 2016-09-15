var app = angular.module('restAPI', [
  'ngRoute',
  'users'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/users', {
      templateUrl: 'users.template.html'
    }).
    when('/users/:userId', {
      templateUrl: 'user.template.html'
    }).
    otherwise({
      redirectTo: '/users'
    });
}]);