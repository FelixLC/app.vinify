(function () {
  'use strict';

  angular
      .module('Toaster', [ 'toaster', 'ngCordova' ])
      .factory('toasters', toasters);

  /* @ngInject */
  function toasters ($ionicPlatform, $cordovaToast, toaster) {
    var service = {
        pop: pop
    };
    return service;

    // //////////////

    function pop (message, position, type) {
      if (ionic.Platform.isWebView()) {
        return $cordovaToast.show(message, 'short', position);
      } else {
        return toaster.pop(type, message);
      }
    }
  }
})();