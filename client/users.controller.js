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

    $scope.find = function() {
      $scope.users = User.query();
    };

    $scope.findOne = function() {
      $scope.user = User.get({
        userId: $routeParams.userId
      });
    };

    $scope.deleteUser = function(user) {
      $http.delete('users/' + user._id).success(function() {
        for (var i in $scope.users) {
          if ($scope.users[i]._id === user._id) {
            $scope.users.splice(i, 1);
            console.log($scope.users);
          }
        }
      });
      /*User.delete({
        userId: user._id
      }, function() {
        for (var i in $scope.users) {
          if ($scope.users[i].id === user._id) {
            $scope.users.splice(i, 1);
          }
        }
      });*/
      /*if (user) {
      console.log(user);
        user.$remove(function() {
        console.log('deleted');
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
      }*/
    };
  }
]);