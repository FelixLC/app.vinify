angular.module('Offline', ['LocalStorageModule'])
.factory('OfflineQueue', function(localStorageService) {
	var apiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/api';
	var restApiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/restapi';
	// instantiate our initial object
	var _ratingQueue =[];
	var _groupRatingQueue =[];

	return {
		getRatings : function() {
			_ratingQueue = localStorageService.get('ratings');
			_groupRatingQueue = localStorageService.get('groupRatings');
			return {
				'ratings': _ratingQueue,
				'groupRatings': _groupRatingQueue
			};
		},
		addRating : function(rating) {
			_ratingQueue.push(rating);
			localStorageService.set('ratings', _ratingQueue);
			console.log('added rating to local storage');
			console.log(localStorageService.get('ratings'));
			return localStorageService.get('ratings');
		},
		addGroupRating : function(groupRating) {
			_groupRatingQueue.push(groupRating);
			localStorageService.set('groupRatings', _groupRatingQueue);
			console.log('added groupRating to local storage');
			console.log(localStorageService.get('groupRatings'));
			return localStorageService.get('groupRatings');
		},
		sendRatings : function() {
			// TODO MANAGE ERRORS
			if (_ratingQueue.length) {
				for (var i = _ratingQueue.length - 1; i >= 0; i--) {
						_ratingQueue[i].rateWine();
				}
				localStorageService.remove('ratings');
				console.log('sent Ratings');
			} else { console.log('no ratings to send');}
			if (_groupRatingQueue.length) {
				for (var j = _groupRatingQueue.length - 1; j >= 0; j--) {
						_groupRatingQueue[j].rateWines();
				}
				localStorageService.remove('groupRatings');
				console.log('sent groupRatings');
			} else { console.log('no GroupRatings to send');}
		}
	};
})

.factory('OfflineUser', function(localStorageService) {
	// instantiate our initial object
	var _user = null;

	return {
		getUser: function() {
			_user = localStorageService.get('user');
			// returns null if not set
			return _user;
		},
		setUser: function(user) {
			_user = user;
			localStorageService.set('user', user);
			console.log('added user to local storage');
			return _user;
		},
		removeUser: function(user) {
			localStorageService.clearAll();
			return _user;
		}
	};
})

.factory('OfflineWineData', function(localStorageService) {

	return {
		getWines : function() {
			// returns null in not set
			return localStorageService.get('wines');
		},
		setWines : function(wines) {
			localStorageService.set('wines', wines);
			console.log('added wines to local storage');
			console.log(localStorageService.get('wines'));
			return localStorageService.get('wines');
		}
	};

})

.factory('OfflineReferralsData', function(localStorageService) {

	return {
		getReferrals : function() {
			return localStorageService.get('referrals');
		},
		setReferrals : function(referrals) {
			localStorageService.set('referrals', referrals);
			console.log('added referrals to local storage');
			console.log(localStorageService.get('referrals'));
			return localStorageService.get('referrals');
		}
	};
});