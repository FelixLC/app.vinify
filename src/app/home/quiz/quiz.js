angular.module('app.quiz', [ 'visitorFactory', 'Toaster', 'WinemakerFactory', 'Loading' ])

  .config(function ($stateProvider) {
    $stateProvider
      .state('sidemenu.quiz', {
          url: "/questionnaire",
          views: {
            menuContent: {
              controller: 'quizCtrl',
              templateUrl: 'home/quiz/quiz.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.coffee', {
          url: "/coffee",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/coffee.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.cuisine', {
          url: "/cuisine",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/cuisine.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.starter', {
          url: "/plats",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/starter.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.desert', {
          url: "/desserts",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/desert.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.juice', {
          url: "/jus-fruits",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/juice.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.signup', {
          url: "/login",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/signup.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.wait', {
          url: "/algo",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/wait.tpl.html'
            }
          }
      });
  })
  .controller('quizCtrl', function quizCtrl ($scope, Visitor, toasters, WinemakerFactory, $state, Loading) {
    var init = function () {
      $scope.visitor = new Visitor();
    };
    init();
    $scope.createAndRecommend = function (visitor) {
      Loading.show();
      visitor.createUser(
        function (user) {
          visitor.computeRecommendations(
            function (recommendations) {
              $state.go('sidemenu.svi_menu');
              Loading.hide();
            },
            function (error) {
              toasters.pop('Oops, une erreur est survenue', 'short', 'info');
              Loading.hide();
            });
        },
        function (error) {
          toasters.pop('Oops, un email est déja associé à ce compte', 'short', 'info');
          Loading.hide();
        });
    };
  });