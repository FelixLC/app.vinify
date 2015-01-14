angular.module('Rating', [ 'ngResource', 'User', 'settings' ])

    .factory('Rating', function ($http, Bottles, settings) {

      var Rating = function (uuid, urating, ucomment) {
        this.data = {
            bottle_uuid:  uuid,
            // set to previous rating or null if unrated
            rating: urating || null,
            comment: ucomment || null
        };
      };

      // Url & request private variables
      var theUrl;


      // TODO REFACTOR
      Rating.prototype.updateWine = function () {
        theUrl = '/wines/updaterating/';
        var data = this.data;
        return $http.post(settings.apiEndPoint + theUrl, data)
          .success(function (data, status, headers, config) {
            Bottles.setList(data);
          });
      };

      Rating.prototype.rateWine = function () {
        // Rate and update BotlesList
        theUrl = '/wines/rate/';
        var data = this.data;
        return $http.post(settings.apiEndPoint + theUrl, data)
          .success(function (data, status, headers, config) {
            Bottles.setList(data);
          });
      };

      return Rating;
    })

    .factory('GroupRating', function ($http, Bottles, Rating, settings) {

      var GroupRating = function (uuid, urating, num) {
          // TODO PUSH RATING WHEN THEY COME
        this.data = {
          wine_uuid: uuid,
          ratings: []
        };
        for (var i = num - 1; i >= 0; i--) {
          this.data.ratings.push(new GuestRating(urating));
        }
      };

      var GuestRating = function (urating) {
        this.email =  "";
        this.rating =  urating || null;
        this.comment = "";
      };

      GroupRating.prototype.addRating = function (guestRating) {
        this.data.ratings.push(guestRating);
      };

      GroupRating.prototype.rateWines = function () {
        var data = this.data;
        return $http.post(settings.apiEndPoint + '/wines/guestrating/', data)
        .success(function (data, status, headers, config) {
          Bottles.setList(data);
        });
      };

      return GroupRating;
    });
