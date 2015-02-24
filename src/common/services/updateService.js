angular.module('Update', [ 'settings' ])
  .factory('Update', function ($http, settings) {

    var that = this;
    var _version = 1.5;

    return {
      version: _version, // This is the version name to be manually updated at each build
      isOutdated: false,
      checkUpdate: function (userUuid, device) {
        return $http.post(settings.apiEndPoint + '/checkversion/', {
          user: userUuid,
          version: _version,
          device_platform: device.platform,
          device_name: device.name,
          device_version: device.version
        });
      }
    };
  });