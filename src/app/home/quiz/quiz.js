angular.module('app.quiz', [ 'visitorFactory', 'Toaster', 'WinemakerFactory', 'Loading' ])

  .config(function ($stateProvider) {
    $stateProvider
      .state('sidemenu.quiz', {
          url: "/questionnaire?type",
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
      .state('sidemenu.quiz.balance', {
          url: "/le-vin-et-moi",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/balance.tpl.html'
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
  .controller('quizCtrl',
    function quizCtrl ($scope, Visitor, toasters, WinemakerFactory, $state, Loading, $ionicHistory, $stateParams) {

    var init = function () {
      $scope.type = $stateParams.type;
      $scope.visitor = new Visitor();
      $scope.regions = [
        'Je n\'en ai pas',
        'Bourgogne',
        'Vallée de la Loire',
        'Alsace',
        'Vallée du Rhône',
        'Bordeaux'
      ];
    };
    init();

    $scope.coffeeToJuice = function (survey) {
      if (survey.quest_1.answ) {
        $state.go('sidemenu.quiz.juice');
      } else {
        toasters.pop('Merci de choisir une réponse', 'bottom', 'info');
      }
    };

    $scope.juiceToCuisine = function (survey) {
      if (survey.quest_2.answ) {
        $state.go('sidemenu.quiz.cuisine');
      } else {
        toasters.pop('Merci de choisir une réponse', 'bottom', 'info');
      }
    };

    $scope.cuisineToStarter = function (survey) {
      if (survey.quest_3.answ_1 || survey.quest_3.answ_2 || survey.quest_3.answ_3 || survey.quest_3.answ_4 || survey.quest_3.answ_5) {
        $state.go('sidemenu.quiz.starter');
      } else {
        toasters.pop('Merci de choisir au moins une réponse', 'bottom', 'info');
      }
    };

    $scope.starterToDesert = function (survey) {
      $state.go('sidemenu.quiz.desert');
    };

    $scope.desertToSignup = function (survey) {
      if ($stateParams.type === 'svi') {
        $state.go('sidemenu.quiz.signup');
      } else {
        $state.go('sidemenu.quiz.balance');
      }
    };

    $scope.desertToBalance = function (survey) {
      $state.go('sidemenu.quiz.balance');
    };

    $scope.createAndRecommend = function (visitor) {
      visitor.createSVIUser(
        function (user) {
          visitor.computeRecommendations(
            function (recommendations) {
              $ionicHistory.nextViewOptions({
                disableAnimate: false,
                disableBack: true
              });
              $ionicHistory.clearHistory();
              $state.go('sidemenu.svi_menu');
            },
            function (error) {
              toasters.pop('Oops, une erreur est survenue', 'bottom', 'info');
            });
        },
        function (error) {
          toasters.pop('Oops, un email est déja associé à ce compte', 'bottom', 'info');
        });
    };
  });