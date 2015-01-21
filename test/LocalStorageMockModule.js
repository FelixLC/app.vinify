/*
* this module mocks LocalStorage
*/

(function () {
  'use strict';

  angular
        .module('LocalStorageMockModule', [])
        .factory('localStorageMockService', localStorageMockService);

    /* @ngInject */
  function localStorageMockService () {

    // public api
    return {
        get: function () { return null; },
        set: function () { return null; }
      };

  }
})();