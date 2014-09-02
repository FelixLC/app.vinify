angular.module( 'app.deliverymode', ['Order', 'User', 'Loading', 'ngCordova'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('sidemenu.deliverymode', {
        url: "/deliverymode",
        views: {
          'menuContent' :{
            controller: 'deliverymodeCtrl',
            templateUrl: "home/deliverymode/deliverymode.tpl.html"
          }
        }
    });
  })

  .controller( 'deliverymodeCtrl', function deliverymodeCtrl( $scope, $http, $state, orderInstance, SerializedOrder, $window, User, Addresses, Address, $ionicModal, $ionicLoading, Loading, $cordovaToast ) {
    $scope.order = orderInstance;
    $scope.user = User.getUser();
    Addresses.getList().then(function(response){
        $scope.addresses = response.data;
        console.log($scope.addresses);
      });

    $scope.createRefillOrder = function() {
      if($scope.order.data.delivery_mode) {
          $scope.order.createRefillOrder().then(function(data){
            $state.go('sidemenu.pay');
          });
      } else {
        if (ionic.Platform.isWebView()) {
          $cordovaToast.show('Merci de choisir un mode de livraison ...', 'short', 'top').then(function(success) {
          }, function (error) {
            // error
          });
        }
      }
    };

    // TODO VERIFY WITH STATUS BAR
    var appropriatedHeight = ($window.innerHeight - 135) / 4;

    $scope.calcHeight = {
      "min-height": appropriatedHeight + 'px'
    };

    // ADDRESS MODAL
    $ionicModal.fromTemplateUrl('tpl/address.tpl.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Open & close the modal
    $scope.openModal = function() {
      $scope.current = {
        'delivery_address' : User.getUser().delivery_address.uuid,
        'billing_address' : User.getUser().billing_address.uuid
      };
      $scope.modal.show();
      $scope.address_suppl = new Address(User.getUser().uuid);
      delete $scope.address_suppl.uuid;
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.fireBilling = function(id) {
      Addresses.fireBilling(id);
    };

    $scope.fireDelivery = function(id) {
      Addresses.fireDelivery(id);
    };

    // CHECK FORM AND ADD ADRESS
    $scope.addAddress = function(form) {
      if(!form.$valid) {
          $cordovaToast.show('Merci de vérifier votre formulaire, un ou plusieurs champs requis sont manquants.', 'short', 'top').then(function(success) {
          }, function (error) {
            // error
          });
      } else {
          $scope.address_suppl.createAddress()
                  .success(function(data, status, headers, config) {
                    $scope.addresses.push(data);
                    console.log(data);
                    $scope.uuid = data.uuid;
                  })
                  .error(function(data, status, headers, config) {
                      // TODO gracefully manage errors/successes
                      $cordovaToast.show('Une erreur est survenue. Merci de réessayer.', 'short', 'top').then(function(success) {
                      }, function (error) {
                        // error
                      });
                  });
      }
    };

  });