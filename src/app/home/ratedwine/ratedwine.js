angular.module('app.ratedwine', [ 'ngResource', 'User', 'Rating', 'ngCordova', 'ionic', 'settings' ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('sidemenu.ratedwine', {
            url: '/ratedwine/{uuid:[^/]*}',
            views: {
              menuContent: {
                controller: 'ratedwineCtrl',
                templateUrl: function () {
                  return (window.innerWidth > 767) ? "home/ratedwine/ratedwine-desktop.tpl.html" :
                                                                          "home/ratedwine/ratedwine.tpl.html";
                }
              }
            },
            resolve: {
              bottles: function (Bottles) {
                return Bottles.getList();
              }
            }
        });
    })
    .controller('ratedwineCtrl', function ratedwineCtrl ($scope, $stateParams, $resource, $state, Bottles, bottles, $ionicModal, Rating, GroupRating,  $cordovaSocialSharing, $ionicPlatform, $cordovaToast, $cordovaNetwork, $ionicScrollDelegate) {
      var init = function () {
        $scope.id = $stateParams.uuid;
        $scope.rate = 3;
        $scope.max = 5;
        $scope.bottle = getById(bottles.data.results, $scope.id);
        $scope.literalRating = {};

        $scope.share = {
          twitter: null,
          facebook: null,
          mail: undefined
        };
      };

      var getById = function (arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
          if (arr[d].uuid === id) {
            return arr[d];
          }
        }
      };

      init();
      // share
      if (ionic.Platform.isWebView()) {

        $scope.buy = function () {
          var message = "Bonjour, \n" + "Je souhaiterais commander [X] bouteilles de " + $scope.bottle.wine.display_name + "\n" + "Merci de me confirmer le prix et la disponiblité.";
          var subject = $scope.bottle.wine.display_name + " | Commande";
          $cordovaSocialSharing.shareViaEmail(message, subject, [ 'commande@vinify.co' ]).then(
            function (result) {
              // Success!
            }, function (err) {
              // An error occured. Show a message to the user
            });
        };

        $scope.share.twitter = function () {
          var msg = "Je viens de déguster le " + $scope.bottle.wine.display_name + " " + $scope.bottle.wine.vintage + ". \n" +
          $scope.bottle.rating + "/5. Super découverte grâce à @vinifyco ! " + "https://www.vinify.co/" +
          $scope.bottle.wine.slug + ".html";
          $cordovaSocialSharing.shareViaTwitter(msg).then(function (result) {
              // Success!
          }, function (err) {
              // An error occured. Show a message to the user
          });
        };

        $scope.share.facebook = function () {
          var msg = "Je viens de déguster le " + $scope.bottle.wine.display_name + " " + $scope.bottle.wine.vintage + ". \n" +
          $scope.bottle.comment + "\n" + $scope.bottle.rating + "/5. Super découverte grâce à @vinifyco ! " + "https://www.vinify.co/" +
          $scope.bottle.wine.slug + ".html";
          $cordovaSocialSharing.shareViaFacebook(msg).then(function (result) {
              // Success!
          }, function (err) {
              // An error occured. Show a message to the user
          });
        };

        $scope.share.mail = function () {
          var msg = "Je viens de déguster le " + $scope.bottle.wine.display_name + " " + $scope.bottle.wine.vintage + ". \n" +
          $scope.bottle.comment + "\n" + $scope.bottle.rating + "/5. Super découverte grâce à @vinifyco ! " + "https://www.vinify.co/" +
          $scope.bottle.wine.slug + ".html";
          var subject = $scope.bottle.wine.display_name + " | Vinify";
          $cordovaSocialSharing.shareViaEmail(msg, subject).then(
            function (result) {
              // Success!
            }, function (err) {
              // An error occured. Show a message to the user
            });
        };
      }

      // Rate
      // modal
      $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.tpl.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.modal = modal;
      });

      // Open & close the modal
      $scope.openModal = function () {
        if (ionic.Platform.isWebView() && $cordovaNetwork.isOffline()) { // if we use cordova
          $cordovaToast.show('Vous ne pouvez pas modifier votre note quand vous n\'êtes pas connecté', 'short', 'top');
        } else {
          $scope.rating = new Rating($scope.bottle.uuid, $scope.bottle.rating, $scope.bottle.comment);
          $scope.$watch('rating.data.rating', function (newVal, oldVal) {
            if (newVal < 2)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
            if (newVal > 1.5 && newVal < 3)  { $scope.literalRating.value = "Non, pas trop mon style";}
            if (newVal > 2.5 && newVal < 4)  { $scope.literalRating.value = "Sympa, à l'occasion";}
            if (newVal > 3.5 && newVal < 5)  { $scope.literalRating.value = "Bien vu, j'aime beaucoup";}
            if (newVal  == 5)  { $scope.literalRating.value = "Bravo, j'adore !";}
          });
          $scope.modal.show();
        }
      };
      $scope.closeModal = function () {
        $scope.modal.hide();
      };

      $scope.rateWine = function () {
        if (ionic.Platform.isWebView()) { // if we use cordova
          if ($cordovaNetwork.isOffline()) {// if we are offline
            $cordovaToast.show('Vous ne pouvez pas modifier votre note quand vous n\'êtes pas connecté', 'short', 'top');
          } else {
            $scope.rating.updateWine().then(function (response) {
              $scope.closeModal();
              console.log(response);
              $state.go('sidemenu.vinibar');
            });
          }
        } else {
          $scope.rating.updateWine().then(function (response) {
            $scope.closeModal();
            console.log(response);
            $state.go('sidemenu.vinibar');
          });
        }
      };
          // if ($cordovaNetwork.isOffline()) {
          //   // Store Rating and Fake it
          //     OfflineQueue.addUpdateRating($scope.rating);
          //     Bottles.fakeRating($scope.rating).then(function (response) {
          //                     $scope.closeModal();
          //                     $state.go('sidemenu.vinibar');
          //                     $cordovaToast.show('Offline Rating ...', 'short', 'top');
          //     });

          // } else {
          //       Loading.show();
          //       $scope.rating.updateWine()
          //         .then(function (data, status, headers, config) {
          //               Loading.hide();
          //               $scope.closeModal();
          //               $state.go('sidemenu.vinibar');
          //               $cordovaToast.show('Bien reçu !', 'short', 'top');
          //         }, function (data, status, headers, config) {
          //             Loading.hide();
          //             $cordovaToast.show('Oops, Vous n\'êtes pas connecté :(', 'short', 'top');
          //               // TODO gracefully manage errors/successes
          //                console.log(data);
          //       });
          // }
      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function () {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function () {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function () {
        // Execute action
      });

      // GROUP RATING MODAL
      $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.group.tpl.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        $scope.group = modal;
      });

      // Open & close the modal
      $scope.openGroupModal = function () {
        $scope.invite = { value: [] };
        $scope.updateInviteValue = function (num) {
          $scope.invite = { value: new Array(num) };
          $scope.groupRating = new GroupRating($scope.bottle.wine.uuid, 4, num);
          $ionicScrollDelegate.resize();
        };
        $scope.rating = new Rating($scope.bottle.uuid, $scope.bottle.rating, $scope.bottle.comment);
        $scope.$watch('rating.data.rating', function (newVal, oldVal) {
          if (newVal == 1)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
          if (newVal == 2)  { $scope.literalRating.value = "Non, pas trop mon style";}
          if (newVal == 3)  { $scope.literalRating.value = "J'ai bien aimé ce vin";}
          if (newVal == 4)  { $scope.literalRating.value = "Oui, c’est bien mon style";}
          if (newVal == 5)  { $scope.literalRating.value = "C’est exactement le style que j’aime !";}
        });
        $scope.groupRating = new GroupRating($scope.bottle.wine.uuid, 4);
        $scope.group.show();
      };
      $scope.closeGroupModal = function () {
        $scope.group.hide();
      };

          $scope.rateWines = function () {
            if(ionic.Platform.isWebView()) { //if we use cordova
              if ($cordovaNetwork.isOffline()) {
                // Store Rating and Fake it
                  OfflineQueue.addGroupRating($scope.groupRating);
                  Mixpanel.track('Invited friends to rate', { platform: (settings.desktop) ? 'desktop' : 'app' });
                  $scope.closeGroupModal();
                  Loading.hide();
                  $state.go('sidemenu.vinibar');
              } else {
                Loading.show();
                  // Rate Wine then rate group wines
                  $scope.groupRating.rateWines().then(function () {
                      Mixpanel.track('Invited friends to rate', { platform: (settings.desktop) ? 'desktop' : 'app' });
                      $scope.closeGroupModal();
                      Loading.hide();
                      $state.go('sidemenu.vinibar');
                  });
              }
            } else { // if we are on the web app
                Loading.show();
                  // Rate Wine then rate group wines
                  $scope.groupRating.rateWines().then(function () {
                      Mixpanel.track('Invited friends to rate', { platform: (settings.desktop) ? 'desktop' : 'app' });
                      $scope.closeGroupModal();
                      Loading.hide();
                      $state.go('sidemenu.vinibar');
                  });
              }
          };

      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function () {
        $scope.group.remove();
      });
      // Execute action on hide group
      $scope.$on('group.hidden', function () {
        // Execute action
      });
        // Execute action on remove group
      $scope.$on('group.removed', function () {
          // Execute action
      });
    });