angular.module('app.vinibar', [ 'ngResource', 'User', 'ngCordova', 'Toaster', 'settings' ])
  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.vinibar', {
          url: "/vinibar?q",
          views: {
            menuContent: {
              controller: 'vinibarCtrl',
              templateUrl: function () {
                return (deskProvider.$get()) ? "home/vinibar/vinibar.desktop.tpl.html" :
                                                                            "home/vinibar/vinibar.tpl.html";
              }
            }
          },
          resolve: {
            bottles: function (Bottles) {
              return Bottles.getList();
            }
          }
      });
  })
  .directive('focusOn', function () {
    return function (scope, elem, attr) {
      scope.$on('focusOn', function (e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  })
  .factory('focus', function ($rootScope, $timeout) {
    return function (name) {
      $timeout(function () {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  })
.controller('vinibarCtrl', function vinibarCtrl ($scope, $rootScope, $http, $location, $resource, User, Bottles, bottles, $stateParams, $cordovaToast, SegmentedControlState, toasters, settings, focus) {
  var init = function () {
    $scope.bottleList = bottles.data;
    $scope.user = User.getUser();

    $scope.search = {
      toggle: false,
      value: ""
    };

    $scope.segmentedControl = {
        value: (SegmentedControlState.value) ? SegmentedControlState.value : 'toDrink'
    };

    $scope.$watch("segmentedControl.value", function (newVal, OldVal) {
      SegmentedControlState.value = newVal;
    });
  };
  init();

  $scope.orderReceived = function () {
    User.orderReceived.then(function (response) {
      $scope.user = User.getUser();
    });
  };
  $scope.searchToggle = function () {
    $scope.search.toggle = !$scope.search.toggle;
    focus('focusMe');
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

    // TODO manage accents
  $scope.searchFilter = function (bottle) {
    return !!((bottle.wine.display_name.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1 || bottle.wine.appellation.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1 || bottle.wine.region.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1));
  };

  $scope.update = function () {
    Bottles.updateList().then(
      function (response) {
        $scope.bottleList = response.data;
       // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      },
      function (response) {
        $scope.$broadcast('scroll.refreshComplete');
        toasters.pop('Problème de connexion ...', 'top', 'info');
      });
  };

  $scope.get = function () {
    Bottles.getList();
  };

});