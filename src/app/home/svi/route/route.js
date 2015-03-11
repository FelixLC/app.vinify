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
    console.log(recommendations);
    var init = function () {
      $scope.winemakers =
        $filter('price')($filter('color')($filter('region')(recommendations.data.winemakers, regions), colors), prices);
    };
    init();

  });