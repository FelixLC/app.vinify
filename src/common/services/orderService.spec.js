describe('Order module', function () {
  'use strict';

  var settings,
      $http,
      Order,
      Update;

  beforeEach(module('Order'));

  beforeEach(inject(function (_Update_, _$http_, _settings_, _Order_) {
    Update = _Update_;
    settings = _settings_;
    $http = _$http_;
    Order = _Order_;
  }));

  it('should correctly instantiate an order', function (done) {
    var order = new Order();
    expect(order.data).toBeDefined();
    expect(order.addRefill).toBeDefined();
    expect(order.removeRefill).toBeDefined();
    expect(order.addPicking).toBeDefined();
    expect(order.removePicking).toBeDefined();
    expect(order.testCoupon).toBeDefined();
    expect(order.createRefillOrder).toBeDefined();
  });

  it('should correctly add a new picking and add a bottle', function (done) {
    var order = new Order();
    order.addPicking('0123456789');
    expect(order.data.picking.length).toBe(1);
    order.addPicking('0123456789');
    expect(order.data.picking.length).toBe(1);
    expect(order.data.picking[0]['quantity']).toBe(2);

    order.addPicking('0123456789', 10);
    expect(order.data.picking.length).toBe(1);
    expect(order.data.picking[0]['quantity']).toBe(10);
  });

  it('should correctly remove a bottle then a picking', function (done) {
    var order = new Order();
    order.addPicking('0123456789');
    expect(order.data.picking.length).toBe(1);

    order.addPicking('0123456788');
    expect(order.data.picking.length).toBe(2);

    order.addPicking('0123456788');
    expect(order.data.picking[1]['quantity']).toBe(2);
    expect(order.data.picking[0]['quantity']).toBe(1);

    order.removePicking('0123456788');
    expect(order.data.picking.length).toBe(2);
    expect(order.data.picking[0]['quantity']).toBe(1);

    order.removePicking('0123456788');
    expect(order.data.picking.length).toBe(1);
    expect(order.data.picking[0]['quantity']).toBe(1);
  });

  it('should correctly add a new refill and remove a refill', function (done) {
    var order = new Order();
    order.addRefill(39);
    expect(order.data.refills.length).toBe(1);
    order.addRefill(49);
    expect(order.data.refills.length).toBe(2);
    expect(order.data.refills[1]['refill_number']).toBe(2);
    expect(order.data.refills[1]['price_level']).toBe(49);

    order.addRefill(59);
    expect(order.data.refills.length).toBe(3);

    order.addRefill(49);
    expect(order.data.refills.length).toBe(4);

    order.removeRefill(2);
    expect(order.data.quantity).toBe(3);
    expect(order.data.refills.length).toBe(3);
    expect(order.data.refills[0]['refill_number']).toBe(1);
    expect(order.data.refills[1]['refill_number']).toBe(2);
    expect(order.data.refills[2]['refill_number']).toBe(3);

  });

  it('should validate 3, 6 and 12 bottles orders', function (done) {
    var order = new Order();

    expect(order.hasPicking()).toBeFalsy();
    expect(order.hasRefills()).toBeFalsy();
    order.addRefill(39);
    expect(order.hasRefills()).toBeTruthy();
    expect(order.isValid()).toBeTruthy();
    order.addRefill(49);
    expect(order.isValid()).toBeTruthy();

    order.addPicking('0123456788');
    expect(order.hasPicking()).toBeTruthy();
    expect(order.isValid()).toBeFalsy();

    order.addPicking('0123456788', 3);
    expect(order.isValid()).toBeFalsy();

    order.addPicking('321654987', 3);
    expect(order.isValid()).toBeTruthy();

    order.addRefill(49);
    expect(order.isValid()).toBeFalsy();
  });

});