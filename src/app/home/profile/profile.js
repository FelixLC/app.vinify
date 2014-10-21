  angular.module( 'app.profile', ['User', 'Referrals', 'Loading', 'ngCordova'])
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

      .controller( 'profileCtrl', function profileCtrl( $scope, $http, $location, User, $ionicModal, $ionicLoading, Referrals, Referral, Addresses, Address, Loading, $cordovaToast, $ionicPlatform, $cordovaSocialSharing) {
        $scope.user = User.getUser();
        var apiEndPoint =  'https://api.vinify.co/api';
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
        $scope.isWebView = ionic.Platform.isWebView();
          $scope.sendMail = function (name, email) {
            if (ionic.Platform.isWebView()) {
                var message = "Bonjour, " + name + "\n" + "J'aimerais te faire découvrir Vinify. Pour te convaincre de me rejoindre dans cette aventure, je t'offre 10€ de réduction sur ta première commande grâce à mon code parrainage. \n" + "Rendez-vous sur www.vinify.co avec le code :" + $scope.user.referral_code + "\n" + "Je te propose une aventure unique : avoir toujours du bon vin à portée de main ! Vinify, c'est un bar à vin sur mesure. Livré chez toi, selon tes goûts. \n \n" +"À bientôt, \n" + $scope.user.first_name;
                var subject = "Re: " + name + ", découvre des vins à tes goûts";
                $cordovaSocialSharing.shareViaEmail(message, subject, [email]).then(
                  function(result) {
                    $http.post(apiEndPoint + '/orders/referredreminder/', {
                      referred: email
                    });
                    // Success!
                  }, function(err) {
                    // An error occured. Show a message to the user
                  });
            }
          };

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
          $scope.user = User.getUser();
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
        $scope.referral.sendReferral()
          .success(function(data, status, headers, config) {
                User.setUser(data);
                $scope.referralModal.hide();
                Loading.hide();
          })
          .error(function(data, status, headers, config) {
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
                                                            $scope.userModal.hide();
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
      });