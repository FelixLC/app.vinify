angular.module('app.favourites', [
  'LikeFactory', 'Toaster', 'settings'
  ])

  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.favourites', {
          url: "/parcours",
          views: {
            menuContent: {
              controller: 'favouriteCtrl',
              templateUrl: 'home/svi/favourites/favourites.tpl.html'
            }
          },
          resolve: {
            favourites: function (Favourites) {
              return Favourites.get();
            }
          }
      });
  })
  .controller('favouriteCtrl', function favouriteCtrl (
    $scope, favourites, toasters) {
    var init = function () {
      $scope.favourites = favourites;
    };
    init();

  });