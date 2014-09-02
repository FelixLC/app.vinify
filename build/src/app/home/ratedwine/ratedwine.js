  angular.module( 'app.ratedwine', ['ngResource', 'User', 'Rating', 'ngCordova', 'ionic'])
      .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.ratedwine', {
              url: '/ratedwine/{uuid:[^/]*}',
              views: {
                'menuContent' :{
                  controller: 'ratedwineCtrl',
                  templateUrl: "home/ratedwine/ratedwine.tpl.html"
                }
              }
          });
     })
      .controller( 'ratedwineCtrl', function ratedwineCtrl( $scope, $stateParams , $resource, $state , Bottles, $ionicModal, Rating, GroupRating,  $cordovaSocialSharing, $ionicPlatform) {
            $scope.id = $stateParams.uuid;
            // We can retrieve a collection from the server

          var getById = function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].uuid === id) {
                    return arr[d];
                }
            }
          };

          $scope.share = {
            twitter: null,
            facebook: null,
            mail: undefined
          };

          if (ionic.Platform.isWebView()) {
            $scope.share.twitter = function () {
                  var message = "Je viens de noter le" + $scope.bottle.wine.display_name + ". Super découverte grâce à @vinifyco !";
                  $cordovaSocialSharing.shareViaTwitter(message).then(function(result) {
                      // Success!
                  }, function(err) {
                      // An error occured. Show a message to the user
                  });
            };

            $scope.share.facebook = function () {
                  var message = "Je viens de noter le" + $scope.bottle.wine.display_name + "Super découverte grâce à @vinify !";
                  $cordovaSocialSharing.shareViaFacebook(message).then(function(result) {
                      // Success!
                  }, function(err) {
                      // An error occured. Show a message to the user
                  });
            };

            $scope.share.mail = function () {
                  var message = "Je viens de noter le" + $scope.bottle.wine.display_name + "Super découverte grâce à @vinify !";
                  var subject = $scope.bottle.wine.display_name + " | Vinify";
                  $cordovaSocialSharing.shareViaEmail(message, subject).then(
                    function(result) {
                      // Success!
                    }, function(err) {
                      // An error occured. Show a message to the user
                    });
            };
          }

           Bottles.getList().then(function(response){
              $scope.bottle = getById(response.data.results, $scope.id);
              // arrays for ng-repeat stars
              $scope.star = {
                full: new Array($scope.bottle.rating),
                outline: new Array(5- $scope.bottle.rating)
              };
              console.log($scope.star);
           });

            // RATING SETTINGS
            $scope.rate = 3;
            $scope.max = 5;

            $scope.literalRating = {};

            // RATING MODAL
            $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.tpl.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $scope.modal = modal;
            });

            // Open & close the modal
            $scope.openModal = function() {
              $scope.rating = new Rating($scope.bottle.uuid, $scope.bottle.rating, $scope.bottle.comment);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal == 1)  { $scope.literalRating.value = "Je n'ai pas aimé";}
                if (newVal == 2)  { $scope.literalRating.value = "Sans plus";}
                if (newVal == 3)  { $scope.literalRating.value = "J'ai aimé ce vin";}
                if (newVal == 4)  { $scope.literalRating.value = "Super";}
                if (newVal == 5)  { $scope.literalRating.value = "Incroyable !";}
              });
              $scope.modal.show();
            };
            $scope.closeModal = function() {
              $scope.modal.hide();
            };

            $scope.rateWine = function() {
                $scope.rating.updateWine().then(function(response){
                                $scope.closeModal();
                                console.log(response);
                                $state.go('sidemenu.vinibar');
                });
            };

            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
              $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
              // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
              // Execute action
            });

            // GROUP RATING MODAL
            $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.group.tpl.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $scope.group = modal;
            });

            // Open & close the modal
            $scope.openGroupModal = function() {
              $scope.rating = new Rating($scope.bottle.uuid, $scope.bottle.rating, $scope.bottle.comment);
              $scope.groupRating = new GroupRating($scope.bottle.wine.uuid, 4);
              $scope.group.show();
            };
            $scope.closeGroupModal = function() {
              $scope.group.hide();
            };

            $scope.rateWines = function() {
              // Rate wine then rate group wines
              $scope.groupRating.rateWines().then(function(){
                $scope.rating.updateWine().then(function(){
                      $scope.closeGroupModal();
                });
              });
            };

            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
              $scope.group.remove();
            });
            // Execute action on hide group
            $scope.$on('group.hidden', function() {
              // Execute action
            });
            // Execute action on remove group
            $scope.$on('group.removed', function() {
              // Execute action
            });
        });