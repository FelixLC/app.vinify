angular.module('app.winemaker', [ 'WinemakerFactory', 'ngCordova', 'Toaster', 'settings', 'lodash' ])
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
    $scope, toasters, winemaker, $stateParams, WinemakerFactory, Filters, _, settings, $ionicModal) {

    var init = function () {
      $scope.winemaker = winemaker.data;
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
      $scope.wineModal.show();
    };

    $scope.closeWineModal = function (comment, wine) {
      $scope.wineModal.hide();
    };

  });