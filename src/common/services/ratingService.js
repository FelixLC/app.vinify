angular.module('Rating', ['ngResource', 'User'])

.factory('Rating', function($http, Bottles) {
     var apiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/api';
     var restApiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/restapi';

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
          return request
                            .success(function(data, status, headers, config) {
                                // TODO gracefully manage errors/successes
                                Bottles.updateList();
                            })
                            .error(function(data, status, headers, config) {
                                // TODO gracefully manage errors/successes
                                 alert(data);
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
          return request
                            .success(function(data, status, headers, config) {
                               Bottles.updateList();
                            })
                            .error(function(data, status, headers, config) {
                                // TODO gracefully manage errors/successes
                                 alert(data);
                            });
    };

    return Rating;
})

.factory('GroupRating', function($http, Bottles, Rating) {
     var apiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/api';
     var restApiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/restapi';

    var GroupRating = function (uuid, urating){
        // TODO PUSH RATING WHEN THEY COME
        this.data = {
            ratings: [new GuestRating(urating), new GuestRating(urating), new GuestRating(urating), new GuestRating(urating)],
            wine_uuid: uuid
        };
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

          return request
                            .success(function(data, status, headers, config) {
                                // TODO gracefully manage errors/successes
                                Bottles.updateList();
                            })
                            .error(function(data, status, headers, config) {
                                // TODO gracefully manage errors/successes
                                 alert(data);
                            });
    };

    return GroupRating;
});
