angular.module('app.svi_menu', [
  'WinemakerFactory', 'ngCordova', 'Toaster', 'settings', 'lodash', 'app.winemaker_list' ])

  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.svi_menu', {
          url: "/salon-vignerons-independants",
          views: {
            menuContent: {
              controller: 'sviMenuCtrl',
              templateUrl: 'home/svi/svi_menu.tpl.html'
            }
          }
      });
  })
  .controller('sviMenuCtrl', function sviMenuCtrl ($scope) {

    var init = function () {
    };
    init();

    // 44 because of -1 margin on scroll content
    var appropriatedHeight =  Math.floor(($scope.windowSize.height  - 44) / 3);
    var thirdHeight = ($scope.windowSize.height  - 44) - 2 * appropriatedHeight;

    $scope.calcHeight = {
      "min-height": appropriatedHeight + 'px'
    };

    $scope.calcThirdHeight = {
      "min-height": thirdHeight + 'px'
    };

  });