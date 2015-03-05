angular.module('app.svi', [ 'User', 'ngCordova', 'Toaster', 'settings' ])
  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.svi', {
          url: "/salon-vignerons-indépendants",
          views: {
            menuContent: {
              controller: 'sviCtrl'
            }
          },
          resolve: {
            bottles: function (Bottles) {
              return Bottles.getList();
            }
          }
      });
  })
  .controller('sviCtrl', function vinibarCtrl ($scope,
                                                                                    User,
                                                                                    Bottles,
                                                                                    bottles,
                                                                                    SegmentedControlState,
                                                                                    toasters,
                                                                                    settings) {

    var init = function () {
      $scope.spin = false;
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
      $scope.search.value = '';
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
      var removeAccents = function (string) {
        var strAccents = string.split('');
        var strAccentsOut = new Array (strAccents.length);
        var strAccentsLen = strAccents.length;
        var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
        var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
        for (var y = 0; y < strAccentsLen; y++) {
          if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
          } else {
            strAccentsOut[y] = strAccents[y];
          }
        }
        return strAccentsOut.join('');
      };
      var wine = removeAccents(bottle.wine.display_name);
      var appellation = removeAccents(bottle.wine.appellation);
      var region = removeAccents(bottle.wine.region);
      var search = removeAccents($scope.search.value);
      return !!((wine.toLowerCase().indexOf(search.toLowerCase() || '') !== -1 || appellation.toLowerCase().indexOf(search.toLowerCase() || '') !== -1 || region.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1));
    };

    $scope.update = function () {
      $scope.spin = true;
      Bottles.updateList().then(
        function (response) {
          $scope.spin = false;
          $scope.bottleList = response.data;
         // Stop the ion-refresher from spinning
          $scope.$broadcast('scroll.refreshComplete');
        },
        function (response) {
          $scope.spin = false;
          $scope.$broadcast('scroll.refreshComplete');
          toasters.pop('Problème de connexion ...', 'top', 'info');
        });
    };

    $scope.getRange = function (bottle) {
      if (bottle.public_price < 12) {
        return new Array(1);
      } else if (bottle.public_price < 15) {
        return new Array(2);
      } else if (bottle.public_price < 18) {
        return new Array(3);
      } else {
        return new Array(4);
      }
    };

    $scope.get = function () {
      Bottles.getList();
    };

  });