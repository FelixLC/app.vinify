/*
* This module handles mixpanel events for a cordova app.
* It has the following dependencies (the same logic can be applied without the first 2)
* - ionic: The beautiful, open source front-end SDK for developing hybrid mobile apps with HTML http://ionicframework.com/
* - ngCordova: a collection of 63+ AngularJS extensions on top of the Cordova API that make it easy to build,
*                           test, and deploy Cordova mobile apps with AngularJS. http://ngcordova.com/
* - LocalStorageModule: to give us access to the local storage when there is no connectivity
* - Settings: a simple module that tells us if we are in our testing environment or not
*/

/*
* USAGE:
* Inject the Analytics module in your controller and call Mixpanel.track(event, properties), Mixpanel.alias(id), or Mixpanel.people.set ...
* If online, it will send the event. If not, it will log the event in localStorage.
* Add some logic to your app.js run  or resume, or online event and trigger OfflineMixpanel.send(id) when these events occur.
*/

/*
* WARNING: This module is not production-ready and only share to give a hint.
  The MIT License

  Copyright (c) 2014 Google, Inc. http://angularjs.org

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

/*
* author: Félix Le Chevallier
* https://github.com/FelixLC
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

        // if we are in test mode: log mixpanel events
        if (settings.test) {
          console.log('Mixpanel:' + event);
          if (properties) {
            console.log(properties);
          }

        // if we are in cordova && offline
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          OfflineMixpanel.add({
            func: 'track',
            event: event,
            properties: properties
          });

        // if we are online send the event (uses window.mixpanel)
        } else {
          mixpanel.track(event, properties);
        }
      });
    }

    function identify (id) {
      ionic.Platform.ready(function () {

        // if we are in test mode: log mixpanel events
        if (settings.test) {
          console.log('Mixpanel:Identify:' + id);

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          // do nothing. We'll attach an identify when we send later the events

        // if we are online send the event (uses window.mixpanel)
        } else {
          mixpanel.identify(id);
        }
      });
    }

    function alias (id) {
      ionic.Platform.ready(function () {

        // if we are in test mode: log mixpanel events
        if (settings.test) {
          console.log('Mixpanel:Alias:' + id);

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          // do nothing. We'll attach an identify when we send later the events

        // if we are online send the event (uses window.mixpanel)
        } else {
          mixpanel.alias(id);
        }
      });
    }

    function set (id, properties) {
      ionic.Platform.ready(function () {

        // if we are in test mode: log mixpanel events
        if (settings.test) {
          console.log('Mixpanel:People:Set');
          console.log(properties);

        // if we are in cordova && offline{
        } else if (ionic.Platform.isWebView() && !$cordovaNetwork.isOnline()) {
          OfflineMixpanel.add({
            func: 'set',
            properties: properties
          });

        // if we are online send the event (uses window.mixpanel)
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

        // if we are online send the event (uses window.mixpanel)
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