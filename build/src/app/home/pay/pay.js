angular.module('app.pay', [ 'Order', 'User', 'ionic', 'ngCordova', 'angularPayments', 'Loading', 'payingService' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('sidemenu.pay', {
          url: "/pay",
          views: {
            menuContent: {
              controller: 'payCtrl',
              templateUrl: "home/pay/pay.desktop.tpl.html"
            }
          }
      });
  })
  .directive('syncFocusWith', function ($timeout, $rootScope) {
    return {
        restrict: 'A',
        scope: {
            focusValue: "=syncFocusWith"
        },
        link: function ($scope, $element, attrs) {
          $scope.$watch("focusValue", function (currentValue, previousValue) {
            if (currentValue === true && !previousValue) {
              $element[0].focus();
            } else if (currentValue === false && previousValue) {
              $element[0].blur();
            }
          });
        }
    };
  })
  .controller('payCtrl', function payCtrl ($scope, $http, $location, SerializedOrder, User, $window, $ionicPlatform, $cordovaToast, Loading, $state, Pay) {
    $scope.serializedOrder = SerializedOrder;
    console.log(SerializedOrder);
    var apiEndPoint =  'http://127.0.0.1:8000/api';

    // Stripe.setPublishableKey('pk_live_gNv4cCe8tsZpettPUsdQj25F');
    $scope.submit = function (status, response) {

      if (response.error) {
        if (ionic.Platform.isWebView()) {
          $cordovaToast.show('Merci de vérifier vos informations', 'short', 'top').then(function (success) {
          }, function (error) {
          // error
          });
          // if (response.error.code == 'incorrect_number') {
          //  $cordovaToast.show('The card number is incorrect.', 'short', 'top').then(function (success) {
          //  }, function (error) {
          //  // error
          //  });
          // }
          // if (response.error.code == 'invalid_number') {
          //  $cordovaToast.show('The card number is not a valid credit card number.', 'short', 'top').then(function (success) {
          //  }, function (error) {
          //  // error
          //  });
          // }
          // if (response.error.code == 'invalid_expiry_month') {
          //  $cordovaToast.show('The card\'s expiration month is invalid.', 'short', 'top').then(function (success) {
          //  }, function (error) {
          //  // error
          //  });
          // }
          // if (response.error.code == 'invalid_expiry_year') {
          //  $cordovaToast.show('The card\'s expiration year is invalid.', 'short', 'top').then(function (success) {
          //  }, function (error) {
          //  // error
          //  });
          // }
          // if (response.error.code == 'invalid_cvc') {
          //  $cordovaToast.show('The card\'s security code is invalid.', 'short', 'top').then(function (success) {
          //  }, function (error) {
          //  // error
          //  });
          // }
          // if (response.error.code == 'expired_card') {
          //  $cordovaToast.show('The card has expired.', 'short', 'top').then(function (success) {
          //  }, function (error) {
          //  // error
          //  });
          // }
          // if (response.error.code == 'incorrect_cvc') {
          //  $cordovaToast.show('The card\'s security code is invalid.', 'short', 'top').then(function (success) {
          //  }, function (error) {
          //  // error
          //  });
          // }
        } else {
          console.log(response);
        }
      } else {
        Loading.show();
        Pay.chargeRefill($scope.serializedOrder.uuid, response.id)
          .success(function (data, status, headers, config) {
            Loading.hide();
            $scope.openYipeeModal();
            if ($scope.serializedOrder.delivery_mode === 'Point Relais') {
              Pay.pickMrEmail($scope.serializedOrder.uuid);
            }
            $state.go('sidemenu.home');
          })
          .error(function (data, status, headers, config) {
            Loading.hide();
            $scope.openOopsModal();
          });
      }

    };

    $scope.payWithCredits = function () {
      Pay.chargeRefill($scope.serializedOrder.uuid)
        .success(function (data, status, headers, config) {
          Loading.hide();
          $scope.openYipeeModal();
          if ($scope.serializedOrder.delivery_mode === 'Point Relais') {
            Pay.pickMrEmail($scope.serializedOrder.uuid);
          }
          $state.go('sidemenu.home');
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