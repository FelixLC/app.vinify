(function () {
  'use strict';

  angular
      .module('LikeFactory', [ 'lodash', 'settings', 'Analytics' ])
      .factory('Like', Like)
      .factory('Favourites', Favourites);

  /* @ngInject */
  function Like ($q, _, $http, settings, Mixpanel) {

    var bottle = function (uuid, props) {
      this.uuid = uuid;
      this.comment = props.comment || '';
      this.like =  props.like || 0;
    };

    bottle.prototype.likeAndComment = function (success, failure) {
      var self = this;

      return $http.post(settings.apiEndPoint + '/svi/wines/like/', self)
        .success(function (data, status, headers, config) {
          Mixpanel.track('Liked bottle: ' + self.uuid);
          if (success && angular.isFunction(success)) {
            success(data);
          }
        })
        .error(function (error) {
          Mixpanel.track('Liked failed, bottle: ' + self.uuid);
          if (failure && angular.isFunction(failure)) {
            failure(error);
          }
        });
    };

    return bottle;
  }

  /* @ngInject */
  function Favourites ($q, _, $http, settings, Mixpanel) {

    var api = {
      get: function () {
        return $http.get(settings.apiEndPoint + '/svi/wines/tasted/');
      }
    };

    return api;
  }
})();

