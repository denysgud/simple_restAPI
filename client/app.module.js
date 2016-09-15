var app = angular.module('restAPI', [
  'ngRoute',
  'users'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/users', {
      templateUrl: 'user-list/users.template.html'
    }).
    when('/users/:userId', {
      templateUrl: 'user/user.template.html'
    }).
    otherwise({
      redirectTo: '/users'
    });
}]);