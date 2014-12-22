/*
* this module tells us if we are on a desktop or cordova
*/

(function () {
  'use strict';

  angular
        .module('settings', [])
        .factory('settings', settings);

    /* @ngInject */
  function settings () {
    var service = {
      desktop: true,
      apiEndPoint: 'http://127.0.0.1:8000/api',
      // apiEndPoint: 'https://api.vinify.co/api',
      // restApiEndPoint: 'https://api.vinify.co/api'
      restApiEndPoint: 'http://127.0.0.1:8000/restapi'
    };
    return service;
  }
})();