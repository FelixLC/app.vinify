  angular.module( 'app.vinibar', ['ngResource', 'User'])
      .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.vinibar', {
              url: "/vinibar?q",
              views: {
                'menuContent' :{
                  controller: 'vinibarCtrl',
                  templateUrl: "home/vinibar/vinibar.tpl.html"
                }
              }
          });
     })
      .controller( 'vinibarCtrl', function vinibarCtrl( $scope, $rootScope, $http, $location, $resource, User, Bottles, $stateParams ) {

            $scope.getNumber = function(num) {
                return new Array(num);
            };

            $scope.search = {
              toggle: false,
              value: ""
            };

            // TODO manage accents
          $scope.searchFilter = function (bottle) {
              return !!((bottle.wine.display_name.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1 || bottle.wine.appellation.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1 || bottle.wine.region.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1));
          };

           // We can retrieve a collection from the server
           Bottles.getList().then(function(response){
              $scope.bottleList = response.data;
           });

           $scope.update = function() {
            Bottles.updateList().then(function(response){
              $scope.bottleList = response.data;
             // Stop the ion-refresher from spinning
             $scope.$broadcast('scroll.refreshComplete');
             },function(response){
              $scope.$broadcast('scroll.refreshComplete');
              $cordovaToast.show('Problème de connexion ...', 'short', 'top');
             });
           };

           $scope.get = function() {
            Bottles.getList();
           };

           console.log($stateParams.q);

           $scope.segmentedControl = {
              value: ($stateParams.q == 'rated') ? 'rated' : 'toDrink'
           };

        });