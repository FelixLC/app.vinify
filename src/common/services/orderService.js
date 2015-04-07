(function () {
  'use strict';

  angular
      .module('Order', [ 'settings', 'Update', 'lodash' ])
      .factory('Order', Order)
      .factory('Picking', Picking)
      .factory('orderInstance', orderInstance)
      .factory('SerializedOrder', SerializedOrder);

  /* @ngInject */
  function Order ($http, SerializedOrder, settings, Update, _) {

    var roundDown = function (numberOrString) {
      return Math.floor(parseFloat(numberOrString) * 100) / 100;
    };

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

    var Picking = function (wine, properties) {
      this.quantity = 1;
      this.uuid = wine.uuid;
      this.product_code = wine.product_code;
      this.display_name = wine.display_name;
      this.public_price = wine.public_price;
      this.region = wine.region;
      this.uuid = wine.uuid;
      this.appellation = wine.appellation;
      if (properties && properties.match) {
        this.match = properties.match;
      }
      if (properties && properties.rating) {
        this.rating = properties.rating;
      }
    };

    // add one refill and increment _refillNumber
    Instance.prototype.addPicking = function (wine, properties) {

      // if we find a data.picking with this wine, increment quantity
      if (_.find(this.data.picking, 'uuid', wine.uuid)) {
        _.find(this.data.picking, 'uuid', wine.uuid).quantity =
                                                                  _.find(this.data.picking, 'uuid', wine.uuid).quantity + 1;
      } else {
        this.data.picking.push(new Picking(wine, properties));
      }
    };

    Instance.prototype.removePicking = function (wine) {
      // if we find a data.picking with this wine, decrement quantity
      if (_.find(this.data.picking, 'uuid', wine.uuid) && _.find(this.data.picking, 'uuid', wine.uuid).quantity > 1) {
        _.find(this.data.picking, 'uuid', wine.uuid).quantity--;

      // if we find a data.picking with this wine, with 1 bottle, delete wine
      } else if (_.find(this.data.picking, 'uuid', wine.uuid) && _.find(this.data.picking, 'uuid', wine.uuid).quantity === 1) {
        this.data.picking = _.reject(this.data.picking, 'uuid', wine.uuid);
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

    Instance.prototype.getTotalPrice = function () {
      var total = 0;
      for (var i = this.data.picking.length - 1; i >= 0; i--) {
        total += roundDown(this.data.picking[i]['public_price']) * this.data.picking[i]['quantity'];
      }
      for (var j = this.data.refills.length - 1; j >= 0; j--) {
        total += roundDown(this.data.refills[j]['price_level']);
      }
      return total;
    };

    Instance.prototype.getBottleNumber = function () {
      var total = 0;
      for (var i = this.data.picking.length - 1; i >= 0; i--) {
        total += this.data.picking[i]['quantity'];
      }
      total += this.data.refills.length * 3;
      return total;
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

  function orderInstance (Order, $q) {
    var _order = null;
    var Instance = {};

    Instance.setOrderInstance = function (orderData) {
      _order = orderData;
    };

    Instance.getOrderInstance = function (orderData) {
      return $q(function (resolve, reject) {
        if (_order) {
          resolve(_order);
        } else {
          reject(new Order());
        }
      });
    };

    return Instance;
  }

  // Store the Order
  function SerializedOrder () {
    return {};
  }

  function Picking (_) {

    // search by id for wine.quantity in an array of wine
    var idToQuantity = function (id, array) {
      return _.result(_.find(array, function (obj) {
                      return obj.uuid === id;
                    }), 'quantity') || 0;
    };

    var Instance = function (recommandationList, bottleList, orderPicking) {
      var picking = {};
      _(recommandationList).pluck('wine')
                                                                  .pluck('uuid')
                                                                  .forEach(function (id) {
                                                                    picking[id] = idToQuantity(id, orderPicking);
                                                                  }).value();
      _(bottleList).pluck('wine')
                                              .pluck('uuid')
                                              .forEach(function (id) {
                                                picking[id] = idToQuantity(id, orderPicking);
                                              }).value();
      return picking;
    };
    return Instance;
  }

})();
