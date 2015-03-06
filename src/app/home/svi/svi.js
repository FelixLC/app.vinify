angular.module('app.svi', [ 'WinemakerFactory', 'ngCordova', 'Toaster', 'settings', 'lodash', 'sidemenu.filters' ])
  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.svi', {
          url: "/salon-vignerons-independants",
          views: {
            menuContent: {
              controller: 'sviCtrl',
              templateUrl: 'home/svi/svi.tpl.html'
            }
          },
          resolve: {
            winemakers: function (WinemakerFactory) {
              return WinemakerFactory.get();
            }
          }
      });
  })
  .controller('sviCtrl', function vinibarCtrl ($scope,
                                                                                    winemakers,
                                                                                    toasters,
                                                                                    Filters,
                                                                                    _,
                                                                                    settings) {

    var init = function () {
      $scope.winemakers = winemakers;
    };
    init();

    $scope.hasColor = function (winemaker) {
      return {
        red: _(winemaker.wines).pluck('color').includes('Rouge'),
        white: _(winemaker.wines).pluck('color').includes('Blanc'),
        rose: _(winemaker.wines).pluck('color').includes('Rosé')
      };
    };

  });