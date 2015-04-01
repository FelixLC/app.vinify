(function () {
  'use strict';

  angular
      .module('vinibarOrderService', [ 'settings' ])
      .factory('vinibarOrder', vinibarOrder);

  /* @ngInject */
  function vinibarOrder ($http, settings) {
    var service = {
        testCoupon: testCoupon,
        create: create,
        update: update,
        pickMrEmail: pickMrEmail,
        chargeOrder: chargeOrder
    };
    return service;

    // //////////////

    function testCoupon (coupon, success, failure) {
      $http.post(settings.apiEndPoint + '/orders/testcoupon/', coupon)
          .success(function (data, status, headers, config) {
            return success(data);
          })
          .error(function (data, status, headers, config) {
            return failure(data);
          });
    }
    function create (coupon, success, failure) {
      var url = settings.apiEndPoint + '/orders/vinibarorder/';

      $http.post(url,  { coupon: coupon })
            .success(function (data, status, headers, config) {
              return success(data);
            })
            .error(function (data, status, headers, config) {
              return failure(data);
            });
    }
    function update (uuid, deliveryCost, deliveryMode, success, failure) {
      $http.post(settings.apiEndPoint + '/orders/updateorder/',  {
        order_uuid: uuid,
        delivery_cost: deliveryCost,
        delivery_mode: deliveryMode
      })
          .success(function (data, status, headers, config) {
            return success(data);
          })
          .error(function (data, status, headers, config) {
            return failure(data);
          });
    }

    function pickMrEmail (orderId) {
      $http.post(settings.apiEndPoint + '/orders/pickmremail/', {
        order_id: orderId
      });
    }

    function chargeOrder (_id, _orderUuid, orderType, isTest) {
      var url = (orderType === 'Vinibar') ?
                        settings.apiEndPoint + '/orders/chargevinibar/' :
                        settings.apiEndPoint + '/orders/discovery/charge/';

      return $http.post(url, {
        id: _id,
        order_uuid: _orderUuid,
        test: isTest
      });
    }
  }
})();