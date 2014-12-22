angular.module('Loading', ['ionic'])

  //  The base Class from which every object will inherit

.factory('Loading', function ($ionicLoading) {

  // Trigger the loading indicator
  var show = function () {

    // Show the loading overlay and text
     $ionicLoading.show({

      // The text to display in the loading indicator
      content: '<i class="icon ion-loading-c">',

      // The animation to use
      animation: 'fade-in',

      // Will a dark overlay or backdrop cover the entire view
      showBackdrop: true,

      // The maximum width of the loading indicator
      // Text will be wrapped if longer than maxWidth
      maxWidth: 0,

      // The delay in showing the indicator
      showDelay: 500
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