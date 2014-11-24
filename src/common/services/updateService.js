angular.module('Update', [])
  .factory('Update', function($http) {
    var apiEndPoint =  'http://127.0.0.1:8000/api';
    var restApiEndPoint =  'http://127.0.0.1:8000/restapi';
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