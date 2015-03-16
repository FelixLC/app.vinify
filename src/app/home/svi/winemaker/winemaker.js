angular.module('app.winemaker', [ 'WinemakerFactory', 'LikeFactory', 'ngCordova', 'Toaster', 'settings', 'lodash' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('sidemenu.winemaker', {
          url: "/vigneron-independant/:uuid",
          views: {
            menuContent: {
              controller: 'winemakerCtrl',
              templateUrl: 'home/svi/winemaker/winemaker.tpl.html'
            }
          },
          resolve: {
            winemaker: function (WinemakerFactory, $stateParams) {
              return WinemakerFactory.getWinemaker($stateParams.uuid);
            }
          }
      });
  })
  .controller('winemakerCtrl', function winemakerCtrl (
    $scope, $state, toasters, winemaker, $stateParams, WinemakerFactory, Filters, _, settings, $ionicModal, Like) {

    var init = function () {
      $scope.winemaker = winemaker.data;
      $scope.isRecommended = WinemakerFactory.isRecommended;
    };
    init();

    //  UPDATE MODAL
    $ionicModal.fromTemplateUrl('home/svi/winemaker/wine.modal.tpl.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.wineModal = modal;
    });

    //  Open & close the modal
    $scope.openWineModal = function (wine) {
      $scope.wine = wine;

      $scope.likeBottle = function (bottle) {
        bottle.like = 1;
      };

      $scope.dislikeBottle = function (bottle) {
        bottle.like = -1;
      };

      $scope.bottle = new Like (wine.uuid, {
        like: wine.svi_bottle ? wine.svi_bottle.like : 0,
        comment: wine.svi_bottle ? wine.svi_bottle.comment : ''
      });
      $scope.wineModal.show();
    };

    $scope.closeWineModal = function (comment, wine) {
      $scope.wineModal.hide();
    };

    $scope.likeWineModal = function (bottle) {
      bottle.likeAndComment(
        function (response) {
          $scope.winemaker = response;
          $scope.wineModal.hide();
        },
        function (error) {
          toasters.pop('Oops, une erreur est survenue', 'bottom', 'info');
        });
    };

    $scope.goToWinemaker = function (uuid) {
      $state.go('sidemenu.winemaker', { uuid: uuid });
      $scope.wineModal.hide();
    };
  });