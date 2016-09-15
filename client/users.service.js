angular.module('users').factory('User', ['$resource', function($resource) {
  return $resource('users/:userId', {}, {
    query: {
      method: 'GET',
      params: {userId: '@_id'},
      isArray: true
    }
  });
}]);