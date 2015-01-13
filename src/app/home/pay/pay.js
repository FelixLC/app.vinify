angular.module('app.pay', [ 'Order', 'User', 'ionic', 'ngCordova', 'angularPayments', 'Loading', 'payingService', 'settings', 'Toaster' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('sidemenu.pay', {
          url: "/pay",
          views: {
            menuContent: {
              controller: 'payCtrl',
              templateUrl: function () {
                return (window.innerWidth > 767) ? "home/pay/pay.desktop.tpl.html" :
                                                                        "home/pay/pay.tpl.html";
              }
            }
          }
      });
  })
  .controller('payCtrl', function payCtrl ($scope, $http, $location, SerializedOrder, User, $window, $ionicPlatform, $cordovaToast, Loading, $state, Pay, settings, toasters, $ionicHistory) {
    $scope.serializedOrder = SerializedOrder;
    console.log(SerializedOrder);
    Stripe.setPublishableKey((settings.test) ? 'pk_test_sK21onMmCuKNuoY7pbml8z3Q' : 'pk_live_gNv4cCe8tsZpettPUsdQj25F');

    $scope.submit = function (status, response) {

      if (response.error) {
        toasters.pop('Merci de vérifier vos informations', 'short', 'info');
      } else {
        Loading.show();
        Pay.chargeRefill($scope.serializedOrder.uuid, response.id)
          .success(function (data, status, headers, config) {
            Loading.hide();
            $scope.openYipeeModal();
            if (data.delivery_mode === 'Point Relais') {
              Pay.pickMondialRelay(data.uuid);
            }
            $state.go('sidemenu.home');
            $ionicHistory.clearCache();
          })
          .error(function (data, status, headers, config) {
            Loading.hide();
            $scope.openOopsModal();
          });
      }

    };

    $scope.payWithCredits = function () {
      Loading.show();
      Pay.chargeRefill($scope.serializedOrder.uuid)
        .success(function (data, status, headers, config) {
          Loading.hide();
          $scope.openYipeeModal();
          if (data.delivery_mode === 'Point Relais') {
            Pay.pickMondialRelay(data.uuid, Pay.shop);
          }
          $state.go('sidemenu.home');
          $ionicHistory.clearCache();
        })
        .error(function (data, status, headers, config) {
          Loading.hide();
          $scope.openOopsModal();
        });
    };
    // TODO VERIFY WITH STATUS BAR
    var appropriatedHeight = ($window.innerHeight - 60) / 3;

    $scope.calcHeight = {
      height: appropriatedHeight + 'px'
    };

    $scope.calcPrice = function () {
      var price = 0;
      for (var i = SerializedOrder.refills.length - 1; i >= 0; i--) {
        price += SerializedOrder.refills[i].price_level;
      }
      // return price.toString().substring(0, 2) + "." + price.toString().substring(2);
      return price;
    };

    $scope.displayPrice = function (price) {
      return price;
      // var string = price.toString();
      // var len = string.length - 2;
      // return string.substring(0, len) + "." + string.substring(len);
    };

    $scope.user = User.getUser();
  });