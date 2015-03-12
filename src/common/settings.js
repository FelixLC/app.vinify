/*
* this module tells us if we are on a desktop or cordova
*/

(function () {
  'use strict';

  angular
        .module('settings', [])
        .factory('settings', settings)
        .factory('deliveryCosts', deliveryCosts)
        .provider('desk',   function desk () {
          this.$get = function () {
            return false; // Desktop or Not desktop to inject in configs
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
      apiEndPoint: 'https://backoffice.vinify.co/api',
      restApiEndPoint: 'https://backoffice.vinify.co/restapi'
      // restApiEndPoint: 'http://127.0.0.1:8000/restapi'
    };
    return service;
  }

    /* @ngInject */
  function deliveryCosts (settings, $http) {
    var _costs, _country;

    var service = {
      get: get
    };

    function get (country, success, failure) {
      if (!success || !angular.isFunction(success) || !country) {
        throw new Error('deliveryCosts.get must be called with a success function and a country');
      } else {
        if (_costs && _country === country) {
          success(_costs);
        } else {
          $http.get(settings.restApiEndPoint + '/deliverycosts/?country=' + country).then(
            function (response) {
              _costs = response.data;
              _country = country;
              success(response.data);
            },
            function (error) {
              if (!failure || !angular.isFunction(failure)) {
                failure();
              }
            });
        }
      }
    }

    return service;
  }

})();