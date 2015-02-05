  angular.module('app.wine', [
    'ngResource',
    'User',
    'Rating',
    'ionic.rating',
    'Offline',
    'Analytics',
    'Loading',
    'ngCordova',
    'Toaster',
    'material.components.slider',
    'settings',
    'Analytics'
    ])
    .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
      $stateProvider
        .state('sidemenu.wine', {
            url: '/wine/{uuid:[^/]*}',
            views: {
              menuContent: {
                controller: 'wineCtrl',
                templateUrl: function () {
                  return (window.innerWidth > 767) ? "home/wine/wine.desktop.tpl.html" :
                                                                          "home/wine/wine.tpl.html";
                }
              }
            }
        })
        .state('sidemenu.wine_know_more', {
            url: '/wine-more/{uuid:[^/]*}',
            views: {
              menuContent: {
                controller: 'wineCtrl',
                templateUrl: function () {
                  return (deskProvider.$get()) ? "home/wine/wine-more.desktop.tpl.html" :
                                                                              "home/wine/wine-more.tpl.html";
                }
              }
            }
            // resolve: {
            //   bottle: function (Bottles, $stateParams) {
            //     Bottles.getList().then(function (response) {
            //       for (var d = 0, len = response.data.results.length; d < len; d += 1) {
            //         console.log(response.data.results);
            //         if (response.data.results[d].uuid === $stateParams.uuid) {
            //           return response.data.results[d];
            //         }
            //       }
            //     });
            //   }
            // }
        });
    })
    .controller('wineCtrl', function wineCtrl ($scope,
                                                                                      $stateParams,
                                                                                      $state,
                                                                                      Bottles,
                                                                                      $ionicModal,
                                                                                      Rating,
                                                                                      GroupRating,
                                                                                      OfflineQueue,
                                                                                      $ionicLoading,
                                                                                      $cordovaToast,
                                                                                      $ionicPlatform,
                                                                                      $cordovaNetwork,
                                                                                      Loading,
                                                                                      SegmentedControlState,
                                                                                      toasters,
                                                                                      settings,
                                                                                      $ionicScrollDelegate,
                                                                                      Mixpanel) {
      $scope.id = $stateParams.uuid;
      var getById = function (arr, id) {
        for (var d = 0, len = arr.length; d < len; d += 1) {
          if (arr[d].uuid === id) {
            return arr[d];
          }
        }
      };
      Bottles.getList().then(function (response) {
        $scope.bottle = getById(response.data.results, $scope.id);
        $scope.rating = new Rating($scope.bottle.uuid, 4);
        console.log($scope.bottle);
      });
      $scope.ratingSlide = 1;
      $scope.rateStars = {
        value: 4
      };
      $scope.getRange = function (bottle) {
        if (bottle.public_price < 12) {
          return new Array(1);
        } else if (bottle.public_price < 15) {
          return new Array(2);
        } else if (bottle.public_price < 18) {
          return new Array(3);
        } else {
          return new Array(4);
        }
      };
      $scope.showHalf = false;
      $scope.star = {
        full: new Array(4),
        outline: new Array(1)
      };

      $scope.$watch('rating.data.rating', function (newVal, oldVal) {
        if (newVal < 2)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
        if (newVal > 1.5 && newVal < 3)  { $scope.literalRating.value = "Non, pas trop mon style";}
        if (newVal > 2.5 && newVal < 4)  { $scope.literalRating.value = "Sympa, à l'occasion";}
        if (newVal > 3.5 && newVal < 5)  { $scope.literalRating.value = "Bien vu, j'aime beaucoup";}
        if (newVal  == 5)  { $scope.literalRating.value = "Bravo, j'adore !";}
      });

      // RATING SETTINGS
      $scope.rate = 3;
      $scope.max = 5;

      $scope.literalRating = {};
          // We can retrieve a collection from the server

      $scope.$watch('rateStars.value', function (newValue, oldValue, scope) {
        console.log(newValue);
        // Toggle half star if we have a non integer rating
        $scope.showHalf = (Math.floor(newValue) != newValue) ? true : false;
        $scope.star = {
          full: new Array(Math.floor(newValue)),
          outline: (Math.floor(newValue) != newValue) ?  new Array(4 - Math.floor(newValue)) : new Array(5 - Math.floor(newValue))
        };
      });

      console.log(settings.width);

          // RATING MODAL
          $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.tpl.html', {
            scope: $scope,
            animation: 'slide-in-up'
          }).then(function (modal) {
            $scope.modal = modal;
          });

          // Open & close the modal
          $scope.openModal = function () {
            $scope.rating = new Rating($scope.bottle.uuid, 4);
            $scope.$watch('rating.data.rating', function (newVal, oldVal) {
              if (newVal < 2)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
              if (newVal > 1.5 && newVal < 3)  { $scope.literalRating.value = "Non, pas trop mon style";}
              if (newVal > 2.5 && newVal < 4)  { $scope.literalRating.value = "Sympa, à l'occasion";}
              if (newVal > 3.5 && newVal < 5)  { $scope.literalRating.value = "Bien vu, j'aime beaucoup";}
              if (newVal  == 5)  { $scope.literalRating.value = "Bravo, j'adore !";}
            });
            $scope.modal.show();
          };
          $scope.closeModal = function () {
            $scope.modal.hide();
          };

          $scope.rateWine = function () {
            if(ionic.Platform.isWebView()) { //if we use cordova
              if ($cordovaNetwork.isOffline()) {//if we are offline
                // Store Rating and Fake it
                  OfflineQueue.addRating($scope.rating);
                  Bottles.fakeRating($scope.rating).then(function (response) {
                                  $scope.closeModal();
                                  SegmentedControlState.value = 'rated';
                                  $state.go('sidemenu.vinibar');
                                  Mixpanel.track('Rated Bottle', {
                                    platform: (settings.desktop) ? 'desktop' : 'app'
                                  });
                                  $cordovaToast.show('Note Enregistrée ...', 'short', 'top');
                  });

              } else {//if we are online
                    Loading.show();
                    $scope.rating.rateWine().then(function (data, status, headers, config) {
                                                                            Loading.hide();
                                                                            $scope.closeModal();
                                                                            SegmentedControlState.value = 'rated';
                                                                            $state.go('sidemenu.vinibar');
                                                                            Mixpanel.track('Rated Bottle', {
                                                                              platform: (settings.desktop) ? 'desktop' : 'app'
                                                                            });
                                                                            toasters.pop('Bien reçu !', 'top', 'success');
                                                                      }, function (data, status, headers, config) {
                                                                          Loading.hide();
                                                                          toasters.pop('Oops, Vous n\'êtes pas connecté', 'top', 'info');
                                                                            // TODO gracefully manage errors/successes
                                                                          console.log(data);
                                                                        });
              }
            } else { // if we are on the web app
                    Loading.show();
                    $scope.rating.rateWine().then(function (data, status, headers, config) {
                                                                            Loading.hide();
                                                                            $scope.closeModal();
                                                                            SegmentedControlState.value = 'rated';
                                                                            $state.go('sidemenu.vinibar');
                                                                            toasters.pop('Bien reçu !', 'top', 'success');
                                                                            Mixpanel.track('Rated Bottle', {
                                                                              platform: (settings.desktop) ? 'desktop' : 'app'
                                                                            });
                                                                      }, function (data, status, headers, config) {
                                                                          Loading.hide();
                                                                          toasters.pop('Oops, Vous n\'êtes pas connecté', 'top', 'info');
                                                                            // TODO gracefully manage errors/successes
                                                                             console.log(data);
                                                                        });
            }
          };

          //Cleanup the modal when we're done with it!
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
            $scope.rating = new Rating($scope.bottle.uuid, 4);
            $scope.$watch('rating.data.rating', function (newVal, oldVal) {
              if (newVal < 2)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
              if (newVal > 1.5 && newVal < 3)  { $scope.literalRating.value = "Non, pas trop mon style";}
              if (newVal > 2.5 && newVal < 4)  { $scope.literalRating.value = "Sympa, à l'occasion";}
              if (newVal > 3.5 && newVal < 5)  { $scope.literalRating.value = "Bien vu, j'aime beaucoup";}
              if (newVal  == 5)  { $scope.literalRating.value = "Bravo, j'adore !";}
            });
            $scope.group.show();
          };
          $scope.closeGroupModal = function () {
            $scope.group.hide();
          };

          $scope.rateWines = function () {
            if(ionic.Platform.isWebView()) { //if we use cordova
              if ($cordovaNetwork.isOffline()) {
                // Store Rating and Fake it
                  OfflineQueue.addRating($scope.rating);
                  OfflineQueue.addGroupRating($scope.groupRating);
                  Bottles.fakeRating($scope.rating).then(function (response) {
                  Mixpanel.track('Invited friends to rate', { platform: (settings.desktop) ? 'desktop' : 'app' });
                                  $scope.closeGroupModal();
                                  $state.go('sidemenu.vinibar');
                  });
              } else {
                Loading.show();
                  // Rate Wine then rate group wines
                  $scope.groupRating.rateWines().then(function () {
                    $scope.rating.rateWine().then(function (response) {
                    Mixpanel.track('Invited friends to rate', { platform: (settings.desktop) ? 'desktop' : 'app' });
                          $scope.closeGroupModal();
                          Loading.hide();
                          $state.go('sidemenu.vinibar');
                    });
                  });
              }
            } else { // if we are on the web app
                Loading.show();
                  // Rate Wine then rate group wines
                  $scope.groupRating.rateWines().then(function () {
                    $scope.rating.rateWine().then(function (response) {
                    Mixpanel.track('Invited friends to rate', { platform: (settings.desktop) ? 'desktop' : 'app' });
                          $scope.closeGroupModal();
                          Loading.hide();
                          $state.go('sidemenu.vinibar');
                    });
                  });
              }
          };

          //Cleanup the modal when we're done with it!
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