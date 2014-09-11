  angular.module( 'app.profile', ['User', 'Referrals', 'Loading', 'ngCordova'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.profile', {
              url: "/profile",
              views: {
                'menuContent' :{
                  controller: 'profileCtrl',
                  templateUrl: "home/profile/profile.tpl.html"
                }
              }
          });
     }])

      .controller( 'profileCtrl', ["$scope", "$http", "$location", "User", "$ionicModal", "$ionicLoading", "Referrals", "Referral", "Addresses", "Address", "Loading", "$cordovaToast", function profileCtrl( $scope, $http, $location, User, $ionicModal, $ionicLoading, Referrals, Referral, Addresses, Address, Loading, $cordovaToast) {
        $scope.user = User.getUser();
        $scope.form = {show: false};
        console.log(User);
        console.log($scope.user.phone);

        Referrals.getList().then(function(results){
          $scope.referrals = Referrals.data;
        });

        Addresses.getList().then(function(response){
            $scope.addresses = response.data;
            console.log($scope.addresses);
          });

      // YIPEE MODAL
      $ionicModal.fromTemplateUrl('home/profile/user.tpl.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.userModal = modal;
      });

      // Open & close the modal
      $scope.openUserModal = function() {
        $scope.userModal.show();
          $scope.current = {
            'delivery_address' : (User.getUser().delivery_address) ? User.getUser().delivery_address.uuid : null,
            'billing_address' : (User.getUser().billing_address) ? User.getUser().billing_address.uuid : null
          };
          $scope.address_suppl = new Address(User.getUser().uuid);
      };
      $scope.closeUserModal = function() {
        $scope.userModal.hide();
      };
      $scope.updateUser = function() {
        // TODO update USER
        User.setUser($scope.user);
        User.postUser().then(function(response){
          $scope.user = response.data;
          User.setUser(response.data);
        });
        $scope.userModal.hide();
      };

      // YIPEE MODAL
      $ionicModal.fromTemplateUrl('home/profile/referral.tpl.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.referralModal = modal;
      });

      // Open & close the modal
      $scope.openReferralModal = function() {
        $scope.referralModal.show();
          $scope.referral = new Referral();
      };
      $scope.closeReferralModal = function() {
        // TODO UPDATE USER INFOS
        $scope.referralModal.hide();
      };
      $scope.sendReferral = function() {
        // TODO UPDATE USER INFOS
        Loading.show();
        $scope.referral.sendReferral().success(function(data, status, headers, config) {
                                                                          Referrals.updateList().then(function(results){
                                                                            $scope.referrals = Referrals.data;
                                                                          $scope.referralModal.hide();
                                                                          Loading.hide();
                                                                          });
                                                                    }).error(function(data, status, headers, config) {
                                                                        // TODO gracefully manage errors/successes
                                                                          $scope.referralModal.hide();
                                                                          Loading.hide();
                                                                          if (data === 'User with email already a client') {
                                                                            $cordovaToast.show($scope.referral.first_name + ' est déja un de nos clients :)', 'short', 'top').then(function(success) {
                                                                            }, function (error) {
                                                                            // error
                                                                            });
                                                                         } else if (data === 'User cannot refer himself') {
                                                                            $cordovaToast.show('Petit malin ... :)', 'short', 'top').then(function(success) {
                                                                            }, function (error) {
                                                                            // error
                                                                            });
                                                                          } else {
                                                                              $scope.openOopsModal();
                                                                          }
                                                                    });
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
                $ionicLoading.show({ template: 'Merci de vérifier votre formulaire, un ou plusieurs champs requis sont manquants.', noBackdrop: true, duration: 3000 });
          } else {
            Loading.show();
              $scope.address_suppl.createAddress()
                                              .success(function(data, status, headers, config) {
                                                          Loading.hide();
                                                          $scope.form.show = false;
                                                            // TODO gracefully manage errors/successes
                                                            User.setUser(data);
                                                            $scope.user = data;
                                                            Addresses.updateList().then(function(response){
                                                              $scope.addresses = Addresses.data;
                                                              console.log($scope.addresses);
                                                            });
                                                          })
                                                          .error(function(data, status, headers, config) {
                                                            // TODO gracefully manage errors/successes
                                                            console.log(data);
                                                            Loading.hide();
                                                          });
          }
        };
      }]);