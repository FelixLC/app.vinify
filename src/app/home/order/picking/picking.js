  angular.module('app.order.picking', [ 'Order', 'User', 'settings', 'Toaster', 'lodash' ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.picking', {
              url: "/a-la-carte",
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
                },
                recommandations: function (Bottles) {
                  return Bottles.getRecommendations();
                }
              }
          })
          .state('sidemenu.picking.recommended', {
              url: "/recommandations",
              views: {
                pickingTab: {
                  templateUrl: "home/order/picking/parts/recommended.tpl.html"
                }
              }
          })
          .state('sidemenu.picking.my_wines', {
              url: "/mes-vins",
              views: {
                pickingTab: {
                  templateUrl: "home/order/picking/parts/my_wines.tpl.html"
                }
              }
          })
          .state('sidemenu.picking.cart', {
              url: "/panier",
              views: {
                pickingTab: {
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
      .controller('pickingCtrl', function pickingCtrl ($scope, $rootScope, Order, User, deliveryCosts, toasters, bottles, order, $state, recommandations, _) {

        var init = function () {
          $scope.bottleList = bottles.data;
          $scope.recommandationList = recommandations.data;
          $scope.order = order;

          $scope.picking = {};
          _($scope.recommandationList).pluck('wine')
                                                                      .pluck('uuid')
                                                                      .forEach(function (id) {
                                                                        $scope.picking[id] = 0;
                                                                      }).value();
          _($scope.bottleList).pluck('wine')
                                                  .pluck('uuid')
                                                  .forEach(function (id) {
                                                    $scope.picking[id] = 0;
                                                  }).value();
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

        $scope.getNumber = function (num) {
          var _num = Math.floor(num);
          if (num) { return new Array(Math.floor(_num)); }
        };

        $scope.isInteger = function (num) {
          return (Math.floor(num) == num);
        };

        $scope.addBottle = function (wine, properties) {
          $scope.picking[wine.uuid]++;
          $scope.order.addPicking(wine, properties);
        };

        $scope.removeBottle = function (wine) {
          if ($scope.picking[wine.uuid] > 0) {
            $scope.picking[wine.uuid]--;
          }
          $scope.order.removePicking(wine);
        };

        $scope.state = {
          is: function (state) {
            return 'sidemenu.picking.' + state === $state.$current.name;
          }
        };
      });