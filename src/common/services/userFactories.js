angular.module('User', [ 'ngResource', 'Loading', 'Offline', 'settings' ])
  .factory('User', function (OfflineUser, $http, $location, settings) {
    // instantiate our initial object
    var _user = null;
    var self = this;
    User =  {
      setUser: function (UserData) {
        _user =  UserData;
        OfflineUser.setUser(UserData);
      },
      getUser: function () {
        // The getter returns either the angular user, or the local data user (and sets the angular user) or false
        if (_user) {
          return _user;
        } else if (OfflineUser.getUser()) {
          _user = OfflineUser.getUser();
          return OfflineUser.getUser();
        } else {
          return false;
        }
      },
      updateUser: function (success) {
        return $http.get(settings.apiEndPoint + '/users/isloggedin/')
            .success(function (data, status, headers, config) {
              User.setUser(data);
              if (success && angular.isFunction(success)) {
                success(data);
              }
            })
            .error(function (response) {
              // TODO manage errors
              // alert(data);
              $location.path('/login');
            });
      },
      postUser: function (firstName, LastName, phone, email) {
        return $http.put(settings.apiEndPoint + '/users/updateuserinfo/', {
          first_name: firstName,
          last_name: LastName,
          phone: phone,
          email: email
        });
      },
      removeUser: function () {
        _user = {};
        OfflineUser.removeUser();
      },
      changePassword: function (currentPassword, newPassword, success, failure) {
        $http.put(settings.apiEndPoint + '/users/password/change/', {
          current_password: currentPassword,
          new_password: newPassword
        }).then(
          function (response) {
            if (success && angular.isFunction(success)) {
              success(response.data);
            }
          }, function (error) {
            if (failure && angular.isFunction(failure)) {
              failure(error);
            }
          });
      },
      orderReceived: function () {
        $http.get(settings.apiEndPoint + '/orders/orderreceived/')
          .success(function (data, status, headers, config) {
            User.setUser(data);
            return User.getUser();
          })
          .error(function (response) {
            User.setUser(data);
            return User.getUser();
          });
      }
    };
    return User;
  })

  .factory('Bottles', function ($q, $http, Loading, OfflineWineData, settings) {
    // instantiate our initial object
    var _bottles = {};

    return {
      getList: function () {
        // TODO REFACTOR
        if (_bottles) {
          return $q.when({ data: _bottles });
        } else if (OfflineWineData.getWines()) {
          _bottles = OfflineWineData.getWines();
          return $q.when({ data: _bottles });
        } else {
          Loading.show();
          var promise = $http.get(settings.restApiEndPoint + '/vinibar/')
            .success(function (data, status, headers, config) {
              Loading.hide();
              _bottles = data;
              OfflineWineData.setWines(data);
            })
            .error(function (data) {
              Loading.hide();
            });
          return promise;
        }
      },

      // Fake Rating // OFFLINE
      fakeRating: function (rating) {
        // getByID and Update
        for (var d = 0, len = _bottles.results.length; d < len; d += 1) {
          if (_bottles.results[d].uuid === rating.data.bottle_uuid) {
            var dateRated = new Date();
            _bottles.results[d].date_rated = dateRated.toISOString();
            _bottles.results[d].comment = rating.data.comment;
            _bottles.results[d].rating = rating.data.rating;
          }
        }
        return $q.when({ data: _bottles });
      },

      updateList: function () {
        // TODO REFACTOR
        // returning fetched bottlesList
        return $http.get(settings.restApiEndPoint + '/vinibar/')
            .success(function (BottlesData) {
              _bottles = BottlesData;
              OfflineWineData.setWines(BottlesData);
              return $q.when({ data: _bottles });
            })
            .error(function (data) {});
      },

      setList: function (list) {
        _bottles.results = list;
        OfflineWineData.setWines(list);
      },

      removeBottles: function () {
        _bottles = null;
      }
    };
  })

  .factory('Bottle', function (User) {

    // instantiate our initial object
    var Bottle = {
    class_name: "Bottle",
    uuid: ""
    };

    Bottle.setBottle = function (BottleData) {
      Bottle = BottleData;
    };

    Bottle.unSetBottle = function () {
      Bottle = {};
    };

    return Bottle;
  })
  // Just to maintain the state of Segmented fliter
  .factory('SegmentedControlState', function () {
    return {
      value: null
    };
  })
  .factory('Addresses', function ($q, $http, Loading, User, settings) {
    // instantiate our initial object
    var Addresses = {};

    Addresses.getList = function () {
      // TODO REFACTOR
      var promise;
      if (Addresses.data) {
        var deferred = $q.defer();
        promise = deferred.promise;
        deferred.resolve(Addresses);
      } else {

        promise = $http.get(settings.apiEndPoint + '/users/addresses/')
            .success(function (addressData) {
              Addresses.data = addressData;
              return Addresses.data;
            })
            .error(function (data) {});
      }

      return promise;

    };

    // Updates current adresses when a select change occurres
    Addresses.fireDelivery = function (id) {
      Loading.show();
      var data = {
        uuid: id,
        current_delivery: true
      };

      $http({
        url:  settings.apiEndPoint + '/users/updateaddress/',
        method: 'PUT',
        data: data,
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      .success(function (data, status, headers, config) {
        // TODO gracefully manage errors/successes
        // we changed the user so we need to update it
        User.setUser(data);
        Loading.hide();
      })
      .error(function (data, status, headers, config) {
        // TODO gracefully manage errors/successes
        Loading.hide();
      });
    };

    // Updates current adresses when a select change occurres
    Addresses.fireBilling = function (id) {
      Loading.show();
      var data = {
      uuid: id,
      current_billing: true
      };

      $http({
        url:  settings.apiEndPoint + '/users/updateaddress/',
        method: 'PUT',
        data: data,
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        }
      })
      .success(function (data, status, headers, config) {
        // we changed the user so we need to update it
        // TODO gracefully manage errors/successes
        User.setUser(data);
        Loading.hide();
      })
      .error(function (data, status, headers, config) {
        // TODO gracefully manage errors/successes
        Loading.hide();
      });
    };

    Addresses.updateList = function () {
      // TODO REFACTOR
      // returning fetched AddressesList
      return $http({
            url:  settings.apiEndPoint + '/users/addresses/',
            method: 'GET'
          })
          .success(
            // Success Handler
            function (addressData) {
            Addresses.data = addressData;
          })
          .error(
            // Error Handler
            function (data) {}
          );
    };

    Addresses.removeAddresses = function () {
      Addresses.data = null;
    };

    return Addresses;
  })

  .factory('Address', function ($http, Addresses, User, settings) {

    var Address = function (user) {
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
    Address.prototype.updateAddress = function () {
      var data = this.data;
      var request = $http({
                url:  settings.apiEndPoint + theUrl + 'updateaddress/',
                method: 'PUT',
                data: data,
                headers: {
                'Content-Type': 'application/json; charset=UTF-8'
                }
              });
      return request;
    };

    Address.prototype.createAddress = function () {
      var data = this.data;
      var request = $http({
                url:  settings.apiEndPoint + theUrl + 'addaddress/',
                method: 'POST',
                data: data,
                headers: {
                'Content-Type': 'application/json; charset=UTF-8'
                }
              });
      return request;
    };

    Address.prototype.setAddress = function (address) {
      angular.extend(this.data, address);
    };

    return Address;
  })

  .factory('Orders', function ($http, settings) {

    // instantiate our initial object
    var service = {};

    service.getList = function () {
      return $http.get(settings.apiEndPoint + '/users/orders/');
    };

    return service;
  });