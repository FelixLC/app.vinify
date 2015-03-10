angular.module('app.winemaker_list', [
  'WinemakerFactory', 'ngCordova', 'Toaster', 'settings', 'lodash', 'app.filters', 'app.winemaker' ])

  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.winemaker_list', {
          url: "/liste-producteurs",
          views: {
            menuContent: {
              controller: 'sviCtrl',
              templateUrl: 'home/svi/winemaker_list/winemaker_list.tpl.html'
            }
          },
          resolve: {
            winemakers: function (WinemakerFactory) {
              return WinemakerFactory.queryAll();
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
    $scope, WinemakerFactory, winemakers, toasters, Filters, _, settings, $filter) {

    var init = function () {
      $scope.winemakers = $filter('regionFilter')(winemakers);
      console.log(winemakers);
    };
    init();

  });