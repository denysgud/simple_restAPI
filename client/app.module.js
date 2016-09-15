var app = angular.module('restAPI', [
  'ngRoute'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/index', {
      templateUrl: 'index.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);