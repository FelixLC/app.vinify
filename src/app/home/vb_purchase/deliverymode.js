angular.module('app.vb_purchase.deliverymode',
  [ 'Order', 'visitorFactory', 'User', 'Loading', 'ngCordova', 'Toaster', 'settings', 'vinibarOrderService' ])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('sidemenu.vb_purchase_deliverymode', {
      url: "/mode-livraison",
      views: {
        menuContent: {
          controller: 'vbPurchasedeliverymodeCtrl',
          templateUrl: "home/vb_purchase/deliverymode.tpl.html"
        }
      }
  });
})

.controller('vbPurchasedeliverymodeCtrl',
  function vbPurchasedeliverymodeCtrl ($scope, $state, currentVisitor, $window, $ionicModal,
    User, Addresses, Loading, toasters, deliveryCosts, vinibarOrder, SerializedOrder) {
  $scope.client = currentVisitor.instance;
  // init
  var appropriatedHeight = ($window.innerHeight - 135) / 4;
  $scope.order = $scope.client.order;
  $scope.order.delivery_mode = 'Point Relais';

  Addresses.getList().then(function (response) {
    $scope.addresses = response.data;
  });

  $scope.user = User.getUser();

  $scope.calcHeight = {
    "min-height": appropriatedHeight + 'px'
  };

  deliveryCosts.get('FR',
    function (costs) {
      $scope.deliveryPrices = {
        'Point Relais': [ costs[0]['relay3'], costs[0]['relay6'] ],
        Vinify: [ costs[0]['pickup3'], costs[0]['pickup6'] ],
        Colissimo: [ costs[0]['classic3'], costs[0]['classic6'] ]
      };
    },
    function () {
      $scope.deliveryPrices = {
        'Point Relais': [ 4.90, 8.90 ],
        Vinify: [ 0, 0 ],
        Colissimo: [ 8.90, 11.90 ]
      };
    });

  $scope.updateOrder = function () {
    vinibarOrder.update(
      $scope.order.uuid,
      $scope.deliveryPrices[$scope.order.delivery_mode][1],
      $scope.order.delivery_mode,

      // success
      function (order) {
        angular.extend(SerializedOrder, order);
        $state.go('sidemenu.pay');
      },

      // error
      function (error) {
        toasters.pop('Oops une erreur est survenue.', 'bottom', 'info');
      });
  };

});