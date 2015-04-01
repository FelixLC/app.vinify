  angular.module('app.order', [
    'Order',
    'User',
    'settings',
    'Toaster',
    'app.order.refill',
    'app.order.picking',
    'app.order.cart'
    ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.order', {
              url: "/commande",
              views: {
                menuContent: {
                  controller: 'orderCtrl',
                  templateUrl: "home/order/order.tpl.html"
                }
              }
          });
      })
      .controller('orderCtrl', function orderCtrl ($scope, $rootScope, User, deliveryCosts) {

        var appropriatedHeight =  Math.floor(($scope.windowSize.height  - 44) / 2); // 44 because of -1 margin on scroll content

        $scope.calcHalfHeight = {
          "min-height": appropriatedHeight + 'px'
        };

        // prepare for next screen
        User.updateUser(function (user) {
          $rootScope.userIs = {
            staff: user.is_staff
          };
        });
        deliveryCosts.get('FR', function () {});


      });