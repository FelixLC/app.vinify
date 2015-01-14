angular.module('Offline', [ 'LocalStorageModule', 'settings', 'Rating' ])
.factory('OfflineQueue', function (localStorageService, $q, Rating) {
  // instantiate our initial object with local storage or empty array
  var _ratingQueue = localStorageService.get('ratings') || [];
  var _updateRatingQueue = localStorageService.get('updateRatings') || [];
  var _groupRatingQueue = localStorageService.get('groupRatings') || [];

  var _rateAndDelete = function (i) {
    var rating = new Rating(_ratingQueue[i]['data']['bottle_uuid'],
                                                    _ratingQueue[i]['data']['rating'],
                                                    _ratingQueue[i]['data']['comment']);
    rating.rateWine()
      .success(function (response) {
        _ratingQueue.splice(i, 1);
      });
  };
  var _updateRatingAndDelete = function (i) {
    var rating = new Rating(_updateRatingQueue[i]['data']['bottle_uuid'],
                                                    _updateRatingQueue[i]['data']['rating'],
                                                    _updateRatingQueue[i]['data']['comment']);
    rating.updateWine()
      .success(function (response) {
        _updateRatingQueue.splice(i, 1);
      });
  };
  var _groupRateAndDelete = function (i) {
    var rating = new Rating(_groupRatingQueue[i]['data']['bottle_uuid'],
                                                    _groupRatingQueue[i]['data']['rating'],
                                                    _groupRatingQueue[i]['data']['comment']);
    rating.rateWines()
      .success(function (response) {
        _groupRatingQueue.splice(i, 1);
      });
  };

  return {
    getRatings: function () {
      _ratingQueue = localStorageService.get('ratings');
      _updateRatingQueue = localStorageService.get('updateRatings');
      _groupRatingQueue = localStorageService.get('groupRatings');
      return {
        ratings: _ratingQueue,
        updateRatings: _updateRatingQueue,
        groupRatings: _groupRatingQueue
      };
    },
    addRating: function (rating) {
      _ratingQueue.push(rating);
      localStorageService.set('ratings', _ratingQueue);
      console.log('added rating to local storage');
      console.log(localStorageService.get('ratings'));
      return localStorageService.get('ratings');
    },
    addUpdateRating: function (rating) {
      _updateRatingQueue.push(rating);
      localStorageService.set('updateRatings', _updateRatingQueue);
      console.log('added updateRating to local storage');
      console.log(localStorageService.get('updateRatings'));
      return localStorageService.get('updateRatings');
    },
    addGroupRating: function (groupRating) {
      _groupRatingQueue.push(groupRating);
      localStorageService.set('groupRatings', _groupRatingQueue);
      console.log('added groupRating to local storage');
      console.log(localStorageService.get('groupRatings'));
      return localStorageService.get('groupRatings');
    },
    sendRatings: function () {
      // Creates two promises that will tell if all is in order
      var rating = $q.defer();
      var groupRating = $q.defer();
      var updateRating = $q.defer();

      if (_ratingQueue.length) { // we have ratings to send
        for (var i = _ratingQueue.length - 1; i >= 0; i--) {
          _rateAndDelete(i); // rate a wine and delete it from the array
          console.log(i);
        }
        console.log(_ratingQueue);
        localStorageService.remove('ratings');
        console.log('sent Ratings');
        rating.resolve('RatingsSent');

      } else { // we have no ratings to send
        console.log('no ratings to send');
        rating.resolve('NoRatingsToSend');
      }
      if (_groupRatingQueue.length) {// we have groupRatings to send
        for (var j = _groupRatingQueue.length - 1; j >= 0; j--) {
          _groupRateAndDelete(j); // rate a wine and delete it from the array
        }
        localStorageService.remove('groupRatings');
        console.log('sent groupRatings');
        rating.resolve('GroupRatingsSent');
      } else {// we have no ratings to send
        console.log('no GroupRatings to send');
        rating.resolve('NoGroupRatingsToSend');
      }
      if (_updateRatingQueue.length) {// we have updates to send
        for (var k = _updateRatingQueue.length - 1; k >= 0; k--) {
          _updateRatingAndDelete(k); // rate a wine and delete it from the array
        }
        localStorageService.remove('updateRatings');
        console.log('sent updateRatings');
        updateRating.resolve('updateRatingsSent');
      } else {// we have no updateRatings to send
        console.log('no updateRatings to send');
        updateRating.resolve('NoUpdateRatingsToSend');
      }
      return $q.all([ rating.promise, groupRating.promise, updateRating.promise ]);
    }
  };
})

.factory('OfflineUser', function (localStorageService, settings) {
  // instantiate our initial object
  var _user = null;

  return {
    getUser: function () {
      _user = localStorageService.get('user');
      // returns null if not set
      return _user;
    },
    setUser: function (user) {
      if (!settings.desktop) {
        _user = user;
        localStorageService.set('user', user);
        console.log('added user to local storage');
        return _user;
      }
    },
    removeUser: function (user) {
      localStorageService.clearAll();
      console.log(localStorageService.keys());
      return _user;
    }
  };
})

.factory('OfflineWineData', function (localStorageService, settings) {

  return {
    getWines: function () {
      // returns null if not set
      return localStorageService.get('wines');
    },
    setWines: function (wines) {
      if (!settings.desktop) {
        localStorageService.set('wines', wines);
        console.log('added wines to local storage');
        console.log(localStorageService.get('wines'));
        return localStorageService.get('wines');
      }
    }
  };

})

.factory('OfflineReferralsData', function (localStorageService, settings) {

  return {
    getReferrals: function () {
      return localStorageService.get('referrals');
    },
    setReferrals: function (referrals) {
      if (!settings.desktop) {
        localStorageService.set('referrals', referrals);
        console.log('added referrals to local storage');
        console.log(localStorageService.get('referrals'));
        return localStorageService.get('referrals');
      }
    }
  };
});