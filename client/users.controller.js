angular.module('users').controller('UsersController', ['$scope', '$routeParams', '$location', 'User',
  function($scope, $routeParams, $location, User) {
    $scope.users = User.query();

    /*$scope.create = function() {
      var user = new User({
        name: this.name,
        email: this.email,
        password: this.password
      });
      user.$save(function(response) {
        $location.path('users/' + response._id);
      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.find = function() {
      $scope.users = User.query();
    };

    $scope.findOne = function() {
      $scope.user = User.get({
        userId: $routeParams.userId
      });
    };

    $scope.delete = function(user) {
      if (user) {
        user.$remove(function() {
          for (var i in $scope.users) {
            if ($scope.users[i] === user) {
              $scope.users.splice(i, 1);
            }
          }
        });
      } else {
        $scope.user.$remove(function() {
          $location.path('users');
        });
      }
    };*/
  }
]);