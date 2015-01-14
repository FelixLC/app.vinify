  angular.module('app.sidemenu', [ 'security', 'settings', 'User' ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('sidemenu', {
          // url: "/event",
          abstract: true,
          templateUrl: "sidemenu/sidemenu.tpl.html",
          controller: 'sidemenuCtrl'
        });
    })

      .controller('sidemenuCtrl', function sidemenuCtrl ($scope, $http, $location, security, settings, User, $ionicHistory) {

        $scope.logOut = function () {
          settings.test = false;
          $ionicHistory.clearCache();
          security.logout('/login');
        };

      });