(function () {
  'use strict';

  angular
      .module('Order', [ 'settings', 'Update', 'lodash' ])
      .factory('Order', Order)
      .factory('orderInstance', orderInstance)
      .factory('SerializedOrder', SerializedOrder);

  /* @ngInject */
  function Order ($http, SerializedOrder, settings, Update, _) {

    var Instance = function (id) {
      this.data = {
        version: Update.version,
        use_credits: 0,
        quantity: 0,
        refills: [],
        picking: [],
        coupon: "",
        delivery_mode: null,
        delivery_cost: null
      };

      this.serializedOrder = {};
    };

    var Refill = function (num, price) {
      this.refill_number = num;
      this.price_level = price;
      this.split =  {
          red: 1,
          rose: 1,
          white: 1
      };
    };

    // add one refill and increment _refillNumber
    Instance.prototype.addRefill = function (price) {
      ++this.data.quantity;
      this.data.refills.push(new Refill(this.data.quantity, price));
    };

    Instance.prototype.removeRefill = function (num) {
      // if we find a data.picking with this wine, with 1 bottle, delete wine
      if (_.find(this.data.refills, 'refill_number', num)) {

        this.data.refills = _.reject(this.data.refills, 'refill_number', num);

        // we must reorder the array
        for (var i = this.data.refills.length - 1; i >= 0; i--) {
          this.data.refills[i]['refill_number'] = i + 1;
        }
      }
      this.data.quantity--;
    };

    var Picking = function (id, quantity) {
      this.quantity = quantity || 1;
      this.uuid = id;
    };

    // add one refill and increment _refillNumber
    Instance.prototype.addPicking = function (id, num) {
      // if we find a data.picking with this wine, increment quantity
      if (_.find(this.data.picking, 'uuid', id)) {
        _.find(this.data.picking, 'uuid', id).quantity = num ||
                                                                  _.find(this.data.picking, 'uuid', id).quantity + 1;
      } else {
        this.data.picking.push(new Picking(id, num));
      }
    };

    Instance.prototype.removePicking = function (id) {
      // if we find a data.picking with this wine, decrement quantity
      if (_.find(this.data.picking, 'uuid', id) && _.find(this.data.picking, 'uuid', id).quantity > 1) {
        _.find(this.data.picking, 'uuid', id).quantity--;

      // if we find a data.picking with this wine, with 1 bottle, delete wine
      } else if (_.find(this.data.picking, 'uuid', id) && _.find(this.data.picking, 'uuid', id).quantity === 1) {
        this.data.picking = _.reject(this.data.picking, 'uuid', id);
      }
    };

    Instance.prototype.testCoupon = function (coupon, success, failure) {
      return $http.post(settings.apiEndPoint + '/orders/testcoupon/', { coupon: coupon })
        .success(function (data, status, headers, config) {
          if (success && angular.isFunction(success)) {
            success(data);
          }
        })
        .error(function (data, status, headers, config) {
          if (failure && angular.isFunction(failure)) {
            failure(data);
          }
        });
    };

    Instance.prototype.isValid = function () {
      var result = 0;

      _(this.data.picking).pluck('quantity')
                        .forEach(function (n) { result += n; })
                        .value();

      if ((this.data.quantity * 3 + result) === 3 ||
            (this.data.quantity * 3 + result) === 6 ||
            (this.data.quantity * 3 + result) === 12) {
        return true;
      } else {
        return false;
      }
    };

    Instance.prototype.hasPicking = function () {
      return this.data.picking.length;
    };

    Instance.prototype.hasRefills = function () {
      return this.data.refills.length;
    };

    Instance.prototype.createRefillOrder = function () {
      var data = this.data;
      var self = this;
      return $http.post(settings.apiEndPoint + '/orders/refillorder/', data)
        .success(function (data, status, headers, config) {
          // TODO gracefully manage errors/successes
          angular.extend(SerializedOrder, data);
        })
        .error(function (data, status, headers, config) {
          // TODO gracefully manage errors/successes
          console.log(data);
        });
    };

    return Instance;
  }

  function orderInstance (Order) {
    var Instance = new Order();

    Instance.setOrderInstance = function (orderData) {
      angular.extend(orderInstance, orderData);
    };
    return Instance;
  }

  // Store the Order
  function SerializedOrder () {
    return {};
  }

})();
