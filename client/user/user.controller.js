angular.module('users').controller('UserController', ['$scope', '$routeParams', '$location', 'User',
  function($scope, $routeParams, $location, User) {
    $scope.user = User.get({userId: $routeParams.userId});
    $scope.newUser = $scope.user;

    $scope.updateUser = function(user) {
      User.update({ id:$scope.user._id }, user, function() {
        $location.path('users');
      });
    }
  }
]);