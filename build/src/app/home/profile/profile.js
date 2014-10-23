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

      .controller( 'profileCtrl', function profileCtrl( $scope, $http, $location, User, $ionicModal, $ionicLoading, Referrals, Referral, Addresses, Address, Loading, $cordovaToast, $ionicPlatform, $cordovaSocialSharing, $cordovaNetwork) {
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
            if(ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
              $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
            } else {
              if (ionic.Platform.isWebView()) {
                  var message = "Bonjour " + name + ", \n \n" + "J'aimerais te faire découvrir Vinify. Pour te convaincre de me rejoindre dans cette aventure, je t'offre 10€ de réduction sur ta première commande grâce à mon code parrainage. \n \n" + "Rendez-vous sur www.vinify.co avec le code : " + $scope.user.referral_code + "\n \n" + "Je te propose une aventure unique : avoir toujours du bon vin à portée de main ! Vinify, c'est un bar à vin sur mesure. Livré chez toi, selon tes goûts. \n \n" +"À bientôt, \n" + $scope.user.first_name;
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
          if(ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
            $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
          } else {
            $scope.userModal.show();
            $scope.current = {
              'delivery_address' : (User.getUser().delivery_address) ? User.getUser().delivery_address.uuid : null,
              'billing_address' : (User.getUser().billing_address) ? User.getUser().billing_address.uuid : null
            };
            $scope.address_suppl = new Address(User.getUser().uuid);
          }
      };
      $scope.closeUserModal = function() {
          $scope.user = User.getUser();
          $scope.userModal.hide();
      };
      $scope.updateUser = function() {
          User.postUser($scope.user.first_name, $scope.user.last_name, $scope.user.phone, $scope.user.email).then(function(response){
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
        if(ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && not online
          $cordovaToast.show('Oops, vous n\'êtes pas connecté. Merci de réessayer ...', 'short', 'top');
        } else {
          $scope.referralModal.show();
          $scope.referral = new Referral();
       }
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
                if(ionic.Platform.isWebView()){$cordovaToast.show('Merci !', 'short', 'top');}
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
                  if(ionic.Platform.isWebView()){$cordovaToast.show($scope.referral.first_name + ' est déja un de nos clients :)', 'short', 'top');}
               } else if (data === 'User cannot refer himself') {
                  if(ionic.Platform.isWebView()){$cordovaToast.show('Petit malin ... :)', 'short', 'top');}
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
              User.postUser($scope.user.first_name, $scope.user.last_name, $scope.user.phone, $scope.user.email).then(function(response){
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
                                                              $scope.userModal.hide();
                                                            })
                                                            .error(function(data, status, headers, config) {
                                                              // TODO gracefully manage errors/successes
                                                              console.log(data);
                                                              Loading.hide();
                                                            });
              });
          }
        };
          $scope.share = {
            twitter: null,
            facebook: null
          };

          if (ionic.Platform.isWebView()) {

            $scope.share.twitter = function () {
                  var message = "Je vous offre 10€ de réduction sur http://www.vinify.co grâce à mon code parrainage : " + $scope.user.referral_code + " !";
                  $cordovaSocialSharing.shareViaTwitter(message).then(function(result) {
                      // Success!
                  }, function(err) {
                      // An error occured. Show a message to the user
                  });
            };
            $scope.share.facebook = function () {
                  var message = "Je vous offre 10€ de réduction sur http://www.vinify.co grâce à mon code parrainage : " + $scope.user.referral_code+ " !";
                  $cordovaSocialSharing.shareViaFacebook(message).then(function(result) {
                      // Success!
                  }, function(err) {
                      // An error occured. Show a message to the user
                  });
            };
          }
      });