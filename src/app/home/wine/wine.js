  angular.module( 'app.wine', ['ngResource', 'User', 'Rating', 'ionic.rating', 'Offline'])
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
      .controller( 'wineCtrl', function wineCtrl($scope, $rootScope, $stateParams , $resource, $state , Bottles, $ionicModal, Rating, GroupRating, OfflineQueue, $ionicLoading, $cordovaToast) {
            $scope.id = $stateParams.uuid;
            // We can retrieve a collection from the server

          var getById = function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].uuid === id) {
                    return arr[d];
                }
            }
          };

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
              // if (true) {
                    $scope.rating.rateWine().then(function(response){
                                  $scope.closeModal();
                                  $state.go('sidemenu.vinibar');
                                  $cordovaToast.show('Ratings Sent !', 'short', 'top');
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
              $scope.rating = new Rating($scope.bottle.uuid, 4);
              $scope.groupRating = new GroupRating($scope.bottle.wine.uuid, 4);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal == 1)  { $scope.literalRating.value = "Je n'ai pas aimé";}
                if (newVal == 2)  { $scope.literalRating.value = "Sans plus";}
                if (newVal == 3)  { $scope.literalRating.value = "J'ai aimé ce vin";}
                if (newVal == 4)  { $scope.literalRating.value = "Super";}
                if (newVal == 5)  { $scope.literalRating.value = "Incroyable !";}
              });
              $scope.group.show();
            };
            $scope.closeGroupModal = function() {
              $scope.group.hide();
            };

            $scope.rateWines = function() {
              if (true) {
                  // Rate Wine then rate group wines
                  $scope.groupRating.rateWines().then(function(){
                    $scope.rating.rateWine().then(function(response){
                          $scope.closeGroupModal();
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