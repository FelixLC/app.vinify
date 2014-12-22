angular.module('Order', [])

.factory('Order', function ($http, Bottles, SerializedOrder) {
  var apiEndPoint =  'http://127.0.0.1:8000/api';
  var restApiEndPoint =  'http://127.0.0.1:8000/restapi';

  var Order = function (id) {
    this.data = {
      quantity: 1,
      refills: [ new Refill(1, 49.90) ] ,
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
  Order.prototype.addRefill = function (price) {
    ++this.data.quantity;
    this.data.refills.push(new Refill(this.data.quantity, price));
  };

  Order.prototype.removeRefill = function () {
    this.data.refills = [ this.data.refills[0] ];
    --this.data.quantity;
  };

  // TODO REFACTOR
  Order.prototype.createRefillOrder = function () {
    var data = this.data;
    var self = this;
    var request = $http({
      url:  apiEndPoint + '/orders/refillorder/',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });

    return request
      .success(function (data, status, headers, config) {
        // TODO gracefully manage errors/successes
        angular.extend(SerializedOrder, data);
      })
      .error(function (data, status, headers, config) {
        // TODO gracefully manage errors/successes
        console.log(data);
      });
  };

  return Order;
})

.factory('orderInstance', function (Order) {
  var orderInstance = new Order();

  orderInstance.setOrderInstance = function (orderData) {
    angular.extend(orderInstance, orderData);
  };
  return orderInstance;
})

// Store the Order
.factory('SerializedOrder', function () {
  var SerializedOrder = {};
  return SerializedOrder;
});
