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
      apiEndPoint: 'https://api.vinify.co/api',
      // apiEndPoint: 'https://api.vinify.co/api',
      // restApiEndPoint: 'https://api.vinify.co/api'
      restApiEndPoint: 'https://api.vinify.co/restapi'
    };
    return service;
  }
})();