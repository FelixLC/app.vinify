/*
* this module only calls mixpanel events in the production environment
*/

(function () {
  'use strict';

  angular
        .module('Analytics', [ 'settings', 'ionic', 'ngCordova', 'LocalStorageModule' ])
        .factory('Mixpanel', Mixpanel)
        .factory('OfflineMixpanel', OfflineMixpanel);

    /* @ngInject */
  function Mixpanel (settings, OfflineMixpanel, $ionicPlatform, $cordovaNetwork) {

    // public api
    var service = {
        track: track,
        identify: identify,
        alias: alias,
        people: {
          set: set,
          trackCharge: trackCharge
        }
      };
    return service;

    function track (event, properties) {
      if (settings.test) {
        console.log('Mixpanel:' + event);
        if (properties) {
          console.log(properties);
        }
      } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && offline{
        OfflineMixpanel.add([ 'track' ], event, properties);
      } else {
        mixpanel.track(event, properties);
      }
    }

    function identify (id) {
      if (settings.test) {
        console.log('Mixpanel:Identify:' + id);
      } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && offline{
        // do nothing. We'll attach an identify when we send later the events
      } else {
        mixpanel.identify(id);
      }
    }

    function alias (id) {
      if (settings.test) {
        console.log('Mixpanel:Alias:' + id);
      } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && offline{
        // do nothing. We'll attach an identify when we send later the events
      } else {
        mixpanel.alias(id);
      }
    }

    function set (properties) {
      if (settings.test) {
        console.log('Mixpanel:People:Set');
        console.log(properties);
      } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && offline{
        OfflineMixpanel.add([ 'people', 'set' ], properties);
      } else {
        mixpanel.people.set(properties);
      }
    }

    function trackCharge (amount) {
      if (settings.test) {
        console.log('Mixpanel:People:TrackCharge');
        console.log(amount);
      } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) { // if we are in cordova && offline{
        OfflineMixpanel.add([ 'people', 'track_charge' ], amount, {
          $time: new Date()
        });
      } else {
        mixpanel.people.track_charge(amount, {
          $time: new Date()
        });
      }
    }
  }

    /* @ngInject */
  function OfflineMixpanel (settings, localStorageService) {
    var _queue = localStorageService.get('events') || []; // getOrCreate events Array

    // public api
    var service = {
        add: add,
        send: send
    };

    function add (func, event, properties) {
      _queue.push({
        func: func,
        event: event,
        properties: properties
      });
      localStorageService.set('events', _queue);
    }

    function send () {
      if (_queue.length) {
        for (var i = _queue.length - 1; i >= 0; i--) {
          var mp = _queue[i];
          if (mp.func.length === 1) {
            mixpanel[ mp.func[0] ](mp.event, mp.properties);
          } else {
            mixpanel[ mp.func[0] ][ mp.func[1] ](mp.event, mp.properties);
          }
        }
      }
    }
    return service;
  }
})();