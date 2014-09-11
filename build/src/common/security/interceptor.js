angular.module('security.interceptor', ['ngCookies'])

// We'll intercept all request and put the token in it
.factory('authInterceptor', ["$rootScope", "$q", "$window", "$location", function ($rootScope, $q, $window, $location) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Token ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
        $location.path('/login');
      }
      return response || $q.when(response);
    }
  };
}])
.config(["$httpProvider", function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
}]);