var app = angular.module('restAPI', [
  'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/', {
      templateUrl: 'example.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);