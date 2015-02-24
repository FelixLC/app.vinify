/*
* This module tests our mixpanel module.
* WARNING: This module is not production-ready and only shared to give a hint.
*/

/*
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

describe('Analytics module', function () {
  'use strict';

  var Mixpanel,
      ionic,
      webView,
      mixpanel,
      OfflineMixpanel,
      settings,
      $cordovaNetwork,
      online,
      $ionicPlatform,
      localStorageService;

  beforeEach(module('Analytics'));
  beforeEach(function () {

    settings = {};
    ionic = function () {
      return {
        Platform: {
          isWebView: function () {
            console.log('webView', webView);
            return true;
          }
        }
      };
    };
    $cordovaNetwork = function () {
      return {
        isOnline: function () {
          console.log('online', online);
          return online;
        }
      };
    };
    localStorageService = {
        set: function () {},
        get: function () { return null; }
    };

    module(function ($provide) {
      $provide.factory('ionic', ionic);
      $provide.factory('$cordovaNetwork', $cordovaNetwork);
      $provide.constant('settings', settings);
      $provide.value('localStorageService', localStorageService);
    });
  });

  beforeEach(inject(function (_Mixpanel_, _OfflineMixpanel_) {
    Mixpanel = _Mixpanel_;
    OfflineMixpanel = _OfflineMixpanel_;
    mixpanel = window.mixpanel;

    spyOn(mixpanel, 'track');
    spyOn(mixpanel, 'identify');
    spyOn(mixpanel, 'alias');
    spyOn(mixpanel.people, 'set');
    spyOn(mixpanel.people, 'track_charge');

    spyOn(OfflineMixpanel, 'add');
    spyOn(OfflineMixpanel, 'send');

    spyOn(localStorageService, 'set');
    spyOn(localStorageService, 'get');
  }));


  it('should have its api defined', inject(function () {
    expect(angular.isFunction(Mixpanel.track)).toBeTruthy();
    expect(angular.isFunction(Mixpanel.identify)).toBeTruthy();
    expect(angular.isFunction(Mixpanel.alias)).toBeTruthy();
    expect(angular.isFunction(Mixpanel.people.set)).toBeTruthy();
    expect(angular.isFunction(Mixpanel.people.trackCharge)).toBeDefined();
    expect(angular.isFunction(OfflineMixpanel.add)).toBeDefined();
    expect(angular.isFunction(OfflineMixpanel.send)).toBeDefined();
  }));

  it('should not call mixpanel when testing', inject(function () {
    settings.test = true;
    Mixpanel.track();
    Mixpanel.identify();
    Mixpanel.alias();
    Mixpanel.people.set();
    Mixpanel.people.trackCharge();

    expect(mixpanel.track).not.toHaveBeenCalled();
    expect(mixpanel.identify).not.toHaveBeenCalled();
    expect(mixpanel.alias).not.toHaveBeenCalled();
    expect(mixpanel.people.set).not.toHaveBeenCalled();
    expect(mixpanel.people.track_charge).not.toHaveBeenCalled();
  }));

  it('should go Offline if we have no connectivity', inject(function () {
    settings.test = false;
    Mixpanel.track('Logged In', { lives: 'here' });
    Mixpanel.people.set({ plan: 'rich' });
    Mixpanel.people.trackCharge(50);
    expect(mixpanel.track).toHaveBeenCalledWith('Logged In', { lives: 'here' });
    expect(mixpanel.people.track_charge).toHaveBeenCalled();
  }));

});