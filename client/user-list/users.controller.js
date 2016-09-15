angular.module('users').controller('UsersController', ['$scope', '$routeParams', '$location', 'User', '$http',
  function($scope, $routeParams, $location, User, $http) {
    $scope.users = User.query();

    $scope.createUser = function() {
      var user = new User({
        name: $scope.name,
        email: $scope.email,
        password: $scope.password
      });
      user.$save(function(response) {
        $scope.users.push(user);
        $scope.name = '';
        $scope.email = '';
        $scope.password = '';
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.findUsers = function() {
      $scope.users = User.query();
    };

    $scope.findOneUser = function() {
      $scope.user = User.get({
        userId: $routeParams.userId
      });
    };

    $scope.deleteUser = function(user) {
      if (user) {
        user.$remove(function() {
          for (var i in $scope.users) {
            if ($scope.users[i] === user) {
              $scope.users.splice(i, 1);
            }
          }
        });
      } else {
        $scope.users.$remove(function() {
          $location.path('users');
        });
      }
    };

  }
]);