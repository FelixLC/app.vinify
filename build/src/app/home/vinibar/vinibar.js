angular.module('app.vinibar', ['ngResource', 'User', 'ngCordova'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('sidemenu.vinibar', {
          url: "/vinibar?q",
          views: {
            menuContent: {
              controller: 'vinibarCtrl',
              templateUrl: "home/vinibar/vinibar.tpl.html"
            }
          }
      });
 })
.controller('vinibarCtrl', function vinibarCtrl ($scope, $rootScope, $http, $location, $resource, User, Bottles, $stateParams, $cordovaToast, SegmentedControlState) {

  $scope.user = User.getUser();
  $scope.orderReceived = function () {
    User.orderReceived.then(function (response) {
      $scope.user = User.getUser();
    });
  };
  $scope.questionnaire = function () {
    window.open('https://start.vinify.co/#/welcome?r=mobile', '_system', 'location=yes');
  };
  $scope.payOrder = function () {
    window.open('https://start.vinify.co/#/paiement/login', '_system', 'location=yes');
  };
  $scope.getNumber = function (num) {
    var _num = Math.floor(num);
    return new Array(Math.floor(_num));
  };
  $scope.isInteger = function (num) {
    return (Math.floor(num) == num);
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
  Bottles.getList().then(function (response) {
    $scope.bottleList = response.data;
    console.log($scope.bottleList);
  });

  $scope.update = function () {
    Bottles.updateList().then(function (response) {
      $scope.bottleList = response.data;
     // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, function (response) {
      $scope.$broadcast('scroll.refreshComplete');
      $cordovaToast.show('Problème de connexion ...', 'short', 'top');
    });
  };

  $scope.get = function () {
    Bottles.getList();
  };

  console.log($stateParams.q);

  $scope.segmentedControl = {
      value: (SegmentedControlState.value) ? SegmentedControlState.value : 'toDrink'
  };
  $scope.$watch("segmentedControl.value", function (newVal, OldVal) {
    SegmentedControlState.value = newVal;
  });

});