  angular.module( 'app.sidemenu', ['security'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('sidemenu', {
          // url: "/event",
          abstract: true,
          templateUrl: "sidemenu/sidemenu.tpl.html",
          controller: 'sidemenuCtrl'
        });
}])

      .controller( 'sidemenuCtrl', ["$scope", "$http", "$location", "security", function sidemenuCtrl( $scope, $http, $location, security ) {

        $scope.logOut = function () {
          security.logout('/login');
        };

      }]);