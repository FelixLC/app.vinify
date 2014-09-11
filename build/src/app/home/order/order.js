  angular.module( 'app.order', ['Order'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
     }])

      .controller( 'orderCtrl', ["$scope", "$http", "$state", "Order", "orderInstance", "SerializedOrder", "$window", function orderCtrl( $scope, $http, $state, Order, orderInstance, SerializedOrder, $window ) {

        $scope.price = {
          valueA: 50,
          levelA: 49.90,
          valueB: 50,
          levelB: 49.90
        };

        // TODO VERIFY WITH STATUS BAR
        var appropriatedHeight = ($window.innerHeight - 43) / 3;

        $scope.calcHeight = {
          "height": appropriatedHeight + 'px'
        };

        $scope.refill = {
          num: 1
        };

        $scope.order = new Order();

        $scope.addRefill = function() {
          $scope.order.addRefill();
        };

        $scope.createRefillOrder = function() {
          $scope.order.data.refills[0].price_level = $scope.price.levelA;
          $scope.order.data.quantity = parseInt($scope.order.data.quantity, 10);
          if($scope.order.data.quantity == 2) {$scope.order.addRefill($scope.price.levelB);}
          orderInstance.setOrderInstance($scope.order);
          $state.go('sidemenu.deliverymode');
        };

      }]);