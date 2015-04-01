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
  'app.orders',
  'app.deliverymode',
  'app.profile',
  'app.pay',
  'Loading',
  'app.svi',
  'app.quiz',
  'app.userinfos',
  'app.svi_menu',
  'app.slidebox',
  'app.favourites',
  'security',
  'settings',
  'Toaster',
  'Update',
  'Analytics',
  'templates-app',
  'templates-common'
])

  .run([ 'security', '$window', '$rootScope', '$document', 'User', 'OfflineQueue', 'OfflineMixpanel', 'Mixpanel', 'settings', function (security, $window, $rootScope, $document, User, OfflineQueue, OfflineMixpanel, Mixpanel, settings) {
    //  Get the current user state the application starts
    //  (in case they are still logged in from a previous session)
    console.log('run');
    security.requestCurrentUser().then(function (result) {
      console.log(result);
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
      OfflineQueue.sendRatings().then(function (response) {
        console.log(response);
        Bottles.updateList();
      });
      document.addEventListener("offline", onNetworkOff, false);
      document.addEventListener("online", onNetworkOn, false);
      document.addEventListener("resume", onResume, false);
      //  Mock device.platform property if not available
      if (!window.device) {
        window.device = { platform: 'Browser' };
        console.log(window.device);
      }
    };
    document.addEventListener("deviceready", onDeviceReady, false);
  } ])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  })

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.backButton.text('').previousTitleText(false);
})

  .config([ '$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  } ])

.controller('AppCtrl', function (
  $scope, $state, $rootScope, $ionicModal, $window, OfflineQueue, $ionicHistory,
  $ionicPlatform, $cordovaNetwork, $cordovaSplashscreen, Bottles, $ionicSideMenuDelegate,
  Loading, Update, security, User, Referrals, settings, toasters, OfflineMixpanel, Mixpanel) {

  // Mixpanel.track('Logged In', { platform: (settings.desktop) ? 'desktop' : 'app' });
  console.log('app');
  //  Catches online event and fires Offline Queue
  $rootScope.$on('online', function (event) {
    console.log('online');
    OfflineQueue.sendRatings().then(function (response) {
      console.log(response);
      Bottles.updateList();
    });
    User.updateUser(function (user) {
      OfflineMixpanel.send(user.uuid);
    });
    console.log('Updating User ...');
    Referrals.updateList();
  });
  $rootScope.$on('resume', function (event) {
    console.log('resume');
    if (ionic.Platform.isWebView() && $cordovaNetwork.isOnline()) { // if we are in cordova && online
      User.updateUser();
      Referrals.updateList();
      // we check if there is an update
      security.requestCurrentUser().then(function (result) {
        Update.checkUpdate(result.uuid, ionic.Platform.device())
          .success(function (response) {
            Update.isOutdated = (response.up_to_date === 1) ? false : true;
          })
          .error(function (response) {
            Update.isOutdated = false;
          });
      });
      Bottles.updateList();
    }
  });

  $rootScope.settings = settings;

  $scope.windowSize = {
    height: ionic.Platform.isIOS() ? ($window.innerHeight - 20) : $window.innerHeight,
    width: $window.innerWidth
  };


  $scope.$on("$stateChangeStart", function () {
    Loading.show();
  });

  $scope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
    Loading.hide();
  });

  $ionicPlatform.ready(function () {
    if (ionic.Platform.isWebView()) { // if we are in cordova
      $cordovaSplashscreen.hide();
      // we check if there is an update
    }
  });

  $scope.goHome = function () {
    $state.go('sidemenu.home');
  };

  $rootScope.isState = function (obj) {
    return $state.current.name === 'sidemenu.filter_color' ||
                  $state.current.name === 'sidemenu.filter_region' ||
                  $state.current.name === 'sidemenu.svi' ||
                  $state.current.name === 'sidemenu.winemaker';
  };

  //  TODO VERIFY WITH STATUS BAR
  var height = $window.innerHeight;
  $scope.full_height = {
    height: ($window.innerWidth > 767) ? '365px' : height + 'px'
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

  //  PASSWORD MODAL
  $ionicModal.fromTemplateUrl('tpl/password.tpl.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.passwordModal = modal;
  });

  //  Open & close the modal
  $scope.openPasswordModal = function () {
    $scope.password = {};
    $scope.passwordModal.show();
  };
  $scope.closePasswordModal = function () {
    $scope.passwordModal.hide();
  };
  $scope.changePassword = function (currentPassword, newPassword) {
    User.changePassword(currentPassword, newPassword,
      function () {
        $scope.closePasswordModal();
        toasters.pop('Mot de passe changé', 'top', 'success');
      },
      function () {
        toasters.pop('Oops, vous n\'avez pas le bon mot de passe.', 'top', 'info');
      });
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

  $scope.toggleLeft = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.goLeft = function () {
    $ionicHistory.goBack();
  };

});