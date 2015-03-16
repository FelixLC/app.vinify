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
            recommendations: function (WinemakerFactory) {
              return WinemakerFactory.getRecommendations();
            },
            regions: function (Filters) {
              return Filters.getRegions();
            },
            colors: function (Filters) {
              return Filters.getColors();
            },
            prices: function (Filters) {
              return Filters.getPrices();
            }
          }
      });
  })
  .controller('sviCtrl', function sviCtrl (
    $scope, recommendations, toasters, _, settings, regions, colors, prices, $filter) {

    var result =
      $filter('price')($filter('color')($filter('region')(recommendations.data.winemakers, regions), colors), prices);

    $scope.winemakers = result.slice(0, 20);

    $scope.getMore = function (winemakers) {
      $scope.winemakers = result.slice(0, winemakers.length + 20);
    };

  });