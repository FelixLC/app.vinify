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
  function Mixpanel (settings, OfflineMixpanel, $cordovaNetwork) {

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
      ionic.Platform.ready(function () {
        if (settings.test) {
          console.log('Mixpanel:' + event);
          if (properties) {
            console.log(properties);
          }

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          OfflineMixpanel.add({
            func: 'track',
            event: event,
            properties: properties
          });
        } else {
          mixpanel.track(event, properties);
        }
      });
    }

    function identify (id) {
      ionic.Platform.ready(function () {
        if (settings.test) {
          console.log('Mixpanel:Identify:' + id);

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          // do nothing. We'll attach an identify when we send later the events
        } else {
          mixpanel.identify(id);
        }
      });
    }

    function alias (id) {
      ionic.Platform.ready(function () {
        if (settings.test) {
          console.log('Mixpanel:Alias:' + id);

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          // do nothing. We'll attach an identify when we send later the events
        } else {
          mixpanel.alias(id);
        }
      });
    }

    function set (id, properties) {
      ionic.Platform.ready(function () {
        if (settings.test) {
          console.log('Mixpanel:People:Set');
          console.log(properties);

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          OfflineMixpanel.add({
            func: 'set',
            properties: properties
          });
        } else {
          mixpanel.identify(id);
          mixpanel.people.set(properties);
        }
      });
    }

    function trackCharge (id, amount, properties) {
      ionic.Platform.ready(function () {
        if (settings.test) {
          console.log('Mixpanel:People:TrackCharge');
          console.log(amount);

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          OfflineMixpanel.add({
            func: 'trackCharge',
            amount: amount,
            properties: properties
          });
        } else {
          mixpanel.identify(id);
          mixpanel.people.track_charge(amount, properties);
        }
      });
    }
  }

    /* @ngInject */
  function OfflineMixpanel (settings, localStorageService) {

    // getOrCreate events Array
    var _queue = localStorageService.get('events') || [];

    // public api
    var service = {
        add: add,
        send: send
    };

    function add (mpObj) {
      ionic.Platform.ready(function () {
        _queue.push(mpObj);
        localStorageService.set('events', _queue);
      });
    }

    function send (id) {
      ionic.Platform.ready(function () {
        if (_queue.length) {
          for (var i = _queue.length - 1; i >= 0; i--) {
            var mp = _queue[i];
            if (mp.func === 'track') {
              mixpanel.track(mp.event, mp.properties);
            } else if (mp.func === 'set') {

              // we identify the user along with the requests
              mixpanel.identify(id);
              mixpanel.people.set(mp.properties);
            } else if (mp.func === 'trackCharge') {

              // we identify the user along with the requests
              mixpanel.identify(id);
              mixpanel.people.track_charge(amount, properties);
            } else {
              throw new Error(mp.func + 'is not supported');
            }
          }
          localStorageService.remove('events');
        }
      });
    }
    return service;
  }
})();