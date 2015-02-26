/**
 * Unit tests suite for 'cosmoclient.host' module
 */
describe('Controller: app.vinibar', function () {

  'use strict';

  var $scope,
          $rootScope,
          User,
          Bottles,
          bottles,
          SegmentedControlState,
          toasters,
          settings,
          vinibarCtrl,
          focus;

  beforeEach(module('app.vinibar'));
  beforeEach(module('settings'));
  beforeEach(module('Toaster'));
  beforeEach(module('ngCordova'));

  beforeEach(inject(function ($controller,
                                                        _$rootScope_,
                                                        $httpBackend,
                                                        SegmentedControlState,
                                                        toasters,
                                                        settings) {

    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
    SegmentedControlState = SegmentedControlState;
    toasters = toasters;
    settings = settings;
    Bottles = {
      getList: function () {},
      updateList: function () {}
    };
    User = {
      getUser: function () {}
    };
    bottles = { data: {}};

    // TODO: removes
    $httpBackend.whenGET('security/loginform.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('home/home.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('home/order/picking/parts/recommended.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('home/order/picking/picking.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('home/order/picking/parts/my_wines.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('home/order/refill/refill.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('sidemenu/sidemenu.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('home/order/colors.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });
    // TODO: removes
    $httpBackend.whenGET('home/order/regions.tpl.html').respond(function(method,url,data) {
      return [200, users, {}];
    });



    vinibarCtrl = $controller('vinibarCtrl', {
      $scope: $scope,
      SegmentedControlState: SegmentedControlState,
      toasters: toasters,
      settings: settings,
      Bottles: Bottles,
      User: User,
      bottles: bottles
    });

    /**
     * Results of resolve() are propagated asynchronously, inside a $digest cycle, not immediately.
     * Calling $apply() is a way to cause a digest cycle to run.
     * As we use promises in this controller, we need a $rootScope.$apply()
     */
    $scope.$apply();

  }));

  it('should have a vinibarCtrl', function () {
    expect(vinibarCtrl).toBeDefined();
    expect($scope).toBeDefined();
    expect($scope.searchFilter).toBeDefined();

  });

  it('should filter out accents', function () {
    var bottle = {
      wine: {
        appellation: 'Côtes du Rhône',
        display_name: 'Château lä trîque',
        region: "Vallée de la Loire"
      }
    };
    $scope.search.value = "Vallee";
    expect($scope.searchFilter(bottle)).toBeTruthy();

    $scope.search.value = "Vallees";
    expect($scope.searchFilter(bottle)).toBeFalsy();

    $scope.search.value = "coteS du rhône";
    expect($scope.searchFilter(bottle)).toBeTruthy();
  });

  it('should create an array of the Range', function () {
    var bottle = {};

    bottle.public_price = 9;
    expect($scope.getRange(bottle).length).toEqual(1);

    bottle.public_price = 13;
    expect($scope.getRange(bottle).length).toEqual(2);

    bottle.public_price = 12;
    expect($scope.getRange(bottle).length).toEqual(2);

    bottle.public_price = 15;
    expect($scope.getRange(bottle).length).toEqual(3);

    bottle.public_price = 16;
    expect($scope.getRange(bottle).length).toEqual(3);

    bottle.public_price = 18;
    expect($scope.getRange(bottle).length).toEqual(4);

    bottle.public_price = 121;
    expect($scope.getRange(bottle).length).toEqual(4);
  });

});