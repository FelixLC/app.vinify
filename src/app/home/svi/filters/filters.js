  angular.module('app.filters', [
    'settings',
    'User',
    'Toaster',
    'WinemakerFactory',
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
              }
          })
          .state('sidemenu.filter_region', {
              url: "/filtre-region",
              views: {
                menuContent: {
                  controller: 'filterCtrl',
                  templateUrl: "home/svi/filters/regions.tpl.html"
                }
              }
          })
          .state('sidemenu.filter_price', {
              url: "/filtre-prix",
              views: {
                menuContent: {
                  controller: 'filterCtrl',
                  templateUrl: "home/svi/filters/prices.tpl.html"
                }
              }
          });
      })
      .filter('region', function () {
        return function (items, regions) {
          var filtered = [];

          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (regions[item.region]) {
              filtered.push(item);
            }
          }

          return filtered;
        };
      })
      .filter('color', function () {
        return function (items, colors) {
          var filtered = [];

          for (var i = 0; i < items.length; i++) {
            var item = items[i];

            // if all is toggle, let all through
            if (colors.red && colors.white && colors.rose) {

              return items;
            } else {
              if ((colors.red && item.red) || (colors.white && item.white) || (colors.rose && item.rose)) {
                filtered.push(item);
              }
            }
          }

          return filtered;
        };
      })
      .filter('wineColor', function () {
        return function (items, colors) {
          console.log(colors);
          var filtered = [];

          for (var i = 0; i < items.length; i++) {
            var item = items[i];

            // if all is toggle, let all through
            if (colors.red && colors.white && colors.rose) {

              return items;
            } else {
              if ((colors.red && item.wine.color === 'Rouge') || (colors.white && item.wine.color === 'Blanc') ||
                (colors.rose && item.wine.color === 'Rose')) {
                filtered.push(item);
              }
            }
          }

          return filtered;
        };
      })
      .filter('wineRegion', function () {
        return function (items, regions) {
          var filtered = [];

          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (regions[item.wine.region]) {
              filtered.push(item);
            }
          }

          return filtered;
        };
      })
      .filter('nameOrRow', function () {
        return function (items, search) {
          console.log(search);
          var filtered = [];
          var removeAccents = function (string) {
            var strAccents = string.split('');
            var strAccentsOut = new Array (strAccents.length);
            var strAccentsLen = strAccents.length;
            var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
            var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
            for (var y = 0; y < strAccentsLen; y++) {
              if (accents.indexOf(strAccents[y]) != -1) {
                strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
              } else {
                strAccentsOut[y] = strAccents[y];
              }
            }
            return strAccentsOut.join('');
          };
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var winemakerName = removeAccents(item.winemaker_name);
            var appellation = removeAccents(item.appellation);
            var rowStand = item.row + item.stand;
            var rowStandString = rowStand.toString();
            var rowStandSpaced = item.row + ' ' + item.stand;
            var rowStandSpacedString = rowStandSpaced.toString();
            if (!!(winemakerName.toLowerCase().indexOf(search.toLowerCase() || '') !== -1 ||
              appellation.toLowerCase().indexOf(search.toLowerCase() || '') !== -1 ||
              rowStandSpacedString.toLowerCase().indexOf(search.toLowerCase() || '') !== -1 ||
              rowStandString.toLowerCase().indexOf(search.toLowerCase() || '') !== -1)) {
              filtered.push(item);
            }

          }

          return filtered;
        };
      })
      .filter('price', function () {
        return function (items, prices) {
          var filtered = [];

          for (var i = 0; i < items.length; i++) {
            var item = items[i];

            // if all is toggle, let all through
            if (prices.price_level_1 && prices.price_level_2 &&
              prices.price_level_3 && prices.price_level_4 && prices.price_level_5) {

              return items;
            } else {
              if ((prices.price_level_1 && item.price_level_1) ||
                (prices.price_level_2 && item.price_level_2) ||
                (prices.price_level_3 && item.price_level_3) ||
                (prices.price_level_4 && item.price_level_4) ||
                (prices.price_level_5 && item.price_level_5)) {
                filtered.push(item);
              }
            }
          }

          return filtered;
        };
      })
      .controller('filterCtrl', function filterCtrl ($scope, Filters, _) {
        Filters.getRegions(function (regions) {
          $scope.regions = regions;
        });
        $scope.colors = Filters.getColors();
        $scope.prices = Filters.getPrices();

        $scope.selectAllRegions = function () {
          _.forEach($scope.regions, function (value, key) {
            value = true;
            $scope.setRegions(key, value);
          });
        };

        $scope.unselectAllRegions = function () {
          _.forEach($scope.regions, function (value, key) {
            value = false;
            $scope.setRegions(key, value);
          });
        };

        $scope.setRegions = function (key, value) {
          Filters.setRegions(key, value);
        };
        $scope.setColors = function (key, value) {
          Filters.setColors(key, value);
        };
      })

      .factory('Filters', function (WinemakerFactory, _) {
        var filter = {};

        var regions = {
          Alsace: true,
          Armagnac: true,
          Beaujolais: true,
          Bordeaux: true,
          Bourgogne: true,
          Bugey: true,
          Calvados: true,
          Champagne: true,
          Charentes: true,
          Cognac: true,
          Corse: true,
          Jura: true,
          Languedoc: true,
          Provence: true,
          Roussillon: true,
          Savoie: true,
          'Sud-ouest': true,
          'Vallée de la Loire': true,
          'Vallée du Rhône': true
        };

        var prices = {
          price_level_1: true,
          price_level_2: true,
          price_level_3: true,
          price_level_4: true,
          price_level_5: true
        };

        var colors = {
          red: true,
          rose: true,
          white: true
        };

        filter.getRegions = function (success) {
          if (success) {
            success(regions);
          }
          return regions;
          // if (!_.isEmpty(regions)) {
          //   if (success) {
          //     success(regions);
          //   }
          //   return regions;
          // } else {
          //   WinemakerFactory.queryAll().then(function (winemakers) {
          //     _(winemakers.data)
          //                           .pluck('region')
          //                           .uniq()
          //                           .compact()
          //                           .forEach(function (region) {
          //                             regions[region] = true;
          //                           })
          //                           .value();
          //     if (success) {
          //       success(regions);
          //     }
          //     return regions;

          //   });
          // }
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

        filter.getPrices = function (success) {
          if (success) {
            success(prices);
          }
          return prices;
        };

        filter.setPrices = function (key, value) {
          prices[key] = value;
        };

        return filter;
      });