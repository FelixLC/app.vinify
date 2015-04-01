  angular.module('app.home', ['User', 'Update', 'ngCordova', 'visitorFactory' ])
      .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.home', {
              url: "/home",
              views: {
                'menuContent' :{
                  controller: 'homeCtrl',
                  templateUrl: "home/home.tpl.html"
                }
              },
              resolve: {
                user: function (User) {
                  return User.getUser();
                }
              }
          });
     })

      .controller('homeCtrl',
        function homeCtrl ($scope, $rootScope, $http, $state,
          Update, $window, $ionicPlatform, User, user, $ionicPopup, Visitor, currentVisitor) {

        $scope.stateGo = function (to) {
          $state.go('sidemenu.' + to);
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

        $scope.update = Update.isOutdated;
        // $scope.update = Update.isOutdated;
        $scope.appStore = function () {
          if (ionic.Platform.isIOS()) {
            window.open('https://itunes.apple.com/us/app/vinify/id912757586?mt=8', '_system', 'location=yes');
          } else {
            window.open('https://play.google.com/store/apps/details?id=com.vinify.viniapp.android', '_system', 'location=yes');
          }
        };
        // console.log($rootScope.isOnline);
        // TODO VERIFY WITH STATUS BAR
        var appropriatedHeight =  Math.floor(($scope.windowSize.height  - 44) / 3); // 44 because of -1 margin on scroll content
        var thirdHeight = ($scope.windowSize.height  - 44) - 2 * appropriatedHeight;

        $scope.calcHeight = {
          "min-height": appropriatedHeight + 'px'
        };

        $scope.calcThirdHeight = {
          "min-height": thirdHeight + 'px'
        };

        // $scope.calcHeight = {
        //   "min-height":  ionic.Platform.isIOS() ? 'calc((100vh - 64px)/3)' : 'calc((100vh - 44px)/3)'
        // };

        // $scope.calcThirdHeight = {
        //   "min-height": 'calc((100vh - 44px)/3)'
        // };

        console.log($window.innerHeight);
      });