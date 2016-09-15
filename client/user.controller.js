angular.module('users').controller('UserController', ['$scope', '$routeParams', '$location', 'User', '$http',
  function($scope, $routeParams, $location, User, $http) {
    $scope.user = User.get({userId: $routeParams.userId});
    $scope.newUser = $scope.user;

    $scope.updateUser = function(user) {
      console.log($scope.newUser);
      $http.put('users/' + user._id, $scope.newUser).then(function () {
        console.log('updated');
      });
    };
  }
]);