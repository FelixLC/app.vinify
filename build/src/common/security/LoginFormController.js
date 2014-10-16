angular.module('security.login.form', ['ngCordova', 'ionic', 'Loading'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "security/loginform.tpl.html",
        controlller: 'LoginFormController'
      });
  })

// The LoginFormController provides the behaviour behind a reusable form to allow users to authenticate.
// This controller and its template (login/form.tpl.html) are used in a modal dialog box by the security service.
.controller('LoginFormController', ['$location', 'Loading', '$rootScope','$scope', 'security', '$cordovaToast', '$cordovaNetwork', '$ionicPlatform', function($location, Loading, $rootScope, $scope, security, $cordovaToast, $cordovaNetwork, $ionicPlatform) {
  // The model for this form
  $scope.user = {};


  // Any error message from failing to login
  $scope.authError = null;

  // The reason that we are being asked to login - for instance because we tried to access something to which we are not authorized
  // We could do something diffent for each reason here but to keep it simple...
  $scope.authReason = null;
  // if ( security.getLoginReason() ) {
  //   $scope.authReason = ( security.isAuthenticated() ) ?
  //     localizedMessages.get('login.reason.notAuthorized') :
  //     localizedMessages.get('login.reason.notAuthenticated');
  // }

  // Attempt to authenticate the user specified in the form's model
  $scope.login = function() {
    if (ionic.Platform.isWebView()) {
          if(!$cordovaNetwork.isOnline()) {
              $cordovaToast.show('Vous n\'êtes pas connecté au réseau', 'long', 'top').then(function(success) {
              }, function (error) {
                // error
              });
          }
          console.log("try to login");
          // $scope.show();
          // Clear any previous security errors
          $scope.authError = null;

          // Try to login
          security.login($scope.user.email, $scope.user.password).then(function(loggedIn) {
            if ( !loggedIn ) {
              // If we get here then the login failed due to bad credentials
              // $scope.hide();
            Loading.hide();
              $scope.authError = 'Combinaison email/mot de passe erronée';
            }
            else {
              // $scope.hide();
            Loading.hide();
              $location.path('/home'); }
          }, function(x) {
            // If we get here then there was a problem with the login request to the server
            // $scope.hide();
            Loading.hide();
            $scope.authError = 'Il y a un problème de connexion. Merci de réessayer';
          });
    } else {
        console.log("try to login");
        // $scope.show();
        // Clear any previous security errors
        $scope.authError = null;

        // Try to login
        security.login($scope.user.email, $scope.user.password).then(function(loggedIn) {
          if ( !loggedIn ) {
            // If we get here then the login failed due to bad credentials
            // $scope.hide();
                        Loading.hide();
            $scope.authError = 'Combinaison email/mot de passe erronée';
          }
          else {
            // $scope.hide();
            Loading.hide();
            $location.path('/home'); }
        }, function(x) {
          // If we get here then there was a problem with the login request to the server
          // $scope.hide();
            Loading.hide();
          $scope.authError = 'Il y a un problème de connexion. Merci de réessayer';
        });
    }
  };

  $scope.clearForm = function() {
    $scope.user = {};
  };

}]);