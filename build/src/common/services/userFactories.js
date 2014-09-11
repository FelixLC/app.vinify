angular.module('User', ['ngResource', 'Loading', 'Offline'])
.factory('User', ["OfflineUser", "$http", "$location", function(OfflineUser, $http, $location) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';
	// instantiate our initial object
	var _user = null;
	var self = this;
	return  {
		setUser: function(UserData) {
			_user =  UserData;
			OfflineUser.setUser(UserData);
			console.log('User updated');
			console.log(_user);
		},
		getUser: function () {
			// The getter returns either the angular user, or the local data user (and sets the angular user) or false
			if (_user) {
				console.log('returning _user {}');
				console.log(_user);
				return _user;
			} else if (OfflineUser.getUser()) {
				_user = OfflineUser.getUser();
				console.log('returning OfflineUser.getUser()');
				return OfflineUser.getUser();
			} else {
				console.log('returning false');
				return false;
			}
		},
		updateUser: function() {
			return $http.get(apiEndPoint + '/users/isloggedin/')
					.success(function(data, status, headers, config) {
						setUser(data);
						return getUser();
					})
					.error(function(response){
						// TODO manage errors
						alert(data);
						location.path('/login');
					});
		},
		postUser: function() {
			return $http.put(restApiEndPoint + '/users/'+_user.uuid + '/', _user);
		},
		removeUser: function () {
			_user = {};
			OfflineUser.removeUser();
		}
	};
}])

.factory('Bottles', ["$q", "$http", "Loading", "OfflineWineData", function($q, $http, Loading, OfflineWineData) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';
	// instantiate our initial object
	var _bottles = null;

	return {
		getList : function () {
			// TODO REFACTOR
			if (_bottles) {
				return $q.when({'data': _bottles});
			} else if (OfflineWineData.getWines()) {
				_bottles = OfflineWineData.getWines();
				console.log('returning OfflineWineData.getWines()');
				return $q.when({'data': _bottles});
			} else {
				Loading.show();
				// promise = $resource( restApiEndPoint + '/vinibar/' )
				var promise = $http({
					url:  restApiEndPoint + '/vinibar/' ,
					method: 'GET'
				})
				.success(function(data, status, headers, config) {
					Loading.hide();
					_bottles = data;
					OfflineWineData.setWines(data);
					console.log(_bottles);
				})
				.error(function(data){
					Loading.hide();
				});
				return promise;
			}
		},

		// Fake Rating // OFFLINE
		fakeRating : function (rating) {
			// getByID and Update
			for (var d = 0, len = _bottles.results.length; d < len; d += 1) {
				if (_bottles.results[d].uuid === rating.data.bottle_uuid) {
					var date_rated = new Date();
					_bottles.results[d].date_rated = date_rated.toISOString();
					_bottles.results[d].comment = rating.data.comment;
					_bottles.results[d].rating = rating.data.rating;
					console.log('faked rating of' + _bottles.results[d].uuid);
					console.log(_bottles.results[d]);
				}
			}
			return $q.when({'data': _bottles});
		},

		updateList : function () {
			console.log('try to update');
			// TODO REFACTOR
			// returning fetched bottlesList
			return $http({
						url:  restApiEndPoint + '/vinibar/' ,
						method: 'GET'
					})
					.success(
						// Success Handler
						function(BottlesData) {
							_bottles = BottlesData;
							OfflineWineData.setWines(BottlesData);
							console.log(_bottles);
							return $q.when({'data': _bottles});
					})
					.error(
						// Error Handler
						function(data){}
					);
		},

		setList : function (list) {
			_bottles.results = list;
			OfflineWineData.setWines(list);
		},

		removeBottles: function () {
			_bottles = null;
		}
	};
}])

.factory('Bottle', ["User", function(User) {

	// instantiate our initial object
	var Bottle = {
	class_name: "Bottle",
	uuid: ""
	};

	Bottle.setBottle = function(BottleData) {
		Bottle = BottleData;
	};

	Bottle.unSetBottle = function () {
		Bottle = {};
	};

	return Bottle;
}])


