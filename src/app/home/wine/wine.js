  angular.module( 'app.wine', ['ngResource', 'User', 'Rating', 'ionic.rating', 'Offline', 'Loading', 'ngCordova'])
      .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.wine', {
              url: '/wine/{uuid:[^/]*}',
              views: {
                'menuContent' :{
                  controller: 'wineCtrl',
                  templateUrl: "home/wine/wine.tpl.html"
                }
              }
          });
     })
      .controller( 'wineCtrl', function wineCtrl($scope, $rootScope, $stateParams , $resource, $state , Bottles, $ionicModal, Rating, GroupRating, OfflineQueue, $ionicLoading, $cordovaToast, Loading) {
            $scope.id = $stateParams.uuid;
            // We can retrieve a collection from the server

          var getById = function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].uuid === id) {
                    return arr[d];
                }
            }
          };

          $scope.rateStars = {
            value: 4
          };
          $scope.showHalf = false;
          $scope.star = {
            full: new Array(4),
            outline: new Array(1)
          };

          $scope.$watch('rateStars.value', function(newValue, oldValue, scope) {
            console.log(newValue);
            // Toggle half star if we have a non integer rating
            $scope.showHalf = (Math.floor(newValue)!=newValue) ? true : false;
            $scope.star = {
              full: new Array(Math.floor(newValue)),
              outline: (Math.floor(newValue)!=newValue) ?  new Array(4-Math.floor(newValue)) : new Array(5-Math.floor(newValue))
            };
          });

           Bottles.getList().then(function(response){
              $scope.bottle = getById(response.data.results, $scope.id);
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
              $scope.rating = new Rating($scope.bottle.uuid, 4);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal < 2)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
                if (newVal > 1.5 && newVal < 3)  { $scope.literalRating.value = "Non, pas trop mon style";}
                if (newVal > 2.5 && newVal < 4)  { $scope.literalRating.value = "J'ai bien aimé ce vin";}
                if (newVal > 3.5 && newVal < 5)  { $scope.literalRating.value = "Oui, c’est bien mon style";}
                if (newVal  == 5)  { $scope.literalRating.value = "C’est exactement le style que j’aime !";}
              });
              $scope.modal.show();
            };
            $scope.closeModal = function() {
              $scope.modal.hide();
            };

            $scope.rateWine = function() {
              // if (true) {
                    Loading.show();
                    $scope.rating.rateWine().then(function(data, status, headers, config) {
                                                                            Loading.hide();
                                                                            $scope.closeModal();
                                                                            $state.go('sidemenu.vinibar');
                                                                            $cordovaToast.show('Bien reçu !', 'short', 'top');
                                                                      }, function(data, status, headers, config) {
                                                                          Loading.hide();
                                                                          $cordovaToast.show('Oops, Vous n\'êtes pas connecté :(', 'short', 'top').then(function(success) {
                                                                          }, function (error) {
                                                                          // error
                                                                          });
                                                                            // TODO gracefully manage errors/successes
                                                                             console.log(data);
                                                                        });

              // } else {
              //   // Store Rating and Fake it
              //     OfflineQueue.addRating($scope.rating);
              //     Bottles.fakeRating($scope.rating).then(function(response){
              //                     $scope.closeModal();
              //                     $state.go('sidemenu.vinibar');
              //                     $cordovaToast.show('Offline Rating ...', 'short', 'top');
              //     });
              // }
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
              $scope.invite = {value: []};
              $scope.updateInviteValue = function(num){
                $scope.invite = {value: new Array(num)};
                $scope.groupRating = new GroupRating($scope.bottle.wine.uuid, 4, num);
              };
              $scope.rating = new Rating($scope.bottle.uuid, 4);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal == 1)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
                if (newVal == 2)  { $scope.literalRating.value = "Non, pas trop mon style";}
                if (newVal == 3)  { $scope.literalRating.value = "J'ai bien aimé ce vin";}
                if (newVal == 4)  { $scope.literalRating.value = "Oui, c’est bien mon style";}
                if (newVal == 5)  { $scope.literalRating.value = "C’est exactement le style que j’aime !";}
              });
              $scope.group.show();
            };
            $scope.closeGroupModal = function() {
              $scope.group.hide();
            };

            $scope.rateWines = function() {
              if (true) {
                Loading.show();
                  // Rate Wine then rate group wines
                  $scope.groupRating.rateWines().then(function(){
                    $scope.rating.rateWine().then(function(response){
                          $scope.closeGroupModal();
                          Loading.hide();
                          $state.go('sidemenu.vinibar');
                    });
                  });
              } else {
                // Store Rating and Fake it
                  OfflineQueue.addRating($scope.rating);
                  OfflineQueue.addGroupRating($scope.groupRating);
                  Bottles.fakeRating($scope.rating).then(function(response){
                                  $scope.closeGroupModal();
                                  $state.go('sidemenu.vinibar');
                  });
              }
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