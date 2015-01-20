(function () {
  'use strict';

  angular
      .module('ratingDirective', [ 'material.components.slider' ])
      .directive('ratingDirective', ratingDirective);

  /* @ngInject */
  function ratingDirective (dependencies) {
      // Usage:
      //
      // Creates:
      //
    var directive = {
          link: link,
          restrict: 'A'
      };
    return directive;

    function link (scope, element, attrs) {
      }
  }
})();