  angular.module('app.order.picking', [ 'Order',
          'User',
          'HighjackBack',
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
                recommandations: function (Bottles) {
                  return Bottles.getRecommendations();
                },
                regions: function (Filters) {
                  return Filters.getRegions();
                },
                colors: function (Filters) {
                  return Filters.getColors();
                },
                prices: function (Filters) {
                  return Filters.getPrices();
                },
                order: function (orderInstance) {
                  return orderInstance.getOrderInstance().then(
                      function (order) {
                        return order;
                      },
                      function (newOrder) {
                        return newOrder;
                      });
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
          });
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
      .controller('pickingCtrl', function pickingCtrl (
        $scope, $rootScope, $ionicModal, Order, User, deliveryCosts, toasters, bottles, $state, Picking, backButton, $ionicHistory,
        recommandations, _, orderInstance, order, $ionicScrollDelegate, Filters, $filter, settings, regions, colors, prices) {



        var init = function () {
          console.log(backButton.previousView, $ionicHistory.currentStateName());
          if (backButton.previousView && backButton.previousView != $ionicHistory.currentStateName()) {
            $state.go(backButton.previousView);
          }

          $scope.order = order;
          $scope.user = User.getUser();

          $scope.search = {
            value: ''
          };

          $scope.bottleList = $filter('winePrice')(
            $filter('wineColor')(
              $filter('wineRegion')(bottles.data.results, regions),
            colors),
          prices);

          $scope.recommandationList = $filter('winePrice')(
            $filter('wineColor')(
              $filter('wineRegion')(recommandations.data, regions),
            colors),
          prices);

          $scope.picking = new Picking($scope.recommandationList, $scope.bottleList, order.data.picking);
        };

        init();


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

        $scope.searchWinemakers = function (search) {
          $scope.winemakers = $filter('nameOrRow')(
            $filter('price')(
              $filter('color')(
                $filter('region')(winemakers.data, regions),
                colors),
              prices),
            search);
          $ionicScrollDelegate.resize();
        };

        $scope.unSearch = function () {
          init();
          $ionicScrollDelegate.resize();
        };

        $scope.removeRefill = function (i) {
          $scope.order.removeRefill(i);
          $ionicScrollDelegate.resize();
        };

        $scope.getNumber = function (num) {
          var _num = Math.floor(num);
          if (num) { return new Array(Math.floor(_num)); }
        };

        $scope.isInteger = function (num) {
          if (num) {
            return (Math.floor(num) == num);
          } else {
            return true;
          }
        };

        $scope.addBottle = function (wine, properties) {
          if ($scope.order.getBottleNumber() < 12) {
            $scope.picking[wine.uuid]++;
            console.log(wine.uuid, $scope.picking[wine.uuid]);
            $scope.order.addPicking(wine, properties);
          } else {
            toasters.pop('Vous avez atteint le maximum pour une commande.' +
              'Ecrivez-nous si vous souhaitez un commande plus importante.', 'top', 'info');
          }
        };

        $scope.removeBottle = function (wine) {
          if ($scope.picking[wine.uuid] > 0) {
            $scope.picking[wine.uuid]--;
          }
          $scope.order.removePicking(wine);
        };

        $scope.goToCart = function (order) {

          if (order.isValid()) {
            if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
              $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
            } else {
              orderInstance.setOrderInstance(order);
              // highjacks back button for cart
              backButton.setView();
              $state.go('sidemenu.cart');
            }
          } else if (order.getBottleNumber() === 9) {
            if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
              $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
            } else {
              orderInstance.setOrderInstance(order);
              // highjacks back button for cart
              backButton.setView();
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
              orderInstance.setOrderInstance($scope.order);
              // highjacks back button for cart
              backButton.setView();
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