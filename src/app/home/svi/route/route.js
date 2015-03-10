angular.module('app.svi', [ 'WinemakerFactory',
                                                      'ngCordova',
                                                      'Toaster',
                                                      'settings',
                                                      'lodash',
                                                      'app.filters',
                                                      'app.winemaker' ])

  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.svi', {
          url: "/parcours",
          views: {
            menuContent: {
              controller: 'sviCtrl',
              templateUrl: 'home/svi/route/route.tpl.html'
            }
          },
          resolve: {
            winemakers: function (WinemakerFactory) {
              return WinemakerFactory.query();
            }
          }
      });
  })
  .filter('regionFilter', function (Filters) {
    return function (items) {
      var filtered = [];
      Filters.getRegions(function (regions) {
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (regions[item.region]) {
            filtered.push(item);
          }
        }
      });
      return filtered;
    };
  })
  .filter('colorFilter', function (Filters) {
    return function (items) {
      var filtered = [];
      Filters.getColors(function (colors) {
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (colors[item.wine.color]) {
            filtered.push(item);
          }
        }
      });
      return filtered;
    };
  })
  .controller('sviCtrl', function vinibarCtrl (
    $scope, winemakers, toasters, Filters, _, settings) {

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