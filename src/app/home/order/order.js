  angular.module('app.order', [ 'Order' ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.order', {
              url: "/order",
              views: {
                'menuContent' :{
                  controller: 'orderCtrl',
                  templateUrl: "home/order/order.tpl.html"
                }
              }
          });
     })
      .filter('filterWhite', function () {
        return function (items, splitRed) {
          if (splitRed === 0 || splitRed === "0") {
            return items;
          } else {
            return items.slice(0, 4 - splitRed);
          }
        };
      })
      .filter('filterRose', function () {
        return function (items, splitRed, splitWhite) {
          if (splitRed === 0 && splitWhite === 0) {
            return items;
          } else {
            return items.slice(0, 4 - splitRed - splitWhite);
          }
        };
      })
      .controller('orderCtrl', function orderCtrl ($scope, $http, $state, Order, orderInstance, SerializedOrder, $window ) {

        $scope.prices = {
          "29€90": 29.90,
          "39€90": 39.90,
          "49€80": 49.90
        };

        $scope.options = [
          0, 1, 2, 3
        ];

        // TODO VERIFY WITH STATUS BAR
        var appropriatedHeight = ($window.innerHeight - 43) / 3;

        $scope.calcHeight = {
          height: appropriatedHeight + 'px'
        };

        $scope.refill = {
          num: 1
        };

        $scope.order = new Order();

        $scope.addRefill = function () {
          $scope.order.addRefill(39.90);
          $scope.addSecond = true;
          console.log('refill added');
        };

        $scope.removeRefill = function () {
          $scope.addSecond = false;
          $scope.order.removeRefill();
        };

        $scope.createRefillOrder = function () {
          angular.forEach($scope.order.data.refills, function (value, index) {
            value.split.rose = (value.split.rose) ? value.split.rose : 0;
            value.split.white = (value.split.white) ? value.split.white : 0;
            value.split.red = (value.split.red) ? value.split.red : 0;
          });
          orderInstance.setOrderInstance($scope.order);
          $state.go('sidemenu.deliverymode');
        };

      });