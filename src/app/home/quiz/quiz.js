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
      .state('sidemenu.quiz.red', {
          url: "/le-rouge-et-moi",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/balance_red.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.white', {
          url: "/le-blanc-et-moi",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/balance_white.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.rose', {
          url: "/le-rose-et-moi",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/balance_rose.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.region', {
          url: "/region-preferee",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/region.tpl.html'
            }
          }
      })
      .state('sidemenu.quiz.comment', {
          url: "/commentaire",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/comment.tpl.html'
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
      .state('sidemenu.quiz.signup_client', {
          url: "/login",
          views: {
            quizzes: {
              templateUrl: 'home/quiz/signup_client.tpl.html'
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
    function quizCtrl ($scope, Visitor, toasters, WinemakerFactory, $state, Loading, $ionicHistory, $stateParams, currentVisitor) {

    var init = function () {
      $scope.type = $stateParams.type;
      $scope.visitor = new Visitor();
      $scope.regions = [
        'Je n\'en ai pas',
        "Alsace",
        "Armagnac",
        "Beaujolais",
        "Bordeaux",
        "Bourgogne",
        "Bugey",
        "Calvados",
        "Champagne",
        "Charentes",
        "Cognac",
        "Corse",
        "Jura",
        "Languedoc",
        "Provence",
        "Roussillon",
        "Savoie",
        "Sud-ouest",
        "Vallée de la Loire",
        "Vallée du Rhône"
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

    $scope.redToWhite = function (survey) {
      if (survey.quest_6.answ_1 != 4) {
        $state.go('sidemenu.quiz.white');
      } else {
        toasters.pop('Merci de choisir une réponse', 'bottom', 'info');
      }
    };

    $scope.whiteToRose = function (survey) {
      if (survey.quest_6.answ_2 != 4) {
        $state.go('sidemenu.quiz.rose');
      } else {
        toasters.pop('Merci de choisir une réponse', 'bottom', 'info');
      }
    };

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
      if (survey.quest_3.answ_1 || survey.quest_3.answ_2 || survey.quest_3.answ_3 ||
        survey.quest_3.answ_4 || survey.quest_3.answ_5) {
        $state.go('sidemenu.quiz.starter');
      } else {
        toasters.pop('Merci de choisir au moins une réponse', 'bottom', 'info');
      }
    };

    $scope.starterToDesert = function (survey) {
      $state.go('sidemenu.quiz.desert');
    };

    $scope.validateBalanceAnswers = function (visitor) {
      if (visitor.survey.quest_6.answ_1 === "0" &&
        visitor.survey.quest_6.answ_2 === "0" &&
        visitor.survey.quest_6.answ_3 === "0") {
        toasters.pop('Vous ne voulez pas de vins dans votre Vinibar ?', 'bottom', 'info');
      } else if (visitor.survey.quest_6.answ_3 === 4) {
        toasters.pop('Merci de choisir une réponse', 'bottom', 'info');
      } else {
        $state.go('sidemenu.quiz.comment');
      }
    };

    $scope.create = function (visitor) {
      if ($stateParams.type === 'svi') {
        createAndRecommend(visitor);
      } else {
        createUser(visitor);
      }
    };

    var createAndRecommend = function (visitor) {
      if (visitor.email && visitor.password) {
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
      } else {
        toasters.pop('Merci de remplir votre email et votre mot de passe', 'bottom', 'info');
      }
    };

    var createUser = function (visitor) {
      if (visitor.email && visitor.password && visitor.first_name && visitor.last_name) {
        currentVisitor.instance = visitor;
        visitor.createUser(
          function (user) {
            $ionicHistory.nextViewOptions({
              disableAnimate: false,
              disableBack: true
            });
            $ionicHistory.clearHistory();
            $state.go('sidemenu.userinfos.civil_state');
          },
          function (error) {
            toasters.pop('Oops, un email est déja associé à ce compte', 'bottom', 'info');
          });
      } else {
        toasters.pop('Merci de remplir votre email et votre mot de passe', 'bottom', 'info');
      }
    };
  });