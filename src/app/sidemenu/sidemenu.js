  angular.module('app.sidemenu', [ 'security', 'settings', 'User', 'Update', 'ngCordova' ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('sidemenu', {
          // url: "/event",
          abstract: true,
          templateUrl: "sidemenu/sidemenu.tpl.html",
          controller: 'sidemenuCtrl'
        });
    })

      .controller('sidemenuCtrl',
        function sidemenuCtrl ($scope, $http, $location, security, $state, $ionicPopup,
        settings, User, $ionicHistory, $ionicPlatform, Update, $cordovaSocialSharing) {

        $scope.visible = {
          toggle: function () {
            return !($state.current.name === 'sidemenu.quiz.coffee' ||
            $state.current.name === 'sidemenu.quiz.cuisine' ||
            $state.current.name === 'sidemenu.quiz.starter' ||
            $state.current.name === 'sidemenu.quiz.desert' ||
            $state.current.name === 'sidemenu.quiz.juice' ||
            $state.current.name === 'sidemenu.quiz.red' ||
            $state.current.name === 'sidemenu.quiz.white' ||
            $state.current.name === 'sidemenu.quiz.rose' ||
            $state.current.name === 'sidemenu.quiz.region' ||
            $state.current.name === 'sidemenu.quiz.comment' ||
            $state.current.name === 'sidemenu.quiz.signup' ||
            $state.current.name === 'sidemenu.quiz.signup_client' ||
            $state.current.name === 'sidemenu.quiz.wait' ||
            $state.current.name === 'sidemenu.quiz.juice' ||
            $state.current.name === 'sidemenu.quiz.white' ||
            $state.current.name === 'sidemenu.quiz.rose' ||
            $state.current.name === 'sidemenu.quiz.juice' ||
            $state.current.name === 'sidemenu.quiz.cuisine' ||
            $state.current.name === 'sidemenu.quiz.starter' ||
            $state.current.name === 'sidemenu.quiz.desert' ||
            $state.current.name === 'sidemenu.quiz.comment' ||
            $state.current.name === 'sidemenu.slidebox' ||
            $state.current.name === 'sidemenu.slidebox_2');
          }
        };

        $scope.logOut = function () {
          settings.test = false;
          $ionicHistory.clearCache();
          security.logout('/login');
        };

         // An alert dialog
        $scope.showAlert = function () {
          var alertPopup = $ionicPopup.alert({
             title: 'L\'aventure Vinify démarre avec un Vinibar',
             template: '6 bouteilles choisies pour moi <br> en fonction de mes goûts'
           });
          alertPopup.then(function (res) {
            var client = new Visitor();
            client.uuid = user.uuid;
            client.first_name = user.first_name;
            client.last_name = user.last_name;
            client.email = user.email;
            currentVisitor.instance = client;
            $state.go('sidemenu.userinfos.civil_state');
          });
        };

        $scope.canOrder = function () {
          if (User.getUser()['status'] == 2 || User.getUser()['status'] == 2.5) {
            $scope.showAlert();
          } else if (User.getUser()['status'] < 2) {
            $state.go('sidemenu.quiz.coffee');
          } else {
            $state.go('sidemenu.order');
          }
        };

        if (ionic.Platform.isWebView()) {

          $scope.feedback = function () {
            var message = "Bonjour, \n \n Version:" + Update.version;
            var subject = "Feedback App | Vinify";
            $cordovaSocialSharing.shareViaEmail(message, subject, [ 'charlotte@vinify.co' ]).then(
              function (result) {
                // Success!
              }, function (err) {
                // An error occured. Show a message to the user
              });
          };
        }

      });