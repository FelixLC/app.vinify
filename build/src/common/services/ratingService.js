angular.module('Rating', ['ngResource', 'User'])

.factory('Rating', ["$http", "Bottles", function($http, Bottles) {
     var apiEndPoint =  'https://api.vinify.co/api';
     var restApiEndPoint =  'https://api.vinify.co/restapi';

    var Rating = function (uuid, urating, ucomment){
        this.data = {
            bottle_uuid:  uuid,
            // set to previous rating or null if unrated
            rating: (typeof urating === "undefined") ? null : urating,
            comment: (typeof ucomment === "undefined") ? null : ucomment
        };
    };

    // Rating.protoype.rateWine = function (id) {

    // };

    // Url & request private variables
    var theUrl;


// TODO REFACTOR
    Rating.prototype.updateWine = function() {
        theUrl = '/wines/updaterating/';
        var data = this.data;
        var request = $http({
                        url:  apiEndPoint + theUrl,
                        method: 'POST',
                        data: data,
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8'
                        }
                      });
          return request.success(function(data, status, headers, config) {
                                                            Bottles.setList(data);
                                                        });
    };

    Rating.prototype.rateWine = function() {
        // Rate and update BotlesList
        theUrl = '/wines/rate/';
        var data = this.data;
        var request = $http({
                        url:  apiEndPoint + theUrl,
                        method: 'POST',
                        data: data,
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8'
                        }
                      });
          return request.success(function(data, status, headers, config) {
                                                            Bottles.setList(data);
                                                        });
    };

    return Rating;
}])

.factory('GroupRating', ["$http", "Bottles", "Rating", function($http, Bottles, Rating) {
     var apiEndPoint =  'https://api.vinify.co/api';
     var restApiEndPoint =  'https://api.vinify.co/restapi';

    var GroupRating = function (uuid, urating, num){
        // TODO PUSH RATING WHEN THEY COME
        this.data = {
            wine_uuid: uuid,
            ratings:[]
        };
        for (var i = num - 1; i >= 0; i--) {
            this.data.ratings.push(new GuestRating(urating));
         }
    };

    var GuestRating = function (urating){
            this.email =  "";
            this.rating =  (typeof urating === "undefined") ? null : urating;
            this.comment = "";
    };

    GroupRating.prototype.addRating = function(guestRating) {
        this.data.ratings.push(guestRating);
    };

    GroupRating.prototype.rateWines = function() {

        var data = this.data;
        var request = $http({
                            url: apiEndPoint + '/wines/guestrating/',
                            method: 'POST',
                            data: data,
                            headers: {
                              'Content-Type': 'application/json; charset=UTF-8'
                            }
                          });

          return request.success(function(data, status, headers, config) {
                                                            Bottles.setList(data);
                                                        });
    };

    return GroupRating;
}]);
