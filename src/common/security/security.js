// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('security.service', [
  'security.login.form',         // Contains the login form template and controller
  'User', 'Referrals',
  'Loading',
  'Offline',
  'ngCookies',
  'Update'
])
.factory('security', [ '$http', '$q', '$location', 'User', 'Bottles', 'Referrals', 'Addresses', '$window', 'Loading', 'OfflineUser', '$cookies', 'Update', function($http, $q, $location, User, Bottles, Referrals, Addresses, $window, Loading, OfflineUser, $cookies, Update) {
 var apiEndPoint =  'http://127.0.0.1:8000/api';
 var restApiEndPoint =  'http://127.0.0.1:8000/restapi';
  // Redirect to the given url (defaults to '/')
  function redirect(url) {
    url = url || '/';
    $location.path(url);
  }

  // // Register a handler for when an item is added to the retry queue
  // queue.onItemAddedCallbacks.push(function(retryItem) {
  //   if ( queue.hasMore() ) {
  //     service.showLogin();
  //   }
  // });

  // The public API of the service
  var service = {

    // // Get the first reason for needing a login
    // getLoginReason: function() {
    //   return queue.retryReason();
    // },

    // Show the modal login dialog
    showLogin: function() {
     redirect('/login');
    },

    // Attempt to authenticate a user by the given email and password
    login: function(email, password) {
      Loading.show();
      service.currentUser = null;
      User.removeUser();
      delete $window.sessionStorage.token;
      var request = $http({
                            url: apiEndPoint + '/users/login/',
                            method: "POST",
                            data: {'username': email,  'password': password},
                            headers: {
                                     'Content-Type': 'application/json; charset=UTF-8'
                            }
                    });
      return request.success(function(data, status, headers, config) {
                                      Loading.hide();
                                      // SET USER FOR THIS SERVICE (USEFUL FOR ISLOGGEDIN)
                                      service.currentUser = data;
                                      // SET USER IN ANGULAR AND LOCAL STORAGE
                                      User.setUser(data);
                                      // SET AUTH TOKEN FOR FURTHER REQUESTS
                                      $window.sessionStorage.token = data.token;
                                      console.log($window.sessionStorage.token);
                                      return service.isAuthenticated();
                                    })
                                    .error(function(){
                                      Loading.hide();
                                    });
    },

    // Logout the current user and redirect
    logout: function(redirectTo) {
        service.currentUser = null;
        // Erase all traces.
        User.removeUser();
        Addresses.removeAddresses();
        Referrals.removeReferrals();
        Bottles.removeBottles();
        console.log('removing traces');
        delete $window.sessionStorage.token;
        redirect(redirectTo);
    },

    // Ask the backend to see if a user is already authenticated - this may be from a previous session.
    requestCurrentUser: function() {
      if ( service.isAuthenticated() ) {
        // let's go home
        console.log('Method isAuth');
        return $q.when(service.currentUser);
      } else if ( User.getUser() ) {
            console.log('Logging With Local');
            service.currentUser = User.getUser();
            $window.sessionStorage.token = User.getUser().token;
            return $q.when(User.getUser());
      } else {
        // We don't need to try isloggedin. Without token we're naked.
        // return $http.get(apiEndPoint + '/users/isloggedin/').then(
        //   //Success: set currentUser
        //   function(response) {
        //     service.currentUser = response.data;
        //     User.setUser(response.data);
        //     OfflineUser.setUser(data);
        //     $window.sessionStorage.token = response.data.token;
        //     console.log($window.sessionStorage.token);
        //     return service.currentUser;
        //   },
          //Error: Reroute User to login
          // function(){
            $location.path('/login');
            console.log('Redirect');
            delete $window.sessionStorage.token;
            return $q.reject('Not logged in');
            // var deferred = $q.defer;
            // deferred.reject('error');
            // return deferred.promise;
          // }
        // );
      }
    },

    // Information about the current user
    currentUser: null,
    currentUserData: null,

    // Is the current user authenticated?
    isAuthenticated: function(){
      return !!service.currentUser;
    },

    // Is the current user an adminstrator?
    isStaff: function() {
      return !!(service.currentUser && service.currentUser.is_staff);
    }
  };

  return service;
}]);
