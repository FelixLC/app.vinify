angular.module('app', [
  //  'ngAnimate',
  'ngSanitize',
  //  'ngTouch',
  'ngCordova',
  'ngCookies',
  'ionic',
  'Offline',
  'User',
  'app.sidemenu',
  'app.home',
  'app.order',
  'app.vinibar',
  'app.wine',
  'app.ratedwine',
  'app.deliverymode',
  'app.profile',
  'app.pay',
  'security',
  'Update',
  'templates-app',
  'templates-common'
])

  .run([ 'security', '$window', '$rootScope', '$document', 'User', function (security, $window, $rootScope, $document, User) {
    //  Get the current user state the application starts
    //  (in case they are still logged in from a previous session)
    security.requestCurrentUser().then(function (result) {
      console.log(result);
      console.log(window.device);
    });
    var onNetworkOff = function () {
      $rootScope.$broadcast('offline');
    };
    var onNetworkOn = function () {
      $rootScope.$broadcast('online');
    };
    var onResume = function () {
      $rootScope.$broadcast('resume');
    };
    //  Triggers on network state change.
    var onDeviceReady = function () {
      security.requestCurrentUser().then(function (result) {
        console.log(result);
      });
      document.addEventListener("offline", onNetworkOff, false);
      document.addEventListener("online", onNetworkOn, false);
      document.addEventListener("resume", onResume, false);
      //  Mock device.platform property if not available
      if (!window.device) {
        window.device = { platform: 'Browser' };
      }
    };
    document.addEventListener("deviceready", onDeviceReady, false);
  } ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  })

  .config([ '$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  } ])

.controller('AppCtrl', function ($scope, $rootScope, $ionicSideMenuDelegate, $ionicModal, $window, OfflineQueue, $ionicPlatform, $ionicLoading, $cordovaToast, $cordovaNetwork, $cordovaSplashscreen, Bottles, Update, security, User, Referrals) {

  //  Catches online event and fires Offline Queue
  $rootScope.$on('online', function (event) {
    // $cordovaToast.show('Vous êtes connecté, synchronisation en cours', 'short', 'top');
    OfflineQueue.sendRatings().then(function (response) {
      console.log(response);
      Bottles.updateList().then(function (response) {
        // $cordovaToast.show('Terminé ...', 'short', 'top');
      }, function (response) {
        // error
      });
    });
    User.updateUser();
    console.log('Updating User ...');
    Referrals.updateList();
  });

  $rootScope.$on('resume', function (event) {
    // $cordovaToast.show('Vous êtes connecté, synchronisation en cours', 'short', 'top');
    if (ionic.Platform.isWebView() && $cordovaNetwork.isOnline()) { // if we are in cordova && online
      // we check if there is an update
      security.requestCurrentUser().then(function (result) {
        console.log(result);
        Update.checkUpdate(result.uuid, ionic.Platform.device())
          .success(function (response) {
            Update.isOutdated = (response.up_to_date === 1) ? false : true;
          })
          .error(function (response) {
            Update.isOutdated = false;
          });
      });
      OfflineQueue.sendRatings().then(function (response) {
        console.log(response);
        Bottles.updateList().then(function (response) {
          // $cordovaToast.show('Terminé ...', 'short', 'top');
        }, function (response) {
          // error
        });
      });
      User.updateUser();
      Referrals.updateList();
    }
  });

  $scope.windowSize = {
    height: ionic.Platform.isIOS() ? ($window.innerHeight - 20) : $window.innerHeight,
    width: $window.innerWidth
  };

  $ionicPlatform.ready(function () {
    if (ionic.Platform.isWebView()) { // if we are in cordova
      $cordovaSplashscreen.hide();
      // we check if there is an update
    }
  });

  $scope.toggleLeft = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

  //  Trigger the loading indicator
  $scope.show = function () {

    //  Show the loading overlay and text
    $scope.loading = $ionicLoading.show({

      //  The text to display in the loading indicator
      content: '<i class="icon ion-loading-a">',

      //  The animation to use
      animation: 'fade-in',

      //  Will a dark overlay or backdrop cover the entire view
      showBackdrop: true,

      //  The maximum width of the loading indicator
      //  Text will be wrapped if longer than maxWidth
      maxWidth: 0,

      //  The delay in showing the indicator
      showDelay: 500
    });
  };

  //  Hide the loading indicator
  $scope.hide = function () {
    $ionicLoading.hide();
  };

  //  TODO VERIFY WITH STATUS BAR
  var height = $window.innerHeight;
  $scope.full_height = {
    height: height + 'px'
  };

  //  YIPEE MODAL
  $ionicModal.fromTemplateUrl('tpl/yipee.tpl.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.yipee = modal;
  });

  //  Open & close the modal
  $scope.openYipeeModal = function () {
    $scope.yipee.show();
  };
  $scope.closeYipeeModal = function () {
    $scope.yipee.hide();
  };

  //  OOPS MODAL
  $ionicModal.fromTemplateUrl('tpl/oops.tpl.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.oops = modal;
  });

  //  Open & close the modal
  $scope.openOopsModal = function () {
    $scope.oops.show();
  };
  $scope.closeOopsModal = function () {
    $scope.oops.hide();
  };

  //  UPDATE MODAL
  $ionicModal.fromTemplateUrl('tpl/update.tpl.html', {
    scope: $scope,
    animation: 'fade-in'
  }).then(function (modal) {
    $scope.update = modal;
  });

  //  Open & close the modal
  $scope.openUpdateModal = function () {
    $ionicPlatform.ready(function () {
      if (ionic.Platform.isWebView()) {
        $scope.link = (ionic.Platform.isIOS()) ? 'https://itunes.apple.com/us/app/vinify/id912757586?mt=8' : 'https://play.google.com/store/apps/details?id=com.vinify.viniapp.android';
      }
    });
    $scope.update.show();
  };

  $scope.closeUpdateModal = function () {
    $scope.update.hide();
  };

});