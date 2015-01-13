angular.module('Referrals', [ 'Offline', 'settings' ])
  .factory('Referrals', function ($http, $q, OfflineReferralsData, settings) {
    // instantiate our initial object
    var Referrals = {};

    Referrals.getList = function () {
      // TODO REFACTOR
      var promise;
      if (Referrals.data) {
        var deferred = $q.defer();
        promise = deferred.promise;
        deferred.resolve(Referrals.data);
      } else {
        promise = $http.get(settings.apiEndPoint + '/users/referrals/')
                                .success(function (data, status, headers, config) {
                                  Referrals.data =  data;
                                  OfflineReferralsData.setReferrals(data);
                                })
                                .error(function (data) {});
      }

      return promise;

    };

    Referrals.updateList = function () {
      return $http.get(settings.apiEndPoint + '/users/referrals/')
                              .success(function (data, status, headers, config) {
                                Referrals.data =  data;
                                OfflineReferralsData.setReferrals(data);
                              })
                              .error(function (data) {});

    };

    Referrals.removeReferrals = function () {
      Referrals.data = null;
    };

    return Referrals;
  })

  .factory('Referral', function ($http, OfflineReferralsData, Referrals, settings) {

    var Referral = function () {
      this.first_name = null;
      this.email = null;
    };

    // TODO REFACTOR
    Referral.prototype.sendReferral = function () {
      var self = this;
      var request = $http.post(settings.apiEndPoint + '/orders/referralemail/', self);
      return request
        .success(function (data, status, headers, config) {
          Referrals.data =  data;
          OfflineReferralsData.setReferrals(data);
        })
        .error(function (data) {});
    };

    return Referral;
  });