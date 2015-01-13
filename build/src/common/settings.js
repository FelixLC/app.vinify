/*
* this module tells us if we are on a desktop or cordova
*/

(function () {
  'use strict';

  angular
        .module('settings', [])
        .factory('settings', settings)
        .provider('desk',   function desk () {
          this.$get = function () {
            return false;
          };
        });

    /* @ngInject */
  function settings ($window) {
    var service = {
      desktop: false,
      test: true,
      width: $window.innerWidth,
      // apiEndPoint: 'http://127.0.0.1:8000/api',
      // apiEndPoint: '/api',
      // restApiEndPoint: '/restapi'
      apiEndPoint: 'https://api.vinify.co/api',
      restApiEndPoint: 'https://api.vinify.co/restapi'
      // restApiEndPoint: 'http://127.0.0.1:8000/restapi'
    };
    return service;
  }

})();