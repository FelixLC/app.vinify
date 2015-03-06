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
            winemakers: function (WinemakerFactory) {
              return WinemakerFactory.query();
            }
          }
      });
  })
  .controller('winemakerCtrl', function vinibarCtrl (
    $scope, toasters, winemakers, $stateParams, WinemakerFactory, Filters, _, settings) {

    var init = function () {
      $scope.winemaker = _.findWhere(winemakers, { uuid: $stateParams.uuid });
      console.log($scope.winemaker);
    };
    init();

  });