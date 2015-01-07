(function () {
  'use strict';

  angular
      .module('payingService', [ 'settings' ])
      .factory('Pay', Pay);

  /* @ngInject */
  function Pay ($http, settings) {
    var service = {
        chargeRefill: chargeRefill,
        pickMondialRelay: pickMondialRelay,
        shop: false,
        pickMrShop: pickMrShop
    };
    return service;

    // //////////////

    function chargeRefill (orderUuid, stripeToken) {
      return $http.post(settings.apiEndPoint + '/orders/chargerefill/', {
          token: stripeToken || "",
          order_id: orderUuid,
          test: settings.test
      });
    }

    function pickMondialRelay (orderUuid) {
      return $http.post(settings.apiEndPoint + '/orders/pickmremail/', {
          order_id: orderUuid
      });
    }

    function pickMrShop (shop, orderId) {

    }
  }
})();