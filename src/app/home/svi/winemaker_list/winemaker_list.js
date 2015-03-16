angular.module('app.winemaker_list', [
  'WinemakerFactory', 'ngCordova', 'Toaster', 'settings', 'lodash', 'app.filters', 'app.winemaker' ])

  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.winemaker_list', {
          url: "/liste-producteurs",
          views: {
            menuContent: {
              controller: 'winemakerListCtrl',
              templateUrl: 'home/svi/winemaker_list/winemaker_list.tpl.html'
            }
          },
          resolve: {
            winemakers: function (WinemakerFactory) {
              return WinemakerFactory.queryAll();
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

  .controller('winemakerListCtrl', function winemakerListCtrl (
    $scope, WinemakerFactory, winemakers, toasters, Filters, _, settings, regions, colors, prices,
    $filter, $window, $ionicScrollDelegate) {

    var init = function () {
      $scope.search = {
        value: ''
      };
      $scope.winemakers = $filter('price')(
        $filter('color')(
          $filter('region')(winemakers.data, regions),
        colors),
      prices);
      $scope.collectionWidth = $window.innerWidth;
    };
    init();

    $scope.searchWinemakers = function (search) {
      $scope.winemakers = $filter('nameOrRow')(
        $filter('price')(
          $filter('color')(
            $filter('region')(winemakers.data, regions),
            colors),
          prices),
        search);
      $ionicScrollDelegate.resize();
    };

    $scope.unSearch = function () {
      init();
      $ionicScrollDelegate.resize();
    };


  });