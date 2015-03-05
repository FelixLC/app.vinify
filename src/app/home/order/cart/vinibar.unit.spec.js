// /**
//  * Unit tests suite for 'cosmoclient.host' module
//  */
// describe('Controller: app.cart', function () {

//   'use strict';

//   var $scope,
//           $rootScope,
//           $ionicModal,
//           Order,
//           User,
//           deliveryCosts,
//           toasters,
//           bottles,
//           $state,
//           recommandations,
//           orderInstance,
//           $ionicScrollDelegate;

//   beforeEach(module('app.order.cart'));
//   beforeEach(module('settings'));
//   beforeEach(module('Toaster'));
//   beforeEach(module('lodash'));
//   beforeEach(module('User'));
//   beforeEach(module('Order'));

//   beforeEach(inject(function ($controller,
//                                                         _$rootScope_,
//                                                         _$ionicModal_,
//                                                         _$state_,
//                                                         _$ionicScrollDelegate_,
//                                                         toasters,
//                                                         settings) {

//     $rootScope = _$rootScope_;
//     $scope = _$rootScope_.$new();

//     toasters = toasters;
//     settings = settings;
//     Bottles = {
//       getList: function () {},
//       updateList: function () {}
//     };
//     User = {
//       getUser: function () {}
//     };
//     bottles = { data: {}};



//     cartCtrl = $controller('cartCtrl', {
//       $scope: $scope,
//       $rootScope: _$rootScope_,
//       toasters: toasters,
//       settings: settings,
//       User: User,
//       bottles: bottles
//     });

//     *
//      * Results of resolve() are propagated asynchronously, inside a $digest cycle, not immediately.
//      * Calling $apply() is a way to cause a digest cycle to run.
//      * As we use promises in this controller, we need a $rootScope.$apply()

//     $scope.$apply();

//   }));

//   it('should have a cartCtrl', function () {
//     expect(cartCtrl).toBeDefined();
//     expect($scope).toBeDefined();
//     expect($scope.searchFilter).toBeDefined();

//   });

//   it('should filter out accents', function () {
//     var bottle = {
//       wine: {
//         appellation: 'Côtes du Rhône',
//         display_name: 'Château lä trîque',
//         region: "Vallée de la Loire"
//       }
//     };
//     $scope.search.value = "Vallee";
//     expect($scope.searchFilter(bottle)).toBeTruthy();

//     $scope.search.value = "Vallees";
//     expect($scope.searchFilter(bottle)).toBeFalsy();

//     $scope.search.value = "coteS du rhône";
//     expect($scope.searchFilter(bottle)).toBeTruthy();
//   });

//   it('should create an array of the Range', function () {
//     var bottle = {};

//     bottle.public_price = 9;
//     expect($scope.getRange(bottle).length).toEqual(1);

//     bottle.public_price = 13;
//     expect($scope.getRange(bottle).length).toEqual(2);

//     bottle.public_price = 12;
//     expect($scope.getRange(bottle).length).toEqual(2);

//     bottle.public_price = 15;
//     expect($scope.getRange(bottle).length).toEqual(3);

//     bottle.public_price = 16;
//     expect($scope.getRange(bottle).length).toEqual(3);

//     bottle.public_price = 18;
//     expect($scope.getRange(bottle).length).toEqual(4);

//     bottle.public_price = 121;
//     expect($scope.getRange(bottle).length).toEqual(4);
//   });

// });