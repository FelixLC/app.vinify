  angular.module('app.order.cart', [ 'Order',
          'User',
          'settings',
          'Toaster',
          'lodash'
      ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.cart', {
              url: "/panier",
              views: {
                menuContent: {
                  controller: 'cartCtrl',
                  templateUrl: "home/order/cart/cart.tpl.html"
                }
              },
              resolve: {
                bottles: function (Bottles) {
                  return Bottles.getList();
                },
                recommandations: function (Bottles) {
                  return Bottles.getRecommendations();
                }
              }
          });
      })
      .controller('cartCtrl',
        function cartCtrl ($scope, $rootScope, $ionicModal, Order, User, deliveryCosts, toasters, bottles,
          $state, recommandations, _, orderInstance, $ionicScrollDelegate, Picking) {

        var init = function () {
          $scope.bottleList = bottles.data.results;
          $scope.recommandationList = recommandations.data;
          orderInstance.getOrderInstance().then(
            function (order) {
              $scope.order = order;
              $scope.picking = new Picking($scope.recommandationList, $scope.bottleList, $scope.order.data.picking);
            },
            function (newOrder) {
              $scope.order = newOrder;
              console.log('new');
            });

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
          if ($scope.order.getBottleNumber() < 12) {
            $scope.picking[wine.uuid]++;
            $scope.order.addPicking(wine, properties);
          } else {
            toasters.pop('Vous avez atteint le maximum pour une commande. Ecrivez-nous si vous souhaitez un commande plus importante.', 'top', 'info');
          }
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