  angular.module('app.order', [ 'Order', 'User', 'settings', 'Toaster' ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.order', {
              url: "/order",
              views: {
                menuContent: {
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
      .controller('orderCtrl', function orderCtrl ($scope, $rootScope, $http, $state, Order, orderInstance, SerializedOrder, $window, $ionicPlatform, $cordovaNetwork, User, deliveryCosts, $ionicScrollDelegate, toasters) {

        // prepare for next screen
        User.updateUser(function (user) {
          $rootScope.userIs = {
            staff: user.is_staff
          };
        });
        deliveryCosts.get('FR', function () {});

        $scope.prices = {
          "29.90": 29.90,
          "39.90": 39.90,
          "49.90": 49.90,
          "59.90": 59.90
        };

        $scope.states = {
          hideFirstCard: false,
          hideSecondCard: false
        };

        $scope.changeRed = function (split) {
          if (split.red === 3) {
            split.white = 0;
            split.rose = 0;
          } else if (split.red + split.white >= 3) {
            split.white = 3 - split.red;
            split.rose = 0;
          } else {
            split.rose = 3 - split.red - split.white;
          }
        };

        $scope.changeWhite = function (split) {
          if (split.red + split.white + split.rose >= 3) {
            split.rose = 0;
          } else {
            split.rose = 3 - split.red - split.white;
          }
        };

        $scope.calcPrice = function (refills) {
          var price = 0;
          for (var i = refills.length - 1; i >= 0; i--) {
            price += $scope.prices[refills[i]['price_level']];
          }
          return price;
        };

        $scope.arrayFromNum = function (num) {
          return new Array (num);
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
        $scope.order.addRefill("39.90");

        $scope.addRefill = function () {
          $scope.order.addRefill("39.90");
          $scope.addSecond = true;
          $ionicScrollDelegate.resize();
        };

        $scope.validateFirstCard = function () {
          if ($scope.order.data.refills[0]['split']['white'] +
                $scope.order.data.refills[0]['split']['red'] +
                $scope.order.data.refills[0]['split']['rose'] === 3) {
            $scope.states.hideFirstCard = true;
            $ionicScrollDelegate.scrollTop();
            $ionicScrollDelegate.resize();
          } else {
            toasters.pop('La somme des vins ne fait pas trois', 'top', 'info');
          }
        };

        $scope.modifyFirstCard = function () {
          $scope.states.hideFirstCard = false;
          $ionicScrollDelegate.scrollTop();
          $ionicScrollDelegate.resize();
        };

        $scope.validateSecondCard = function () {
          if ($scope.order.data.refills[1]['split']['white'] +
                $scope.order.data.refills[1]['split']['red'] +
                $scope.order.data.refills[1]['split']['rose'] === 3) {
            $scope.states.hideSecondCard = true;
            $ionicScrollDelegate.scrollTop();
            $ionicScrollDelegate.resize();
          } else {
            toasters.pop('La somme des vins ne fait pas trois', 'top', 'info');
          }
        };

        $scope.modifySecondCard = function () {
          $scope.states.hideSecondCard = false;
          $ionicScrollDelegate.resize();
        };

        $scope.scrollTop = function () {
          $ionicScrollDelegate.scrollTop();
        };

        $scope.removeRefill = function () {
          $scope.addSecond = false;
          $ionicScrollDelegate.resize();
          $scope.order.removeRefill();
        };

        $scope.createRefillOrder = function () {
          if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
            $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
          } else {
            angular.forEach($scope.order.data.refills, function (value, index) {
              value.split.rose = (value.split.rose) ? value.split.rose : 0;
              value.split.white = (value.split.white) ? value.split.white : 0;
              value.split.red = (value.split.red) ? value.split.red : 0;
            });
            orderInstance.setOrderInstance($scope.order);
            $state.go('sidemenu.deliverymode');
          }
        };

      });