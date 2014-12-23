angular.module('app.deliverymode', [ 'Order', 'User', 'Loading', 'ngCordova' ])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('sidemenu.deliverymode', {
      url: "/deliverymode",
      views: {
        menuContent: {
          controller: 'deliverymodeCtrl',
          templateUrl: "home/deliverymode/deliverymode.tpl.html"
        }
      },
      resolve: {
        addressList: function (Addresses) {
          Addresses.getList().then(function (response) {
            return response.data;
          });
        }
      }
  });
})

.controller('deliverymodeCtrl', function deliverymodeCtrl ($scope, $http, $state, orderInstance, SerializedOrder, $window,
    User, Addresses, Address, addressList, $ionicModal, $ionicLoading, Loading, $cordovaToast, $cordovaNetwork ) {

  // init
  var appropriatedHeight = ($window.innerHeight - 135) / 4;
  $scope.order = orderInstance;
  $scope.user = User.getUser();
  $scope.form = { show: false };
  $scope.addresses = addressList;

  $scope.calcHeight = {
    "min-height": appropriatedHeight + 'px'
  };
  $scope.deliveryPrices = {
    'Point Relais': [ 4.90, 8.90 ],
    Vinify: [ 0, 0 ],
    Colissimo: [ 8.90, 11.90 ]
  };
  $scope.credits = {
    has: true,
    value: 50
  };

  var apiEndPoint =  'http://127.0.0.1:8000/api';

  $scope.createRefillOrder = function () {
    if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
      $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
    } else {
      if ($scope.order.data.delivery_mode) {
        Loading.show();
        $scope.order.data.delivery_cost = $scope.deliveryPrices[$scope.order.data.delivery_mode][$scope.order.data.quantity - 1];
        $scope.order.createRefillOrder().then(function (data) {
          Loading.hide();
          $state.go('sidemenu.pay');
        }, function (data) {
          Loading.hide();
          if (ionic.Platform.isWebView()) {
            $cordovaToast.show('Oops, un erreur est survenue. Merci de réessayer ...', 'short', 'top').then(function (success) {
            }, function (error) {
              // error
            });
          }
        });
      } else {
        if (ionic.Platform.isWebView()) {
          $cordovaToast.show('Merci de choisir un mode de livraison ...', 'short', 'top').then(function (success) {
          }, function (error) {
            // error
          });
        }
      }
    }
  };
  $scope.displayPrice = function (price) {
    return price;
  };


  // BLUR EVENT
  $scope.onBlur = function () {
    $scope.testCoupon();
  };


  $scope.testCoupon = function () {
    Loading.show();
    var request = $http({
                        url: apiEndPoint + '/orders/testcoupon/',
                        method: 'POST',
                        data: { coupon: $scope.order.data.coupon },
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8'
                        }
                      })

                      .success(function (data, status, headers, config) {
                        Loading.hide();
                        if (ionic.Platform.isWebView()) {
                          $cordovaToast.show('Coupon Validé!', 'short', 'top').then(function (success) {
                          }, function (error) {
                            // error
                          });
                        }
                      })
                      .error(function (data, status, headers, config) {
                          Loading.hide();
                          // IF THE COUPON IS NOT VALID WE TELL THE USER DEPENDING ON THE ERROR
                          if (data === 'This code is not valid') {
                            if (ionic.Platform.isWebView()) {
                              $cordovaToast.show('Oops, votre code d\'accès semble erroné !', 'short', 'top').then(function (success) {
                              }, function (error) {
                                // error
                              });
                            }
                          } else if (data === 'This coupon has been redeemed') {
                            if (ionic.Platform.isWebView()) {
                              $cordovaToast.show('Ce coupon n\'est plus valable', 'short', 'top').then(function (success) {
                              }, function (error) {
                                // error
                              });
                            }
                          }
                        });
  };

  // ADDRESS MODAL
  $ionicModal.fromTemplateUrl('tpl/address.tpl.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Open & close the modal
  $scope.openModal = function () {
    $scope.current = {
      delivery_address: (User.getUser().delivery_address) ? User.getUser().delivery_address.uuid : null,
      billing_address: (User.getUser().billing_address) ? User.getUser().billing_address.uuid : null
    };

    $scope.toProfile = function () {
      $scope.modal.hide();
      $state.go('sidemenu.profile');
    };

    $scope.modal.show();
    $scope.addressSuppl = new Address(User.getUser().uuid);
    delete $scope.addressSuppl.uuid;
  };
  $scope.closeModal = function () {
    $scope.user = User.getUser();
    $scope.modal.hide();
  };
  $scope.fireBilling = function (id) {
    Addresses.fireBilling(id);
  };

  $scope.fireDelivery = function (id) {
    Addresses.fireDelivery(id);
  };

  // CHECK FORM AND ADD ADRESS
  $scope.addAddress = function (form) {
    if (!form.$valid) {
      $ionicLoading.show({ template: 'Merci de vérifier votre formulaire, un ou plusieurs champs requis sont manquants.', noBackdrop: true, duration: 3000 });
    } else {
      Loading.show();
      $scope.addressSuppl.createAddress()
        .success(function (data, status, headers, config) {
          Loading.hide();
          $scope.form.show = false;
          // TODO gracefully manage errors/successes
          User.setUser(data);
          $scope.user = data;
          Addresses.updateList().then(function (response) {
            $scope.addresses = Addresses.data;
            console.log($scope.addresses);
          });
        })
      .error(function (data, status, headers, config) {
        // TODO gracefully manage errors/successes
        console.log(data);
        Loading.hide();
      });
    }
  };

});