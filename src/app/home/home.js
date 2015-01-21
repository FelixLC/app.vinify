  angular.module( 'app.home', ['User', 'Update', 'ngCordova'])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.home', {
              url: "/home",
              views: {
                'menuContent' :{
                  controller: 'homeCtrl',
                  templateUrl: "home/home.tpl.html"
                }
              }
          });
     })

      .controller('homeCtrl', function homeCtrl( $scope, $rootScope, $http, $state, Update, $window, $ionicPlatform, User ) {

        $scope.stateGo = function (to) {
          $state.go('sidemenu.' + to);
        };
        $scope.update = Update.isOutdated;
        // $scope.update = Update.isOutdated;
        $scope.appStore = function () {
          if (ionic.Platform.isIOS()) {
            window.open('https://itunes.apple.com/us/app/vinify/id912757586?mt=8', '_system', 'location=yes');
          } else {
            window.open('https://play.google.com/store/apps/details?id=com.vinify.viniapp.android', '_system', 'location=yes');
          }
        };
        // console.log($rootScope.isOnline);
        // TODO VERIFY WITH STATUS BAR
        var appropriatedHeight =  Math.floor(($scope.windowSize.height  - 44) / 3); //44 because of -1 margin on scroll content
        var thirdHeight = ($scope.windowSize.height  - 44) - 2 * appropriatedHeight;

        $scope.calcHeight = {
          "min-height": appropriatedHeight + 'px'
        };

        $scope.calcThirdHeight = {
          "min-height": thirdHeight + 'px'
        };

        console.log($window.innerHeight);
      });