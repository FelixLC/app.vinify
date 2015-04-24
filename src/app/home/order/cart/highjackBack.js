(function () {
  'use strict';

  angular
      .module('HighjackBack', [ 'ionic', 'ui.router' ])
      .factory('backButton', backButton);

  /* @ngInject */
  function backButton ($ionicHistory, $state) {
      var service = {
        previousView: '',
        goBack: goBack,
        setView: setView
      };

      // //////////////

      function goBack () {
        if (service.previousView) {
          $state.go(service.previousView);
        } else {
          $ionicHistory.goBack();
        }
      }

      function setView () {
        service.previousView = $ionicHistory.currentStateName();
      }

      return service;
    }
})();