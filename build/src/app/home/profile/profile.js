  angular.module( 'app.profile', ['User', 'Referrals'])
      .config(function($stateProvider, $urlRouterProvider) {
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
     })

      .controller( 'profileCtrl', function profileCtrl( $scope, $http, $location, User, $ionicModal, $ionicLoading, Referrals, Referral, Addresses, Address) {
        $scope.user = User.getUser();
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
            'delivery_address' : User.getUser().delivery_address.uuid,
            'billing_address' : User.getUser().billing_address.uuid
          };
          $scope.address_suppl = new Address(User.getUser().uuid);
      };
      $scope.closeUserModal = function() {
        // TODO UPDATE USER INFOS
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
        $scope.referral.sendReferral().success(function(data, status, headers, config) {
                                                                          Referrals.updateList().then(function(results){
                                                                            $scope.referrals = Referrals.data;
                                                                          $scope.referralModal.hide();
                                                                          });
                                                                    }).error(function(data, status, headers, config) {
                                                                        // TODO gracefully manage errors/successes
                                                                          $scope.referralModal.hide();
                                                                          if (data === 'User with email already a client') {
                                                                              $ionicLoading.show({ template: $scope.referral.first_name + ' est déja un de nos clients :)', noBackdrop: true, duration: 3000 });
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
              $scope.address_suppl.createAddress()
                            .success(function(data, status, headers, config) {
                              $scope.addresses.push(data);
                              $scope.uuid = data.uuid;
                            })
                            .error(function(data, status, headers, config) {
                                // TODO gracefully manage errors/successes
                                 alert(data);
                            });
          }
        };
      });