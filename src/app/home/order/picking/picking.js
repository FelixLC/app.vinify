  angular.module('app.order.picking', [ 'Order', 'User', 'settings', 'Toaster' ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.picking', {
              url: "/alacarte",
              views: {
                menuContent: {
                  controller: 'pickingCtrl',
                  templateUrl: "home/order/picking/picking.tpl.html"
                }
              },
              resolve: {
                bottles: function (Bottles) {
                  return Bottles.getList();
                },
                order: function (orderInstance, Order) {
                  if (orderInstance.data.refills.length) {
                    return orderInstance;
                  } else {
                    return new Order();
                  }
                }
              }
          })
          .state('sidemenu.picking.recommended', {
              url: "/recommandations",
              views: {
                pickingTab: {
                  controller: 'pickingCtrl',
                  templateUrl: "home/order/picking/parts/recommended.tpl.html"
                }
              }
          })
          .state('sidemenu.picking.my_wines', {
              url: "/mes-vins",
              views: {
                pickingTab: {
                  controller: 'pickingCtrl',
                  templateUrl: "home/order/picking/parts/my_wines.tpl.html"
                }
              }
          })
          .state('sidemenu.picking.cart', {
              url: "/panier",
              views: {
                pickingTab: {
                  controller: 'pickingCtrl',
                  templateUrl: "home/order/picking/parts/cart.tpl.html"
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
      .controller('pickingCtrl', function pickingCtrl ($scope, $rootScope, Order, User, deliveryCosts, toasters, bottles, order, $state) {

        var init = function () {
          $scope.bottleList = bottles.data;
          $scope.order = order;
          $scope.user = User.getUser();
          deliveryCosts.get('FR', function () {});

          // prepare for next screen
          User.updateUser(function (user) {
            $rootScope.userIs = {
              staff: user.is_staff
            };
          });

        };

        init();

        $scope.state = {
          is: function (state) {
            return 'sidemenu.picking.' + state === $state.$current.name;
          }
        };
      });