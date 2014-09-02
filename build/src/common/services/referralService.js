angular.module('Referrals', ['Offline'])
.factory('Referrals', function($http, $q) {
    var apiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/api';
    var restApiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/restapi';
    // instantiate our initial object
    var Referrals = {};

    Referrals.getList = function () {
        // TODO REFACTOR
        var promise;
        if (Referrals.data) {
                var deferred = $q.defer();
                promise = deferred.promise;
                deferred.resolve(Referrals.data);
        }

        else {

                // promise = $resource( restApiEndPoint + '/vinibar/' )
                promise = $http({
                                                url:  apiEndPoint + '/users/referrals/' ,
                                                method: 'GET'
                                              })
                                        .success(
                                            // Success Handler
                                            function(data, status, headers, config) {
                                                Referrals.data =  data;
                                            })
                                        .error(
                                            // Error Handler
                                            function(data){}
                                        );
        }

        return promise;

    };

    return Referrals;
});