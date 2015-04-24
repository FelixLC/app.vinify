  angular.module('app.order.refill', [ 'Order', 'User', 'settings', 'Toaster' ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.refill', {
              url: "/recharge",
              views: {
                menuContent: {
                  controller: 'refillCtrl',
                  templateUrl: "home/order/refill/refill.tpl.html"
                }
              },
              resolve: {
                // order: function (orderInstance, Order) {
                //   return orderInstance.getOrderInstance();
                // }
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
      .directive('errSrc', function () {
        return {
          link: function (scope, element, attrs) {
            element.bind('error', function () {
              if (attrs.src != attrs.errSrc) {
                attrs.$set('src', attrs.errSrc);
              }
            });
          }
        };
      })
      .controller('refillCtrl', function refillCtrl ($scope, $rootScope, $http, $state, Order, orderInstance, SerializedOrder, $window, $ionicPlatform, $cordovaNetwork, User, deliveryCosts, $ionicScrollDelegate, toasters) {

        orderInstance.getOrderInstance().then(
          function (order) {
            $scope.order = order;
            if ($scope.order.data.refills.length === 0) {
              $scope.order.addRefill("39.90");
              $scope.states = {
                current: 1,
                hideFirstCard: false,
                hideSecondCard: false
              };
            } else {
              $scope.states = {
                current: 0,
                hideFirstCard: true,
                hideSecondCard: false
              };
            }
          },
          function (newOrder) {
            $scope.order = newOrder;
            $scope.order.addRefill("39.90");
            $scope.states = {
              current: 1,
              hideFirstCard: false,
              hideSecondCard: false
            };
          });
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

        $scope.addBottle = function (color, index) {
          if ($scope.order.data.refills[index]['split'][color] < 3) {
            $scope.order.data.refills[index]['split'][color]++;
          }
        };

        $scope.removeBottle = function (color, index) {
          if ($scope.order.data.refills[index]['split'][color] > 0) {
            $scope.order.data.refills[index]['split'][color]--;
          }
        };

        $scope.addRefill = function () {
          if ($scope.order.data.refills.length < 4) {
            $scope.order.addRefill("39.90");
            $scope.states.current = $scope.order.data.refills.length;
            $ionicScrollDelegate.resize();
          } else {
            toasters.pop('Vous pouvez commander par 3, 6 ou 12 seulement. Contactez-nous pour des commandes plus importantes', 'top', 'info');
          }
        };

        $scope.validateCard = function (i) {
          if ($scope.order.data.refills[i]['split']['white'] +
                $scope.order.data.refills[i]['split']['red'] +
                $scope.order.data.refills[i]['split']['rose'] === 3) {
            $scope.states.current = -1;
            $ionicScrollDelegate.resize();
          } else {
            toasters.pop('La somme des vins ne fait pas trois', 'top', 'info');
          }
        };

        $scope.modifyCard = function (i) {
          $scope.states.current = i + 1;
          $ionicScrollDelegate.resize();
        };

        $scope.scrollTop = function () {
          $ionicScrollDelegate.scrollTop();
        };

        $scope.removeRefill = function (i) {
          $scope.order.removeRefill(i);
          $ionicScrollDelegate.resize();
        };

        $scope.goPicking = function (order) {

          if (order.getBottleNumber() < 12) {
            if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
              $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
            } else {
              angular.forEach($scope.order.data.refills, function (value, index) {
                value.split.rose = (value.split.rose) ? value.split.rose : 0;
                value.split.white = (value.split.white) ? value.split.white : 0;
                value.split.red = (value.split.red) ? value.split.red : 0;
              });
              orderInstance.setOrderInstance(order);
              $state.go('sidemenu.picking.my_wines');
            }
          } else if (order.data.refills.length === 0) {
            $state.go('sidemenu.picking.my_wines');
          } else {
            toasters.pop('Vous pouvez commander par 3, 6 ou 12 seulement.', 'top', 'info');
          }
        };

        $scope.goToCart = function (order) {

          if (order.isValid()) {
            if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
              $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
            } else {
              angular.forEach($scope.order.data.refills, function (value, index) {
                value.split.rose = (value.split.rose) ? value.split.rose : 0;
                value.split.white = (value.split.white) ? value.split.white : 0;
                value.split.red = (value.split.red) ? value.split.red : 0;
              });
              orderInstance.setOrderInstance(order);
              $state.go('sidemenu.cart');
            }
          } else {
            toasters.pop('Vous pouvez commander par 3, 6 ou 12 seulement.', 'top', 'info');
          }
        };

        $scope.createRefillOrder = function (order) {

          if (order.isValid()) {
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
          } else {
            toasters.pop('Vous pouvez commander par 3, 6 ou 12 seulement.', 'top', 'info');
          }
        };

      });