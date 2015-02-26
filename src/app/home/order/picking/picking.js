  angular.module('app.order.picking', [ 'Order',
          'User',
          'settings',
          'Toaster',
          'lodash',
          'app.filters'
      ])
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
                // order: function (orderInstance, Order) {
                //   return orderInstance.getOrderInstance();
                // },
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
      .filter('regionFilter', function (Filters) {
        return function (items) {
          var filtered = [];
          Filters.getRegions(function (regions) {
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              if (regions[item.wine.region]) {
                filtered.push(item);
              }
            }
          });
          return filtered;
        };
      })
      .filter('colorFilter', function (Filters) {
        return function (items) {
          var filtered = [];
          Filters.getColors(function (colors) {
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              if (colors[item.wine.color]) {
                filtered.push(item);
              }
            }
          });
          return filtered;
        };
      })
      .controller('pickingCtrl',
        function pickingCtrl ($scope,
                                                  $rootScope,
                                                  $ionicModal,
                                                  Order,
                                                  User,
                                                  deliveryCosts,
                                                  toasters,
                                                  bottles,
                                                  $state,
                                                  recommandations,
                                                  _,
                                                  orderInstance,
                                                  $ionicScrollDelegate) {


        var init = function () {
          $scope.bottleList = bottles.data;
          $scope.recommandationList = recommandations.data;
          orderInstance.getOrderInstance().then(
            function (order) {
              $scope.order = order;
              console.log(order);
            },
            function (newOrder) {
              $scope.order = newOrder;
              console.log('new');
            });

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

          //  YIPEE MODAL
          $ionicModal.fromTemplateUrl('tpl/wine.tpl.html', {
            scope: $scope,
            animation: 'slide-in-up'
          }).then(function (modal) {
            $scope.wineModal = modal;
          });

          //  Open & close the modal
          $scope.openWineModal = function (wine) {
            $scope.wine = wine;
            $scope.wineModal.show();
            $ionicScrollDelegate.scrollTop();
          };
          $scope.closeWineModal = function () {
            $scope.wineModal.hide();
          };

        };

        init();

        $scope.removeRefill = function (i) {
          $scope.order.removeRefill(i);
          $ionicScrollDelegate.resize();
        };

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

        $scope.createRefillOrder = function (order) {

          if (order.isValid()) {
            if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
              $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
            } else {
              orderInstance.setOrderInstance($scope.order);
              $state.go('sidemenu.deliverymode');
            }
          } else {
            toasters.pop('Vous pouvez commander par 3, 6 ou 12 seulement.', 'top', 'info');
          }
        };

        $scope.state = {
          is: function (state) {
            return 'sidemenu.picking.' + state === $state.$current.name;
          }
        };
      });