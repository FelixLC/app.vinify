angular.module('Loading', ['ionic'])

  //  The base Class from which every object will inherit

.factory('Loading', function ($ionicLoading) {

  // Trigger the loading indicator
  var show = function (text) {

    var content = text ? text + '<br> <ion-spinner></ion-spinner>' : '<ion-spinner></ion-spinner>';
    // Show the loading overlay and text
    $ionicLoading.show({

      // The text to display in the loading indicator
      template: content

    });
  };

  // Hide the loading indicator
  var hide = function () {
    $ionicLoading.hide();
  };

    return {
      'show': show,
      'hide': hide
    };
});