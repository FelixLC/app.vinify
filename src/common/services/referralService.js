angular.module('Referrals', ['Offline'])
.factory('Referrals', function ($http, $q, OfflineReferralsData) {
    var apiEndPoint =  'https://api.vinify.co/api';
    var restApiEndPoint =  'https://api.vinify.co/restapi';
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
                                            function (data, status, headers, config) {
                                                Referrals.data =  data;
                                                OfflineReferralsData.setReferrals(data);
                                            })
                                        .error(
                                            // Error Handler
                                            function (data) {}
                                        );
        }

        return promise;

    };

    Referrals.updateList = function () {

                // promise = $resource( restApiEndPoint + '/vinibar/' )
                promise = $http({
                                                url:  apiEndPoint + '/users/referrals/' ,
                                                method: 'GET'
                                              })
                                        .success(
                                            // Success Handler
                                            function (data, status, headers, config) {
                                                Referrals.data =  data;
                                                OfflineReferralsData.setReferrals(data);
                                            })
                                        .error(
                                            // Error Handler
                                            function (data) {}
                                        );

        return promise;

    };

    Referrals.removeReferrals = function () {
        Referrals.data = null;
    };

    return Referrals;
})

.factory('Referral', function ($http, OfflineReferralsData, Referrals) {
    var apiEndPoint =  'https://api.vinify.co/api';
    var restApiEndPoint =  'https://api.vinify.co/restapi';

    var Referral = function () {
        this.first_name = null;
        this.email = null;
    };


    // TODO REFACTOR
    Referral.prototype.sendReferral = function () {
        var self = this;
        var request = $http({
                            url:  apiEndPoint + '/orders/referralemail/',
                            method: 'POST',
                            data: self,
                            headers: {
                            'Content-Type': 'application/json; charset=UTF-8'
                            }
                        });
        return request.success(
                                        // Success Handler
                                        function (data, status, headers, config) {
                                            Referrals.data =  data;
                                            OfflineReferralsData.setReferrals(data);
                                        })
                                    .error(
                                        // Error Handler
                                        function (data) {}
                                    );
    };

    return Referral;
});