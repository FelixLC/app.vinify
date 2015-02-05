(function () {
  'use strict';

  angular
    .module('security.service', [
      'security.login.form',         // Contains the login form template and controller
      'User', 'Referrals',
      'Loading',
      'Offline',
      'ngCookies',
      'Update',
      'settings',
      'Analytics'
    ])
    .factory('security', security);

    /* @ngInject */
  function security ($http, $q, $location, User, Bottles, Referrals, Addresses, $window, Loading, OfflineUser, $cookies, Update, settings, $ionicHistory, Mixpanel) {
    var service = {
      login: login, // Attempt to authenticate a user by the given email and password
      logout: logout, // Logout the current user and redirect
      requestCurrentUser: requestCurrentUser, // Ask the backend to see if a user is already authenticated
      currentUser: null, // Information about the current user
      currentUserData: null,
      isAuthenticated: isAuthenticated, // Is the current user authenticated?
      isStaff: isStaff // Is the current user an adminstrator?
    };

    return service;

    // Redirect to the given url (defaults to '/')
    function redirect (url) {
      url = url || '/';
      $location.path(url);
    }

    // Attempt to authenticate a user by the given email and password
    function login (email, password) {
      Loading.show();
      service.currentUser = null;
      User.removeUser();
      delete $window.sessionStorage.token;

      var request = $http.post(settings.apiEndPoint + '/users/login/', { username: email,  password: password });
      return request.success(function (data, status, headers, config) {
                                      Loading.hide();

                                      // Set User For This Service (useful For Isloggedin)
                                      service.currentUser = data;

                                      // we identify then set properties
                                      Mixpanel.people.set(data.uuid, {
                                        "First Name": data.first_name,
                                        "Email ": data.email,
                                        "Last Name": data.last_name,
                                        "App Version": Update.version
                                      });

                                      // Set User In Angular And Local Storage
                                      User.setUser(data);

                                      // Set Auth Token For Further Requests
                                      $window.sessionStorage.token = data.token;
                                      return service.isAuthenticated();
                                    })
                                    .error(function () {
                                      Loading.hide();
                                    });
    }

    // Logout the current user and redirect
    function logout (redirectTo) {
      service.currentUser = null;
      // Erase all traces.
      User.removeUser();
      $ionicHistory.clearCache();
      Addresses.removeAddresses();
      Referrals.removeReferrals();
      Bottles.removeBottles();
      console.log('removing all traces');
      delete $window.sessionStorage.token;
      redirect(redirectTo);
    }

    // Ask the backend to see if a user is already authenticated - this may be from a previous session.
    function requestCurrentUser () {

      if (service.isAuthenticated()) {
        // let's go home
        console.log('Method isAuth');
        return $q.when(service.currentUser);
      } else if (User.getUser()) {
        console.log('Logging With Local');
        service.currentUser = User.getUser();
        $window.sessionStorage.token = User.getUser().token;
        return $q.when(User.getUser());
      } else {
        // We don't need to try isloggedin. Without token we're naked.
        $location.path('/login');
        console.log('Redirect');
        delete $window.sessionStorage.token;
        return $q.reject('Not logged in');
      }
    }

    // Is the current user authenticated?
    function isAuthenticated () {
      return !!service.currentUser;
    }

    // Is the current user an adminstrator?
    function isStaff () {
      return !!(service.currentUser && service.currentUser.is_staff);
    }
  }
})();