.factory('Addresses', ["$q", "$http", "Loading", "User", function($q, $http, Loading, User) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';
	// instantiate our initial object
	var Addresses = {};

	Addresses.getList = function () {
		// TODO REFACTOR
		var promise;
		if (Addresses.data) {
		var deferred = $q.defer();
		promise = deferred.promise;
		deferred.resolve(Addresses);
		}

		else {

		promise = $http({
						url:  apiEndPoint + '/users/addresses/',
						method: 'GET'
					})
					.success(
						// Success Handler
						function(addressData) {
							Addresses.data = addressData;
							console.log(Addresses);
							return Addresses.data;
					})
					.error(
						// Error Handler
						function(data){}
					);
		}

	return promise;

	};

	// Updates current adresses when a select change occurres
	Addresses.fireDelivery = function (id) {
		console.log(id);
		Loading.show();
		var data = {
			'uuid': id,
			'current_delivery': true
		};

		$http({
			url:  apiEndPoint + '/users/updateaddress/',
			method: 'PUT',
			data: data,
			headers: {
			'Content-Type': 'application/json; charset=UTF-8'
			}
		})
		.success(function(data, status, headers, config) {
			// TODO gracefully manage errors/successes
			console.log(data);
			// we changed the user so we need to update it
			User.setUser(data);
			Loading.hide();
		})
		.error(function(data, status, headers, config) {
			// TODO gracefully manage errors/successes
			Loading.hide();
		});
	};

	// Updates current adresses when a select change occurres
	Addresses.fireBilling = function (id) {
		console.log(id);
		Loading.show();
		var data = {
		'uuid': id,
		'current_billing': true
		};

		$http({
			url:  apiEndPoint + '/users/updateaddress/',
			method: 'PUT',
			data: data,
			headers: {
			'Content-Type': 'application/json; charset=UTF-8'
			}
		})
		.success(function(data, status, headers, config) {
			// we changed the user so we need to update it
			// TODO gracefully manage errors/successes
			console.log(data);
			User.setUser(data);
			Loading.hide();
		})
		.error(function(data, status, headers, config) {
			// TODO gracefully manage errors/successes
			Loading.hide();
		});
	};

	Addresses.updateList = function () {
		console.log('try to update');
		// TODO REFACTOR
		// returning fetched AddressesList
		return   $http({
					url:  apiEndPoint + '/users/addresses/',
					method: 'GET'
				})
				.success(
					// Success Handler
					function(addressData) {
					Addresses.data = addressData;
				})
				.error(
					// Error Handler
					function(data){}
				);
	};

	Addresses.removeAddresses = function () {
		Addresses.data = null;
	};

	return Addresses;
}])

.factory('Address', ["$http", "Addresses", "User", function($http, Addresses, User) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';

	var Address = function (user){
		this.data = {
		city: "",
		current_billing: true,
		class_name: 'address',
		country: "",
		company: "",
		intercom: "",
		digicode: "",
		other_info: "",
		zipcode: "",
		street: "",
		user: user,
		current_delivery: true
		};
	};

	var theUrl = '/users/';


	// TODO REFACTOR
	Address.prototype.updateAddress = function() {
		var data = this.data;
		var request = $http({
							url:  apiEndPoint + theUrl + 'updateaddress/',
							method: 'PUT',
							data: data,
							headers: {
							'Content-Type': 'application/json; charset=UTF-8'
							}
						});
		return request;
	};

	Address.prototype.createAddress = function() {
		var data = this.data;
		var request = $http({
							url:  apiEndPoint + theUrl + 'addaddress/',
							method: 'POST',
							data: data,
							headers: {
							'Content-Type': 'application/json; charset=UTF-8'
							}
						});
		return request;
	};

	Address.prototype.setAddress = function(address) {
		angular.extend(this.data, address);
	};

	return Address;
}]);