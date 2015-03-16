angular.module('app.favourites', [
  'LikeFactory', 'Toaster', 'settings'
  ])

  .config(function ($stateProvider, $urlRouterProvider, deskProvider) {
    $stateProvider
      .state('sidemenu.favourites', {
          url: "/mes-vins",
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
    $scope, favourites, toasters, $ionicModal, Like, Favourites, $state) {
    var init = function () {
      $scope.favourites = favourites.data;
    };
    init();

    //  UPDATE MODAL
    $ionicModal.fromTemplateUrl('home/svi/winemaker/wine.modal.tpl.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.wineModal = modal;
    });

    //  Open & close the modal
    $scope.openWineModal = function (fav) {
      $scope.wine = fav.wine;

      $scope.likeBottle = function (bottle) {
        bottle.like = 1;
      };

      $scope.dislikeBottle = function (bottle) {
        bottle.like = -1;
      };

      $scope.bottle = new Like (fav.wine.uuid, {
        like: fav.like,
        comment: fav.comment
      });
      $scope.wineModal.show();
    };

    $scope.closeWineModal = function (comment, wine) {
      $scope.wineModal.hide();
    };
    $scope.goToWinemaker = function (uuid) {
        $state.go('sidemenu.winemaker', { uuid: uuid });
        $scope.wineModal.hide();
      };
    $scope.likeWineModal = function (bottle) {
      bottle.likeAndComment(
        function (response) {
          Favourites.get().then(function (response) {
            $scope.favourites = response.data;
          });
          $scope.wineModal.hide();
        },
        function (error) {
          toasters.pop('Oops, une erreur est survenue', 'bottom', 'info');
        });
    };
  });