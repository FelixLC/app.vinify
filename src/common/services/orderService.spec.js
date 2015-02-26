describe('Order module', function () {
  'use strict';

  var settings,
      $http,
      Order,
      mockWine,
      mockWineOther,
      Update;

  mockWine = {
    product_code: "",
    display_name: "",
    public_price: "12",
    region: "",
    uuid: "sdsf",
    appellation: ""
  };
  mockWineOther = {
    product_code: "z",
    display_name: "z",
    public_price: "24",
    region: "z",
    uuid: "321",
    appellation: "z"
  };

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
    order.addPicking(mockWine);
    expect(order.data.picking.length).toBe(1);
    order.addPicking(mockWine);
    expect(order.data.picking.length).toBe(1);
    expect(order.data.picking[0]['quantity']).toBe(2);
  });

  it('should correctly remove a bottle then a picking', function (done) {
    var order = new Order();
    order.addPicking(mockWineOther);
    expect(order.data.picking.length).toBe(1);

    order.addPicking(mockWine);
    expect(order.data.picking.length).toBe(2);

    order.addPicking(mockWine);
    expect(order.data.picking[1]['quantity']).toBe(2);
    expect(order.data.picking[0]['quantity']).toBe(1);

    order.removePicking(mockWine);
    expect(order.data.picking.length).toBe(2);
    expect(order.data.picking[0]['quantity']).toBe(1);

    order.removePicking(mockWine);
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

    order.addPicking(mockWineOther);
    expect(order.hasPicking()).toBeTruthy();
    expect(order.isValid()).toBeFalsy();

    order.addPicking(mockWineOther, 3);

    order.addRefill(49);
    expect(order.isValid()).toBeFalsy();
  });

  it('should correctly calculate bottle number and total price', function (done) {
    var order = new Order();
    var total = 39.90 + 49.90 + 12 + 24;
    order.addRefill("39.90");
    order.addRefill("49.90");

    order.addPicking(mockWineOther);
    order.addPicking(mockWine);

    var roundDown = function (numberOrString) {
      return Math.floor(parseFloat(numberOrString) * 100) / 100;
    };
    expect(order.getBottleNumber()).toBe(8);
    expect(roundDown(order.getTotalPrice())).toBe(total);
  });

});