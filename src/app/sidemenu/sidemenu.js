  angular.module('app.sidemenu', [ 'security', 'settings', 'User', 'Update', 'ngCordova' ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('sidemenu', {
          // url: "/event",
          abstract: true,
          templateUrl: "sidemenu/sidemenu.tpl.html",
          controller: 'sidemenuCtrl'
        });
    })

      .controller('sidemenuCtrl', function sidemenuCtrl ($scope, $http, $location, security, settings, User, $ionicHistory, $ionicPlatform, Update, $cordovaSocialSharing) {

        $scope.logOut = function () {
          settings.test = false;
          $ionicHistory.clearCache();
          security.logout('/login');
        };

        if (ionic.Platform.isWebView()) {

          $scope.feedback = function () {
            var message = "Bonjour, \n \n Version:" + Update.version;
            var subject = "Feedback App | Vinify";
            $cordovaSocialSharing.shareViaEmail(message, subject, [ 'charlotte@vinify.co' ]).then(
              function (result) {
                // Success!
              }, function (err) {
                // An error occured. Show a message to the user
              });
          };
        }

      });