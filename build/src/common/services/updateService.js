angular.module('Update', [])
  .factory('Update', function($http) {
    var apiEndPoint =  'https://api.vinify.co/api';
    var restApiEndPoint =  'https://api.vinify.co/restapi';
    var that = this;
    var _version = 1.3;
    return {
      version: _version, // This is the version name to be manually updated at each build
      isOutdated: false,
      checkUpdate: function (user_uuid, device) {
        return $http.post(apiEndPoint + '/checkversion/', {
          "user": user_uuid,
          "version": _version,
          "device_platform": device.platform,
          "device_name": device.name,
          "device_version": device.version
        });
      }
    };
  });