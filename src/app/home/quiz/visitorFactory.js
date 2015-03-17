(function () {
  'use strict';

  angular
      .module('visitorFactory', [ 'settings', 'Analytics', 'WinemakerFactory', 'Loading', 'security.service', 'User' ])
      .factory('Visitor', Visitor);

    /* @ngInject */
  function Visitor (settings, $window, Mixpanel, $http, WinemakerFactory, Loading,  security, User) {
    // Survey constructor
    var Survey = function () {

      this.quest_1 = { // Coffee
        answ: 0  // 1,1,Coffee - Black  // 1,2,Coffee - Sugar  // 1,3,Coffee - Cream // 1,4,Coffee - No
      };
      this.quest_2 = { // Drink
        answ: 0 // 2,1,Drink - Grapefruit // 2,2,Drink - Apple // 2,3,Drink - Exotic
      };
      this.quest_3 = { // Cuisine
        answ_1: false, // 3,1,Cuisine - French
        answ_2: false, // 3,2,Cuisine - Italian
        answ_3: false, // 3,3,Cuisine - Asian
        answ_4: false, // 3,4,Cuisine - American
        answ_5: false // 3,5,Cuisine - Vegetarian
      };
      this.quest_4 = { // Starter
        answ_1: false, // 4,1,Starter - Oister
        answ_2: false, // 4,2,Starter - Toast
        answ_3: false, // 4,3,Starter - Foie
        answ_4: false // 4,4,Starter - No
      };
      this.quest_5 = { // Desert
        answ_1: false, // 5,1,Dessert - Millefeuille
        answ_2: false, // 5,2,Dessert - Ganache
        answ_3: false, // 5,3,Dessert - Carpaccio
        answ_4: false // 5,4,Dessert - No
      };
      this.quest_6 = { // Balance
        answ_1: 4, // Red
        answ_2: 4, // White
        answ_3: 4 // Rose
      };
      this.quest_7 = { // Region
        answ: null
      };
      this.quest_8 = { // Comment
        answ: null
      };
      this.quest_9 = { // Price
        answ: null // 2,1,Price - 5-10€ // 2,2,Price - 10-15€ // 2,3,Price - 15-20€ // 2,4,Price - 20 & +
      };

    };

    // instantiate our initial object
    var VisitorApp = function () {
      this.uuid = "";
      this.first_name = '';
      this.last_name = '';
      this.email = '';
      this.password = '';
      this.survey = new Survey();
      this.initial_referrer = 'svi_champerret';
    };

    VisitorApp.prototype.createSVIUser = function (success, failure) {
      var self = this;
      Loading.show('Si vous avez la moindre question ou si vous avez besoin d\'aide, <br> n\'hésitez pas à passer nous voir et déguster quelques vins sur notre stand');
      return $http.post(settings.apiEndPoint + '/users/createuser/', self)
        .success(function (data, status, headers, config) {
          Loading.hide();
          $window.sessionStorage.token = data.token;
          Mixpanel.alias(data.uuid);
          Mixpanel.people.set({
            "Email ": data.email
          });
          Mixpanel.track('Visitor Created');
          VisitorApp.uuid = data.uuid;
          // Set User For This Service (useful For Isloggedin)
          security.currentUser = data;

          // Set User In Angular And Local Storage
          User.setUser(data);
          if (success && angular.isFunction(success)) {
            success(data);
          }
        })
        .error(function (error) {
          Loading.hide();
          Mixpanel.track('Visitor Failed to be created');
          if (failure && angular.isFunction(failure)) {
            failure(error);
          }
        });
    };

    VisitorApp.prototype.computeRecommendations = function (success, failure) {
      Loading.show('Merci de patienter, nous cherchons parmi les 500 vignerons ceux qui vous correspondent <br> cela peut prendre jusqu\'à 1 min');
      return $http.get(settings.apiEndPoint + '/svi/recommendations/compute/')
        .success(function (data, status, headers, config) {
          Loading.hide();
          WinemakerFactory.setRecommendations(data);
          Mixpanel.track('Recommendations given');
          if (success && angular.isFunction(success)) {
            success(data);
          }
        })
        .error(function (error) {
          Loading.hide();
          Mixpanel.track('Recommendations failed');
          if (failure && angular.isFunction(failure)) {
            failure(error);
          }
        });
    };

    return VisitorApp;
  }
})();