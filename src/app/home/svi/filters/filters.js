  angular.module('app.filters', [
    'settings',
    'User',
    'Toaster',
    'lodash'
    ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.filter_color', {
              url: "/filtre-couleur",
              views: {
                menuContent: {
                  controller: 'filterCtrl',
                  templateUrl: "home/svi/filters/colors.tpl.html"
                }
              },
              resolve: {
                bottles: function (Bottles) {
                  return Bottles.getList();
                }
              }
          })
          .state('sidemenu.filter_region', {
              url: "/filtre-region",
              views: {
                menuContent: {
                  controller: 'filterCtrl',
                  templateUrl: "home/svi/filters/regions.tpl.html"
                }
              },
              resolve: {
                bottles: function (Bottles) {
                  return Bottles.getList();
                },
                recommandations: function (Bottles) {
                  return Bottles.getRecommendations();
                }
              }
          });
      })
      .controller('filterCtrl', function filterCtrl ($scope, Filters, _) {
        Filters.getRegions(function (regions) {
          $scope.regions = regions;
        });
        $scope.colors = Filters.getColors();
        $scope.setRegions = function (key, value) {
          Filters.setRegions(key, value);
        };
        $scope.setColors = function (key, value) {
          Filters.setColors(key, value);
        };
      })
      .factory('Filters', function (Bottles, _) {
        var filter = {};

        var regions = {};
        var colors = {
          Rouge: true,
          'Rosé': true,
          Blanc: true
        };

        filter.getRegions = function (success) {
          if (!_.isEmpty(regions)) {
            if (success) {
              success(regions);
            }
            return regions;
          } else {
            Bottles.getList().then(function (wineList) {
              Bottles.getRecommendations().then(function (recommendationList) {
                _(wineList.data.results.concat(recommendationList.data))
                                      .pluck('wine')
                                      .pluck('region')
                                      .uniq()
                                      .compact()
                                      .forEach(function (region) {
                                        regions[region] = true;
                                      })
                                      .value();
                if (success) {
                  success(regions);
                }
                return regions;
              });
            });
          }
        };

        filter.setRegions = function (key, value) {
          regions[key] = value;
        };

        filter.getColors = function (success) {
          if (success) {
            success(colors);
          }
          return colors;
        };

        filter.setColors = function (key, value) {
          colors[key] = value;
        };

        return filter;
      });