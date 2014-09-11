  angular.module( 'app.home', ['User'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
     }])

      .controller( 'homeCtrl', ["$scope", "$rootScope", "$http", "$state", "$window", function homeCtrl( $scope, $rootScope, $http, $state, $window ) {

        $scope.stateGo = function(to) {
          $state.go('sidemenu.' + to);
        };
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
      }]);