  angular.module( 'app.home', ['User', 'Update', 'ngCordova'])
      .config(function($stateProvider, $urlRouterProvider) {
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

      .controller( 'homeCtrl', function homeCtrl( $scope, $rootScope, $http, $state, Update, $window, $ionicPlatform, User, $cordovaDialogs ) {

        $scope.stateGo = function(to) {
          $state.go('sidemenu.' + to);
        };
        $ionicPlatform.ready(function(){
          if(ionic.Platform.isWebView()) {
            $cordovaDialogs.prompt('msg', 'title', ['btn 1','btn 2'], 'default text')
              .then(function(result) {
                var input = result.input1;
                // no button = 0, 'OK' = 1, 'Cancel' = 2
                var btnIndex = buttonIndex;
              });
          }
        });
        // console.log($rootScope.isOnline);
        // TODO VERIFY WITH STATUS BAR
        var appropriatedHeight = Math.round(($scope.windowSize.height  - 43) / 3); //43 because of -1 margin on scroll content
        var thirdHeight = ($scope.windowSize.height  - 43) - 2*appropriatedHeight;

        $scope.calcHeight = {
          "min-height": appropriatedHeight + 'px'
        };

        $scope.calcThirdHeight = {
          "min-height": thirdHeight + 'px'
        };

        console.log($window.innerHeight);
      });