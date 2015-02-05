angular.module('app.orders', [ 'ngResource', 'User', 'ngCordova', 'Toaster', 'settings', 'Analytics' ])
  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.orders', {
          url: "/orders?q",
          views: {
            menuContent: {
              controller: 'ordersCtrl',
              templateUrl: function () {
                return (deskProvider.$get()) ? "home/orders/orders.desktop.tpl.html" :
                                                                            "home/orders/orders.tpl.html";
              }
            }
          },
          resolve: {
            orderList: function (Orders) {
              return Orders.getList();
            }
          }
      });
  })

  .controller('ordersCtrl', function ordersCtrl ($scope, orderList, Mixpanel) {
    $scope.orders = orderList.data;
    Mixpanel.track('Share Vinify on Facebook', { platform: 'desktop' });
    $scope.statusConverter = function (status) {
      var convertedStatus = "";
      if (status === 1) {convertedStatus = "Créée";}
      if (status === 2) {convertedStatus = "Payée";}
      if (status === 3) {convertedStatus = "Selection Prête";}
      if (status === 4) {convertedStatus = "Prête";}
      if (status === 5) {convertedStatus = "Envoyée";}
      if (status === 6) {convertedStatus = "Reçue";}

      return convertedStatus;
    };

    $scope.orderReceived = function () {
      User.orderReceived.then(function (response) {
        $scope.user = User.getUser();
      });
    };

    $scope.open = function (url) {
      window.open(url, '_system', 'location=yes');
    };
  });