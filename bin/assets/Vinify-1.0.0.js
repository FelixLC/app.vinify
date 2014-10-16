/**
 * Vinify - v1.0.0 - 2014-10-16
 * http://vinify.co
 *
 * Copyright (c) 2014 Felix
 * Licensed MIT <https://raw.github.com/joshdmiller/ng-boilerplate/master/LICENSE>
 */
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0-beta.10
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function t(t,e,n){e!==!1?k.addEventListener(t,$[t],n):k.removeEventListener(t,$[t])}function e(t){var e=E(t.target),i=S(e);if(ionic.tap.requiresNativeClick(i)||Y)return!1;var r=T(t);n("click",i,r.x,r.y),_(i)}function n(t,e,n,i){var r=document.createEvent("MouseEvents");r.initMouseEvent(t,!0,!0,window,1,0,0,n,i,!1,!1,!1,!1,0,null),r.isIonicTap=!0,e.dispatchEvent(r)}function i(t){return("submit"!=t.target.type||0!==t.detail)&&(ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(t.target)||!t.isIonicTap&&!ionic.tap.requiresNativeClick(t.target))?(t.stopPropagation(),ionic.tap.isLabelWithTextInput(t.target)||t.preventDefault(),!1):void 0}function r(e){if(!e.isIonicTap&&!d(e)){if(z)return e.stopPropagation(),ionic.tap.isTextInput(e.target)&&q===e.target||/^(select|option)$/i.test(e.target.tagName)||e.preventDefault(),!1;Y=!1,W=T(e),t("mousemove"),ionic.activator.start(e)}}function o(n){return z?(n.stopPropagation(),n.preventDefault(),!1):d(n)||/^(select|option)$/i.test(n.target.tagName)?!1:(v(n)||e(n),t("mousemove",!1),ionic.activator.end(),void(Y=!1))}function s(e){return v(e)?(t("mousemove",!1),ionic.activator.end(),Y=!0,!1):void 0}function a(e){if(!d(e)&&(Y=!1,h(),W=T(e),t(B),ionic.activator.start(e),ionic.Platform.isIOS()&&ionic.tap.isLabelWithTextInput(e.target))){var n=S(E(e.target));n!==F&&e.preventDefault()}}function l(t){d(t)||(h(),v(t)||(e(t),/^(select|option)$/i.test(t.target.tagName)&&t.preventDefault()),q=t.target,u())}function c(e){return v(e)?(Y=!0,t(B,!1),ionic.activator.end(),!1):void 0}function u(){t(B,!1),ionic.activator.end(),Y=!1}function h(){z=!0,clearTimeout(H),H=setTimeout(function(){z=!1},2e3)}function d(t){return t.isTapHandled?!0:(t.isTapHandled=!0,ionic.scroll.isScrolling&&ionic.tap.containsOrIsTextInput(t.target)?(t.preventDefault(),!0):void 0)}function _(t){U=null;var e=!1;"SELECT"==t.tagName?(n("mousedown",t,0,0),t.focus&&t.focus(),e=!0):g()===t?e=!0:/^(input|textarea)$/i.test(t.tagName)?(e=!0,t.focus&&t.focus(),t.value=t.value,z&&(U=t)):f(),e&&(g(t),ionic.trigger("ionic.focusin",{target:t},!0))}function f(){var t=g();t&&/^(input|textarea|select)$/i.test(t.tagName)&&t.blur(),g(null)}function p(t){z&&ionic.tap.isTextInput(g())&&ionic.tap.isTextInput(U)&&U!==t.target&&(U.focus(),U=null),ionic.scroll.isScrolling=!1}function m(){g(null)}function g(t){return arguments.length&&(F=t),F||document.activeElement}function v(t){if(!t||1!==t.target.nodeType||!W||0===W.x&&0===W.y)return!1;var e=T(t),n=!(!t.target.classList||!t.target.classList.contains),i=n&t.target.classList.contains("button")?j:Z;return Math.abs(W.x-e.x)>i||Math.abs(W.y-e.y)>i}function T(t){var e={x:0,y:0};if(t){var n=t.touches&&t.touches.length?t.touches:[t],i=t.changedTouches&&t.changedTouches[0]||n[0];i&&(e.x=i.clientX||i.pageX||0,e.y=i.clientY||i.pageY||0)}return e}function E(t,e){for(var n=t,i=0;6>i&&n;i++){if("LABEL"===n.tagName)return n;n=n.parentElement}return e!==!1?t:void 0}function S(t){if(t&&"LABEL"===t.tagName){if(t.control)return t.control;if(t.querySelector){var e=t.querySelector("input,textarea,select");if(e)return e}}return t}function b(){C()?(window.addEventListener("native.keyboardshow",w),window.addEventListener("native.keyboardhide",x),window.addEventListener("native.showkeyboard",w),window.addEventListener("native.hidekeyboard",x)):document.body.addEventListener("focusout",x),document.body.addEventListener("ionic.focusin",y),document.body.addEventListener("focusin",y),document.body.addEventListener("orientationchange",G),document.removeEventListener("touchstart",b)}function w(t){clearTimeout(Q),ionic.keyboard.height=t.keyboardHeight}function y(t){t.target&&ionic.tap.isTextInput(t.target)&&!ionic.tap.isDateInput(t.target)&&P(t.target)&&(document.addEventListener("keydown",N,!1),document.body.scrollTop=0,document.body.querySelector(".scroll-content").scrollTop=0,K=t.target,D(t))}function D(t){clearTimeout(J),clearTimeout(Q),J=setTimeout(function(){if(!(ee+350>Date.now())){ee=Date.now();var e,n=K.getBoundingClientRect(),i=0,r=setInterval(function(){e=I(),i>10&&(clearInterval(r),e=275),e&&(L(t.target,n.top,n.bottom,te,e),clearInterval(r)),i++},100)}},32)}function L(t,e,n,i,r){var o={target:t,elementTop:Math.round(e),elementBottom:Math.round(n),keyboardHeight:r,viewportHeight:i};return o.hasPlugin=C(),o.contentHeight=i-r,o.isElementUnderKeyboard=o.elementBottom>o.contentHeight,ionic.keyboard.isOpen=!0,K=t,ionic.trigger("scrollChildIntoView",o,!0),ionic.requestAnimationFrame(function(){document.body.classList.add(ne)}),document.addEventListener("touchmove",O,!1),o}function x(){clearTimeout(Q),Q=setTimeout(M,350)}function M(){ionic.keyboard.isOpen=!1,ionic.trigger("resetScrollView",{target:K},!0),ionic.requestAnimationFrame(function(){document.body.classList.remove(ne)}),document.removeEventListener("touchmove",O),document.removeEventListener("keydown",N)}function A(){window.innerHeight>te&&(te=window.innerHeight)}function N(t){ionic.scroll.isScrolling&&O(t)}function O(t){"TEXTAREA"!==t.target.tagName&&t.preventDefault()}function G(){var t=window.innerHeight;if(t===te)var e=0,n=setInterval(function(){e>10&&clearInterval(n),t=window.innerHeight,t!==te&&(ionic.keyboard.landscape=te>t?!0:!1,te=t,clearInterval(n)),e++},50);else te=t}function I(){return ionic.keyboard.height?ionic.keyboard.height:ionic.Platform.isAndroid()?ionic.Platform.isFullScreen?275:window.innerHeight<te?te-window.innerHeight:0:ionic.Platform.isIOS()?ionic.keyboard.landscape?206:ionic.Platform.isWebView()?260:216:275}function P(t){for(;t;){if(t.classList.contains(ie))return!0;t=t.parentElement}return!1}function C(){return!!(window.cordova&&cordova.plugins&&cordova.plugins.Keyboard)}function R(){var t;for(t=0;t<document.head.children.length;t++)if("viewport"==document.head.children[t].name){re=document.head.children[t];break}if(re){var e,n=re.content.toLowerCase().replace(/\s+/g,"").split(",");for(t=0;t<n.length;t++)n[t]&&(e=n[t].split("="),oe[e[0]]=e.length>1?e[1]:"_");X()}}function X(){var t=oe.width,e=oe.height,n=ionic.Platform,i=n.version(),r="device-width",o="device-height",s=ionic.viewport.orientation();delete oe.height,oe.width=r,n.isIPad()?i>7?delete oe.width:n.isWebView()?90==s?oe.height="0":7==i&&(oe.height=o):7>i&&(oe.height="0"):n.isIOS()&&(n.isWebView()?i>7?delete oe.width:7>i?e&&(oe.height="0"):7==i&&(oe.height=o):7>i&&e&&(oe.height="0")),(t!==oe.width||e!==oe.height)&&V()}function V(){var t,e=[];for(t in oe)oe[t]&&e.push(t+("_"==oe[t]?"":"="+oe[t]));re.content=e.join(", ")}window.ionic={controllers:{},views:{},version:"1.0.0-beta.10"},function(t){function e(t){return t*t*t}function n(t){return 3*t*t*(1-t)}function i(t){return 3*t*(1-t)*(1-t)}function r(t){return(1-t)*(1-t)*(1-t)}var o=function(t,e){return t||(t=0),e||(e=0),{x:t,y:e}};t.Animator={getQuadraticBezier:function(t,s,a,l,c){var u=new o;return u.x=s.x*e(t)+a.x*n(t)+l.x*i(t)+c.x*r(t),u.y=s.y*e(t)+a.y*n(t)+l.y*i(t)+c.y*r(t),u},getCubicBezier:function(t,e,n,i,r){epsilon=1e3/60/r/4;var o=function(e){var i=1-e;return 3*i*i*e*t+3*i*e*e*n+e*e*e},s=function(t){var n=1-t;return 3*n*n*t*e+3*n*t*t*i+t*t*t},a=function(e){var i=1-e;return 3*(2*(e-1)*e+i*i)*t+3*(-e*e*e+2*i*e)*n};return function(t){var e,n,i,r,l,c,u=t;for(i=u,c=0;8>c;c++){if(r=o(i)-u,Math.abs(r)<epsilon)return s(i);if(l=a(i),Math.abs(l)<1e-6)break;i-=r/l}if(e=0,n=1,i=u,e>i)return s(e);if(i>n)return s(n);for(;n>e;){if(r=o(i),Math.abs(r-u)<epsilon)return s(i);u>r?e=i:n=i,i=.5*(n-e)+e}return s(i)}},animate:function(t){return{leave:function(){var e=function(){t.classList.remove("leave"),t.classList.remove("leave-active"),t.removeEventListener("webkitTransitionEnd",e),t.removeEventListener("transitionEnd",e)};return t.addEventListener("webkitTransitionEnd",e),t.addEventListener("transitionEnd",e),t.classList.add("leave"),t.classList.add("leave-active"),this},enter:function(){var e=function(){t.classList.remove("enter"),t.classList.remove("enter-active"),t.removeEventListener("webkitTransitionEnd",e),t.removeEventListener("transitionEnd",e)};return t.addEventListener("webkitTransitionEnd",e),t.addEventListener("transitionEnd",e),t.classList.add("enter"),t.classList.add("enter-active"),this}}}}}(ionic),function(t,e,n){function i(){o=!0;for(var t=0;t<r.length;t++)n.requestAnimationFrame(r[t]);r=[],e.removeEventListener("DOMContentLoaded",i)}var r=[],o=!1;e.addEventListener("DOMContentLoaded",i),t._rAF=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,16)}}();var s=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.webkitCancelRequestAnimationFrame;n.DomUtil={requestAnimationFrame:function(e){return t._rAF(e)},cancelAnimationFrame:function(t){s(t)},animationFrameThrottle:function(t){var e,i,r;return function(){e=arguments,r=this,i||(i=!0,n.requestAnimationFrame(function(){t.apply(r,e),i=!1}))}},getPositionInParent:function(t){return{left:t.offsetLeft,top:t.offsetTop}},ready:function(t){o||"complete"===e.readyState?n.requestAnimationFrame(t):r.push(t)},getTextBounds:function(n){if(e.createRange){var i=e.createRange();if(i.selectNodeContents(n),i.getBoundingClientRect){var r=i.getBoundingClientRect();if(r){var o=t.scrollX,s=t.scrollY;return{top:r.top+s,left:r.left+o,right:r.left+o+r.width,bottom:r.top+s+r.height,width:r.width,height:r.height}}}}return null},getChildIndex:function(t,e){if(e)for(var n,i=t.parentNode.children,r=0,o=0,s=i.length;s>r;r++)if(n=i[r],n.nodeName&&n.nodeName.toLowerCase()==e){if(n==t)return o;o++}return Array.prototype.slice.call(t.parentNode.children).indexOf(t)},swapNodes:function(t,e){e.parentNode.insertBefore(t,e)},centerElementByMargin:function(t){t.style.marginLeft=-t.offsetWidth/2+"px",t.style.marginTop=-t.offsetHeight/2+"px"},centerElementByMarginTwice:function(t){n.requestAnimationFrame(function(){n.DomUtil.centerElementByMargin(t),setTimeout(function(){n.DomUtil.centerElementByMargin(t),setTimeout(function(){n.DomUtil.centerElementByMargin(t)})})})},getParentWithClass:function(t,e,n){for(n=n||10;t.parentNode&&n--;){if(t.parentNode.classList&&t.parentNode.classList.contains(e))return t.parentNode;t=t.parentNode}return null},getParentOrSelfWithClass:function(t,e,n){for(n=n||10;t&&n--;){if(t.classList&&t.classList.contains(e))return t;t=t.parentNode}return null},rectContains:function(t,e,n,i,r,o){return n>t||t>r?!1:i>e||e>o?!1:!0}},n.requestAnimationFrame=n.DomUtil.requestAnimationFrame,n.cancelAnimationFrame=n.DomUtil.cancelAnimationFrame,n.animationFrameThrottle=n.DomUtil.animationFrameThrottle}(window,document,ionic),function(t){t.CustomEvent=function(){if("function"==typeof window.CustomEvent)return CustomEvent;var t=function(t,e){var n;e=e||{bubbles:!1,cancelable:!1,detail:void 0};try{n=document.createEvent("CustomEvent"),n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail)}catch(i){n=document.createEvent("Event");for(var r in e)n[r]=e[r];n.initEvent(t,e.bubbles,e.cancelable)}return n};return t.prototype=window.Event.prototype,t}(),t.EventController={VIRTUALIZED_EVENTS:["tap","swipe","swiperight","swipeleft","drag","hold","release"],trigger:function(e,n,i,r){var o=new t.CustomEvent(e,{detail:n,bubbles:!!i,cancelable:!!r});n&&n.target&&n.target.dispatchEvent&&n.target.dispatchEvent(o)||window.dispatchEvent(o)},on:function(e,n,i){for(var r=i||window,o=0,s=this.VIRTUALIZED_EVENTS.length;s>o;o++)if(e==this.VIRTUALIZED_EVENTS[o]){var a=new t.Gesture(i);return a.on(e,n),a}r.addEventListener(e,n)},off:function(t,e,n){n.removeEventListener(t,e)},onGesture:function(e,n,i){var r=new t.Gesture(i);return r.on(e,n),r},offGesture:function(t,e,n){t.off(e,n)},handlePopState:function(){}},t.on=function(){t.EventController.on.apply(t.EventController,arguments)},t.off=function(){t.EventController.off.apply(t.EventController,arguments)},t.trigger=t.EventController.trigger,t.onGesture=function(){return t.EventController.onGesture.apply(t.EventController.onGesture,arguments)},t.offGesture=function(){return t.EventController.offGesture.apply(t.EventController.offGesture,arguments)}}(window.ionic),function(t){function e(){if(!t.Gestures.READY){t.Gestures.event.determineEventTypes();for(var e in t.Gestures.gestures)t.Gestures.gestures.hasOwnProperty(e)&&t.Gestures.detection.register(t.Gestures.gestures[e]);t.Gestures.event.onTouch(t.Gestures.DOCUMENT,t.Gestures.EVENT_MOVE,t.Gestures.detection.detect),t.Gestures.event.onTouch(t.Gestures.DOCUMENT,t.Gestures.EVENT_END,t.Gestures.detection.detect),t.Gestures.READY=!0}}t.Gesture=function(e,n){return new t.Gestures.Instance(e,n||{})},t.Gestures={},t.Gestures.defaults={stop_browser_behavior:"disable-user-behavior"},t.Gestures.HAS_POINTEREVENTS=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,t.Gestures.HAS_TOUCHEVENTS="ontouchstart"in window,t.Gestures.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android|silk/i,t.Gestures.NO_MOUSEEVENTS=t.Gestures.HAS_TOUCHEVENTS&&window.navigator.userAgent.match(t.Gestures.MOBILE_REGEX),t.Gestures.EVENT_TYPES={},t.Gestures.DIRECTION_DOWN="down",t.Gestures.DIRECTION_LEFT="left",t.Gestures.DIRECTION_UP="up",t.Gestures.DIRECTION_RIGHT="right",t.Gestures.POINTER_MOUSE="mouse",t.Gestures.POINTER_TOUCH="touch",t.Gestures.POINTER_PEN="pen",t.Gestures.EVENT_START="start",t.Gestures.EVENT_MOVE="move",t.Gestures.EVENT_END="end",t.Gestures.DOCUMENT=window.document,t.Gestures.plugins={},t.Gestures.READY=!1,t.Gestures.Instance=function(n,i){var r=this;if(null!==n)return e(),this.element=n,this.enabled=!0,this.options=t.Gestures.utils.extend(t.Gestures.utils.extend({},t.Gestures.defaults),i||{}),this.options.stop_browser_behavior&&t.Gestures.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),t.Gestures.event.onTouch(n,t.Gestures.EVENT_START,function(e){r.enabled&&t.Gestures.detection.startDetect(r,e)}),this},t.Gestures.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;i<n.length;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;i<n.length;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(e,n){var i=t.Gestures.DOCUMENT.createEvent("Event");i.initEvent(e,!0,!0),i.gesture=n;var r=this.element;return t.Gestures.utils.hasParent(n.target,r)&&(r=n.target),r.dispatchEvent(i),this},enable:function(t){return this.enabled=t,this}};var n=null,i=!1,r=!1;t.Gestures.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;r<i.length;r++)t.addEventListener(i[r],n,!1)},onTouch:function(e,o,s){var a=this;this.bindDom(e,t.Gestures.EVENT_TYPES[o],function(l){var c=l.type.toLowerCase();if(!c.match(/mouse/)||!r){c.match(/touch/)||c.match(/pointerdown/)||c.match(/mouse/)&&1===l.which?i=!0:c.match(/mouse/)&&1!==l.which&&(i=!1),c.match(/touch|pointer/)&&(r=!0);var u=0;i&&(t.Gestures.HAS_POINTEREVENTS&&o!=t.Gestures.EVENT_END?u=t.Gestures.PointerEvent.updatePointer(o,l):c.match(/touch/)?u=l.touches.length:r||(u=c.match(/up/)?0:1),u>0&&o==t.Gestures.EVENT_END?o=t.Gestures.EVENT_MOVE:u||(o=t.Gestures.EVENT_END),(u||null===n)&&(n=l),s.call(t.Gestures.detection,a.collectEventData(e,o,a.getTouchList(n,o),l)),t.Gestures.HAS_POINTEREVENTS&&o==t.Gestures.EVENT_END&&(u=t.Gestures.PointerEvent.updatePointer(o,l))),u||(n=null,i=!1,r=!1,t.Gestures.PointerEvent.reset())}})},determineEventTypes:function(){var e;e=t.Gestures.HAS_POINTEREVENTS?t.Gestures.PointerEvent.getEvents():t.Gestures.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],t.Gestures.EVENT_TYPES[t.Gestures.EVENT_START]=e[0],t.Gestures.EVENT_TYPES[t.Gestures.EVENT_MOVE]=e[1],t.Gestures.EVENT_TYPES[t.Gestures.EVENT_END]=e[2]},getTouchList:function(e){return t.Gestures.HAS_POINTEREVENTS?t.Gestures.PointerEvent.getTouchList():e.touches?e.touches:(e.identifier=1,[e])},collectEventData:function(e,n,i,r){var o=t.Gestures.POINTER_TOUCH;return(r.type.match(/mouse/)||t.Gestures.PointerEvent.matchType(t.Gestures.POINTER_MOUSE,r))&&(o=t.Gestures.POINTER_MOUSE),{center:t.Gestures.utils.getCenter(i),timeStamp:(new Date).getTime(),target:r.target,touches:i,eventType:n,pointerType:o,srcEvent:r,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return t.Gestures.detection.stopDetect()}}}},t.Gestures.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(e,n){return e==t.Gestures.EVENT_END?this.pointers={}:(n.identifier=n.pointerId,this.pointers[n.pointerId]=n),Object.keys(this.pointers).length},matchType:function(e,n){if(!n.pointerType)return!1;var i={};return i[t.Gestures.POINTER_MOUSE]=n.pointerType==n.MSPOINTER_TYPE_MOUSE||n.pointerType==t.Gestures.POINTER_MOUSE,i[t.Gestures.POINTER_TOUCH]=n.pointerType==n.MSPOINTER_TYPE_TOUCH||n.pointerType==t.Gestures.POINTER_TOUCH,i[t.Gestures.POINTER_PEN]=n.pointerType==n.MSPOINTER_TYPE_PEN||n.pointerType==t.Gestures.POINTER_PEN,i[e]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},t.Gestures.utils={extend:function(t,e,n){for(var i in e)void 0!==t[i]&&n||(t[i]=e[i]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(e,n){var i=Math.abs(e.pageX-n.pageX),r=Math.abs(e.pageY-n.pageY);return i>=r?e.pageX-n.pageX>0?t.Gestures.DIRECTION_LEFT:t.Gestures.DIRECTION_RIGHT:e.pageY-n.pageY>0?t.Gestures.DIRECTION_UP:t.Gestures.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(e){return e==t.Gestures.DIRECTION_UP||e==t.Gestures.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){t&&t.classList&&(t.classList.add(e),t.onselectstart=function(){return!1})}},t.Gestures.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(e,n){this.current||(this.stopped=!1,this.current={inst:e,startEvent:t.Gestures.utils.extend({},n),lastEvent:!1,name:""},this.detect(n))},detect:function(e){if(this.current&&!this.stopped){e=this.extendEventData(e);for(var n=this.current.inst.options,i=0,r=this.gestures.length;r>i;i++){var o=this.gestures[i];if(!this.stopped&&n[o.name]!==!1&&o.handler.call(o,e,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=e),e.eventType==t.Gestures.EVENT_END&&!e.touches.length-1&&this.stopDetect(),e}},stopDetect:function(){this.previous=t.Gestures.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(e){var n=this.current.startEvent;if(n&&(e.touches.length!=n.touches.length||e.touches===n.touches)){n.touches=[];for(var i=0,r=e.touches.length;r>i;i++)n.touches.push(t.Gestures.utils.extend({},e.touches[i]))}var o=e.timeStamp-n.timeStamp,s=e.center.pageX-n.center.pageX,a=e.center.pageY-n.center.pageY,l=t.Gestures.utils.getVelocity(o,s,a);return t.Gestures.utils.extend(e,{deltaTime:o,deltaX:s,deltaY:a,velocityX:l.x,velocityY:l.y,distance:t.Gestures.utils.getDistance(n.center,e.center),angle:t.Gestures.utils.getAngle(n.center,e.center),direction:t.Gestures.utils.getDirection(n.center,e.center),scale:t.Gestures.utils.getScale(n.touches,e.touches),rotation:t.Gestures.utils.getRotation(n.touches,e.touches),startEvent:n}),e},register:function(e){var n=e.defaults||{};return void 0===n[e.name]&&(n[e.name]=!0),t.Gestures.utils.extend(t.Gestures.defaults,n,!0),e.index=e.index||1e3,this.gestures.push(e),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},t.Gestures.gestures=t.Gestures.gestures||{},t.Gestures.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(e,n){switch(e.eventType){case t.Gestures.EVENT_START:clearTimeout(this.timer),t.Gestures.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==t.Gestures.detection.current.name&&(t.tap.cancelClick(),n.trigger("hold",e))},n.options.hold_timeout);break;case t.Gestures.EVENT_MOVE:e.distance>n.options.hold_threshold&&clearTimeout(this.timer);break;case t.Gestures.EVENT_END:clearTimeout(this.timer)}}},t.Gestures.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(e,n){if(e.eventType==t.Gestures.EVENT_END&&"touchcancel"!=e.srcEvent.type){var i=t.Gestures.detection.previous,r=!1;if(e.deltaTime>n.options.tap_max_touchtime||e.distance>n.options.tap_max_distance)return;i&&"tap"==i.name&&e.timeStamp-i.lastEvent.timeStamp<n.options.doubletap_interval&&e.distance<n.options.doubletap_distance&&(n.trigger("doubletap",e),r=!0),(!r||n.options.tap_always)&&(t.Gestures.detection.current.name="tap",n.trigger("tap",e))}}},t.Gestures.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(e,n){if(e.eventType==t.Gestures.EVENT_END){if(n.options.swipe_max_touches>0&&e.touches.length>n.options.swipe_max_touches)return;(e.velocityX>n.options.swipe_velocity||e.velocityY>n.options.swipe_velocity)&&(n.trigger(this.name,e),n.trigger(this.name+e.direction,e))}}},t.Gestures.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,correct_for_drag_min_distance:!0,drag_max_touches:1,drag_block_horizontal:!0,drag_block_vertical:!0,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(e,n){if(t.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",e),void(this.triggered=!1);if(!(n.options.drag_max_touches>0&&e.touches.length>n.options.drag_max_touches))switch(e.eventType){case t.Gestures.EVENT_START:this.triggered=!1;break;case t.Gestures.EVENT_MOVE:if(e.distance<n.options.drag_min_distance&&t.Gestures.detection.current.name!=this.name)return;if(t.Gestures.detection.current.name!=this.name&&(t.Gestures.detection.current.name=this.name,n.options.correct_for_drag_min_distance)){var i=Math.abs(n.options.drag_min_distance/e.distance);t.Gestures.detection.current.startEvent.center.pageX+=e.deltaX*i,t.Gestures.detection.current.startEvent.center.pageY+=e.deltaY*i,e=t.Gestures.detection.extendEventData(e)}(t.Gestures.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=e.distance)&&(e.drag_locked_to_axis=!0);var r=t.Gestures.detection.current.lastEvent.direction;e.drag_locked_to_axis&&r!==e.direction&&(e.direction=t.Gestures.utils.isVertical(r)?e.deltaY<0?t.Gestures.DIRECTION_UP:t.Gestures.DIRECTION_DOWN:e.deltaX<0?t.Gestures.DIRECTION_LEFT:t.Gestures.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",e),this.triggered=!0),n.trigger(this.name,e),n.trigger(this.name+e.direction,e),(n.options.drag_block_vertical&&t.Gestures.utils.isVertical(e.direction)||n.options.drag_block_horizontal&&!t.Gestures.utils.isVertical(e.direction))&&e.preventDefault();break;case t.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",e),this.triggered=!1}}},t.Gestures.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(e,n){if(t.Gestures.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",e),void(this.triggered=!1);if(!(e.touches.length<2))switch(n.options.transform_always_block&&e.preventDefault(),e.eventType){case t.Gestures.EVENT_START:this.triggered=!1;break;case t.Gestures.EVENT_MOVE:var i=Math.abs(1-e.scale),r=Math.abs(e.rotation);if(i<n.options.transform_min_scale&&r<n.options.transform_min_rotation)return;t.Gestures.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",e),this.triggered=!0),n.trigger(this.name,e),r>n.options.transform_min_rotation&&n.trigger("rotate",e),i>n.options.transform_min_scale&&(n.trigger("pinch",e),n.trigger("pinch"+(e.scale<1?"in":"out"),e));break;case t.Gestures.EVENT_END:this.triggered&&n.trigger(this.name+"end",e),this.triggered=!1}}},t.Gestures.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(e,n){return n.options.prevent_mouseevents&&e.pointerType==t.Gestures.POINTER_MOUSE?void e.stopDetect():(n.options.prevent_default&&e.preventDefault(),void(e.eventType==t.Gestures.EVENT_START&&n.trigger(this.name,e)))}},t.Gestures.gestures.Release={name:"release",index:1/0,handler:function(e,n){e.eventType==t.Gestures.EVENT_END&&n.trigger(this.name,e)}}}(window.ionic),function(t,e,n){function i(){n.Platform.isWebView()?e.addEventListener("deviceready",r,!1):r(),t.removeEventListener("load",i,!1)}function r(){n.Platform.isReady=!0,n.Platform.detect();for(var t=0;t<u.length;t++)u[t]();u=[],n.trigger("platformready",{target:e}),n.requestAnimationFrame(function(){e.body.classList.add("platform-ready")})}var o="ios",s="android",a="windowsphone";n.Platform={navigator:t.navigator,isReady:!1,isFullScreen:!1,platforms:null,grade:null,ua:navigator.userAgent,ready:function(t){this.isReady?t():u.push(t)},detect:function(){n.Platform._checkPlatforms(),n.requestAnimationFrame(function(){for(var t=0;t<n.Platform.platforms.length;t++)e.body.classList.add("platform-"+n.Platform.platforms[t])})},setGrade:function(t){var i=this.grade;this.grade=t,n.requestAnimationFrame(function(){i&&e.body.classList.remove("grade-"+i),e.body.classList.add("grade-"+t)})},device:function(){return t.device?t.device:(this.isWebView(),{})},_checkPlatforms:function(){this.platforms=[];var t="a";this.isWebView()?(this.platforms.push("webview"),this.platforms.push("cordova")):this.platforms.push("browser"),this.isIPad()&&this.platforms.push("ipad");var e=this.platform();if(e){this.platforms.push(e);var n=this.version();if(n){var i=n.toString();i.indexOf(".")>0?i=i.replace(".","_"):i+="_0",this.platforms.push(e+i.split("_")[0]),this.platforms.push(e+i),this.isAndroid()&&4.4>n?t=4>n?"c":"b":this.isWindowsPhone()&&(t="b")}}this.setGrade(t)},isWebView:function(){return!(!t.cordova&&!t.PhoneGap&&!t.phonegap)},isIPad:function(){return/iPad/i.test(n.Platform.navigator.platform)?!0:/iPad/i.test(this.ua)},isIOS:function(){return this.is(o)},isAndroid:function(){return this.is(s)},isWindowsPhone:function(){return this.is(a)},platform:function(){return null===l&&this.setPlatform(this.device().platform),l},setPlatform:function(t){l="undefined"!=typeof t&&null!==t&&t.length?t.toLowerCase():this.ua.indexOf("Android")>0?s:this.ua.indexOf("iPhone")>-1||this.ua.indexOf("iPad")>-1||this.ua.indexOf("iPod")>-1?o:this.ua.indexOf("Windows Phone")>-1?a:n.Platform.navigator.platform&&navigator.platform.toLowerCase().split(" ")[0]||""},version:function(){return null===c&&this.setVersion(this.device().version),c},setVersion:function(t){if("undefined"!=typeof t&&null!==t&&(t=t.split("."),t=parseFloat(t[0]+"."+(t.length>1?t[1]:0)),!isNaN(t)))return void(c=t);c=0;var e=this.platform(),n={android:/Android (\d+).(\d+)?/,ios:/OS (\d+)_(\d+)?/,windowsphone:/Windows Phone (\d+).(\d+)?/};n[e]&&(t=this.ua.match(n[e]),t&&t.length>2&&(c=parseFloat(t[1]+"."+t[2])))},is:function(t){if(t=t.toLowerCase(),this.platforms)for(var e=0;e<this.platforms.length;e++)if(this.platforms[e]===t)return!0;var n=this.platform();return n?n===t.toLowerCase():this.ua.toLowerCase().indexOf(t)>=0},exitApp:function(){this.ready(function(){navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()})},showStatusBar:function(i){this._showStatusBar=i,this.ready(function(){n.requestAnimationFrame(function(){n.Platform._showStatusBar?(t.StatusBar&&t.StatusBar.show(),e.body.classList.remove("status-bar-hide")):(t.StatusBar&&t.StatusBar.hide(),e.body.classList.add("status-bar-hide"))})})},fullScreen:function(t,i){this.isFullScreen=t!==!1,n.DomUtil.ready(function(){n.requestAnimationFrame(function(){n.Platform.isFullScreen?e.body.classList.add("fullscreen"):e.body.classList.remove("fullscreen")}),n.Platform.showStatusBar(i===!0)})}};var l=null,c=null,u=[];t.addEventListener("load",i,!1)}(this,document,ionic),function(t,e){"use strict";e.CSS={},function(){var n,i=["webkitTransform","transform","-webkit-transform","webkit-transform","-moz-transform","moz-transform","MozTransform","mozTransform","msTransform"];for(n=0;n<i.length;n++)if(void 0!==t.documentElement.style[i[n]]){e.CSS.TRANSFORM=i[n];break}for(i=["webkitTransition","mozTransition","msTransition","transition"],n=0;n<i.length;n++)if(void 0!==t.documentElement.style[i[n]]){e.CSS.TRANSITION=i[n];break}}(),"classList"in t.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function t(t){return function(){var n,i=e.className.split(/\s+/);for(n=0;n<arguments.length;n++)t(i,i.indexOf(arguments[n]),arguments[n]);e.className=i.join(" ")}}var e=this;return{add:t(function(t,e,n){~e||t.push(n)}),remove:t(function(t,e){~e&&t.splice(e,1)}),toggle:t(function(t,e,n){~e?t.splice(e,1):t.push(n)}),contains:function(t){return!!~e.className.split(/\s+/).indexOf(t)},item:function(t){return e.className.split(/\s+/)[t]||null}}}})}(document,ionic);var k,F,z,H,Y,W,U,q,B="touchmove",Z=6,j=50,$={click:i,mousedown:r,mouseup:o,mousemove:s,touchstart:a,touchend:l,touchcancel:u,touchmove:c,pointerdown:a,pointerup:l,pointercancel:u,pointermove:c,MSPointerDown:a,MSPointerUp:l,MSPointerCancel:u,MSPointerMove:c,focusin:p,focusout:m};ionic.tap={register:function(e){return k=e,t("click",!0,!0),t("mouseup"),t("mousedown"),window.navigator.pointerEnabled?(t("pointerdown"),t("pointerup"),t("pointcancel"),B="pointermove"):window.navigator.msPointerEnabled?(t("MSPointerDown"),t("MSPointerUp"),t("MSPointerCancel"),B="MSPointerMove"):(t("touchstart"),t("touchend"),t("touchcancel")),t("focusin"),t("focusout"),function(){for(var e in $)t(e,!1);k=null,F=null,z=!1,Y=!1,W=null}},ignoreScrollStart:function(t){return t.defaultPrevented||t.target.isContentEditable||/^(file|range)$/i.test(t.target.type)||"true"==(t.target.dataset?t.target.dataset.preventScroll:t.target.getAttribute("data-prevent-default"))||!!/^(object|embed)$/i.test(t.target.tagName)||ionic.tap.isElementTapDisabled(t.target)},isTextInput:function(t){return!!t&&("TEXTAREA"==t.tagName||"true"===t.contentEditable||"INPUT"==t.tagName&&!/^(radio|checkbox|range|file|submit|reset)$/i.test(t.type))},isDateInput:function(t){return!!t&&"INPUT"==t.tagName&&/^(date|time|datetime-local|month|week)$/i.test(t.type)},isLabelWithTextInput:function(t){var e=E(t,!1);return!!e&&ionic.tap.isTextInput(S(e))},containsOrIsTextInput:function(t){return ionic.tap.isTextInput(t)||ionic.tap.isLabelWithTextInput(t)},cloneFocusedInput:function(t){ionic.tap.hasCheckedClone||(ionic.tap.hasCheckedClone=!0,ionic.requestAnimationFrame(function(){var e=t.querySelector(":focus");if(ionic.tap.isTextInput(e)){var n=e.parentElement.querySelector(".cloned-text-input");n||(n=document.createElement(e.tagName),n.placeholder=e.placeholder,n.type=e.type,n.value=e.value,n.style=e.style,n.className=e.className,n.classList.add("cloned-text-input"),n.readOnly=!0,e.parentElement.insertBefore(n,e),e.style.top=e.offsetTop,e.classList.add("previous-input-focus"))}}))},hasCheckedClone:!1,removeClonedInputs:function(t){ionic.tap.hasCheckedClone=!1,ionic.requestAnimationFrame(function(){var e,n=t.querySelectorAll(".cloned-text-input"),i=t.querySelectorAll(".previous-input-focus");
for(e=0;e<n.length;e++)n[e].parentElement.removeChild(n[e]);for(e=0;e<i.length;e++)i[e].classList.remove("previous-input-focus"),i[e].style.top="",i[e].focus()})},requiresNativeClick:function(t){return!t||t.disabled||/^(file|range)$/i.test(t.type)||/^(object|video)$/i.test(t.tagName)||ionic.tap.isLabelContainingFileInput(t)?!0:ionic.tap.isElementTapDisabled(t)},isLabelContainingFileInput:function(t){var e=E(t);if("LABEL"!==e.tagName)return!1;var n=e.querySelector("input[type=file]");return n&&n.disabled===!1?!0:!1},isElementTapDisabled:function(t){if(t&&1===t.nodeType)for(var e=t;e;){if("true"==(e.dataset?e.dataset.tapDisabled:e.getAttribute("data-tap-disabled")))return!0;e=e.parentElement}return!1},setTolerance:function(t,e){Z=t,j=e},cancelClick:function(){Y=!0}},ionic.DomUtil.ready(function(){var t="undefined"!=typeof angular?angular:null;(!t||t&&!t.scenario)&&ionic.tap.register(document)}),function(t,e){"use strict";function n(){o={},e.requestAnimationFrame(r)}function i(){for(var t in o)o[t]&&(o[t].classList.add(l),s[t]=o[t]);o={}}function r(){for(var t in s)s[t]&&(s[t].classList.remove(l),delete s[t])}var o={},s={},a=0,l="activated";e.activator={start:function(t){var n=this;e.requestAnimationFrame(function(){if(!e.tap.requiresNativeClick(t.target)){for(var r,s=t.target,l=0;4>l&&(s&&1===s.nodeType);l++){if(r&&s.classList.contains("item")){r=s;break}if("A"==s.tagName||"BUTTON"==s.tagName||s.hasAttribute("ng-click")){r=s;break}if(s.classList.contains("button")){r=s;break}s=s.parentElement}r&&(o[a]=r,"touchstart"===t.type?n._activateTimeout=setTimeout(i,80):e.requestAnimationFrame(i),a=a>19?0:a+1)}})},end:function(){clearTimeout(this._activateTimeout),setTimeout(n,200)}}}(document,ionic),function(t){var e=["0","0","0"];t.Utils={arrayMove:function(t,e,n){if(n>=t.length)for(var i=n-t.length;i--+1;)t.push(void 0);return t.splice(n,0,t.splice(e,1)[0]),t},proxy:function(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){return t.apply(e,n.concat(Array.prototype.slice.call(arguments)))}},debounce:function(t,e,n){var i,r,o,s,a;return function(){o=this,r=arguments,s=new Date;var l=function(){var c=new Date-s;e>c?i=setTimeout(l,e-c):(i=null,n||(a=t.apply(o,r)))},c=n&&!i;return i||(i=setTimeout(l,e)),c&&(a=t.apply(o,r)),a}},throttle:function(t,e,n){var i,r,o,s=null,a=0;n||(n={});var l=function(){a=n.leading===!1?0:Date.now(),s=null,o=t.apply(i,r)};return function(){var c=Date.now();a||n.leading!==!1||(a=c);var u=e-(c-a);return i=this,r=arguments,0>=u?(clearTimeout(s),s=null,a=c,o=t.apply(i,r)):s||n.trailing===!1||(s=setTimeout(l,u)),o}},inherit:function(e,n){var i,r=this;i=e&&e.hasOwnProperty("constructor")?e.constructor:function(){return r.apply(this,arguments)},t.extend(i,r,n);var o=function(){this.constructor=i};return o.prototype=r.prototype,i.prototype=new o,e&&t.extend(i.prototype,e),i.__super__=r.prototype,i},extend:function(t){for(var e=Array.prototype.slice.call(arguments,1),n=0;n<e.length;n++){var i=e[n];if(i)for(var r in i)t[r]=i[r]}return t},nextUid:function(){for(var t,n=e.length;n;){if(n--,t=e[n].charCodeAt(0),57==t)return e[n]="A",e.join("");if(90!=t)return e[n]=String.fromCharCode(t+1),e.join("");e[n]="0"}return e.unshift("0"),e.join("")}},t.inherit=t.Utils.inherit,t.extend=t.Utils.extend,t.throttle=t.Utils.throttle,t.proxy=t.Utils.proxy,t.debounce=t.Utils.debounce}(window.ionic);var K,Q,J,te=window.innerHeight,ee=0,ne="keyboard-open",ie="scroll";ionic.keyboard={isOpen:!1,height:null,landscape:!1},ionic.Platform.ready(function(){A(),setTimeout(A,999),document.addEventListener("touchstart",b,!1)});var re,oe={};ionic.viewport={orientation:function(){return window.innerWidth>window.innerHeight?90:0}},ionic.Platform.ready(function(){R(),window.addEventListener("orientationchange",function(){setTimeout(X,1e3)},!1)}),function(t){"use strict";t.views.View=function(){this.initialize.apply(this,arguments)},t.views.View.inherit=t.inherit,t.extend(t.views.View.prototype,{initialize:function(){}})}(window.ionic);var se={effect:{}};!function(t){var e=Date.now||function(){return+new Date},n=60,i=1e3,r={},o=1;se.effect.Animate={requestAnimationFrame:function(){var e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame,n=!!e;if(e&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(e.toString())&&(n=!1),n)return function(t,n){e(t,n)};var i=60,r={},o=0,s=1,a=null,l=+new Date;return function(t){var e=s++;return r[e]=t,o++,null===a&&(a=setInterval(function(){var t=+new Date,e=r;r={},o=0;for(var n in e)e.hasOwnProperty(n)&&(e[n](t),l=t);t-l>2500&&(clearInterval(a),a=null)},1e3/i)),e}}(),stop:function(t){var e=null!=r[t];return e&&(r[t]=null),e},isRunning:function(t){return null!=r[t]},start:function(t,s,a,l,c,u){var h=e(),d=h,_=0,f=0,p=o++;if(u||(u=document.body),p%20===0){var m={};for(var g in r)m[g]=!0;r=m}var v=function(o){var m=o!==!0,g=e();if(!r[p]||s&&!s(p))return r[p]=null,void(a&&a(n-f/((g-h)/i),p,!1));if(m)for(var T=Math.round((g-d)/(i/n))-1,E=0;E<Math.min(T,4);E++)v(!0),f++;l&&(_=(g-h)/l,_>1&&(_=1));var S=c?c(_):_;t(S,g,m)!==!1&&1!==_||!m?m&&(d=g,se.effect.Animate.requestAnimationFrame(v,u)):(r[p]=null,a&&a(n-f/((g-h)/i),p,1===_||null==l))};return r[p]=!0,se.effect.Animate.requestAnimationFrame(v,u),p}}}(this);!function(t){var e=function(){},n=function(t){return Math.pow(t-1,3)+1},i=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)};t.views.Scroll=t.views.View.inherit({initialize:function(n){var i=this;this.__container=n.el,this.__content=n.el.firstElementChild,setTimeout(function(){i.__container&&i.__content&&(i.__container.scrollTop=0,i.__content.scrollTop=0)}),this.options={scrollingX:!1,scrollbarX:!0,scrollingY:!0,scrollbarY:!0,startX:0,startY:0,wheelDampen:6,minScrollbarSizeX:5,minScrollbarSizeY:5,scrollbarsFade:!0,scrollbarFadeDelay:300,scrollbarResizeFadeDelay:1e3,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,deceleration:.97,scrollingComplete:e,penetrationDeceleration:.03,penetrationAcceleration:.08,scrollEventInterval:10,getContentWidth:function(){return Math.max(i.__content.scrollWidth,i.__content.offsetWidth)},getContentHeight:function(){return Math.max(i.__content.scrollHeight,i.__content.offsetHeight+i.__content.offsetTop)}};for(var r in n)this.options[r]=n[r];this.hintResize=t.debounce(function(){i.resize()},1e3,!0),this.onScroll=function(){t.scroll.isScrolling?(clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)):setTimeout(i.setScrollStart,50)},this.setScrollStart=function(){t.scroll.isScrolling=Math.abs(t.scroll.lastTop-i.__scrollTop)>1,clearTimeout(i.scrollTimer),i.scrollTimer=setTimeout(i.setScrollStop,80)},this.setScrollStop=function(){t.scroll.isScrolling=!1,t.scroll.lastTop=i.__scrollTop},this.triggerScrollEvent=t.throttle(function(){i.onScroll(),t.trigger("scroll",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},this.options.scrollEventInterval),this.triggerScrollEndEvent=function(){t.trigger("scrollend",{scrollTop:i.__scrollTop,scrollLeft:i.__scrollLeft,target:i.__container})},this.__scrollLeft=this.options.startX,this.__scrollTop=this.options.startY,this.__callback=this.getRenderFn(),this.__initEventHandlers(),this.__createScrollbars()},run:function(){this.resize(),this.__fadeScrollbars("out",this.options.scrollbarResizeFadeDelay)},__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,__transformProperty:null,__perspectiveProperty:null,__indicatorX:null,__indicatorY:null,__scrollbarFadeTimeout:null,__didWaitForSize:null,__sizerTimeout:null,__initEventHandlers:function(){function e(t){return t.touches&&t.touches.length?t.touches:[{pageX:t.pageX,pageY:t.pageY}]}var n=this,i=this.__container;if(i.addEventListener("scrollChildIntoView",function(e){var r;if(!n.isScrolledIntoView){if(t.Platform.isIOS()||t.Platform.isFullScreen){r=i.getBoundingClientRect().bottom;var o=e.detail.viewportHeight-r,s=Math.max(0,e.detail.keyboardHeight-o);i.style.height=i.clientHeight-s+"px",i.style.overflow="visible",n.resize()}n.isScrolledIntoView=!0}if(e.detail.isElementUnderKeyboard){var a;a=t.Platform.isAndroid()&&!t.Platform.isFullScreen?t.Platform.version()<4.4?500:350:80,t.scroll.isScrolling=!0,setTimeout(function(){var o=.5*i.clientHeight;r=i.getBoundingClientRect().bottom;var s=e.detail.elementTop-r,a=s+o;a>0&&(t.tap.cloneFocusedInput(i,n),n.scrollBy(0,a,!0),n.onScroll())},a)}e.stopPropagation()}),i.addEventListener("resetScrollView",function(){n.isScrolledIntoView=!1,i.style.height="",i.style.overflow="",n.resize(),t.scroll.isScrolling=!1}),n.touchStart=function(i){if(n.startCoordinates=T(i),!t.tap.ignoreScrollStart(i)){if(n.__isDown=!0,t.tap.containsOrIsTextInput(i.target)||"SELECT"===i.target.tagName)return void(n.__hasStarted=!1);n.__isSelectable=!0,n.__enableScrollY=!0,n.__hasStarted=!0,n.doTouchStart(e(i),i.timeStamp),i.preventDefault()}},n.touchMove=function(r){if(!(!n.__isDown||r.defaultPrevented||"TEXTAREA"===r.target.tagName&&r.target.parentElement.querySelector(":focus"))){if(!n.__hasStarted&&(t.tap.containsOrIsTextInput(r.target)||"SELECT"===r.target.tagName))return n.__hasStarted=!0,n.doTouchStart(e(r),r.timeStamp),void r.preventDefault();if(n.startCoordinates){var o=T(r);n.__isSelectable&&t.tap.isTextInput(r.target)&&Math.abs(n.startCoordinates.x-o.x)>20&&(n.__enableScrollY=!1,n.__isSelectable=!0),n.__enableScrollY&&Math.abs(n.startCoordinates.y-o.y)>10&&(n.__isSelectable=!1,t.tap.cloneFocusedInput(i,n))}n.doTouchMove(e(r),r.timeStamp,r.scale),n.__isDown=!0}},n.touchEnd=function(e){n.__isDown&&(n.doTouchEnd(e.timeStamp),n.__isDown=!1,n.__hasStarted=!1,n.__isSelectable=!0,n.__enableScrollY=!0,n.__isDragging||n.__isDecelerating||n.__isAnimating||t.tap.removeClonedInputs(i,n))},n.options.orgScrollingComplete=n.options.scrollingComplete,n.options.scrollingComplete=function(){t.tap.removeClonedInputs(i,n),n.options.orgScrollingComplete()},"ontouchstart"in window)i.addEventListener("touchstart",n.touchStart,!1),document.addEventListener("touchmove",n.touchMove,!1),document.addEventListener("touchend",n.touchEnd,!1),document.addEventListener("touchcancel",n.touchEnd,!1);else if(window.navigator.pointerEnabled)i.addEventListener("pointerdown",n.touchStart,!1),document.addEventListener("pointermove",n.touchMove,!1),document.addEventListener("pointerup",n.touchEnd,!1),document.addEventListener("pointercancel",n.touchEnd,!1);else if(window.navigator.msPointerEnabled)i.addEventListener("MSPointerDown",n.touchStart,!1),document.addEventListener("MSPointerMove",n.touchMove,!1),document.addEventListener("MSPointerUp",n.touchEnd,!1),document.addEventListener("MSPointerCancel",n.touchEnd,!1);else{var r=!1;n.mouseDown=function(i){t.tap.ignoreScrollStart(i)||"SELECT"===i.target.tagName||(n.doTouchStart(e(i),i.timeStamp),t.tap.isTextInput(i.target)||i.preventDefault(),r=!0)},n.mouseMove=function(t){r&&!t.defaultPrevented&&(n.doTouchMove(e(t),t.timeStamp),r=!0)},n.mouseUp=function(t){r&&(n.doTouchEnd(t.timeStamp),r=!1)},n.mouseWheel=t.animationFrameThrottle(function(e){var i=t.DomUtil.getParentOrSelfWithClass(e.target,"ionic-scroll");i===n.__container&&(n.hintResize(),n.scrollBy(e.wheelDeltaX/n.options.wheelDampen,-e.wheelDeltaY/n.options.wheelDampen),n.__fadeScrollbars("in"),clearTimeout(n.__wheelHideBarTimeout),n.__wheelHideBarTimeout=setTimeout(function(){n.__fadeScrollbars("out")},100))}),i.addEventListener("mousedown",n.mouseDown,!1),document.addEventListener("mousemove",n.mouseMove,!1),document.addEventListener("mouseup",n.mouseUp,!1),document.addEventListener("mousewheel",n.mouseWheel,!1)}},__removeEventHandlers:function(){var t=this.__container;t.removeEventListener("touchstart",self.touchStart),document.removeEventListener("touchmove",self.touchMove),document.removeEventListener("touchend",self.touchEnd),document.removeEventListener("touchcancel",self.touchCancel),t.removeEventListener("pointerdown",self.touchStart),document.removeEventListener("pointermove",self.touchMove),document.removeEventListener("pointerup",self.touchEnd),document.removeEventListener("pointercancel",self.touchEnd),t.removeEventListener("MSPointerDown",self.touchStart),document.removeEventListener("MSPointerMove",self.touchMove),document.removeEventListener("MSPointerUp",self.touchEnd),document.removeEventListener("MSPointerCancel",self.touchEnd),t.removeEventListener("mousedown",self.mouseDown),document.removeEventListener("mousemove",self.mouseMove),document.removeEventListener("mouseup",self.mouseUp),document.removeEventListener("mousewheel",self.mouseWheel)},__createScrollbar:function(t){var e=document.createElement("div"),n=document.createElement("div");return n.className="scroll-bar-indicator",e.className="h"==t?"scroll-bar scroll-bar-h":"scroll-bar scroll-bar-v",e.appendChild(n),e},__createScrollbars:function(){var t,e;this.options.scrollingX&&(t={el:this.__createScrollbar("h"),sizeRatio:1},t.indicator=t.el.children[0],this.options.scrollbarX&&this.__container.appendChild(t.el),this.__indicatorX=t),this.options.scrollingY&&(e={el:this.__createScrollbar("v"),sizeRatio:1},e.indicator=e.el.children[0],this.options.scrollbarY&&this.__container.appendChild(e.el),this.__indicatorY=e)},__resizeScrollbars:function(){var t=this;if(t.__indicatorX){var e=Math.max(Math.round(t.__clientWidth*t.__clientWidth/t.__contentWidth),20);e>t.__contentWidth&&(e=0),t.__indicatorX.size=e,t.__indicatorX.minScale=this.options.minScrollbarSizeX/e,t.__indicatorX.indicator.style.width=e+"px",t.__indicatorX.maxPos=t.__clientWidth-e,t.__indicatorX.sizeRatio=t.__maxScrollLeft?t.__indicatorX.maxPos/t.__maxScrollLeft:1}if(t.__indicatorY){var n=Math.max(Math.round(t.__clientHeight*t.__clientHeight/t.__contentHeight),20);n>t.__contentHeight&&(n=0),t.__indicatorY.size=n,t.__indicatorY.minScale=this.options.minScrollbarSizeY/n,t.__indicatorY.maxPos=t.__clientHeight-n,t.__indicatorY.indicator.style.height=n+"px",t.__indicatorY.sizeRatio=t.__maxScrollTop?t.__indicatorY.maxPos/t.__maxScrollTop:1}},__repositionScrollbars:function(){var t,e,n,i,r,o=this,s=0,a=0;o.__indicatorX&&(o.__indicatorY&&(s=10),i=Math.round(o.__indicatorX.sizeRatio*o.__scrollLeft)||0,e=o.__scrollLeft-(o.__maxScrollLeft-s),o.__scrollLeft<0?(widthScale=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-Math.abs(o.__scrollLeft))/o.__indicatorX.size),i=0,o.__indicatorX.indicator.style[o.__transformOriginProperty]="left center"):e>0?(widthScale=Math.max(o.__indicatorX.minScale,(o.__indicatorX.size-e)/o.__indicatorX.size),i=o.__indicatorX.maxPos-s,o.__indicatorX.indicator.style[o.__transformOriginProperty]="right center"):(i=Math.min(o.__maxScrollLeft,Math.max(0,i)),widthScale=1),o.__indicatorX.indicator.style[o.__transformProperty]="translate3d("+i+"px, 0, 0) scaleX("+widthScale+")"),o.__indicatorY&&(r=Math.round(o.__indicatorY.sizeRatio*o.__scrollTop)||0,o.__indicatorX&&(a=10),n=o.__scrollTop-(o.__maxScrollTop-a),o.__scrollTop<0?(t=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-Math.abs(o.__scrollTop))/o.__indicatorY.size),r=0,o.__indicatorY.indicator.style[o.__transformOriginProperty]="center top"):n>0?(t=Math.max(o.__indicatorY.minScale,(o.__indicatorY.size-n)/o.__indicatorY.size),r=o.__indicatorY.maxPos-a,o.__indicatorY.indicator.style[o.__transformOriginProperty]="center bottom"):(r=Math.min(o.__maxScrollTop,Math.max(0,r)),t=1),o.__indicatorY.indicator.style[o.__transformProperty]="translate3d(0,"+r+"px, 0) scaleY("+t+")")},__fadeScrollbars:function(t,e){var n=this;if(this.options.scrollbarsFade){var i="scroll-bar-fade-out";n.options.scrollbarsFade===!0&&(clearTimeout(n.__scrollbarFadeTimeout),"in"==t?(n.__indicatorX&&n.__indicatorX.indicator.classList.remove(i),n.__indicatorY&&n.__indicatorY.indicator.classList.remove(i)):n.__scrollbarFadeTimeout=setTimeout(function(){n.__indicatorX&&n.__indicatorX.indicator.classList.add(i),n.__indicatorY&&n.__indicatorY.indicator.classList.add(i)},e||n.options.scrollbarFadeDelay))}},__scrollingComplete:function(){var t=this;t.options.scrollingComplete(),t.__fadeScrollbars("out")},resize:function(){this.setDimensions(this.__container.clientWidth,this.__container.clientHeight,this.options.getContentWidth(),this.options.getContentHeight())},getRenderFn:function(){var t,e=this,n=this.__content,i=document.documentElement.style;"MozAppearance"in i?t="gecko":"WebkitAppearance"in i?t="webkit":"string"==typeof navigator.cpuClass&&(t="trident");var r,o={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[t],s=document.createElement("div"),a=o+"Perspective",l=o+"Transform",c=o+"TransformOrigin";return e.__perspectiveProperty=l,e.__transformProperty=l,e.__transformOriginProperty=c,s.style[a]!==r?function(t,i,r,o){n.style[l]="translate3d("+-t+"px,"+-i+"px,0) scale("+r+")",e.__repositionScrollbars(),o||e.triggerScrollEvent()}:s.style[l]!==r?function(t,i,r,o){n.style[l]="translate("+-t+"px,"+-i+"px) scale("+r+")",e.__repositionScrollbars(),o||e.triggerScrollEvent()}:function(t,i,r,o){n.style.marginLeft=t?-t/r+"px":"",n.style.marginTop=i?-i/r+"px":"",n.style.zoom=r||"",e.__repositionScrollbars(),o||e.triggerScrollEvent()}},setDimensions:function(t,e,n,i){var r=this;t===+t&&(r.__clientWidth=t),e===+e&&(r.__clientHeight=e),n===+n&&(r.__contentWidth=n),i===+i&&(r.__contentHeight=i),r.__computeScrollMax(),r.__resizeScrollbars(),r.scrollTo(r.__scrollLeft,r.__scrollTop,!0,null,!0)},setPosition:function(t,e){var n=this;n.__clientLeft=t||0,n.__clientTop=e||0},setSnapSize:function(t,e){var n=this;n.__snapWidth=t,n.__snapHeight=e},activatePullToRefresh:function(t,e,n,i){var r=this;r.__refreshHeight=t,r.__refreshActivate=e,r.__refreshDeactivate=n,r.__refreshStart=i},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var t=this;t.__refreshActive=!1,t.__refreshDeactivate&&t.__refreshDeactivate(),t.scrollTo(t.__scrollLeft,t.__scrollTop,!0)},getValues:function(){var t=this;return{left:t.__scrollLeft,top:t.__scrollTop,zoom:t.__zoomLevel}},getScrollMax:function(){var t=this;return{left:t.__maxScrollLeft,top:t.__maxScrollTop}},zoomTo:function(t,e,n,i){var r=this;if(!r.options.zooming)throw new Error("Zooming is not enabled!");r.__isDecelerating&&(se.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1);var o=r.__zoomLevel;null==n&&(n=r.__clientWidth/2),null==i&&(i=r.__clientHeight/2),t=Math.max(Math.min(t,r.options.maxZoom),r.options.minZoom),r.__computeScrollMax(t);var s=(n+r.__scrollLeft)*t/o-n,a=(i+r.__scrollTop)*t/o-i;s>r.__maxScrollLeft?s=r.__maxScrollLeft:0>s&&(s=0),a>r.__maxScrollTop?a=r.__maxScrollTop:0>a&&(a=0),r.__publish(s,a,t,e)},zoomBy:function(t,e,n,i){var r=this;r.zoomTo(r.__zoomLevel*t,e,n,i)},scrollTo:function(t,e,n,i,r){var o=this;if(o.__isDecelerating&&(se.effect.Animate.stop(o.__isDecelerating),o.__isDecelerating=!1),null!=i&&i!==o.__zoomLevel){if(!o.options.zooming)throw new Error("Zooming is not enabled!");t*=i,e*=i,o.__computeScrollMax(i)}else i=o.__zoomLevel;o.options.scrollingX?o.options.paging?t=Math.round(t/o.__clientWidth)*o.__clientWidth:o.options.snapping&&(t=Math.round(t/o.__snapWidth)*o.__snapWidth):t=o.__scrollLeft,o.options.scrollingY?o.options.paging?e=Math.round(e/o.__clientHeight)*o.__clientHeight:o.options.snapping&&(e=Math.round(e/o.__snapHeight)*o.__snapHeight):e=o.__scrollTop,t=Math.max(Math.min(o.__maxScrollLeft,t),0),e=Math.max(Math.min(o.__maxScrollTop,e),0),t===o.__scrollLeft&&e===o.__scrollTop&&(n=!1),o.__publish(t,e,i,n,r)},scrollBy:function(t,e,n){var i=this,r=i.__isAnimating?i.__scheduledLeft:i.__scrollLeft,o=i.__isAnimating?i.__scheduledTop:i.__scrollTop;i.scrollTo(r+(t||0),o+(e||0),n)},doMouseZoom:function(t,e,n,i){var r=this,o=t>0?.97:1.03;return r.zoomTo(r.__zoomLevel*o,!1,n-r.__clientLeft,i-r.__clientTop)},doTouchStart:function(t,e){this.hintResize(),e instanceof Date&&(e=e.valueOf()),"number"!=typeof e&&(e=Date.now());var n=this;n.__interruptedAnimation=!0,n.__isDecelerating&&(se.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(se.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var i,r,o=1===t.length;o?(i=t[0].pageX,r=t[0].pageY):(i=Math.abs(t[0].pageX+t[1].pageX)/2,r=Math.abs(t[0].pageY+t[1].pageY)/2),n.__initialTouchLeft=i,n.__initialTouchTop=r,n.__initialTouches=t,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=i,n.__lastTouchTop=r,n.__lastTouchMove=e,n.__lastScale=1,n.__enableScrollX=!o&&n.options.scrollingX,n.__enableScrollY=!o&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!o,n.__isSingleTouch=o,n.__positions=[]},doTouchMove:function(t,e,n){e instanceof Date&&(e=e.valueOf()),"number"!=typeof e&&(e=Date.now());var i=this;if(i.__isTracking){var r,o;2===t.length?(r=Math.abs(t[0].pageX+t[1].pageX)/2,o=Math.abs(t[0].pageY+t[1].pageY)/2,!n&&i.options.zooming&&(n=i.__getScale(i.__initialTouches,t))):(r=t[0].pageX,o=t[0].pageY);var s=i.__positions;if(i.__isDragging){var a=r-i.__lastTouchLeft,l=o-i.__lastTouchTop,c=i.__scrollLeft,u=i.__scrollTop,h=i.__zoomLevel;if(null!=n&&i.options.zooming){var d=h;if(h=h/i.__lastScale*n,h=Math.max(Math.min(h,i.options.maxZoom),i.options.minZoom),d!==h){var _=r-i.__clientLeft,f=o-i.__clientTop;c=(_+c)*h/d-_,u=(f+u)*h/d-f,i.__computeScrollMax(h)}}if(i.__enableScrollX){c-=a*this.options.speedMultiplier;var p=i.__maxScrollLeft;(c>p||0>c)&&(i.options.bouncing?c+=a/2*this.options.speedMultiplier:c=c>p?p:0)}if(i.__enableScrollY){u-=l*this.options.speedMultiplier;var m=i.__maxScrollTop;(u>m||0>u)&&(i.options.bouncing||i.__refreshHeight&&0>u?(u+=l/2*this.options.speedMultiplier,i.__enableScrollX||null==i.__refreshHeight||(!i.__refreshActive&&u<=-i.__refreshHeight?(i.__refreshActive=!0,i.__refreshActivate&&i.__refreshActivate()):i.__refreshActive&&u>-i.__refreshHeight&&(i.__refreshActive=!1,i.__refreshDeactivate&&i.__refreshDeactivate()))):u=u>m?m:0)}s.length>60&&s.splice(0,30),s.push(c,u,e),i.__publish(c,u,h)}else{var g=i.options.locking?3:0,v=5,T=Math.abs(r-i.__initialTouchLeft),E=Math.abs(o-i.__initialTouchTop);i.__enableScrollX=i.options.scrollingX&&T>=g,i.__enableScrollY=i.options.scrollingY&&E>=g,s.push(i.__scrollLeft,i.__scrollTop,e),i.__isDragging=(i.__enableScrollX||i.__enableScrollY)&&(T>=v||E>=v),i.__isDragging&&(i.__interruptedAnimation=!1,i.__fadeScrollbars("in"))}i.__lastTouchLeft=r,i.__lastTouchTop=o,i.__lastTouchMove=e,i.__lastScale=n}},doTouchEnd:function(t){t instanceof Date&&(t=t.valueOf()),"number"!=typeof t&&(t=Date.now());var e=this;if(e.__isTracking){if(e.__isTracking=!1,e.__isDragging)if(e.__isDragging=!1,e.__isSingleTouch&&e.options.animating&&t-e.__lastTouchMove<=100){for(var n=e.__positions,i=n.length-1,r=i,o=i;o>0&&n[o]>e.__lastTouchMove-100;o-=3)r=o;if(r!==i){var s=n[i]-n[r],a=e.__scrollLeft-n[r-2],l=e.__scrollTop-n[r-1];e.__decelerationVelocityX=a/s*(1e3/60),e.__decelerationVelocityY=l/s*(1e3/60);var c=e.options.paging||e.options.snapping?4:1;(Math.abs(e.__decelerationVelocityX)>c||Math.abs(e.__decelerationVelocityY)>c)&&(e.__refreshActive||e.__startDeceleration(t))}else e.__scrollingComplete()}else t-e.__lastTouchMove>100&&e.__scrollingComplete();e.__isDecelerating||(e.__refreshActive&&e.__refreshStart?(e.__publish(e.__scrollLeft,-e.__refreshHeight,e.__zoomLevel,!0),e.__refreshStart&&e.__refreshStart()):((e.__interruptedAnimation||e.__isDragging)&&e.__scrollingComplete(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0,e.__zoomLevel),e.__refreshActive&&(e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate()))),e.__positions.length=0}},__publish:function(t,e,r,o,s){var a=this,l=a.__isAnimating;if(l&&(se.effect.Animate.stop(l),a.__isAnimating=!1),o&&a.options.animating){a.__scheduledLeft=t,a.__scheduledTop=e,a.__scheduledZoom=r;var c=a.__scrollLeft,u=a.__scrollTop,h=a.__zoomLevel,d=t-c,_=e-u,f=r-h,p=function(t,e,n){n&&(a.__scrollLeft=c+d*t,a.__scrollTop=u+_*t,a.__zoomLevel=h+f*t,a.__callback&&a.__callback(a.__scrollLeft,a.__scrollTop,a.__zoomLevel,s))},m=function(t){return a.__isAnimating===t},g=function(t,e,n){e===a.__isAnimating&&(a.__isAnimating=!1),(a.__didDecelerationComplete||n)&&a.__scrollingComplete(),a.options.zooming&&a.__computeScrollMax()};a.__isAnimating=se.effect.Animate.start(p,m,g,a.options.animationDuration,l?n:i)}else a.__scheduledLeft=a.__scrollLeft=t,a.__scheduledTop=a.__scrollTop=e,a.__scheduledZoom=a.__zoomLevel=r,a.__callback&&a.__callback(t,e,r,s),a.options.zooming&&a.__computeScrollMax()},__computeScrollMax:function(t){var e=this;null==t&&(t=e.__zoomLevel),e.__maxScrollLeft=Math.max(e.__contentWidth*t-e.__clientWidth,0),e.__maxScrollTop=Math.max(e.__contentHeight*t-e.__clientHeight,0),e.__didWaitForSize||e.__maxScrollLeft||e.__maxScrollTop||(e.__didWaitForSize=!0,e.__waitForSize())},__waitForSize:function(){var t=this;clearTimeout(t.__sizerTimeout);var e=function(){t.resize(),t.options.scrollingX&&!t.__maxScrollLeft||t.options.scrollingY&&!t.__maxScrollTop};e(),t.__sizerTimeout=setTimeout(e,1e3)},__startDeceleration:function(){var t=this;if(t.options.paging){var e=Math.max(Math.min(t.__scrollLeft,t.__maxScrollLeft),0),n=Math.max(Math.min(t.__scrollTop,t.__maxScrollTop),0),i=t.__clientWidth,r=t.__clientHeight;t.__minDecelerationScrollLeft=Math.floor(e/i)*i,t.__minDecelerationScrollTop=Math.floor(n/r)*r,t.__maxDecelerationScrollLeft=Math.ceil(e/i)*i,t.__maxDecelerationScrollTop=Math.ceil(n/r)*r}else t.__minDecelerationScrollLeft=0,t.__minDecelerationScrollTop=0,t.__maxDecelerationScrollLeft=t.__maxScrollLeft,t.__maxDecelerationScrollTop=t.__maxScrollTop;var o=function(e,n,i){t.__stepThroughDeceleration(i)};t.__minVelocityToKeepDecelerating=t.options.snapping?4:.1;var s=function(){var e=Math.abs(t.__decelerationVelocityX)>=t.__minVelocityToKeepDecelerating||Math.abs(t.__decelerationVelocityY)>=t.__minVelocityToKeepDecelerating;return e||(t.__didDecelerationComplete=!0,t.options.bouncing&&t.scrollTo(Math.min(Math.max(t.__scrollLeft,0),t.__maxScrollLeft),Math.min(Math.max(t.__scrollTop,0),t.__maxScrollTop),!1)),e},a=function(){t.__isDecelerating=!1,t.__didDecelerationComplete&&t.__scrollingComplete(),t.options.paging&&t.scrollTo(t.__scrollLeft,t.__scrollTop,t.options.snapping)};t.__isDecelerating=se.effect.Animate.start(o,s,a)},__stepThroughDeceleration:function(t){var e=this,n=e.__scrollLeft+e.__decelerationVelocityX,i=e.__scrollTop+e.__decelerationVelocityY;if(!e.options.bouncing){var r=Math.max(Math.min(e.__maxDecelerationScrollLeft,n),e.__minDecelerationScrollLeft);r!==n&&(n=r,e.__decelerationVelocityX=0);var o=Math.max(Math.min(e.__maxDecelerationScrollTop,i),e.__minDecelerationScrollTop);o!==i&&(i=o,e.__decelerationVelocityY=0)}if(t?e.__publish(n,i,e.__zoomLevel):(e.__scrollLeft=n,e.__scrollTop=i),!e.options.paging){var s=e.options.deceleration;e.__decelerationVelocityX*=s,e.__decelerationVelocityY*=s}if(e.options.bouncing){var a=0,l=0,c=e.options.penetrationDeceleration,u=e.options.penetrationAcceleration;if(n<e.__minDecelerationScrollLeft?a=e.__minDecelerationScrollLeft-n:n>e.__maxDecelerationScrollLeft&&(a=e.__maxDecelerationScrollLeft-n),i<e.__minDecelerationScrollTop?l=e.__minDecelerationScrollTop-i:i>e.__maxDecelerationScrollTop&&(l=e.__maxDecelerationScrollTop-i),0!==a){var h=a*e.__decelerationVelocityX<=e.__minDecelerationScrollLeft;h&&(e.__decelerationVelocityX+=a*c);var d=Math.abs(e.__decelerationVelocityX)<=e.__minVelocityToKeepDecelerating;(!h||d)&&(e.__decelerationVelocityX=a*u)}if(0!==l){var _=l*e.__decelerationVelocityY<=e.__minDecelerationScrollTop;_&&(e.__decelerationVelocityY+=l*c);var f=Math.abs(e.__decelerationVelocityY)<=e.__minVelocityToKeepDecelerating;(!_||f)&&(e.__decelerationVelocityY=l*u)}}},__getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},__getScale:function(t,e){var n=this;return t.length>=2&&e.length>=2?n.__getDistance(e[0],e[1])/n.__getDistance(t[0],t[1]):1}}),t.scroll={isScrolling:!1,lastTop:0}}(ionic),function(t){"use strict";t.views.HeaderBar=t.views.View.inherit({initialize:function(e){this.el=e.el,t.extend(this,{alignTitle:"center"},e),this.align()},align:function(e){e||(e=this.alignTitle);var n=this.el.querySelector(".title");if(n){var i=this;t.requestAnimationFrame(function(){var r,o,s,a=i.el.childNodes,l=0,c=0,u=!1;for(r=0;r<a.length;r++)if(o=a[r],o.tagName&&"h1"==o.tagName.toLowerCase())u=!0;else{if(s=null,3==o.nodeType){var h=t.DomUtil.getTextBounds(o);h&&(s=h.width)}else 1==o.nodeType&&(s=o.offsetWidth);s&&(u?c+=s:l+=s)}var d=Math.max(l,c)+10;n.style.left=n.style.right="","center"==e?(d>10&&(n.style.left=d+"px",n.style.right=d+"px"),n.offsetWidth<n.scrollWidth&&c>0&&(n.style.right=c+5+"px")):"left"==e?(n.classList.add("title-left"),l>0&&(n.style.left=l+15+"px")):"right"==e&&(n.classList.add("title-right"),c>0&&(n.style.right=c+15+"px"))})}}})}(ionic),function(t){"use strict";var e="item",n="item-content",i="item-sliding",r="item-options",o="item-placeholder",s="item-reordering",a="item-reorder",l=function(){};l.prototype={start:function(){},drag:function(){},end:function(){},isSameItem:function(){return!1}};var c=function(t){this.dragThresholdX=t.dragThresholdX||10,this.el=t.el,this.canSwipe=t.canSwipe};c.prototype=new l,c.prototype.start=function(o){var s,a,l,c;this.canSwipe()&&(s=o.target.classList.contains(n)?o.target:o.target.classList.contains(e)?o.target.querySelector("."+n):t.DomUtil.getParentWithClass(o.target,n),s&&(s.classList.remove(i),l=parseFloat(s.style[t.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])||0,a=s.parentNode.querySelector("."+r),a&&(a.classList.remove("invisible"),c=a.offsetWidth,this._currentDrag={buttons:a,buttonsWidth:c,content:s,startOffsetX:l})))},c.prototype.isSameItem=function(t){return t._lastDrag&&this._currentDrag?this._currentDrag.content==t._lastDrag.content:!1},c.prototype.clean=function(){var e=this._lastDrag;e&&(e.content.style[t.CSS.TRANSITION]="",e.content.style[t.CSS.TRANSFORM]="",t.requestAnimationFrame(function(){setTimeout(function(){e.buttons&&e.buttons.classList.add("invisible")},250)}))},c.prototype.drag=t.animationFrameThrottle(function(e){var n;if(this._currentDrag&&(!this._isDragging&&(Math.abs(e.gesture.deltaX)>this.dragThresholdX||Math.abs(this._currentDrag.startOffsetX)>0)&&(this._isDragging=!0),this._isDragging)){n=this._currentDrag.buttonsWidth;var i=Math.min(0,this._currentDrag.startOffsetX+e.gesture.deltaX);-n>i&&(i=Math.min(-n,-n+.4*(e.gesture.deltaX+n))),this._currentDrag.content.style[t.CSS.TRANSFORM]="translate3d("+i+"px, 0, 0)",this._currentDrag.content.style[t.CSS.TRANSITION]="none"}}),c.prototype.end=function(e,n){var i=this;if(!this._currentDrag)return void(n&&n());var r=-this._currentDrag.buttonsWidth;e.gesture.deltaX>-(this._currentDrag.buttonsWidth/2)&&("left"==e.gesture.direction&&Math.abs(e.gesture.velocityX)<.3?r=0:"right"==e.gesture.direction&&(r=0)),t.requestAnimationFrame(function(){if(0===r){i._currentDrag.content.style[t.CSS.TRANSFORM]="";var e=i._currentDrag.buttons;setTimeout(function(){e&&e.classList.add("invisible")},250)}else i._currentDrag.content.style[t.CSS.TRANSFORM]="translate3d("+r+"px, 0, 0)";i._currentDrag.content.style[t.CSS.TRANSITION]="",i._lastDrag=i._currentDrag,i._currentDrag=null,n&&n()})};var u=function(t){if(this.dragThresholdY=t.dragThresholdY||0,this.onReorder=t.onReorder,this.listEl=t.listEl,this.el=t.el,this.scrollEl=t.scrollEl,this.scrollView=t.scrollView,this.listElTrueTop=0,this.listEl.offsetParent){var e=this.listEl;
do this.listElTrueTop+=e.offsetTop,e=e.offsetParent;while(e)}};u.prototype=new l,u.prototype._moveElement=function(e){var n=e.gesture.center.pageY+this.scrollView.getValues().top-this._currentDrag.elementHeight/2-this.listElTrueTop;this.el.style[t.CSS.TRANSFORM]="translate3d(0, "+n+"px, 0)"},u.prototype.start=function(e){var n=t.DomUtil.getChildIndex(this.el,this.el.nodeName.toLowerCase()),i=this.el.scrollHeight,r=this.el.cloneNode(!0);r.classList.add(o),this.el.parentNode.insertBefore(r,this.el),this.el.classList.add(s),this._currentDrag={elementHeight:i,startIndex:n,placeholder:r,scrollHeight:scroll,list:r.parentNode},this._moveElement(e)},u.prototype.drag=t.animationFrameThrottle(function(e){var n=this;if(this._currentDrag){var i=0,r=e.gesture.center.pageY,o=this.listElTrueTop;if(this.scrollView){var s=this.scrollView.__container;i=this.scrollView.getValues().top;var a=s.offsetTop,l=a-r+this._currentDrag.elementHeight/2,c=r+this._currentDrag.elementHeight/2-a-s.offsetHeight;e.gesture.deltaY<0&&l>0&&i>0&&(this.scrollView.scrollBy(null,-l),t.requestAnimationFrame(function(){n.drag(e)})),e.gesture.deltaY>0&&c>0&&i<this.scrollView.getScrollMax().top&&(this.scrollView.scrollBy(null,c),t.requestAnimationFrame(function(){n.drag(e)}))}!this._isDragging&&Math.abs(e.gesture.deltaY)>this.dragThresholdY&&(this._isDragging=!0),this._isDragging&&(this._moveElement(e),this._currentDrag.currentY=i+r-o)}}),u.prototype._getReorderIndex=function(){for(var t,e=this,n=(this._currentDrag.placeholder,Array.prototype.slice.call(this._currentDrag.placeholder.parentNode.children).filter(function(t){return t.nodeName===e.el.nodeName&&t!==e.el})),i=this._currentDrag.currentY,r=0,o=n.length;o>r;r++)if(t=n[r],r===o-1){if(i>t.offsetTop)return r}else if(0===r){if(i<t.offsetTop+t.offsetHeight)return r}else if(i>t.offsetTop-t.offsetHeight/2&&i<t.offsetTop+1.5*t.offsetHeight)return r;return this._currentDrag.startIndex},u.prototype.end=function(e,n){if(!this._currentDrag)return void(n&&n());var i=this._currentDrag.placeholder,r=this._getReorderIndex();this.el.classList.remove(s),this.el.style[t.CSS.TRANSFORM]="",i.parentNode.insertBefore(this.el,i),i.parentNode.removeChild(i),this.onReorder&&this.onReorder(this.el,this._currentDrag.startIndex,r),this._currentDrag=null,n&&n()},t.views.ListView=t.views.View.inherit({initialize:function(e){var n=this;e=t.extend({onReorder:function(){},virtualRemoveThreshold:-200,virtualAddThreshold:200,canSwipe:function(){return!0}},e),t.extend(this,e),!this.itemHeight&&this.listEl&&(this.itemHeight=this.listEl.children[0]&&parseInt(this.listEl.children[0].style.height,10)),this.onRefresh=e.onRefresh||function(){},this.onRefreshOpening=e.onRefreshOpening||function(){},this.onRefreshHolding=e.onRefreshHolding||function(){},window.ionic.onGesture("release",function(t){n._handleEndDrag(t)},this.el),window.ionic.onGesture("drag",function(t){n._handleDrag(t)},this.el),this._initDrag()},stopRefreshing:function(){var t=this.el.querySelector(".list-refresher");t.style.height="0px"},didScroll:function(t){if(this.isVirtual){var e=this.itemHeight,n=(this.listEl.children.length,t.target.scrollHeight),i=this.el.parentNode.offsetHeight,r=(t.scrollTop,Math.max(0,t.scrollTop+this.virtualRemoveThreshold)),o=Math.min(n,Math.abs(t.scrollTop)+i+this.virtualAddThreshold),s=Math.floor((o-r)/e),a=parseInt(Math.abs(r/e),10),l=parseInt(Math.abs(o/e),10);this._virtualItemsToRemove=Array.prototype.slice.call(this.listEl.children,0,a);{Array.prototype.slice.call(this.listEl.children,a,a+s)}this.renderViewport&&this.renderViewport(r,o,a,l)}},didStopScrolling:function(){if(this.isVirtual)for(var t=0;t<this._virtualItemsToRemove.length;t++){{this._virtualItemsToRemove[t]}this.didHideItem&&this.didHideItem(t)}},clearDragEffects:function(){this._lastDragOp&&(this._lastDragOp.clean&&this._lastDragOp.clean(),this._lastDragOp=null)},_initDrag:function(){this._lastDragOp=this._dragOp,this._dragOp=null},_getItem:function(t){for(;t;){if(t.classList&&t.classList.contains(e))return t;t=t.parentNode}return null},_startDrag:function(e){var n=this;this._isDragging=!1;var i,r=this._lastDragOp;!t.DomUtil.getParentOrSelfWithClass(e.target,a)||"up"!=e.gesture.direction&&"down"!=e.gesture.direction?!this._didDragUpOrDown&&("left"==e.gesture.direction||"right"==e.gesture.direction)&&Math.abs(e.gesture.deltaX)>5&&(i=this._getItem(e.target),i&&i.querySelector(".item-options")&&(this._dragOp=new c({el:this.el,canSwipe:this.canSwipe}),this._dragOp.start(e),e.preventDefault())):(i=this._getItem(e.target),i&&(this._dragOp=new u({listEl:this.el,el:i,scrollEl:this.scrollEl,scrollView:this.scrollView,onReorder:function(t,e,i){n.onReorder&&n.onReorder(t,e,i)}}),this._dragOp.start(e),e.preventDefault())),r&&this._dragOp&&!this._dragOp.isSameItem(r)&&e.defaultPrevented&&r.clean&&r.clean()},_handleEndDrag:function(t){var e=this;this._didDragUpOrDown=!1,this._dragOp&&this._dragOp.end(t,function(){e._initDrag()})},_handleDrag:function(t){Math.abs(t.gesture.deltaY)>5&&(this._didDragUpOrDown=!0),this.isDragging||this._dragOp||this._startDrag(t),this._dragOp&&(t.gesture.srcEvent.preventDefault(),this._dragOp.drag(t))}})}(ionic),function(t){"use strict";t.views.Modal=t.views.View.inherit({initialize:function(e){e=t.extend({focusFirstInput:!1,unfocusOnHide:!0,focusFirstDelay:600,backdropClickToClose:!0,hardwareBackButtonClose:!0},e),t.extend(this,e),this.el=e.el},show:function(){var t=this;t.focusFirstInput&&window.setTimeout(function(){var e=t.el.querySelector("input, textarea");e&&e.focus&&e.focus()},t.focusFirstDelay)},hide:function(){if(this.unfocusOnHide){var t=this.el.querySelectorAll("input, textarea");window.setTimeout(function(){for(var e=0;e<t.length;e++)t[e].blur&&t[e].blur()})}}})}(ionic),function(t){"use strict";t.views.SideMenu=t.views.View.inherit({initialize:function(t){this.el=t.el,this.isEnabled="undefined"==typeof t.isEnabled?!0:t.isEnabled,this.setWidth(t.width)},getFullWidth:function(){return this.width},setWidth:function(t){this.width=t,this.el.style.width=t+"px"},setIsEnabled:function(t){this.isEnabled=t},bringUp:function(){"0"!==this.el.style.zIndex&&(this.el.style.zIndex="0")},pushDown:function(){"-1"!==this.el.style.zIndex&&(this.el.style.zIndex="-1")}}),t.views.SideMenuContent=t.views.View.inherit({initialize:function(e){t.extend(this,{animationClass:"menu-animated",onDrag:function(){},onEndDrag:function(){}},e),t.onGesture("drag",t.proxy(this._onDrag,this),this.el),t.onGesture("release",t.proxy(this._onEndDrag,this),this.el)},_onDrag:function(t){this.onDrag&&this.onDrag(t)},_onEndDrag:function(t){this.onEndDrag&&this.onEndDrag(t)},disableAnimation:function(){this.el.classList.remove(this.animationClass)},enableAnimation:function(){this.el.classList.add(this.animationClass)},getTranslateX:function(){return parseFloat(this.el.style[t.CSS.TRANSFORM].replace("translate3d(","").split(",")[0])},setTranslateX:t.animationFrameThrottle(function(e){this.el.style[t.CSS.TRANSFORM]="translate3d("+e+"px, 0, 0)"})})}(ionic),function(t){"use strict";t.views.Slider=t.views.View.inherit({initialize:function(t){function e(){m=E.children,T=m.length,m.length<2&&(t.continuous=!1),f.transitions&&t.continuous&&m.length<3&&(E.appendChild(m[0].cloneNode(!0)),E.appendChild(E.children[1].cloneNode(!0)),m=E.children),g=new Array(m.length),v=p.offsetWidth||p.getBoundingClientRect().width,E.style.width=m.length*v+"px";for(var e=m.length;e--;){var n=m[e];n.style.width=v+"px",n.setAttribute("data-index",e),f.transitions&&(n.style.left=e*-v+"px",s(e,S>e?-v:e>S?v:0,0))}t.continuous&&f.transitions&&(s(r(S-1),-v,0),s(r(S+1),v,0)),f.transitions||(E.style.left=S*-v+"px"),p.style.visibility="visible",t.slidesChanged&&t.slidesChanged()}function n(){t.continuous?o(S-1):S&&o(S-1)}function i(){t.continuous?o(S+1):S<m.length-1&&o(S+1)}function r(t){return(m.length+t%m.length)%m.length}function o(e,n){if(S!=e){if(f.transitions){var i=Math.abs(S-e)/(S-e);if(t.continuous){var o=i;i=-g[r(e)]/v,i!==o&&(e=-i*m.length+e)}for(var a=Math.abs(S-e)-1;a--;)s(r((e>S?e:S)-a-1),v*i,0);e=r(e),s(S,v*i,n||b),s(e,0,n||b),t.continuous&&s(r(e-i),-(v*i),0)}else e=r(e),l(S*-v,e*-v,n||b);S=e,_(t.callback&&t.callback(S,m[S]))}}function s(t,e,n){a(t,e,n),g[t]=e}function a(t,e,n){var i=m[t],r=i&&i.style;r&&(r.webkitTransitionDuration=r.MozTransitionDuration=r.msTransitionDuration=r.OTransitionDuration=r.transitionDuration=n+"ms",r.webkitTransform="translate("+e+"px,0)translateZ(0)",r.msTransform=r.MozTransform=r.OTransform="translateX("+e+"px)")}function l(e,n,i){if(!i)return void(E.style.left=n+"px");var r=+new Date,o=setInterval(function(){var s=+new Date-r;return s>i?(E.style.left=n+"px",D&&c(),t.transitionEnd&&t.transitionEnd.call(event,S,m[S]),void clearInterval(o)):void(E.style.left=(n-e)*(Math.floor(s/i*100)/100)+e+"px")},4)}function c(){w=setTimeout(i,D)}function u(){D=t.auto||0,clearTimeout(w)}var h=this,d=function(){},_=function(t){setTimeout(t||d,0)},f={addEventListener:!!window.addEventListener,touch:"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,transitions:function(t){var e=["transitionProperty","WebkitTransition","MozTransition","OTransition","msTransition"];for(var n in e)if(void 0!==t.style[e[n]])return!0;return!1}(document.createElement("swipe"))},p=t.el;if(p){var m,g,v,T,E=p.children[0];t=t||{};var S=parseInt(t.startSlide,10)||0,b=t.speed||300;t.continuous=void 0!==t.continuous?t.continuous:!0;var w,y,D=t.auto||0,L={},x={},M={handleEvent:function(n){switch(("mousedown"==n.type||"mouseup"==n.type||"mousemove"==n.type)&&(n.touches=[{pageX:n.pageX,pageY:n.pageY}]),n.type){case"mousedown":this.start(n);break;case"touchstart":this.start(n);break;case"touchmove":this.touchmove(n);break;case"mousemove":this.touchmove(n);break;case"touchend":_(this.end(n));break;case"mouseup":_(this.end(n));break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"otransitionend":case"transitionend":_(this.transitionEnd(n));break;case"resize":_(e)}t.stopPropagation&&n.stopPropagation()},start:function(t){var e=t.touches[0];L={x:e.pageX,y:e.pageY,time:+new Date},y=void 0,x={},f.touch?(E.addEventListener("touchmove",this,!1),E.addEventListener("touchend",this,!1)):(E.addEventListener("mousemove",this,!1),E.addEventListener("mouseup",this,!1),document.addEventListener("mouseup",this,!1))},touchmove:function(e){if(!(e.touches.length>1||e.scale&&1!==e.scale||h.slideIsDisabled)){t.disableScroll&&e.preventDefault();var n=e.touches[0];x={x:n.pageX-L.x,y:n.pageY-L.y},"undefined"==typeof y&&(y=!!(y||Math.abs(x.x)<Math.abs(x.y))),y||(e.preventDefault(),u(),t.continuous?(a(r(S-1),x.x+g[r(S-1)],0),a(S,x.x+g[S],0),a(r(S+1),x.x+g[r(S+1)],0)):(x.x=x.x/(!S&&x.x>0||S==m.length-1&&x.x<0?Math.abs(x.x)/v+1:1),a(S-1,x.x+g[S-1],0),a(S,x.x+g[S],0),a(S+1,x.x+g[S+1],0)))}},end:function(){var e=+new Date-L.time,n=Number(e)<250&&Math.abs(x.x)>20||Math.abs(x.x)>v/2,i=!S&&x.x>0||S==m.length-1&&x.x<0;t.continuous&&(i=!1);var o=x.x<0;y||(n&&!i?(o?(t.continuous?(s(r(S-1),-v,0),s(r(S+2),v,0)):s(S-1,-v,0),s(S,g[S]-v,b),s(r(S+1),g[r(S+1)]-v,b),S=r(S+1)):(t.continuous?(s(r(S+1),v,0),s(r(S-2),-v,0)):s(S+1,v,0),s(S,g[S]+v,b),s(r(S-1),g[r(S-1)]+v,b),S=r(S-1)),t.callback&&t.callback(S,m[S])):t.continuous?(s(r(S-1),-v,b),s(S,0,b),s(r(S+1),v,b)):(s(S-1,-v,b),s(S,0,b),s(S+1,v,b))),f.touch?(E.removeEventListener("touchmove",M,!1),E.removeEventListener("touchend",M,!1)):(E.removeEventListener("mousemove",M,!1),E.removeEventListener("mouseup",M,!1),document.removeEventListener("mouseup",M,!1))},transitionEnd:function(e){parseInt(e.target.getAttribute("data-index"),10)==S&&(D&&c(),t.transitionEnd&&t.transitionEnd.call(e,S,m[S]))}};this.update=function(){setTimeout(e)},this.setup=function(){e()},this.enableSlide=function(t){return arguments.length&&(this.slideIsDisabled=!t),!this.slideIsDisabled},this.slide=function(t,e){u(),o(t,e)},this.prev=this.previous=function(){u(),n()},this.next=function(){u(),i()},this.stop=function(){u()},this.start=function(){c()},this.currentIndex=function(){return S},this.slidesCount=function(){return T},this.kill=function(){u(),E.style.width="",E.style.left="";for(var t=m.length;t--;){var e=m[t];e.style.width="",e.style.left="",f.transitions&&a(t,0,0)}f.addEventListener?(E.removeEventListener("touchstart",M,!1),E.removeEventListener("webkitTransitionEnd",M,!1),E.removeEventListener("msTransitionEnd",M,!1),E.removeEventListener("oTransitionEnd",M,!1),E.removeEventListener("otransitionend",M,!1),E.removeEventListener("transitionend",M,!1),window.removeEventListener("resize",M,!1)):window.onresize=null},this.load=function(){e(),D&&c(),f.addEventListener?(f.touch?E.addEventListener("touchstart",M,!1):E.addEventListener("mousedown",M,!1),f.transitions&&(E.addEventListener("webkitTransitionEnd",M,!1),E.addEventListener("msTransitionEnd",M,!1),E.addEventListener("oTransitionEnd",M,!1),E.addEventListener("otransitionend",M,!1),E.addEventListener("transitionend",M,!1)),window.addEventListener("resize",M,!1)):window.onresize=function(){e()}}}}})}(ionic),function(t){"use strict";t.views.Toggle=t.views.View.inherit({initialize:function(e){var n=this;this.el=e.el,this.checkbox=e.checkbox,this.track=e.track,this.handle=e.handle,this.openPercent=-1,this.onChange=e.onChange||function(){},this.triggerThreshold=e.triggerThreshold||20,this.dragStartHandler=function(t){n.dragStart(t)},this.dragHandler=function(t){n.drag(t)},this.holdHandler=function(t){n.hold(t)},this.releaseHandler=function(t){n.release(t)},this.dragStartGesture=t.onGesture("dragstart",this.dragStartHandler,this.el),this.dragGesture=t.onGesture("drag",this.dragHandler,this.el),this.dragHoldGesture=t.onGesture("hold",this.holdHandler,this.el),this.dragReleaseGesture=t.onGesture("release",this.releaseHandler,this.el)},destroy:function(){t.offGesture(this.dragStartGesture,"dragstart",this.dragStartGesture),t.offGesture(this.dragGesture,"drag",this.dragGesture),t.offGesture(this.dragHoldGesture,"hold",this.holdHandler),t.offGesture(this.dragReleaseGesture,"release",this.releaseHandler)},tap:function(){"disabled"!==this.el.getAttribute("disabled")&&this.val(!this.checkbox.checked)},dragStart:function(t){this.checkbox.disabled||(this._dragInfo={width:this.el.offsetWidth,left:this.el.offsetLeft,right:this.el.offsetLeft+this.el.offsetWidth,triggerX:this.el.offsetWidth/2,initialState:this.checkbox.checked},t.gesture.srcEvent.preventDefault(),this.hold(t))},drag:function(e){var n=this;this._dragInfo&&(e.gesture.srcEvent.preventDefault(),t.requestAnimationFrame(function(){if(n._dragInfo){var t=(n.track.offsetLeft+n.handle.offsetWidth/2,n.track.offsetLeft+n.track.offsetWidth-n.handle.offsetWidth/2,e.gesture.deltaX,e.gesture.touches[0].pageX-n._dragInfo.left),i=n._dragInfo.width-n.triggerThreshold;n._dragInfo.initialState?t<n.triggerThreshold?n.setOpenPercent(0):t>n._dragInfo.triggerX&&n.setOpenPercent(100):t<n._dragInfo.triggerX?n.setOpenPercent(0):t>i&&n.setOpenPercent(100)}}))},endDrag:function(){this._dragInfo=null},hold:function(){this.el.classList.add("dragging")},release:function(t){this.el.classList.remove("dragging"),this.endDrag(t)},setOpenPercent:function(e){if(this.openPercent<0||e<this.openPercent-3||e>this.openPercent+3)if(this.openPercent=e,0===e)this.val(!1);else if(100===e)this.val(!0);else{var n=Math.round(e/100*this.track.offsetWidth-this.handle.offsetWidth);n=1>n?0:n,this.handle.style[t.CSS.TRANSFORM]="translate3d("+n+"px,0,0)"}},val:function(e){return(e===!0||e===!1)&&(""!==this.handle.style[t.CSS.TRANSFORM]&&(this.handle.style[t.CSS.TRANSFORM]=""),this.checkbox.checked=e,this.openPercent=e?100:0,this.onChange&&this.onChange()),this.checkbox.checked}})}(ionic),function(t){"use strict";t.controllers.ViewController=function(){this.initialize.apply(this,arguments)},t.controllers.ViewController.inherit=t.inherit,t.extend(t.controllers.ViewController.prototype,{initialize:function(){},destroy:function(){}})}(window.ionic),function(t){"use strict";t.controllers.SideMenuController=t.controllers.ViewController.inherit({initialize:function(t){var e=this;this.left=t.left,this.right=t.right,this.content=t.content,this.dragThresholdX=t.dragThresholdX||10,this._rightShowing=!1,this._leftShowing=!1,this._isDragging=!1,this.content&&(this.content.onDrag=function(t){e._handleDrag(t)},this.content.onEndDrag=function(t){e._endDrag(t)})},setContent:function(t){var e=this;this.content=t,this.content.onDrag=function(t){e._handleDrag(t)},this.content.endDrag=function(t){e._endDrag(t)}},isOpenLeft:function(){return this.getOpenAmount()>0},isOpenRight:function(){return this.getOpenAmount()<0},toggleLeft:function(t){var e=this.getOpenAmount();0===arguments.length&&(t=0>=e),this.content.enableAnimation(),this.openPercentage(t?100:0)},toggleRight:function(t){var e=this.getOpenAmount();0===arguments.length&&(t=e>=0),this.content.enableAnimation(),this.openPercentage(t?-100:0)},close:function(){this.openPercentage(0)},getOpenAmount:function(){return this.content&&this.content.getTranslateX()||0},getOpenRatio:function(){var t=this.getOpenAmount();return t>=0?t/this.left.width:t/this.right.width},isOpen:function(){return 0!==this.getOpenAmount()},getOpenPercentage:function(){return 100*this.getOpenRatio()},openPercentage:function(t){var e=t/100;if(this.left&&t>=0)this.openAmount(this.left.width*e);else if(this.right&&0>t){{this.right.width}this.openAmount(this.right.width*e)}0!==t?document.body.classList.add("menu-open"):document.body.classList.remove("menu-open")},openAmount:function(t){var e=this.left&&this.left.width||0,n=this.right&&this.right.width||0;return(this.left&&this.left.isEnabled||!(t>0))&&(this.right&&this.right.isEnabled||!(0>t))?this._leftShowing&&t>e?void this.content.setTranslateX(e):this._rightShowing&&-n>t?void this.content.setTranslateX(-n):(this.content.setTranslateX(t),void(t>=0?(this._leftShowing=!0,this._rightShowing=!1,t>0&&(this.right&&this.right.pushDown&&this.right.pushDown(),this.left&&this.left.bringUp&&this.left.bringUp())):(this._rightShowing=!0,this._leftShowing=!1,this.right&&this.right.bringUp&&this.right.bringUp(),this.left&&this.left.pushDown&&this.left.pushDown()))):void this.content.setTranslateX(0)},snapToRest:function(t){this.content.enableAnimation(),this._isDragging=!1;var e=this.getOpenRatio();if(0===e)return void this.openPercentage(0);var n=.3,i=t.gesture.velocityX,r=t.gesture.direction;this.openPercentage(e>0&&.5>e&&"right"==r&&n>i?0:e>.5&&"left"==r&&n>i?100:0>e&&e>-.5&&"left"==r&&n>i?0:.5>e&&"right"==r&&n>i?-100:"right"==r&&e>=0&&(e>=.5||i>n)?100:"left"==r&&0>=e&&(-.5>=e||i>n)?-100:0)},_endDrag:function(t){this._isDragging&&this.snapToRest(t),this._startX=null,this._lastX=null,this._offsetX=null},_handleDrag:function(t){this._startX?this._lastX=t.gesture.touches[0].pageX:(this._startX=t.gesture.touches[0].pageX,this._lastX=this._startX),!this._isDragging&&Math.abs(this._lastX-this._startX)>this.dragThresholdX&&(this._startX=this._lastX,this._isDragging=!0,this.content.disableAnimation(),this._offsetX=this.getOpenAmount()),this._isDragging&&this.openAmount(this._offsetX+(this._lastX-this._startX))}})}(ionic),function(){var t=1,e={};ionic.Animation=ionic.Animation||{},ionic.Animation={create:function(t){var e;if("string"==typeof t.curve)if(e=ionic.Animation.TimingFn[t.curve]||ionic.Animation.TimingFn.linear,t.curve.indexOf("cubic-bezier(")>=0){var n=t.curve.replace("cubic-bezier(","").replace(")","").split(",");e=ionic.Animation.TimingFn["cubic-bezier"],e=e(n[0],n[1],n[2],n[3],t.duration)}else e=e(t.duration);else e=t.curve,e=e(t.duration);return t.curveFn=e,t.dynamicsType&&(t.dynamic=new t.dynamicsType(t)),new ionic.Animation.Animation(t)},animationStarted:function(n){var i=t++;if(i%20===0){var r={};for(var o in e)r[o]=!0;e=r}return e[i]=!0,n.isRunning=!0,n._animationId=i,i},animationStopped:function(t){t.isRunning=!1}}}(window),function(t){t.Animation=t.Animation||{},t.Animation.Bezier=function(){"use strict";var t=400,e=function(t){return 1/(200*t)},n=function(n,i,r,o){var s=3*n,a=3*(r-n)-s,l=1-s-a,c=3*i,u=3*(o-i)-c,h=1-c-u,d=function(t){return((l*t+a)*t+s)*t},_=function(t){return((h*t+u)*t+c)*t},f=function(t){return(3*l*t+2*a)*t+s},p=function(t,e){var n,i,r,o,s,a;for(r=t,a=0;8>a;a++){if(o=d(r)-t,Math.abs(o)<e)return r;if(s=f(r),Math.abs(s)<1e-6)break;r-=o/s}if(n=0,i=1,r=t,n>r)return n;if(r>i)return i;for(;i>n;){if(o=d(r),Math.abs(o-t)<e)return r;t>o?n=r:i=r,r=.5*(i-n)+n}return r},m=function(t,e){return _(p(t,e))};return function(n,i){return m(n,e(+i||t))}};return{linear:n(0,0,1,1),ease:n(.25,.1,.25,1),easeIn:n(.42,0,1,1),easeOut:n(0,0,.58,1),easeInOut:n(.42,0,.58,1),cubicBezier:function(t,e,i,r){return n(t,e,i,r)}}}();!function(){"use strict";var t=.5*Math.pow(.5,1.925);return{linear:function(t){return t},easeInApprox:function(t){return Math.pow(t,1.685)},easeInQuadratic:function(t){return t*t},easeInCubic:function(t){return t*t*t},easeOutApprox:function(t){return 1-Math.pow(1-t,1.685)},easeOutQuadratic:function(t){return t-=1,1-t*t},easeOutCubic:function(t){return t-=1,1+t*t*t},easeInOutApprox:function(e){return.5>e?t*Math.pow(e,1.925):1-t*Math.pow(1-e,1.925)},easeInOutQuadratic:function(t){return.5>t?2*t*t:(t-=1,1-2*t*t)},easeInOutCubic:function(t){return.5>t?4*t*t*t:(t-=1,1+4*t*t*t)},easeInOutQuartic:function(t){return.5>t?8*t*t*t*t:(t-=1,1+8*t*t*t*t)},easeInOutQuintic:function(t){return.5>t?16*t*t*t*t*t:(t-=1,1+16*t*t*t*t*t)}}}()}(ionic),function(){ionic.Animation=ionic.Animation||{},ionic.Animation.Dynamics={},ionic.Animation.Dynamics.Spring=function(t){var e={frequency:15,friction:200,anticipationStrength:0,anticipationSize:0};ionic.extend(this,e);ionic.extend(this,t)},ionic.Animation.Dynamics.Spring.prototype={at:function(t){var e,n,i,r,o,s,a,l,c,u,h,d,_,f=this;return a=Math.max(1,this.frequency),l=Math.pow(20,this.friction/100),u=this.anticipationSize/100,s=Math.max(0,u),c=t/(1-u)-u/(1-u),u>t?(e=function(t){var e,n,i,r,o;return e=.8,r=u/(1-u),o=0,i=(r-e*o)/(r-o),n=(e-i)/r,n*t*f.anticipationStrength/100+i},_=u/(1-u)-u/(1-u),d=0/(1-u)-u/(1-u),o=Math.acos(1/e(_)),i=(Math.acos(1/e(d))-o)/(a*-u)):(e=function(t){return Math.pow(l/10,-t)*(1-t)},o=0,i=1),n=e(c),r=a*(t-u)*i+o,h=1-n*Math.cos(r)}},ionic.Animation.Dynamics.Gravity=function(t){this.options={bounce:40,gravity:1e3,initialForce:!1},ionic.extend(this.options,t),this.curves=[],this.init()},ionic.Animation.Dynamics.Gravity.prototype={length:function(){var t,e,n,i,r;for(n=Math.min(this.options.bounce/100,80),r=this.options.gravity/100,e=Math.sqrt(2/r),i={a:-e,b:e,H:1},this.options.initialForce&&(i.a=0,i.b=2*i.b);i.H>.001;)t=i.b-i.a,i={a:i.b,b:i.b+t*n,H:i.H*n*n};return i.b},init:function(){var t,e,n,i,r,o;for(t=this.length(),r=this.options.gravity/100*t*t,n=Math.min(this.options.bounce/100,80),e=Math.sqrt(2/r),this.curves=[],i={a:-e,b:e,H:1},this.options.initialForce&&(i.a=0,i.b=2*i.b),this.curves.push(i),o=[];i.b<1&&i.H>.001;)t=i.b-i.a,i={a:i.b,b:i.b+t*n,H:i.H*n*n},o.push(this.curves.push(i));return o},curve:function(t,e,n,i){var r,o,s;return r=e-t,s=2/r*i-1-2*t/r,o=s*s*n-n+1,this.initialForce&&(o=1-o),o},at:function(t){var e,n,i,r,o;for(e=this.options.bounce/100,i=this.options.gravity,r=0,n=this.curves[r];!(t>=n.a&&t<=n.b)&&(r+=1,n=this.curves[r]););return o=n?this.curve(n.a,n.b,n.H,t):this.options.initialForce?0:1}}}(window),function(){ionic.Animation=ionic.Animation||{},ionic.Animation.TimingFn={spring:function(t){return function(e){return ionic.Animation.Dynamics.Spring(e,t)}},gravity:function(t){return function(e){return ionic.Animation.Dynamics.Gravity(e,t)}},linear:function(t){return function(e){return ionic.Animation.Bezier.linear(e,t)}},ease:function(t){return function(e){return ionic.Animation.Bezier.ease(e,t)}},"ease-in":function(t){return function(e){return ionic.Animation.Bezier.easeIn(e,t)}},"ease-out":function(t){return function(e){return ionic.Animation.Bezier.easeOut(e,t)}},"ease-in-out":function(t){return function(e){return ionic.Animation.Bezier.easeInOut(e,t)}},"cubic-bezier":function(t,e,n,i,r){var o=ionic.Animation.Bezier.cubicBezier(t,e,n,i);return function(t){return o(t,r)}}}}(window),function(t){var e=Date.now||function(){return+new Date},n=60,i=1e3;ionic.Animation=ionic.Animation||{},ionic.Animation.Animation=function(t){ionic.extend(this,t),t.useSlowAnimations&&(this.delay*=3,this.duration*=3)},ionic.Animation.Animation.prototype={clone:function(){return new ionic.Animation.Animation({curve:this.curve,curveFn:this.curveFn,duration:this.duration,delay:this.delay,repeat:this.repeat,reverse:this.reverse,autoReverse:this.autoReverse,onComplete:this.onComplete,step:this.step})},curve:"linear",curveFn:ionic.Animation.TimingFn.linear,duration:500,delay:0,repeat:-1,reverse:!1,autoReverse:!1,onComplete:function(){},step:function(){},setPercent:function(t,e){this.pause();var n=this.curveFn(t);e!==!1&&this._pauseState,this.step(n)},stop:function(){this.isRunning=!1,this.shouldEnd=!0},play:function(){this.isPaused=!1,this._lastStepFn&&(this._unpausedAnimation=!0,ionic.cancelAnimationFrame(this._lastStepFn),ionic.requestAnimationFrame(this._lastStepFn))},pause:function(){this.isPaused=!0},_saveState:function(e,n){this._pauseState={pausedAt:e},this._lastStepFn=n,t.cancelAnimationFrame(n)},restart:function(){var t=this;this.isRunning=!1,ionic.requestAnimationFrame(function(){t.start()})},start:function(){var t=this,e={startPercent:this.reverse===!0?1:0,endPercent:this.reverse===!0?0:1,duration:this.duration,easingMethod:this.curveFn,delay:this.delay,reverse:this.reverse,repeat:this.repeat,autoReverse:this.autoReverse,dynamic:this.dynamic};return ionic.Animation.animationStarted(this),this._run(function(e,n,i){i&&t.step(e)},function(e,n){ionic.Animation.animationStopped(t),t.onComplete&&t.onComplete(n,e)},e)},_run:function(t,r,o){var s=this,a=e(),l=a,c=(a+o.delay,o.startPercent),u=o.startPercent,h=o.endPercent,d=o.autoReverse,_=o.delay,f=o.duration,p=o.easingMethod,m=o.repeat,g=o.reverse,v=0,T=0,E=function(){if(c===h&&d){var t=h;g=!g,h=u,u=t,0===m&&(d=!1)}else c=u;a=e(),ionic.requestAnimationFrame(S)},S=function(u){var b=e();if(s._unpausedAnimation){var w=s._pauseState.pausedAt;a+=b-w,l=b}var y=u!==!0,D=b-a;if(s.isPaused)return void s._saveState(b,S);if(!s.isRunning)return void(r&&r(n-v/((b-a)/i),s._animationId,!1));if(y){var L=Math.round((b-l)/(i/n))-1;s._unpausedAnimation;for(var x=0;x<Math.min(L,4);x++)S(!0),v++}D>_&&f&&(c=(D-_)/f,g===!0?(c=1-c,0>c&&(c=0)):c>1&&(c=1)),s._unpausedAnimation=!1;var M;M=o.dynamic?o.dynamic.at(c):p?p(c):c,t(M,b,y)!==!1&&c!==h||!y?y&&(l=b,ionic.requestAnimationFrame(S)):-1===m?E():m>T?(T++,E()):0===m&&d?E():r&&r(n-v/((b-a)/i),s._animationId,c===h||null===f)};ionic.requestAnimationFrame(S)}}}(window)}();
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.2.17
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,V,s){'use strict';function u(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.17/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function db(b){if(null==b||Da(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:C(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(Q(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(db(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Wb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Wb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Xb(b){return function(a,c){b(c,a)}}function eb(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Yb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Yb(b,a);return b}function Y(b){return parseInt(b,
10)}function Zb(b,a){return E(new (E(function(){},{prototype:b})),a)}function w(){}function Ea(b){return b}function aa(b){return function(){return b}}function H(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function U(b){return null!=b&&"object"===typeof b}function C(b){return"string"===typeof b}function zb(b){return"number"===typeof b}function Ma(b){return"[object Date]"===wa.call(b)}function K(b){return"[object Array]"===wa.call(b)}function Q(b){return"function"===typeof b}
function fb(b){return"[object RegExp]"===wa.call(b)}function Da(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Na(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Oa(b,a){var c=Na(b,a);0<=c&&b.splice(c,1);return a}function Fa(b,a,c,d){if(Da(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");
if(a){if(b===a)throw Pa("cpi");c=c||[];d=d||[];if(U(b)){var e=Na(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(K(b))for(var f=a.length=0;f<b.length;f++)e=Fa(b[f],null,c,d),U(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;q(a,function(b,c){delete a[c]});for(f in b)e=Fa(b[f],null,c,d),U(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Yb(a,g)}}else(a=b)&&(K(b)?a=Fa(b,[],c,d):Ma(b)?a=new Date(b.getTime()):fb(b)?a=RegExp(b.source):U(b)&&(a=Fa(b,{},c,d)));return a}function ka(b,a){if(K(b)){a=
a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(U(b))for(c in a=a||{},b)!Ab.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Ma(b))return Ma(a)&&b.getTime()==a.getTime();if(fb(b)&&fb(a))return b.toString()==a.toString();if(b&&
b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Da(b)||Da(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!Q(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!Q(a[d]))return!1;return!0}return!1}function $b(){return V.securityPolicy&&V.securityPolicy.isActive||V.querySelector&&!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"))}function gb(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!Q(a)||a instanceof
RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:Da(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return C(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:
b&&0!==b.length?(b=J(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?J(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+J(b)})}catch(d){return J(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=bc(c[0]),z(d)&&(b=z(c[1])?bc(c[1]):!0,
a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Bb(b){var a=[];q(b,function(b,d){K(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function hb(b){return za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,
a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(g,function(a){g[a]=!0;c(V.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}
function dc(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===V?"document":ha(b);throw Pa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ra.resumeBootstrap=function(b){q(b,function(b){a.push(b)});
c()}}function ib(b,a){a=a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Cb(b,a,c){if(!b)throw Pa("areq",a||"?",c||"required");return b}function Sa(b,a,c){c&&K(b)&&(b=b[b.length-1]);Cb(Q(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&
Q(b)?gb(e,b):b}function Db(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function Yc(b){var a=u("$injector"),c=u("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||u;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);
return n}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);
return this}};g&&l(g);return n}())}}())}function Zc(b){E(b,{bootstrap:dc,copy:Fa,extend:E,equals:xa,element:y,forEach:q,injector:ec,noop:w,bind:gb,toJson:qa,fromJson:ac,identity:Ea,isUndefined:H,isDefined:z,isString:C,isFunction:Q,isObject:U,isNumber:zb,isElement:Tc,isArray:K,version:$c,isDate:Ma,lowercase:J,uppercase:Ga,callbacks:{counter:0},$$minErr:u,$$csp:$b});Ta=Yc(P);try{Ta("ngLocale")}catch(a){Ta("ngLocale",[]).provider("$locale",ad)}Ta("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});
a.provider("$compile",gc).directive({a:cd,input:hc,textarea:hc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Eb).directive(jc);
a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Ua(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Fb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],m=a,k,l,n,p,r,A;if(!d||null!=b)for(;e.length;)for(k=e.shift(),l=0,n=k.length;l<n;l++)for(p=y(k[l]),m?p.triggerHandler("$destroy"):m=!m,r=0,p=(A=p.children()).length;r<p;r++)e.push(Ba(A[r]));return f.apply(this,arguments)}var f=Ba.fn[b],f=f.$original||f;e.$original=f;Ba.fn[b]=e}function M(b){if(b instanceof M)return b;C(b)&&(b=ba(b));if(!(this instanceof M)){if(C(b)&&"<"!=b.charAt(0))throw Gb("nosel");return new M(b)}if(C(b)){var a=b;b=V;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Hb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Ib(this,b);y(V.createDocumentFragment()).append(this)}else Ib(this,
b)}function Jb(b){return b.cloneNode(!0)}function Ha(b){lc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function mc(b,a,c,d){if(z(d))throw Gb("offargs");var e=la(b,"events");la(b,"handle")&&(H(a)?q(e,function(a,c){Va(b,c,a);delete e[c]}):q(a.split(" "),function(a){H(c)?(Va(b,a,e[a]),delete e[a]):Oa(e[a]||[],c)}))}function lc(b,a){var c=b[jb],d=Wa[c];d&&(a?delete Wa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),mc(b)),delete Wa[c],b[jb]=s))}function la(b,a,c){var d=
b[jb],d=Wa[d||-1];if(z(c))d||(b[jb]=d=++me,d=Wa[d]={}),d[a]=c;else return d&&d[a]}function nc(b,a,c){var d=la(b,"data"),e=z(c),f=!e&&z(a),g=f&&!U(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Kb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+ba(a)+" "," ")))})}function lb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function Ib(b,a){if(a){a=a.nodeName||!z(a.length)||Da(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return mb(b,"$"+(a||"ngController")+"Controller")}function mb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=
b[0],e=0,f=a.length;e<f;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=nb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||V);if(H(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ka(a[e||c.type]||[]);q(g,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=
b.$$hashKey():c===s&&(c=b.$$hashKey=eb()):c=b;return a+":"+c}function Xa(b){q(b,this.put,this)}function sc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):K(b)?(c=b.length-1,Sa(b[c],"fn"),a=b.slice(0,c)):Sa(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(U(b))q(b,Xb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(Q(b)||
K(b))b=n.instantiate(b);if(!b.$get)throw Ya("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(C(a))for(c=Ta(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],m=n.get(g[0]);m[g[1]].apply(m,g[2])}else Q(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Sa(a,"module")}catch(l){throw K(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&
(l=l.message+"\n"+l.stack),Ya("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw Ya("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],h=sc(a),g,m,k;m=0;for(g=h.length;m<g;m++){k=h[m];if("string"!==typeof k)throw Ya("itkn",k);f.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[g]);return a.apply(b,f)}return{invoke:d,
instantiate:function(a,b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return U(e)||Q(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",m=[],k=new Xa,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){Aa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,
b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw Ya("unpr",m.join(" <- "));}),p={},r=p.$injector=f(p,function(a){a=n.get(a+h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||w)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==J(a.nodeName)||(b=a)});return b}
function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(A--,0===A)for(;D.length;)try{D.pop()()}catch(b){c.error(b)}}}
function f(a,b){(function T(){q(x,function(a){a()});t=b(T,a)})()}function g(){v=null;N!=h.url()&&(N=h.url(),q(ma,function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var A=0,D=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){A++};h.notifyWhenNoOutstandingRequests=function(a){q(x,function(a){a()});0===A?a():D.push(a)};var x=[],t;h.addPollFn=function(a){H(t)&&f(100,n);x.push(a);return a};var N=k.href,B=a.find("base"),
v=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(N!=a)return N=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),B.attr("href",B.attr("href"))):(v=a,c?k.replace(a):k.href=a),h}else return v||k.href.replace(/%27/g,"'")};var ma=[],L=!1;h.onUrlChange=function(a){if(!L){if(d.history)y(b).on("popstate",g);if(d.hashchange)y(b).on("hashchange",g);else h.addPollFn(g);L=!0}ma.push(a);return a};h.baseHref=function(){var a=B.attr("href");return a?
a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var O={},ca="",F=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===s?m.cookie=escape(a)+"=;path="+F+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+F).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ca)for(ca=m.cookie,d=ca.split("; "),O={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,
h)),O[a]===s&&(O[a]=unescape(e.substring(h+1))));return O}};h.defer=function(a,b){var c;A++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(w),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in
a)throw u("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!H(b))return a in m||g++,m[a]=b,g>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m=
{};g=0;l={};n=p=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Aa(a,"directive");C(a)?
(Cb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);Q(g)?g={compile:aa(g)}:!g.compile&&g.link&&(g.compile=aa(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Xb(m));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,r,A,D,x,t,N,B){function v(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});
var f=L(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){Cb(b,"scope");var e=c?Ja.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var g=e.length;d<g;d++){var m=e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",b)}c&&c(e,b);f&&f(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,r,n,p,A;f=c.length;var I=Array(f);for(n=0;n<f;n++)I[n]=c[n];A=n=0;for(p=m.length;n<p;A++)k=I[A],c=m[n++],f=m[n++],l=y(k),c?(c.scope?
(r=a.$new(),l.data("$scope",r)):r=a,(l=c.transclude)||!e&&b?c(f,r,k,d,O(a,l||b)):c(f,r,k,d,e)):f&&f(a,k.childNodes,s,e)}for(var m=[],k,l,r,n,p=0;p<a.length;p++)k=new Lb,l=ca(a[p],[],k,0===p?d:s,e),(f=l.length?ea(l,a[p],k,b,c,null,[],[],f):null)&&f.scope&&ma(y(a[p]),"ng-scope"),k=f&&f.terminal||!(r=a[p].childNodes)||!r.length?null:L(r,f?f.transclude:b),m.push(f,k),n=n||f||k,f=null;return n?g:null}function O(a,b){return function(c,d,e){var f=!1;c||(c=a.$new(),f=c.$$transcluded=!0);d=b(c,d,e);if(f)d.on("$destroy",
gb(c,c.$destroy));return d}}function ca(a,b,c,d,g){var m=c.$attr,k;switch(a.nodeType){case 1:T(b,na(Ka(a).toLowerCase()),"E",d,g);var l,r,n;k=a.attributes;for(var p=0,A=k&&k.length;p<A;p++){var x=!1,D=!1;l=k[p];if(!S||8<=S||l.specified){r=l.name;n=na(r);X.test(n)&&(r=ib(n.substr(6),"-"));var N=n.replace(/(Start|End)$/,"");n===N+"Start"&&(x=r,D=r.substr(0,r.length-5)+"end",r=r.substr(0,r.length-6));n=na(r.toLowerCase());m[n]=r;c[n]=l=ba(l.value);qc(a,n)&&(c[n]=!0);M(a,b,l,n);T(b,n,"A",d,g,x,D)}}a=
a.className;if(C(a)&&""!==a)for(;k=f.exec(a);)n=na(k[2]),T(b,n,"C",d,g)&&(c[n]=ba(k[3])),a=a.substr(k.index+k[0].length);break;case 3:u(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))n=na(k[1]),T(b,n,"M",d,g)&&(c[n]=ba(k[2]))}catch(t){}}b.sort(H);return b}function F(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function R(a,
b,c){return function(d,e,f,g,k){e=F(e[0],b,c);return a(d,e,f,g,k)}}function ea(a,c,d,e,f,g,m,n,p){function x(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=G.require;a.directiveName=u;if(O===G||G.$$isolateScope)a=uc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=R(b,c,d));b.require=G.require;b.directiveName=u;if(O===G||G.$$isolateScope)b=uc(b,{isolateScope:!0});n.push(b)}}function D(a,b,c,d){var e,f="data",g=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==
e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);}else K(b)&&(e=[],q(b,function(b){e.push(D(a,b,c,d))}));return e}function N(a,e,f,g,p){function x(a,b){var c;2>arguments.length&&(b=a,a=s);E&&(c=ca);return p(a,b,c)}var t,I,v,B,R,F,ca={},ob;t=c===f?d:ka(d,new Lb(y(f),d.$attr));I=t.$$element;if(O){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;g=y(f);F=e.$new(!0);!ea||ea!==O&&ea!==O.$$originalDirective?g.data("$isolateScopeNoTemplate",F):g.data("$isolateScope",F);
ma(g,"ng-isolate-scope");q(O.scope,function(a,c){var d=a.match(T)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,n,p;F.$$isolateBindings[c]=d+f;switch(d){case "@":t.$observe(f,function(a){F[c]=a});t.$$observers[f].$$scope=e;t[f]&&(F[c]=b(t[f])(e));break;case "=":if(g&&!t[f])break;l=r(t[f]);p=l.literal?xa:function(a,b){return a===b};n=l.assign||function(){m=F[c]=l(e);throw ia("nonassign",t[f],O.name);};m=F[c]=l(e);F.$watch(function(){var a=l(e);p(a,F[c])||(p(a,m)?n(e,a=F[c]):F[c]=a);return m=a},null,l.literal);
break;case "&":l=r(t[f]);F[c]=function(a){return l(e,a)};break;default:throw ia("iscp",O.name,c,a);}})}ob=p&&x;L&&q(L,function(a){var b={$scope:a===O||a.$$isolateScope?F:e,$element:I,$attrs:t,$transclude:ob},c;R=a.controller;"@"==R&&(R=t[a.name]);c=A(R,b);ca[a.name]=c;E||I.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(v=m.length;g<v;g++)try{B=m[g],B(B.isolateScope?F:e,I,t,B.require&&D(B.directiveName,B.require,I,ca),ob)}catch(G){l(G,ha(I))}g=e;O&&(O.template||
null===O.templateUrl)&&(g=F);a&&a(g,f.childNodes,s,p);for(g=n.length-1;0<=g;g--)try{B=n[g],B(B.isolateScope?F:e,I,t,B.require&&D(B.directiveName,B.require,I,ca),ob)}catch(z){l(z,ha(I))}}p=p||{};for(var t=-Number.MAX_VALUE,B,L=p.controllerDirectives,O=p.newIsolateScopeDirective,ea=p.templateDirective,T=p.nonTlbTranscludeDirective,H=!1,E=p.hasElementTranscludeDirective,Z=d.$$element=y(c),G,u,W,Za=e,P,M=0,S=a.length;M<S;M++){G=a[M];var ra=G.$$start,X=G.$$end;ra&&(Z=F(c,ra,X));W=s;if(t>G.priority)break;
if(W=G.scope)B=B||G,G.templateUrl||(J("new/isolated scope",O,G,Z),U(W)&&(O=G));u=G.name;!G.templateUrl&&G.controller&&(W=G.controller,L=L||{},J("'"+u+"' controller",L[u],G,Z),L[u]=G);if(W=G.transclude)H=!0,G.$$tlb||(J("transclusion",T,G,Z),T=G),"element"==W?(E=!0,t=G.priority,W=F(c,ra,X),Z=d.$$element=y(V.createComment(" "+u+": "+d[u]+" ")),c=Z[0],pb(f,y(ya.call(W,0)),c),Za=v(W,e,t,g&&g.name,{nonTlbTranscludeDirective:T})):(W=y(Jb(c)).contents(),Z.empty(),Za=v(W,e));if(G.template)if(J("template",
ea,G,Z),ea=G,W=Q(G.template)?G.template(Z,d):G.template,W=Y(W),G.replace){g=G;W=Hb.test(W)?y(ba(W)):[];c=W[0];if(1!=W.length||1!==c.nodeType)throw ia("tplrt",u,"");pb(f,Z,c);S={$attr:{}};W=ca(c,[],S);var $=a.splice(M+1,a.length-(M+1));O&&tc(W);a=a.concat(W).concat($);z(d,S);S=a.length}else Z.html(W);if(G.templateUrl)J("template",ea,G,Z),ea=G,G.replace&&(g=G),N=w(a.splice(M,a.length-M),Z,d,f,Za,m,n,{controllerDirectives:L,newIsolateScopeDirective:O,templateDirective:ea,nonTlbTranscludeDirective:T}),
S=a.length;else if(G.compile)try{P=G.compile(Z,d,Za),Q(P)?x(null,P,ra,X):P&&x(P.pre,P.post,ra,X)}catch(aa){l(aa,ha(Z))}G.terminal&&(N.terminal=!0,t=Math.max(t,G.priority))}N.scope=B&&!0===B.scope;N.transclude=H&&Za;p.hasElementTranscludeDirective=E;return N}function tc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Zb(a[b],{$$isolateScope:!0})}function T(b,e,f,g,k,r,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var A=0,x=e.length;A<x;A++)try{p=e[A],(g===s||g>p.priority)&&-1!=
p.restrict.indexOf(f)&&(r&&(p=Zb(p,{$$start:r,$$end:n})),b.push(p),k=p)}catch(D){l(D)}}return k}function z(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(ma(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function w(a,b,
c,d,e,f,g,k){var m=[],l,r,A=b[0],x=a.shift(),D=E({},x,{templateUrl:null,transclude:null,replace:null,$$originalDirective:x}),N=Q(x.templateUrl)?x.templateUrl(b,c):x.templateUrl;b.empty();n.get(t.getTrustedResourceUrl(N),{cache:p}).success(function(n){var p,t;n=Y(n);if(x.replace){n=Hb.test(n)?y(ba(n)):[];p=n[0];if(1!=n.length||1!==p.nodeType)throw ia("tplrt",x.name,N);n={$attr:{}};pb(d,b,p);var v=ca(p,[],n);U(x.scope)&&tc(v);a=v.concat(a);z(c,n)}else p=A,b.html(n);a.unshift(D);l=ea(a,p,c,e,b,x,f,g,
k);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=L(b[0].childNodes,e);m.length;){n=m.shift();t=m.shift();var B=m.shift(),R=m.shift(),v=b[0];if(t!==A){var F=t.className;k.hasElementTranscludeDirective&&x.replace||(v=Jb(p));pb(B,y(t),v);ma(y(v),F)}t=l.transclude?O(n,l.transclude):R;l(r,n,v,d,t)}m=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){m?(m.push(b),m.push(c),m.push(d),m.push(e)):l(r,b,c,d,e)}}function H(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==
b.name?a.name<b.name?-1:1:a.index-b.index}function J(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function u(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:aa(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function P(a,b){if("srcdoc"==b)return t.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function M(a,c,d,e){var f=
b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ka(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=b(m[e],!0,P(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function pb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==
d){a[g++]=c;m=g+e-1;for(var k=a.length;g<k;g++,m++)m<k?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)f=b[d],y(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function uc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Lb=function(a,b){this.$$element=a;this.$attr=b||{}};Lb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&N.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=vc(a,b),d=vc(b,a);0===c.length?N.removeClass(this.$$element,d):0===d.length?N.addClass(this.$$element,c):N.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=ib(a,"-"));e=Ka(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=B(b,"src"===a);!1!==
c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);D.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Z=b.startSymbol(),ra=b.endSymbol(),Y="{{"==Z||"}}"==ra?Ea:function(a){return a.replace(/\{\{/g,Z).replace(/}}/g,ra)},X=/^ngAttr[A-Z]/;return v}]}function na(b){return Ua(b.replace(te,""))}function vc(b,
a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");U(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,m;C(e)&&(g=e.match(a),h=g[1],m=g[3],e=b.hasOwnProperty(h)?b[h]:fc(f.$scope,h,!0)||fc(d,h,!0),Sa(e,h,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!=
typeof f.$scope)throw u("$controller")("noscp",h||e.name,m);f.$scope[m]=g}return g}}]}function Pd(){this.$get=["$window",function(b){return y(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function wc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=J(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function xc(b){var a=U(b)?b:s;return function(c){a||(a=wc(b));return c?a[J(c)]||
null:a}}function yc(b,a,c){if(Q(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return U(a)&&"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(d),
put:ka(d),patch:ka(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=E({},a,{data:yc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},f=function(a){function b(a){var c;
q(a,function(b,d){Q(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=E({},a.headers),f,g,c=E({},c.common,c[J(a.method)]);b(c);b(d);a:for(f in c){a=J(f);for(g in d)if(J(g)===a)continue a;d[f]=c[f]}return d}(a);E(d,a);d.headers=f;d.method=Ga(d.method);(a=Mb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(f[d.xsrfHeaderName||e.xsrfHeaderName]=a);var g=[function(a){f=a.headers;var b=yc(a.data,xc(f),a.transformRequest);H(a.data)&&q(f,function(a,b){"content-type"===J(b)&&delete f[b]});
H(a.withCredentials)&&!H(e.withCredentials)&&(a.withCredentials=e.withCredentials);return A(a,b,f).then(c,c)},s],h=n.when(d);for(q(t,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var k=g.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};
return h}function A(b,c,f){function g(a,b,c,e){t&&(200<=a&&300>a?t.put(s,[a,b,wc(c),e]):t.remove(s));m(b,a,c,e);d.$$phase||d.$apply()}function m(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:xc(d),config:b,statusText:e})}function k(){var a=Na(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),A=p.promise,t,q,s=D(b.url,b.params);r.pendingRequests.push(b);A.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(t=U(b.cache)?b.cache:
U(e.cache)?e.cache:x);if(t)if(q=t.get(s),z(q)){if(q.then)return q.then(k,k),q;K(q)?m(q[1],q[0],ka(q[2]),q[3]):m(q,200,{},"OK")}else t.put(s,A);H(q)&&a(b.method,s,c,g,f,b.timeout,b.withCredentials,b.responseType);return A}function D(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||H(a)||(K(a)||(a=[a]),q(a,function(a){U(a)&&(a=qa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),t=[];q(f,function(a){t.unshift(C(a)?p.get(a):
p.invoke(a))});q(g,function(a,b){var c=C(a)?p.get(a):p.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(E(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ue(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw u("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ve(b,ue,b.defer,a.angular.callbacks,c[0])}]}function ve(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Va(f,"load",g);Va(f,"error",g);e.body.removeChild(f);f=null;var h=-1,A="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),A=a.type,h="error"===a.type?404:200);c&&c(h,A)};qb(f,"load",g);qb(f,"error",g);8>=S&&(f.onreadystatechange=function(){C(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,k,l,n,p,r,A){function D(){t=g;B&&B();v&&v.abort()}function x(a,d,e,f,g){L&&c.cancel(L);B=v=null;0===d&&(d=e?200:"file"==sa(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(w)}
var t;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==J(e)){var N="_"+(d.counter++).toString(36);d[N]=function(a){d[N].data=a;d[N].called=!0};var B=f(m.replace("JSON_CALLBACK","angular.callbacks."+N),N,function(a,b){x(l,a,d[N].data,"",b);d[N]=w})}else{var v=a(e);v.open(e,m,!0);q(n,function(a,b){z(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=function(){if(v&&4==v.readyState){var a=null,b=null;t!==g&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);x(l,t||v.status,
b,a,v.statusText||"")}};r&&(v.withCredentials=!0);if(A)try{v.responseType=A}catch(s){if("json"!==A)throw s;}v.send(k||null)}if(0<p)var L=c(D,p);else p&&p.then&&p.then(D)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,k,l){for(var n,p,r=0,A=[],D=f.length,x=!1,t=[];r<D;)-1!=(n=f.indexOf(b,r))&&-1!=(p=f.indexOf(a,n+g))?(r!=n&&A.push(f.substring(r,
n)),A.push(r=c(x=f.substring(n+g,p))),r.exp=x,r=p+h,x=!0):(r!=D&&A.push(f.substring(r)),r=D);(D=A.length)||(A.push(""),D=1);if(l&&1<A.length)throw zc("noconcat",f);if(!k||x)return t.length=D,r=function(a){try{for(var b=0,c=D,g;b<c;b++){if("function"==typeof(g=A[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=qa(g)}t[b]=g}return t.join("")}catch(h){a=zc("interr",f,h.toString()),d(a)}},r.exp=f,r.parts=A,r}var g=
b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,r=0,A=z(m)&&!m;h=z(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);0<h&&r>=h&&(n.resolve(r),l(p.$$intervalId),delete e[p.$$intervalId]);A||b.$apply()},g);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in
e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Nb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
hb(b[a]);return b.join("/")}function Ac(b,a,c){b=sa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||we[b.protocol]||null}function Bc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function $a(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Ob(b){return b.substr(0,$a(b).lastIndexOf("/")+1)}function Cc(b,a){this.$$html5=!0;a=a||"";var c=Ob(b);Ac(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!C(e))throw Pb("ipthprfx",a,c);Bc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Nb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,d))!==s)return c+e;if(c==d+"/")return c}}function Qb(b,a){var c=Ob(b);Ac(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!C(e))throw Pb("ihshprfx",d,a);Bc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?
"#"+hb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if($a(b)==$a(a))return a}}function Rb(b,a){this.$$html5=!0;Qb.apply(this,arguments);var c=Ob(b);this.$$rewrite=function(d){var e;if(b==$a(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+hb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function rb(b){return function(){return this[b]}}
function Dc(b,a){return function(c){if(H(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m,k=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(k||"/"),m=e.history?Cc:Rb):(n=
$a(l),m=Qb);h=new m(n,"#"+b);h.$$parse(h.$$rewrite(l));f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=y(a.target);"a"!==J(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");U(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=sa(g.animVal).href);if(m===Rb){var k=e.attr("href")||e.attr("xlink:href");if(0>k.indexOf("://"))if(g="#"+b,"/"==k[0])g=n+g+k;else if("#"==k[0])g=n+g+(h.path()||"/")+k;else{for(var l=h.path().split("/"),k=k.split("/"),p=
0;p<k.length;p++)"."!=k[p]&&(".."==k[p]?l.pop():k[p].length&&l.push(k[p]));g=n+g+l.join("/")}}l=h.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(h.$$parse(l),c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=l&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});
var p=0;c.$watch(function(){var a=d.url(),b=h.$$replace;p&&a==h.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return p});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function fa(b,a){if("constructor"===b)throw Ca("isecfld",a);return b}function ab(b,a){if(b){if(b.constructor===
b)throw Ca("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ca("isecdom",a);}return b}function sb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=fa(a.shift(),d);var h=b[f];h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=fa(a.shift(),d);return b[f]=c}function Ec(b,a,c,d,e,f,g){fa(b,f);fa(a,f);
fa(c,f);fa(d,f);fa(e,f);return g.unwrapPromises?function(g,m){var k=m&&m.hasOwnProperty(b)?m:g,l;if(null==k)return k;(k=k[b])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!d)return k;if(null==k)return s;(k=k[d])&&k.then&&
(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ta(f),"$$v"in k||(l=k,l.$$v=s,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(f,g){var k=g&&g.hasOwnProperty(b)?g:f;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xe(b,a){fa(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?
d:a)[b]}}function ye(b,a,c){fa(b,c);fa(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Fc(b,a,c){if(Sb.hasOwnProperty(b))return Sb[b];var d=b.split("."),e=d.length,f;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)f=6>e?Ec(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,h;do h=Ec(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=h;while(g<e);return h};else{var g="var p;\n";q(d,function(b,d){fa(b,c);g+="if(s == null) return undefined;\ns="+
(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var g=g+"return s;",h=new Function("s","k","pw",g);h.toString=aa(g);f=a.unwrapPromises?function(a,b){return h(a,b,ta)}:h}else f=ye(d[0],d[1],c);else f=xe(d[0],c);"hasOwnProperty"!==b&&(Sb[b]=f);return f}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,
logPromiseWarnings:!0};this.unwrapPromises=function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return z(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Gc.hasOwnProperty(b)&&(Gc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;
switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Tb(a);e=(new bb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ze(function(a){b.$evalAsync(a)},a)}]}function ze(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],k,l;return l={resolve:function(a){if(g){var c=g;g=s;k=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<
d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),D=function(d){try{l.resolve((Q(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},x=function(b){try{l.resolve((Q(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},t=function(b){try{l.notify((Q(h)?h:c)(b))}catch(d){a(d)}};g?g.push([D,x,t]):k.then(D,x,t);return l.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&Q(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&Q(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,
g){var h=e();b(function(){try{h.resolve((Q(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,when:function(h,k,l,n){var p=e(),r,A=function(b){try{return(Q(k)?k:c)(b)}catch(d){return a(d),g(d)}},D=function(b){try{return(Q(l)?l:d)(b)}catch(c){return a(c),g(c)}},x=function(b){try{return(Q(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){r||(r=!0,p.resolve(f(a).then(A,D,x)))},function(a){r||(r=!0,p.resolve(D(a)))},function(a){r||p.notify(x(a))})});return p.promise},
all:function(a){var b=e(),c=0,d=K(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Yd(){var b=10,a=u("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=eb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=f(a);Sa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=eb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,
b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!Q(b)){var h=k(b||w,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=g.fn;g.fn=function(a,b,c){m.call(this,a,b,c);Oa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Oa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,m=f(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=m(c);var a,b;if(U(d))if(db(d))for(e!==l&&(e=l,q=e.length=0,k++),
a=d.length,q!==a&&(k++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(k++,e[b]=d[b]):(q++,e[b]=d[b],k++));if(q>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){p?(p=!1,b(d,d,c)):b(d,g,c);if(h)if(U(d))if(db(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)Ab.call(d,
a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,s=b,L,O=[],y,F,R;m("$digest");c=null;do{v=!1;for(L=this;k.length;){try{R=k.shift(),R.scope.$eval(R.expression)}catch(z){p.$$phase=null,e(z)}c=null}a:do{if(h=L.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(L))!==(g=d.last)&&!(d.eq?xa(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?Fa(f,null):f,d.fn(f,g===n?f:g,L),5>s&&(y=4-s,O[y]||(O[y]=[]),F=
Q(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,F+="; newVal: "+qa(f)+"; oldVal: "+qa(g),O[y].push(F));else if(d===c){v=!1;break a}}catch(C){p.$$phase=null,e(C)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((v||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,qa(O));}while(v||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,gb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=
[],this.$destroy=this.$digest=this.$apply=w,this.$on=this.$watch=function(){return w})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||g.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,
b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Na(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ya.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;h.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,
k)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ya.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!S||8<=S)if(f=sa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ae(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw ua("iwcard",
b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(fb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Hc(b){var a=[];z(b)&&q(b,function(b){a.push(Ae(b))});return a}function ae(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Hc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Hc(b));return a};this.$get=
["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[ga.HTML]=d(f);g[ga.CSS]=d(f);g[ga.URL]=d(f);g[ga.JS]=d(f);g[ga.RESOURCE_URL]=d(g[ga.URL]);return{trustAs:function(a,b){var c=
g.hasOwnProperty(a)?g[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var f=sa(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Mb(f):b[l].exec(f.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Mb(f):a[l].exec(f.href)){p=
!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ka(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=
e.getTrusted=function(a,b){return b},e.valueOf=Ea);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;q(ga,function(a,b){var c=J(b);e[Ua("parse_as_"+c)]=function(b){return f(a,b)};e[Ua("get_trusted_"+c)]=function(b){return g(a,b)};e[Ua("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(J((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,n=!1;if(k){for(var p in k)if(l=m.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||l&&n||(l=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||
4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==S)return!1;if(H(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:$b(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:S,msieDocumentMode:g}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,m){var k=c.defer(),l=k.promise,n=z(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||
b.$apply()},h);l.$$timeoutId=h;f[h]=k;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(X.setAttribute("href",c),c=X.href);X.setAttribute("href",c);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,
pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function Mb(b){b=C(b)?sa(b):b;return b.protocol===Ic.protocol&&b.host===Ic.host}function ee(){this.$get=aa(P)}function kc(b){function a(d,e){if(U(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Jc);a("date",Kc);a("filter",Be);a("json",Ce);a("limitTo",De);a("lowercase",Ee);a("number",Lc);a("orderBy",
Mc);a("uppercase",Fe)}function Be(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ra.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Ab.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&
"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return f("$"==
b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=b[g];e.check(h)&&d.push(h)}return d}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){H(d)&&(d=a.CURRENCY_SYM);return Nc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Lc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Nc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Nc(b,a,c,d,e){if(null==b||!isFinite(b)||U(b))return"";var f=0>b;
b=Math.abs(b);var g=b+"",h="",m=[],k=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?g="0":(h=g,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Oc)[1]||"").length;H(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));g=Math.pow(10,e+1);b=Math.floor(b*g+5)/g;b=(""+b).split(Oc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(g.length>=n+p)for(l=g.length-n,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=g.charAt(k);for(k=l;k<g.length;k++)0===(g.length-k)%
n&&0!==k&&(h+=c),h+=g.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(h);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Ub(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ub(e,a,d)}}function tb(b,a){return function(c,d){var e=c["get"+b](),f=Ga(a?"SHORT"+b:b);return d[f][e]}}
function Kc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Y(b[9]+b[10]),g=Y(b[9]+b[11]));h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));f=Y(b[4]||0)-f;g=Y(b[5]||0)-g;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,m;e=e||"mediumDate";
e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Ge.test(c)?Y(c):a(c));zb(c)&&(c=new Date(c));if(!Ma(c))return c;for(;e;)(m=He.exec(e))?(g=g.concat(ya.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){h=Ie[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ce(){return function(b){return qa(b,!0)}}function De(){return function(b,a){if(!K(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Y(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):
"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Mc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!K(a)||!c)return a;c=K(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Ea;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),
a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],h=0;h<a.length;h++)g.push(a[h]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){Q(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Pc(b,a,c,d){function e(a,c){c=c?"-"+ib(c,"-"):"";d.removeClass(b,(a?ub:vb)+c);d.addClass(b,(a?vb:ub)+c)}var f=this,g=b.parent().controller("form")||
wb,h=0,m=f.$error={},k=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(La);e(!0);f.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,!0,a)});Oa(k,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Oa(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||
e(b);if(d){if(-1!=Na(d,c))return}else m[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,La);d.addClass(b,xb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,xb);d.addClass(b,La);f.$dirty=!1;f.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Je(b,a,c){var d=c.prop("validity");U(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||
d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function yb(b,a,c,d,e,f){var g=a.prop("validity"),h=a[0].placeholder,m={};if(!e.android){var k=!1;a.on("compositionstart",function(a){k=!0});a.on("compositionend",function(){k=!1;l()})}var l=function(e){if(!k){var f=a.val();if(S&&"input"===(e||m).type&&a[0].placeholder!==h)h=a[0].placeholder;else if(Qa(c.ngTrim||"T")&&(f=ba(f)),d.$viewValue!==f||g&&""===f&&!g.valueMissing)b.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};
if(e.hasEvent("input"))a.on("input",l);else{var n,p=function(){n||(n=f.defer(function(){l();n=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var r=c.ngPattern;r&&((e=r.match(/^\/(.*)\/([gim]*)$/))?(r=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||r.test(a),a)}):e=function(c){var e=b.$eval(r);if(!e||!e.test)throw u("ngPattern")("noregexp",
r,e,ha(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var q=Y(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=q,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var D=Y(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=D,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<
a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!K(a)){if(C(a))return a.split(" ");if(U(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function m(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!l){var r=
m(k,1);h.$addClass(r)}else if(!xa(b,l)){var q=e(l),r=d(k,q),k=d(q,k),k=m(k,-1),r=m(r,1);0===r.length?c.removeClass(g,k):0===k.length?c.addClass(g,r):c.setClass(g,r,k)}}l=ka(b)}var l;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=m(k,1),h.$addClass(g)):(g=m(k,-1),h.$removeClass(g))}})}}}]}var J=function(b){return C(b)?b.toLowerCase():b},Ab=Object.prototype.hasOwnProperty,Ga=
function(b){return C(b)?b.toUpperCase():b},S,y,Ba,ya=[].slice,Ke=[].push,wa=Object.prototype.toString,Pa=u("ng"),Ra=P.angular||(P.angular={}),Ta,Ka,ja=["0","0","0"];S=Y((/msie (\d+)/.exec(J(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Y((/trident\/.*; rv:(\d+)/.exec(J(navigator.userAgent))||[])[1]));w.$inject=[];Ea.$inject=[];var ba=function(){return String.prototype.trim?function(b){return C(b)?b.trim():b}:function(b){return C(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>S?function(b){b=
b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ga(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.17",major:1,minor:2,dot:17,codeName:"quantum-disentanglement"},Wa=M.cache={},jb=M.expando="ng"+(new Date).getTime(),me=1,qb=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Va=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:
function(b,a,c){b.detachEvent("on"+a,c)};M._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Gb=u("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Hb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ja=M.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),M(P).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},nb={};
q("multiple selected checked disabled readOnly required open".split(" "),function(b){nb[J(b)]=b});var rc={};q("input select option textarea button form details".split(" "),function(b){rc[Ga(b)]=!0});q({data:nc,inheritedData:mb,scope:function(b){return y(b).data("$scope")||mb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:oc,injector:function(b){return mb(b,"$injector")},removeAttr:function(b,
a){b.removeAttribute(a)},hasClass:Kb,css:function(b,a,c){a=Ua(a);if(z(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=J(a);if(nb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:s;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,
a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(H(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(H(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(H(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=
a},empty:pc},function(b,a){M.prototype[a]=function(a,d){var e,f;if(b!==pc&&(2==b.length&&b!==Kb&&b!==oc?a:d)===s){if(U(a)){for(e=0;e<this.length;e++)if(b===nc)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;f=e===s?Math.min(this.length,1):this.length;for(var g=0;g<f;g++){var h=b(this[g],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:lc,dealoc:Ha,on:function a(c,d,e,f){if(z(f))throw Gb("onargs");var g=la(c,"events"),h=la(c,"handle");
g||la(c,"events",g={});h||la(c,"handle",h=ne(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=V.body.contains||V.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],
function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else qb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},off:mc,one:function(a,c,d){a=y(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new M(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
c){q(new M(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new M(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new M(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:lb,removeClass:kb,toggleClass:function(a,c,d){c&&
q(c.split(" "),function(c){var f=d;H(f)&&(f=!Kb(a,c));(f?lb:kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Jb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];q(c,function(c){c.apply(a,
e.concat(d))})}},function(a,c){M.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)H(g)?(g=a(this[h],c,e,f),z(g)&&(g=y(g))):Ib(g,a(this[h],c,e,f));return z(g)?g:this};M.prototype.bind=M.prototype.on;M.prototype.unbind=M.prototype.off});Xa.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
Ya=u("$injector"),Le=u("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&
d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=C(c)?c:K(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=C(c)?c:K(c)?c.join(" "):"";q(a,function(a){kb(a,c)});g&&d(g)},setClass:function(a,c,g,h){q(a,function(a){lb(a,c);kb(a,g)});h&&d(h)},enabled:w}}]}],ia=u("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];var te=/^(x[\:\-_]|data[\:\-_])/i,zc=u("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
we={http:80,https:443,ftp:21},Pb=u("$location");Rb.prototype=Qb.prototype=Cc.prototype={$$html5:!1,$$replace:!1,absUrl:rb("$$absUrl"),url:function(a,c){if(H(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:rb("$$protocol"),host:rb("$$host"),port:rb("$$port"),path:Dc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(C(a))this.$$search=cc(a);else if(U(a))this.$$search=a;else throw Pb("isrcharg");break;default:H(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Dc("$$hash",Ea),replace:function(){this.$$replace=!0;return this}};var Ca=u("$parse"),Gc={},ta,cb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?z(e)?d+e:d:z(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=
e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ne={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Tb=function(a){this.options=a};Tb.prototype={constructor:Tb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";for(this.tokens=[];this.index<
this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=cb[this.ch],e=cb[a],f=cb[c];f?(this.tokens.push({index:this.index,
text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=
a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=J(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);
if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;else break}d={index:d,text:c};if(cb.hasOwnProperty(c))d.fn=cb[c],d.literal=!0,d.constant=!0;else{var m=Fc(c,this.options,this.text);d.fn=E(function(a,c){return m(a,c)},{assign:function(d,e){return sb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(g=this.text.substring(this.index+1,this.index+5),g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,d+=String.fromCharCode(parseInt(g,16))):d=(f=Ne[g])?d+f:d+g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,
text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=E(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;
if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,
c){throw Ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=
0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Fc(d,this.options,this.text);return E(function(c,d,h){return e(h||
a(c,d))},{assign:function(e,g,h){return sb(a(e,h),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f),m;if(!g)return s;(g=ab(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=d(e,g);return ab(a(e,g),c.text)[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],m=c?c(f,g):f,k=0;k<d.length;k++)h.push(d[k](f,g));k=a(f,g,m)||w;ab(m,e.text);ab(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return ab(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,
d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Sb={},ua=u("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},X=V.createElement("a"),Ic=sa(P.location.href,!0);kc.$inject=["$provide"];Jc.$inject=["$locale"];Lc.$inject=["$locale"];var Oc=".",Ie={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:tb("Month"),MMM:tb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:tb("Day"),EEE:tb("Day",!0),
a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ub(Math[0<a?"floor":"ceil"](a/60),2)+Ub(Math.abs(a%60),2))}},He=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ge=/^\-?\d+$/;Kc.$inject=["$locale"];var Ee=aa(J),Fe=aa(Ga);Mc.$inject=["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(V.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&
!c.name)return function(a,c){var f="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}),Eb={};q(nb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);Eb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=na("ng-"+a);Eb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===
wa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(h,a),S&&g&&e.prop(g,f[h]))})}}}});var wb={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Pc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Pc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=
!1};qb(e[0],"submit",h);e.on("$destroy",function(){c(function(){Va(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=f.name||f.ngForm;k&&sb(a,k,g,k);if(m)e.on("$destroy",function(){m.$removeControl(g);k&&sb(a,k,s,k);E(g,wb)})}}}}}]},dd=Qc(),qd=Qc(!0),Oe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Pe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Qe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:yb,number:function(a,c,d,e,f,g){yb(a,
c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Qe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Je(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));
e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||zb(a),a)})},url:function(a,c,d,e,f,g){yb(a,c,d,e,f,g);a=function(a){return pa(e,"url",e.$isEmpty(a)||Oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){yb(a,c,d,e,f,g);a=function(a){return pa(e,"email",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){H(d.name)&&c.attr("name",eb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});
e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;C(f)||(f=!0);C(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:w,button:w,submit:w,reset:w,file:w},hc=["$browser","$sniffer",function(a,
c){return{restrict:"E",require:"?ngModel",link:function(d,e,f,g){g&&(Rc[J(f.type)]||Rc.text)(d,e,f,g,c,a)}}}],vb="ng-valid",ub="ng-invalid",La="ng-pristine",xb="ng-dirty",Re=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+ib(c,"-"):"";g.removeClass(e,(a?ub:vb)+c);g.addClass(e,(a?vb:ub)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$name=d.name;var m=f(d.ngModel),k=m.assign;if(!k)throw u("ngModel")("nonassign",d.ngModel,ha(e));this.$render=w;this.$isEmpty=function(a){return H(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||wb,n=0,p=this.$error={};e.addClass(La);h(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=
function(){this.$dirty=!1;this.$pristine=!0;g.removeClass(e,xb);g.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,La),g.addClass(e,xb),l.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=m(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=
d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Re,link:function(a,c,d,e){var f=e[0],g=e[1]||wb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",
!1);else return e.$setValidity("required",!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!H(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,
Id=function(){return{priority:100,compile:function(a,c){return Se.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},id=va(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return function(d,e,f){e.addClass("ng-binding").data("$binding",f.ngBindHtml);var g=c(f.ngBindHtml);d.$watch(function(){return(g(d)||"").toString()},function(c){e.html(a.getTrustedHtml(g(d))||"")})}}],ld=Vb("",!0),nd=Vb("Odd",0),md=Vb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=na("ng-"+a);jc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d,e){d.on(J(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,m,k;c.$watch(e.ngIf,function(f){Qa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),
k=null),m&&(m.$destroy(),m=null),h&&(k=Db(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ra.noop,compile:function(g,h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(g,h,q,s,D){var x=0,t,y,B,v=function(){y&&(y.remove(),y=null);t&&(t.$destroy(),t=null);B&&(e.leave(B,function(){y=null}),y=B,B=null)};g.$watch(f.parseAsResourceUrl(m),
function(f){var m=function(){!z(l)||l&&!g.$eval(l)||d()},q=++x;f?(a.get(f,{cache:c}).success(function(a){if(q===x){var c=g.$new();s.template=a;a=D(c,function(a){v();e.enter(a,null,h,m)});t=c;B=a;t.$emit("$includeContentLoaded");g.$eval(k)}}).error(function(){q===x&&v()}),g.$emit("$includeContentRequested")):(v(),s.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],ud=va({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,m=g.$attr.when&&f.attr(g.$attr.when),k=g.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(g,function(a,c){s.test(c)&&(l[J(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=
parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,f,!0)},function(a){f.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=u("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,m){var k=g.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,D,x,t={$id:Ia};if(!l)throw d("iexp",k);g=l[1];h=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){x&&(t[x]=a);t[D]=c;t.$index=d;return n(e,
t)}):(r=function(a,c){return Ia(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);D=l[3]||l[1];x=l[2];var z={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,t={},F,R,C,w,T,u,E=[];if(db(a))T=a,n=p||r;else{n=p||s;T=[];for(C in a)a.hasOwnProperty(C)&&"$"!=C.charAt(0)&&T.push(C);T.sort()}F=T.length;h=E.length=T.length;for(g=0;g<h;g++)if(C=a===T?g:T[g],w=a[C],w=n(C,w,g),Aa(w,"`track by` id"),z.hasOwnProperty(w))u=z[w],delete z[w],t[w]=
u,E[g]=u;else{if(t.hasOwnProperty(w))throw q(E,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,w);E[g]={id:w};t[w]=!1}for(C in z)z.hasOwnProperty(C)&&(u=z[C],g=Db(u.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),u.scope.$destroy());g=0;for(h=T.length;g<h;g++){C=a===T?g:T[g];w=a[C];u=E[g];E[g-1]&&(l=E[g-1].clone[E[g-1].clone.length-1]);if(u.scope){R=u.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);u.clone[0]!=n&&c.move(Db(u.clone),null,y(l));l=u.clone[u.clone.length-1]}else R=e.$new();
R[D]=w;x&&(R[x]=C);R.$index=g;R.$first=0===g;R.$last=g===F-1;R.$middle=!(R.$first||R.$last);R.$odd=!(R.$even=0===(g&1));u.scope||m(R,function(a){a[a.length++]=V.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(l));l=a;u.scope=R;u.clone=a;t[u.id]=u})}z=t})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],m=[],k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=k.length;n<p;++n){var r=h[n];k[n].$destroy();m[n]=r;a.leave(r,function(){m.splice(n,1)})}h.length=0;k.length=
0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:f,element:c})}}),Ed=va({link:function(a,c,d,e,f){if(!f)throw u("ngTransclude")("orphan",ha(c));f(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=u("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Aa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=w})}],link:function(e,g,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(w.parent()&&w.remove(),c.val(a),""===a&&x.prop("selected",!0)):H(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){w.parent()&&w.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Xa(d.$viewValue);q(c.find("option"),
function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ka(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,u,v;u=g.$modelValue;v=y(e)||[];var A=n?Wb(v):v,E,I,B;I={};s=!1;var F,H;if(r)if(w&&K(u))for(s=new Xa([]),B=0;B<u.length;B++)I[m]=u[B],s.put(w(e,I),u[B]);else s=new Xa(u);for(B=0;E=A.length,
B<E;B++){k=B;if(n){k=A[B];if("$"===k.charAt(0))continue;I[n]=k}I[m]=v[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=z(s.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=u,d=w(e,d)===w(e,I)):d=u===q(e,I),s=s||d);F=l(e,I);F=z(F)?F:"";k.push({id:w?w(e,I):n?A[B]:B,label:F,selected:d})}r||(D||null===u?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(A=c.length;I<A;I++){d=c[I];k=a[d];x.length<=I?(u={element:C.clone().attr("label",d),label:k.label},v=[u],x.push(v),
f.append(u.element)):(v=x[I],u=v[0],u.label!=d&&u.element.attr("label",u.label=d));F=null;B=0;for(E=k.length;B<E;B++)s=k[B],(d=v[B+1])?(F=d.element,d.label!==s.label&&F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&F.prop("selected",d.selected=s.selected)):(""===s.id&&D?H=D:(H=t.clone()).val(s.id).attr("selected",s.selected).text(s.label),v.push({element:H,label:s.label,id:s.id,selected:s.selected}),F?F.after(H):u.element.append(H),F=H);for(B++;v.length>B;)v.pop().element.remove()}for(;x.length>
I;)x.pop()[0].element.remove()}var k;if(!(k=u.match(d)))throw Te("iexp",u,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];D&&(a(D)(e),D.removeClass("ng-scope"),D.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,u,v;if(r)for(k=[],p=0,u=x.length;p<u;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(v=0;v<c.length&&
(d[m]=c[v],w(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var p=m[0];m=m[1];var r=h.multiple,u=h.ngOptions,D=!1,x,t=y(V.createElement("option")),C=y(V.createElement("optgroup")),w=t.clone();h=0;for(var v=g.children(),E=v.length;h<E;h++)if(""===
v[h].value){x=D=v.eq(h);break}p.init(m,D,w);r&&(m.$isEmpty=function(a){return!a||0===a.length});u?n(e,g,m):r?l(e,g,m):k(e,g,m,p)}}}}],hd=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(H(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",
a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=aa({restrict:"E",terminal:!0});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ba=P.jQuery)&&Ba.fn.on?(y=Ba,E(Ba.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),Fb("remove",!0,!0,!1),Fb("empty",!1,!1,!1),Fb("html",!1,!1,!0)):y=M,Ra.element=y,Zc(Ra),y(V).ready(function(){Wc(V,
dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.2.17
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(u,f,P){'use strict';f.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(f,u){return function(e){return f(function(){e()})}}]).config(["$provide","$animateProvider",function(W,H){function e(f){for(var e=0;e<f.length;e++){var h=f[e];if(h.nodeType==aa)return h}}function C(h){return f.element(e(h))}var n=f.noop,h=f.forEach,Q=H.$$selectors,aa=1,k="$$ngAnimateState",K="ng-animate",g={running:!0};W.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement",
"$$asyncCallback","$rootScope","$document",function(y,u,$,L,F,I,P){function R(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(u.get(Q[""]));for(var d=0;d<a.length;d++){var f=a[d],e=Q[f];e&&!c[f]&&(b.push(u.get(e)),c[f]=!0)}return b}}function M(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),t.push({event:b,fn:c}),l.push({event:b,fn:d}),!0}function e(b,d,f){var q=[];h(b,function(a){a.fn&&
q.push(a)});var m=0;h(q,function(b,e){var h=function(){a:{if(d){(d[e]||n)();if(++m<q.length)break a;d=null}f()}};switch(b.event){case "setClass":d.push(b.fn(a,p,A,h));break;case "addClass":d.push(b.fn(a,p||c,h));break;case "removeClass":d.push(b.fn(a,A||c,h));break;default:d.push(b.fn(a,h))}});d&&0===d.length&&f()}var w=a[0];if(w){var k="setClass"==b,g=k||"addClass"==b||"removeClass"==b,p,A;f.isArray(c)&&(p=c[0],A=c[1],c=p+" "+A);var B=a.attr("class")+" "+c;if(T(B)){var r=n,v=[],l=[],x=n,m=[],t=[],
B=(" "+B).replace(/\s+/g,".");h(R(B),function(a){!d(a,b)&&k&&(d(a,"addClass"),d(a,"removeClass"))});return{node:w,event:b,className:c,isClassBased:g,isSetClassOperation:k,before:function(a){r=a;e(l,v,function(){r=n;a()})},after:function(a){x=a;e(t,m,function(){x=n;a()})},cancel:function(){v&&(h(v,function(a){(a||n)(!0)}),r(!0));m&&(h(m,function(a){(a||n)(!0)}),x(!0))}}}}}function z(a,b,c,d,e,w,g){function n(d){var e="$animate:"+d;x&&(x[e]&&0<x[e].length)&&F(function(){c.triggerHandler(e,{event:a,
className:b})})}function p(){n("before")}function A(){n("after")}function B(){n("close");g&&F(function(){g()})}function r(){r.hasBeenRun||(r.hasBeenRun=!0,w())}function v(){if(!v.hasBeenRun){v.hasBeenRun=!0;var d=c.data(k);d&&(l&&l.isClassBased?D(c,b):(F(function(){var d=c.data(k)||{};z==d.index&&D(c,b,a)}),c.data(k,d)));B()}}var l=M(c,a,b);if(l){b=l.className;var x=f.element._data(l.node),x=x&&x.events;d||(d=e?e.parent():c.parent());var m=c.data(k)||{};e=m.active||{};var t=m.totalActive||0,u=m.last;
if(l.isClassBased&&(m.disabled||u&&!u.isClassBased)||N(c,d))r(),p(),A(),v();else{d=!1;if(0<t){m=[];if(l.isClassBased)"setClass"==u.event?(m.push(u),D(c,b)):e[b]&&(y=e[b],y.event==a?d=!0:(m.push(y),D(c,b)));else if("leave"==a&&e["ng-leave"])d=!0;else{for(var y in e)m.push(e[y]),D(c,y);e={};t=0}0<m.length&&h(m,function(a){a.cancel()})}!l.isClassBased||(l.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)r(),p(),A(),B();else{if("leave"==a)c.one("$destroy",function(a){a=f.element(this);var b=
a.data(k);b&&(b=b.active["ng-leave"])&&(b.cancel(),D(a,"ng-leave"))});c.addClass(K);var z=O++;t++;e[b]=l;c.data(k,{last:l,active:e,index:z,totalActive:t});p();l.before(function(d){var e=c.data(k);d=d||!e||!e.active[b]||l.isClassBased&&e.active[b].event!=a;r();!0===d?v():(A(),l.after(v))})}}}else r(),p(),A(),v()}function U(a){if(a=e(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName(K):a.querySelectorAll("."+K),h(a,function(a){a=f.element(a);(a=a.data(k))&&a.active&&h(a.active,function(a){a.cancel()})})}
function D(a,b){if(e(a)==e(L))g.disabled||(g.running=!1,g.structural=!1);else if(b){var c=a.data(k)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);if(d||!c.totalActive)a.removeClass(K),a.removeData(k)}}function N(a,b){if(g.disabled)return!0;if(e(a)==e(L))return g.disabled||g.running;do{if(0===b.length)break;var c=e(b)==e(L),d=c?g:b.data(k),d=d&&(!!d.disabled||d.running||0<d.totalActive);if(c||d)return d;if(c)break}while(b=b.parent());return!0}var O=0;L.data(k,g);I.$$postDigest(function(){I.$$postDigest(function(){g.running=
!1})});var V=H.classNameFilter(),T=V?function(a){return V.test(a)}:function(){return!0};return{enter:function(a,b,c,d){a=f.element(a);b=b&&f.element(b);c=c&&f.element(c);this.enabled(!1,a);y.enter(a,b,c);I.$$postDigest(function(){a=C(a);z("enter","ng-enter",a,b,c,n,d)})},leave:function(a,b){a=f.element(a);U(a);this.enabled(!1,a);I.$$postDigest(function(){z("leave","ng-leave",C(a),null,null,function(){y.leave(a)},b)})},move:function(a,b,c,d){a=f.element(a);b=b&&f.element(b);c=c&&f.element(c);U(a);
this.enabled(!1,a);y.move(a,b,c);I.$$postDigest(function(){a=C(a);z("move","ng-move",a,b,c,n,d)})},addClass:function(a,b,c){a=f.element(a);a=C(a);z("addClass",b,a,null,null,function(){y.addClass(a,b)},c)},removeClass:function(a,b,c){a=f.element(a);a=C(a);z("removeClass",b,a,null,null,function(){y.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=f.element(a);a=C(a);z("setClass",[b,c],a,null,null,function(){y.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)D(b);else{var c=
b.data(k)||{};c.disabled=!0;b.data(k,c)}break;case 1:g.disabled=!a;break;default:a=!g.disabled}return!!a}}}]);H.register("",["$window","$sniffer","$timeout","$$animateReflow",function(k,g,C,L){function F(a,E){S&&S();X.push(E);S=L(function(){h(X,function(a){a()});X=[];S=null;q={}})}function I(a,E){var b=e(a);a=f.element(b);Y.push(a);b=Date.now()+E;b<=ea||(C.cancel(da),ea=b,da=C(function(){K(Y);Y=[]},E,!1))}function K(a){h(a,function(a){(a=a.data(m))&&(a.closeAnimationFn||n)()})}function R(a,E){var b=
E?q[E]:null;if(!b){var c=0,d=0,e=0,f=0,m,Z,s,g;h(a,function(a){if(a.nodeType==aa){a=k.getComputedStyle(a)||{};s=a[J+B];c=Math.max(M(s),c);g=a[J+r];m=a[J+v];d=Math.max(M(m),d);Z=a[p+v];f=Math.max(M(Z),f);var b=M(a[p+B]);0<b&&(b*=parseInt(a[p+l],10)||1);e=Math.max(b,e)}});b={total:0,transitionPropertyStyle:g,transitionDurationStyle:s,transitionDelayStyle:m,transitionDelay:d,transitionDuration:c,animationDelayStyle:Z,animationDelay:f,animationDuration:e};E&&(q[E]=b)}return b}function M(a){var b=0;a=
f.isString(a)?a.split(/\s*,\s*/):[];h(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function z(a){var b=a.parent(),c=b.data(x);c||(b.data(x,++ca),c=ca);return c+"-"+e(a).getAttribute("class")}function U(a,b,c,d){var f=z(b),h=f+" "+c,k=q[h]?++q[h].total:0,g={};if(0<k){var l=c+"-stagger",g=f+" "+l;(f=!q[g])&&b.addClass(l);g=R(b,g);f&&b.removeClass(l)}d=d||function(a){return a()};b.addClass(c);var l=b.data(m)||{},s=d(function(){return R(b,h)});d=s.transitionDuration;f=s.animationDuration;if(0===
d&&0===f)return b.removeClass(c),!1;b.data(m,{running:l.running||0,itemIndex:k,stagger:g,timings:s,closeAnimationFn:n});a=0<l.running||"setClass"==a;0<d&&D(b,c,a);0<f&&(0<g.animationDelay&&0===g.animationDuration)&&(e(b).style[p]="none 0s");return!0}function D(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(t):e(a).style[J+r]="none"}function N(a,b){var c=J+r,d=e(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(t)}function O(a){var b=p;a=e(a);a.style[b]&&0<a.style[b].length&&
(a.style[b]="")}function V(a,b,c,f){function g(a){b.off(z,l);b.removeClass(p);d(b,c);a=e(b);for(var fa in t)a.style.removeProperty(t[fa])}function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(Q));Math.max(a-y,0)>=x&&b>=u&&f()}var k=e(b);a=b.data(m);if(-1!=k.getAttribute("class").indexOf(c)&&a){var p="";h(c.split(" "),function(a,b){p+=(0<b?" ":"")+a+"-active"});var n=a.stagger,s=a.timings,r=a.itemIndex,u=Math.max(s.transitionDuration,
s.animationDuration),v=Math.max(s.transitionDelay,s.animationDelay),x=v*ba,y=Date.now(),z=A+" "+H,q="",t=[];if(0<s.transitionDuration){var B=s.transitionPropertyStyle;-1==B.indexOf("all")&&(q+=w+"transition-property: "+B+";",q+=w+"transition-duration: "+s.transitionDurationStyle+";",t.push(w+"transition-property"),t.push(w+"transition-duration"))}0<r&&(0<n.transitionDelay&&0===n.transitionDuration&&(q+=w+"transition-delay: "+T(s.transitionDelayStyle,n.transitionDelay,r)+"; ",t.push(w+"transition-delay")),
0<n.animationDelay&&0===n.animationDuration&&(q+=w+"animation-delay: "+T(s.animationDelayStyle,n.animationDelay,r)+"; ",t.push(w+"animation-delay")));0<t.length&&(s=k.getAttribute("style")||"",k.setAttribute("style",s+"; "+q));b.on(z,l);b.addClass(p);a.closeAnimationFn=function(){g();f()};k=(r*(Math.max(n.animationDelay,n.transitionDelay)||0)+(v+u)*W)*ba;a.running++;I(b,k);return g}f()}function T(a,b,c){var d="";h(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function a(a,
b,c,e){if(U(a,b,c,e))return function(a){a&&d(b,c)}}function b(a,b,c,e){if(b.data(m))return V(a,b,c,e);d(b,c);e()}function c(c,d,e,f){var g=a(c,d,e);if(g){var h=g;F(d,function(){N(d,e);O(d);h=b(c,d,e,f)});return function(a){(h||n)(a)}}f()}function d(a,b){a.removeClass(b);var c=a.data(m);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(m))}function G(a,b){var c="";a=f.isArray(a)?a:a.split(/\s+/);h(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var w="",J,H,p,A;u.ontransitionend===
P&&u.onwebkittransitionend!==P?(w="-webkit-",J="WebkitTransition",H="webkitTransitionEnd transitionend"):(J="transition",H="transitionend");u.onanimationend===P&&u.onwebkitanimationend!==P?(w="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var B="Duration",r="Property",v="Delay",l="IterationCount",x="$$ngAnimateKey",m="$$ngAnimateCSS3Data",t="ng-animate-block-transitions",Q=3,W=1.5,ba=1E3,q={},ca=0,X=[],S,da=null,ea=0,Y=[];return{enter:function(a,
b){return c("enter",a,"ng-enter",b)},leave:function(a,b){return c("leave",a,"ng-leave",b)},move:function(a,b){return c("move",a,"ng-move",b)},beforeSetClass:function(b,c,d,e){var f=G(d,"-remove")+" "+G(c,"-add"),g=a("setClass",b,f,function(a){var e=b.attr("class");b.removeClass(d);b.addClass(c);a=a();b.attr("class",e);return a});if(g)return F(b,function(){N(b,f);O(b);e()}),g;e()},beforeAddClass:function(b,c,d){var e=a("addClass",b,G(c,"-add"),function(a){b.addClass(c);a=a();b.removeClass(c);return a});
if(e)return F(b,function(){N(b,c);O(b);d()}),e;d()},setClass:function(a,c,d,e){d=G(d,"-remove");c=G(c,"-add");return b("setClass",a,d+" "+c,e)},addClass:function(a,c,d){return b("addClass",a,G(c,"-add"),d)},beforeRemoveClass:function(b,c,d){var e=a("removeClass",b,G(c,"-remove"),function(a){var d=b.attr("class");b.removeClass(c);a=a();b.attr("class",d);return a});if(e)return F(b,function(){N(b,c);O(b);d()}),e;d()},removeClass:function(a,c,d){return b("removeClass",a,G(c,"-remove"),d)}}}])}])})(window,
window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*
 AngularJS v1.2.17
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,h,q){'use strict';function E(a){var d=[];s(d,h.noop).chars(a);return d.join("")}function k(a){var d={};a=a.split(",");var b;for(b=0;b<a.length;b++)d[a[b]]=!0;return d}function F(a,d){function b(a,c,b,g){c=h.lowercase(c);if(t[c])for(;f.last()&&u[f.last()];)e("",f.last());v[c]&&f.last()==c&&e("",c);(g=w[c]||!!g)||f.push(c);var l={};b.replace(G,function(a,c,d,b,e){l[c]=r(d||b||e||"")});d.start&&d.start(c,l,g)}function e(a,c){var b=0,e;if(c=h.lowercase(c))for(b=f.length-1;0<=b&&f[b]!=c;b--);
if(0<=b){for(e=f.length-1;e>=b;e--)d.end&&d.end(f[e]);f.length=b}}var c,g,f=[],l=a;for(f.last=function(){return f[f.length-1]};a;){g=!0;if(f.last()&&x[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(c,a){a=a.replace(H,"$1").replace(I,"$1");d.chars&&d.chars(r(a));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))c=a.indexOf("--",4),0<=c&&a.lastIndexOf("--\x3e",c)===c&&(d.comment&&d.comment(a.substring(4,c)),a=a.substring(c+3),g=!1);else if(y.test(a)){if(c=a.match(y))a=
a.replace(c[0],""),g=!1}else if(J.test(a)){if(c=a.match(z))a=a.substring(c[0].length),c[0].replace(z,e),g=!1}else K.test(a)&&(c=a.match(A))&&(a=a.substring(c[0].length),c[0].replace(A,b),g=!1);g&&(c=a.indexOf("<"),g=0>c?a:a.substring(0,c),a=0>c?"":a.substring(c),d.chars&&d.chars(r(g)))}if(a==l)throw L("badparse",a);l=a}e()}function r(a){if(!a)return"";var d=M.exec(a);a=d[1];var b=d[3];if(d=d[2])n.innerHTML=d.replace(/</g,"&lt;"),d="textContent"in n?n.textContent:n.innerText;return a+d+b}function B(a){return a.replace(/&/g,
"&amp;").replace(N,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+(a-56320)+65536)+";"}).replace(O,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,d){var b=!1,e=h.bind(a,a.push);return{start:function(a,g,f){a=h.lowercase(a);!b&&x[a]&&(b=a);b||!0!==C[a]||(e("<"),e(a),h.forEach(g,function(b,f){var g=h.lowercase(f),k="img"===a&&"src"===g||"background"===g;!0!==P[g]||!0===D[g]&&!d(b,k)||(e(" "),e(f),e('="'),e(B(b)),e('"'))}),
e(f?"/>":">"))},end:function(a){a=h.lowercase(a);b||!0!==C[a]||(e("</"),e(a),e(">"));a==b&&(b=!1)},chars:function(a){b||e(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,z=/^<\s*\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\s*\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,O=/([^\#-~| |!])/g,
w=k("area,br,col,hr,img,wbr");p=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");q=k("rp,rt");var v=h.extend({},q,p),t=h.extend({},p,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),u=h.extend({},q,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=k("script,style"),
C=h.extend({},w,t,u,v),D=k("background,cite,href,longdesc,src,usemap"),P=h.extend({},D,k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),n=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=
["$$sanitizeUri",function(a){return function(d){var b=[];F(d,s(b,function(b,c){return!/^unsafe/.test(a(b,c))}));return b.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,b=/^mailto:/;return function(e,c){function g(a){a&&m.push(E(a))}function f(a,b){m.push("<a ");h.isDefined(c)&&(m.push('target="'),m.push(c),m.push('" '));m.push('href="');m.push(a);m.push('">');g(b);m.push("</a>")}if(!e)return e;
for(var l,k=e,m=[],n,p;l=k.match(d);)n=l[0],l[2]==l[3]&&(n="mailto:"+n),p=l.index,g(k.substr(0,p)),f(n,l[0].replace(b,"")),k=k.substring(p+l[0].length);g(k);return a(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/**
 * State-based routing for AngularJS
 * @version v0.2.10
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return I(new(I(function(){},{prototype:a})),b)}function e(a){return H(arguments,function(b){b!==a&&H(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function h(a,b,c,d){var e,h=f(c,d),i={},j=[];for(var k in h)if(h[k].params&&h[k].params.length){e=h[k].params;for(var l in e)g(j,e[l])>=0||(j.push(e[l]),i[e[l]]=a[e[l]])}return I({},i,b)}function i(a,b){var c={};return H(a,function(a){var d=b[a];c[a]=null!=d?String(d):null}),c}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return H(a,function(a){c[a]=b[a]}),c}function l(a,b){var d=1,f=2,g={},h=[],i=g,j=I(a.when(g),{$$promises:g,$$values:g});this.study=function(g){function k(a,c){if(o[c]!==f){if(n.push(c),o[c]===d)throw n.splice(0,n.indexOf(c)),new Error("Cyclic dependency: "+n.join(" -> "));if(o[c]=d,E(a))m.push(c,[function(){return b.get(a)}],h);else{var e=b.annotate(a);H(e,function(a){a!==c&&g.hasOwnProperty(a)&&k(g[a],a)}),m.push(c,a,e)}n.pop(),o[c]=f}}function l(a){return F(a)&&a.then&&a.$$promises}if(!F(g))throw new Error("'invocables' must be an object");var m=[],n=[],o={};return H(g,k),g=n=o=null,function(d,f,g){function h(){--s||(t||e(r,f.$$values),p.$$values=r,p.$$promises=!0,o.resolve(r))}function k(a){p.$$failure=a,o.reject(a)}function n(c,e,f){function i(a){l.reject(a),k(a)}function j(){if(!C(p.$$failure))try{l.resolve(b.invoke(e,g,r)),l.promise.then(function(a){r[c]=a,h()},i)}catch(a){i(a)}}var l=a.defer(),m=0;H(f,function(a){q.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,q[a].then(function(b){r[a]=b,--m||j()},i))}),m||j(),q[c]=l.promise}if(l(d)&&g===c&&(g=f,f=d,d=null),d){if(!F(d))throw new Error("'locals' must be an object")}else d=i;if(f){if(!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=j;var o=a.defer(),p=o.promise,q=p.$$promises={},r=I({},d),s=1+m.length/3,t=!1;if(C(f.$$failure))return k(f.$$failure),p;f.$$values?(t=e(r,f.$$values),h()):(I(q,f.$$promises),f.then(h,k));for(var u=0,v=m.length;v>u;u+=3)d.hasOwnProperty(m[u])?h():n(m[u],m[u+1],m[u+2]);return p}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function m(a,b,c){this.fromConfig=function(a,b,c){return C(a.template)?this.fromString(a.template,b):C(a.templateUrl)?this.fromUrl(a.templateUrl,b):C(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return D(a)?a(b):a},this.fromUrl=function(c,d){return D(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function n(a){function b(b){if(!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(f[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");f[b]=!0,j.push(b)}function c(a){return a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&")}var d,e=/([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f={},g="^",h=0,i=this.segments=[],j=this.params=[];this.source=a;for(var k,l,m;(d=e.exec(a))&&(k=d[2]||d[3],l=d[4]||("*"==d[1]?".*":"[^/]*"),m=a.substring(h,d.index),!(m.indexOf("?")>=0));)g+=c(m)+"("+l+")",b(k),i.push(m),h=e.lastIndex;m=a.substring(h);var n=m.indexOf("?");if(n>=0){var o=this.sourceSearch=m.substring(n);m=m.substring(0,n),this.sourcePath=a.substring(0,h+n),H(o.substring(1).split(/[&?]/),b)}else this.sourcePath=a,this.sourceSearch="";g+=c(m)+"$",i.push(m),this.regexp=new RegExp(g),this.prefix=i[0]}function o(){this.compile=function(a){return new n(a)},this.isMatcher=function(a){return F(a)&&D(a.exec)&&D(a.format)&&D(a.concat)},this.$get=function(){return this}}function p(a){function b(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function c(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function d(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return C(d)?d:!0}var e=[],f=null;this.rule=function(a){if(!D(a))throw new Error("'rule' must be a function");return e.push(a),this},this.otherwise=function(a){if(E(a)){var b=a;a=function(){return b}}else if(!D(a))throw new Error("'rule' must be a function");return f=a,this},this.when=function(e,f){var g,h=E(f);if(E(e)&&(e=a.compile(e)),!h&&!D(f)&&!G(f))throw new Error("invalid 'handler' in when()");var i={matcher:function(b,c){return h&&(g=a.compile(c),c=["$match",function(a){return g.format(a)}]),I(function(a,e){return d(a,c,b.exec(e.path(),e.search()))},{prefix:E(b.prefix)?b.prefix:""})},regex:function(a,e){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(g=e,e=["$match",function(a){return c(g,a)}]),I(function(b,c){return d(b,e,a.exec(c.path()))},{prefix:b(a)})}},j={matcher:a.isMatcher(e),regex:e instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](e,f));throw new Error("invalid 'what' in when()")},this.$get=["$location","$rootScope","$injector",function(a,b,c){function d(b){function d(b){var d=b(c,a);return d?(E(d)&&a.replace().url(d),!0):!1}if(!b||!b.defaultPrevented){var g,h=e.length;for(g=0;h>g;g++)if(d(e[g]))return;f&&d(f)}}return b.$on("$locationChangeSuccess",d),{sync:function(){d()}}}]}function q(a,e,f){function g(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function l(a,b){var d=E(a),e=d?a:a.name,f=g(e);if(f){if(!b)throw new Error("No reference point given for path '"+e+"'");for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=w[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function m(a,b){x[a]||(x[a]=[]),x[a].push(b)}function n(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!E(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(w.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):E(b.parent)?b.parent:"";if(e&&!w[e])return m(e,b.self);for(var f in z)D(z[f])&&(b[f]=z[f](b,z.$delegates[f]));if(w[c]=b,!b[y]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){v.$current.navigable==b&&j(a,c)||v.transitionTo(b,a,{location:!1})}]),x[c])for(var g=0;g<x[c].length;g++)n(x[c][g]);return b}function o(a){return a.indexOf("*")>-1}function p(a){var b=a.split("."),c=v.$current.name.split(".");if("**"===b[0]&&(c=c.slice(c.indexOf(b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(c.indexOf(b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length)return!1;for(var d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return c.join("")===b.join("")}function q(a,b){return E(a)&&!C(b)?z[a]:D(b)&&E(a)?(z[a]&&!z.$delegates[a]&&(z.$delegates[a]=z[a]),z[a]=b,this):this}function r(a,b){return F(a)?b=a:b.name=a,n(b),this}function s(a,e,g,m,n,q,r,s,x){function z(){r.url()!==M&&(r.url(M),r.replace())}function A(a,c,d,f,h){var i=d?c:k(a.params,c),j={$stateParams:i};h.resolve=n.resolve(a.resolve,j,h.resolve,a);var l=[h.resolve.then(function(a){h.globals=a})];return f&&l.push(f),H(a.views,function(c,d){var e=c.resolve&&c.resolve!==a.resolve?c.resolve:{};e.$template=[function(){return g.load(d,{view:c,locals:j,params:i,notify:!1})||""}],l.push(n.resolve(e,j,h.resolve,a).then(function(f){if(D(c.controllerProvider)||G(c.controllerProvider)){var g=b.extend({},e,j);f.$$controller=m.invoke(c.controllerProvider,null,g)}else f.$$controller=c.controller;f.$$state=a,f.$$controllerAs=c.controllerAs,h[d]=f}))}),e.all(l).then(function(){return h})}var B=e.reject(new Error("transition superseded")),F=e.reject(new Error("transition prevented")),K=e.reject(new Error("transition aborted")),L=e.reject(new Error("transition failed")),M=r.url(),N=x.baseHref();return u.locals={resolve:null,globals:{$stateParams:{}}},v={params:{},current:u.self,$current:u,transition:null},v.reload=function(){v.transitionTo(v.current,q,{reload:!0,inherit:!1,notify:!1})},v.go=function(a,b,c){return this.transitionTo(a,b,I({inherit:!0,relative:v.$current},c))},v.transitionTo=function(b,c,f){c=c||{},f=I({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,k=v.$current,n=v.params,o=k.path,p=l(b,f.relative);if(!C(p)){var s={to:b,toParams:c,options:f};if(g=a.$broadcast("$stateNotFound",s,k.self,n),g.defaultPrevented)return z(),K;if(g.retry){if(f.$retry)return z(),L;var w=v.transition=e.when(g.retry);return w.then(function(){return w!==v.transition?B:(s.options.$retry=!0,v.transitionTo(s.to,s.toParams,s.options))},function(){return K}),z(),w}if(b=s.to,c=s.toParams,f=s.options,p=l(b,f.relative),!C(p)){if(f.relative)throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'");throw new Error("No such state '"+b+"'")}}if(p[y])throw new Error("Cannot transition to abstract state '"+b+"'");f.inherit&&(c=h(q,c||{},v.$current,p)),b=p;var x,D,E=b.path,G=u.locals,H=[];for(x=0,D=E[x];D&&D===o[x]&&j(c,n,D.ownParams)&&!f.reload;x++,D=E[x])G=H[x]=D.locals;if(t(b,k,G,f))return b.self.reloadOnSearch!==!1&&z(),v.transition=null,e.when(v.current);if(c=i(b.params,c||{}),f.notify&&(g=a.$broadcast("$stateChangeStart",b.self,c,k.self,n),g.defaultPrevented))return z(),F;for(var N=e.when(G),O=x;O<E.length;O++,D=E[O])G=H[O]=d(G),N=A(D,c,D===b,N,G);var P=v.transition=N.then(function(){var d,e,g;if(v.transition!==P)return B;for(d=o.length-1;d>=x;d--)g=o[d],g.self.onExit&&m.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=x;d<E.length;d++)e=E[d],e.locals=H[d],e.self.onEnter&&m.invoke(e.self.onEnter,e.self,e.locals.globals);if(v.transition!==P)return B;v.$current=b,v.current=b.self,v.params=c,J(v.params,q),v.transition=null;var h=b.navigable;return f.location&&h&&(r.url(h.url.format(h.locals.globals.$stateParams)),"replace"===f.location&&r.replace()),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,k.self,n),M=r.url(),v.current},function(d){return v.transition!==P?B:(v.transition=null,a.$broadcast("$stateChangeError",b.self,c,k.self,n,d),z(),e.reject(d))});return P},v.is=function(a,d){var e=l(a);return C(e)?v.$current!==e?!1:C(d)&&null!==d?b.equals(q,d):!0:c},v.includes=function(a,d){if(E(a)&&o(a)){if(!p(a))return!1;a=v.$current.name}var e=l(a);if(!C(e))return c;if(!C(v.$current.includes[e.name]))return!1;var f=!0;return b.forEach(d,function(a,b){C(q[b])&&q[b]===a||(f=!1)}),f},v.href=function(a,b,c){c=I({lossy:!0,inherit:!1,absolute:!1,relative:v.$current},c||{});var d=l(a,c.relative);if(!C(d))return null;b=h(q,b||{},v.$current,d);var e=d&&c.lossy?d.navigable:d,g=e&&e.url?e.url.format(i(d.params,b||{})):null;return!f.html5Mode()&&g&&(g="#"+f.hashPrefix()+g),"/"!==N&&(f.html5Mode()?g=N.slice(0,-1)+g:c.absolute&&(g=N.slice(1)+g)),c.absolute&&g&&(g=r.protocol()+"://"+r.host()+(80==r.port()||443==r.port()?"":":"+r.port())+(!f.html5Mode()&&g?"/":"")+g),g},v.get=function(a,b){if(!C(a)){var c=[];return H(w,function(a){c.push(a.self)}),c}var d=l(a,b);return d&&d.self?d.self:null},v}function t(a,b,c,d){return a!==b||(c!==b.locals||d.reload)&&a.self.reloadOnSearch!==!1?void 0:!0}var u,v,w={},x={},y="abstract",z={parent:function(a){if(C(a.parent)&&a.parent)return l(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?l(b[1]):u},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=I({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url;if(E(b))return"^"==b.charAt(0)?e.compile(b.substring(1)):(a.parent.navigable||u).url.concat(b);if(e.isMatcher(b)||null==b)return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},params:function(a){if(!a.params)return a.url?a.url.parameters():a.parent.params;if(!G(a.params))throw new Error("Invalid params in state '"+a+"'");if(a.url)throw new Error("Both params and url specicified in state '"+a+"'");return a.params},views:function(a){var b={};return H(C(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},ownParams:function(a){if(!a.parent)return a.params;var b={};H(a.params,function(a){b[a]=!0}),H(a.parent.params,function(c){if(!b[c])throw new Error("Missing required parameter '"+c+"' in state '"+a.name+"'");b[c]=!1});var c=[];return H(b,function(a,b){a&&c.push(b)}),c},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?I({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};u=n({name:"",url:"^",views:null,"abstract":!0}),u.navigable=null,this.decorator=q,this.state=r,this.$get=s,s.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$location","$urlRouter","$browser"]}function r(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=I(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function s(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){c(function(){a[0].scrollIntoView()},0,!1)}}]}function t(a,c,d){function e(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function f(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(i)return{enter:function(a,b,c){i.enter(a,null,b,c)},leave:function(a,b){i.leave(a,b)}};if(h){var d=h&&h(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var g=e(),h=g("$animator"),i=g("$animate"),j={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,e,g){return function(c,e,h){function i(){k&&(k.remove(),k=null),m&&(m.$destroy(),m=null),l&&(q.leave(l,function(){k=null}),k=l,l=null)}function j(f){var h=c.$new(),j=l&&l.data("$uiViewName"),k=j&&a.$current&&a.$current.locals[j];if(f||k!==n){var r=g(h,function(a){q.enter(a,e,function(){(b.isDefined(p)&&!p||c.$eval(p))&&d(a)}),i()});n=a.$current.locals[r.data("$uiViewName")],l=r,m=h,m.$emit("$viewContentLoaded"),m.$eval(o)}}var k,l,m,n,o=h.onload||"",p=h.autoscroll,q=f(h,c);c.$on("$stateChangeSuccess",function(){j(!1)}),c.$on("$viewContentLoading",function(){j(!1)}),j(!0)}}};return j}function u(a,b,c){return{restrict:"ECA",priority:-400,compile:function(d){var e=d.html();return function(d,f,g){var h=g.uiView||g.name||"",i=f.inheritedData("$uiView");h.indexOf("@")<0&&(h=h+"@"+(i?i.state.name:"")),f.data("$uiViewName",h);var j=c.$current,k=j&&j.locals[h];if(k){f.data("$uiView",{name:h,state:k.$$state}),f.html(k.$template?k.$template:e);var l=a(f.contents());if(k.$$controller){k.$scope=d;var m=b(k.$$controller,k);k.$$controllerAs&&(d[k.$$controllerAs]=m),f.data("$ngControllerController",m),f.children().data("$ngControllerController",m)}l(d)}}}}}function v(a){var b=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/);if(!b||4!==b.length)throw new Error("Invalid state ref '"+a+"'");return{state:b[1],paramExpr:b[3]||null}}function w(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function x(a,c){var d=["location","inherit","reload"];return{restrict:"A",require:"?^uiSrefActive",link:function(e,f,g,h){var i=v(g.uiSref),j=null,k=w(f)||a.$current,l="FORM"===f[0].nodeName,m=l?"action":"href",n=!0,o={relative:k},p=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in p&&(o[a]=p[a])});var q=function(b){if(b&&(j=b),n){var c=a.href(i.state,j,o);return h&&h.$$setStateInfo(i.state,j),c?void(f[0][m]=c):(n=!1,!1)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a){a!==j&&q(a)},!0),j=e.$eval(i.paramExpr)),q(),l||f.bind("click",function(b){var d=b.which||b.button;d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target")||(c(function(){a.go(i.state,j,o)}),b.preventDefault())})}}}function y(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(d,e,f){function g(){a.$current.self===i&&h()?e.addClass(l):e.removeClass(l)}function h(){return!k||j(k,b)}var i,k,l;l=c(f.uiSrefActive||"",!1)(d),this.$$setStateInfo=function(b,c){i=a.get(b,w(e)),k=c,g()},d.$on("$stateChangeSuccess",g)}]}}function z(a){return function(b){return a.is(b)}}function A(a){return function(b){return a.includes(b)}}function B(a,b){function e(a){this.locals=a.locals.globals,this.params=this.locals.$stateParams}function f(){this.locals=null,this.params=null}function g(c,g){if(null!=g.redirectTo){var h,j=g.redirectTo;if(E(j))h=j;else{if(!D(j))throw new Error("Invalid 'redirectTo' in when()");h=function(a,b){return j(a,b.path(),b.search())}}b.when(c,h)}else a.state(d(g,{parent:null,name:"route:"+encodeURIComponent(c),url:c,onEnter:e,onExit:f}));return i.push(g),this}function h(a,b,d){function e(a){return""!==a.name?a:c}var f={routes:i,params:d,current:c};return b.$on("$stateChangeStart",function(a,c,d,f){b.$broadcast("$routeChangeStart",e(c),e(f))}),b.$on("$stateChangeSuccess",function(a,c,d,g){f.current=e(c),b.$broadcast("$routeChangeSuccess",e(c),e(g)),J(d,f.params)}),b.$on("$stateChangeError",function(a,c,d,f,g,h){b.$broadcast("$routeChangeError",e(c),e(f),h)}),f}var i=[];e.$inject=["$$state"],this.when=g,this.$get=h,h.$inject=["$state","$rootScope","$routeParams"]}var C=b.isDefined,D=b.isFunction,E=b.isString,F=b.isObject,G=b.isArray,H=b.forEach,I=b.extend,J=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),l.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",l),m.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",m),n.prototype.concat=function(a){return new n(this.sourcePath+a+this.sourceSearch)},n.prototype.toString=function(){return this.source},n.prototype.exec=function(a,b){var c=this.regexp.exec(a);if(!c)return null;var d,e=this.params,f=e.length,g=this.segments.length-1,h={};if(g!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(d=0;g>d;d++)h[e[d]]=c[d+1];for(;f>d;d++)h[e[d]]=b[e[d]];return h},n.prototype.parameters=function(){return this.params},n.prototype.format=function(a){var b=this.segments,c=this.params;if(!a)return b.join("");var d,e,f,g=b.length-1,h=c.length,i=b[0];for(d=0;g>d;d++)f=a[c[d]],null!=f&&(i+=encodeURIComponent(f)),i+=b[d+1];for(;h>d;d++)f=a[c[d]],null!=f&&(i+=(e?"&":"?")+c[d]+"="+encodeURIComponent(f),e=!0);return i},b.module("ui.router.util").provider("$urlMatcherFactory",o),p.$inject=["$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",p),q.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider","$locationProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",q),r.$inject=[],b.module("ui.router.state").provider("$view",r),b.module("ui.router.state").provider("$uiViewScroll",s),t.$inject=["$state","$injector","$uiViewScroll"],u.$inject=["$compile","$controller","$state"],b.module("ui.router.state").directive("uiView",t),b.module("ui.router.state").directive("uiView",u),x.$inject=["$state","$timeout"],y.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",x).directive("uiSrefActive",y),z.$inject=["$state"],A.$inject=["$state"],b.module("ui.router.state").filter("isState",z).filter("includedByState",A),B.$inject=["$stateProvider","$urlRouterProvider"],b.module("ui.router.compat").provider("$route",B).directive("ngView",t)}(window,window.angular);
/*!
 * ionic.bundle.js is a concatenation of:
 * ionic.js, angular.js, angular-animate.js,
 * angular-sanitize.js, angular-ui-router.js,
 * and ionic-angular.js
 */

/*!
 * Copyright 2014 Drifty Co.
 * http://drifty.com/
 *
 * Ionic, v1.0.0-beta.10
 * A powerful HTML5 mobile app framework.
 * http://ionicframework.com/
 *
 * By @maxlynch, @benjsperry, @adamdbradley <3
 *
 * Licensed under the MIT license. Please see LICENSE for more information.
 *
 */

!function(){function e(e){var t,n=typeof e;return"object"==n&&null!==e?"function"==typeof(t=e.$$hashKey)?t=e.$$hashKey():void 0===t&&(t=e.$$hashKey=ionic.Utils.nextUid()):t=e,n+":"+t}function t(e){if(e.$root!==e){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}}function n(e){if(e.$root!==e&&e.$$disconnected){var t=e.$parent;e.$$disconnected=!1,e.$$prevSibling=t.$$childTail,t.$$childHead?(t.$$childTail.$$nextSibling=e,t.$$childTail=e):t.$$childHead=t.$$childTail=e}}function i(e){return["$log",function(t){function n(e){this.handle=e}var i=this,o=this._instances=[];this._registerInstance=function(e,t){return e.$$delegateHandle=t,o.push(e),function(){var t=o.indexOf(e);-1!==t&&o.splice(t,1)}},this.$getByHandle=function(e){return e?new n(e):i},e.forEach(function(e){n.prototype[e]=function(){var n,i,r=this.handle,a=arguments,s=0;return o.forEach(function(t){t.$$delegateHandle===r&&(s++,i=t[e].apply(t,a),1===s&&(n=i))}),s?n:t.warn('Delegate for handle "'+this.handle+'" could not find a corresponding element with delegate-handle="'+this.handle+'"! '+e+"() was not called!\nPossible cause: If you are calling "+e+'() immediately, and your element with delegate-handle="'+this.handle+'" is a child of your controller, then your element may not be compiled yet. Put a $timeout around your call to '+e+"() and try again.")},i[e]=function(){var t,n,i=arguments;return o.forEach(function(o,r){n=o[e].apply(o,i),0===r&&(t=n)}),t}})}]}function o(e,t){return[function(){return{priority:"99",require:"^?collectionRepeat",link:function(n,i,o,r){r&&o.$observe(e,function(e){e||i.removeAttr(t)})}}}]}function r(e){return["$ionicGesture","$parse",function(t,n){var i=e.substr(2).toLowerCase();return function(o,r,a){var s=n(a[e]),c=function(e){o.$apply(function(){s(o,{$event:e})})},l=t.on(i,c,r);o.$on("$destroy",function(){t.off(l,i,c)})}}]}function a(){return["$ionicScrollDelegate",function(e){return{restrict:"E",link:function(t,n,i){function o(t){for(var i=3,o=t.target;i--&&o;){if(o.classList.contains("button")||o.tagName.match(/input|textarea|select/i)||o.isContentEditable)return;o=o.parentNode}var r=t.gesture&&t.gesture.touches[0]||t.detail.touches[0],a=n[0].getBoundingClientRect();ionic.DomUtil.rectContains(r.pageX,r.pageY,a.left,a.top-20,a.left+a.width,a.top+a.height)&&e.scrollTop(!0)}"true"!=i.noTapScroll&&(ionic.on("tap",o,n[0]),t.$on("$destroy",function(){ionic.off("tap",o,n[0])}))}}}]}function s(e){return[function(){return{restrict:"E",compile:function(t){function n(t,n,i){var o=(new ionic.views.HeaderBar({el:n[0],alignTitle:i.alignTitle||"center"}),n[0]);e?(t.$watch(function(){return o.className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subheader");t.$hasHeader=n&&!i,t.$hasSubheader=n&&i}),t.$on("$destroy",function(){delete t.$hasHeader,delete t.$hasSubheader})):(t.$watch(function(){return o.className},function(e){var n=-1===e.indexOf("ng-hide"),i=-1!==e.indexOf("bar-subfooter");t.$hasFooter=n&&!i,t.$hasSubfooter=n&&i}),t.$on("$destroy",function(){delete t.$hasFooter,delete t.$hasSubfooter}),t.$watch("$hasTabs",function(e){n.toggleClass("has-tabs",!!e)}))}return t.addClass(e?"bar bar-header":"bar bar-footer"),{pre:n}}}}]}function c(e){return e.clientHeight}function l(e){e.stopPropagation()}var u={method:function(e,t,n){var i=!1;return function(){return i||(i=!0,t(e)),n.apply(this,arguments)}},field:function(e,t,n,i,o){var r=!1,a=function(){return r||(r=!0,t(e)),o},s=function(n){return r||(r=!0,t(e)),o=n,n};Object.defineProperty(n,i,{get:a,set:s,enumerable:!0})}},d=angular.module("ionic",["ngAnimate","ngSanitize","ui.router"]),h=angular.extend,f=angular.forEach,p=angular.isDefined,v=angular.isString,g=angular.element;d.factory("$ionicActionSheet",["$rootScope","$document","$compile","$animate","$timeout","$ionicTemplateLoader","$ionicPlatform",function(e,t,n,i,o,r,a){function s(r){var s=e.$new(!0);angular.extend(s,{cancel:angular.noop,destructiveButtonClicked:angular.noop,buttonClicked:angular.noop,$deregisterBackButton:angular.noop,buttons:[],cancelOnStateChange:!0},r||{});var c=s.element=n('<ion-action-sheet buttons="buttons"></ion-action-sheet>')(s),l=g(c[0].querySelector(".action-sheet-wrapper")),u=s.cancelOnStateChange?e.$on("$stateChangeSuccess",function(){s.cancel()}):angular.noop;return s.removeSheet=function(e){s.removed||(s.removed=!0,l.removeClass("action-sheet-up"),t[0].body.classList.remove("action-sheet-open"),s.$deregisterBackButton(),u(),i.removeClass(c,"active",function(){s.$destroy(),c.remove(),s.cancel.$scope=null,(e||angular.noop)()}))},s.showSheet=function(e){s.removed||(t[0].body.appendChild(c[0]),t[0].body.classList.add("action-sheet-open"),i.addClass(c,"active",function(){s.removed||(e||angular.noop)()}),o(function(){s.removed||l.addClass("action-sheet-up")},20,!1))},s.$deregisterBackButton=a.registerBackButtonAction(s.cancel,C),s.cancel=function(){s.removeSheet(r.cancel)},s.buttonClicked=function(e){r.buttonClicked(e,r.buttons[e])===!0&&s.removeSheet()},s.destructiveButtonClicked=function(){r.destructiveButtonClicked()===!0&&s.removeSheet()},s.showSheet(),s.cancel.$scope=s,s.cancel}return{show:s}}]),g.prototype.addClass=function(e){var t,n,i,o,r,a;if(e&&"ng-scope"!=e&&"ng-isolate-scope"!=e)for(t=0;t<this.length;t++)if(o=this[t],o.setAttribute)if(e.indexOf(" ")<0)o.classList.add(e);else{for(a=(" "+(o.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),r=e.split(" "),n=0;n<r.length;n++)i=r[n].trim(),-1===a.indexOf(" "+i+" ")&&(a+=i+" ");o.setAttribute("class",a.trim())}return this},g.prototype.removeClass=function(e){var t,n,i,o,r;if(e)for(t=0;t<this.length;t++)if(r=this[t],r.getAttribute)if(e.indexOf(" ")<0)r.classList.remove(e);else for(i=e.split(" "),n=0;n<i.length;n++)o=i[n],r.setAttribute("class",(" "+(r.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+o.trim()+" "," ").trim());return this},d.provider("$ionicAnimation",function(){var e=!1;this.setSlowAnimations=function(t){e=t},this.create=function(e){return ionic.Animation.create(e)},this.$get=[function(){return function(t){return t.useSlowAnimations=e,ionic.Animation.create(t)}}]}),d.factory("$ionicBackdrop",["$document",function(e){function t(){1===++r&&(o.addClass("visible"),ionic.requestAnimationFrame(function(){r&&o.addClass("active")}))}function n(){0===--r&&(o.removeClass("active"),setTimeout(function(){!r&&o.removeClass("visible")},100))}function i(){return o}var o=g('<div class="backdrop">'),r=0;return e[0].body.appendChild(o[0]),{retain:t,release:n,getElement:i,_element:o}}]),d.factory("$ionicBind",["$parse","$interpolate",function(e,t){var n=/^\s*([@=&])(\??)\s*(\w*)\s*$/;return function(i,o,r){f(r||{},function(r,a){var s,c,l=r.match(n)||[],u=l[3]||a,d=l[1];switch(d){case"@":if(!o[u])return;o.$observe(u,function(e){i[a]=e}),o[u]&&(i[a]=t(o[u])(i));break;case"=":if(!o[u])return;c=i.$watch(o[u],function(e){i[a]=e}),i.$on("$destroy",c);break;case"&":if(o[u]&&o[u].match(RegExp(a+"(.*?)")))throw new Error('& expression binding "'+a+'" looks like it will recursively call "'+o[u]+'" and cause a stack overflow! Please choose a different scopeName.');s=e(o[u]),i[a]=function(e){return s(i,e)}}})}}]),d.factory("$collectionDataSource",["$cacheFactory","$parse","$rootScope",function(i,o,r){function a(t){var n=this;if(this.scope=t.scope,this.transcludeFn=t.transcludeFn,this.transcludeParent=t.transcludeParent,this.keyExpr=t.keyExpr,this.listExpr=t.listExpr,this.trackByExpr=t.trackByExpr,this.heightGetter=t.heightGetter,this.widthGetter=t.widthGetter,this.dimensions=[],this.data=[],this.trackByExpr){var i=o(this.trackByExpr),r={$id:e};this.itemHashGetter=function(e,t){return r[n.keyExpr]=t,r.$index=e,i(n.scope,r)}}else this.itemHashGetter=function(t,n){return e(n)};this.attachedItems={},this.BACKUP_ITEMS_LENGTH=10,this.backupItemsArray=[]}return a.prototype={setup:function(){for(var e=0;e<this.BACKUP_ITEMS_LENGTH;e++)this.detachItem(this.createItem())},destroy:function(){this.dimensions.length=0,this.data=null,this.backupItemsArray.length=0,this.attachedItems={}},calculateDataDimensions:function(){var e={};this.dimensions=this.data.map(function(t,n){return e[this.keyExpr]=t,e.$index=n,{width:this.widthGetter(this.scope,e),height:this.heightGetter(this.scope,e)}},this)},createItem:function(){var e={};return e.scope=this.scope.$new(),this.transcludeFn(e.scope,function(t){t.css("position","absolute"),e.element=t}),this.transcludeParent.append(e.element),e},getItem:function(e){return(item=this.attachedItems[e])||((item=this.backupItemsArray.pop())?n(item.scope):item=this.createItem()),item},attachItemAtIndex:function(e){var t=this.data[e],n=this.itemHashGetter(e,t),i=this.getItem(n);return(i.scope.$index!==e||i.scope[this.keyExpr]!==t)&&(i.scope[this.keyExpr]=t,i.scope.$index=e,i.scope.$first=0===e,i.scope.$last=e===this.getLength()-1,i.scope.$middle=!(i.scope.$first||i.scope.$last),i.scope.$odd=!(i.scope.$even=0===(1&e)),r.$$phase||i.scope.$digest()),i.hash=n,this.attachedItems[n]=i,i},destroyItem:function(e){e.element.remove(),e.scope.$destroy(),e.scope=null,e.element=null},detachItem:function(e){delete this.attachedItems[e.hash],this.backupItemsArray.length>=this.BACKUP_ITEMS_LENGTH?this.destroyItem(e):(this.backupItemsArray.push(e),e.element.css(ionic.CSS.TRANSFORM,"translate3d(-2000px,-2000px,0)"),t(e.scope))},getLength:function(){return this.data&&this.data.length||0},setData:function(e){this.data=e||[],this.calculateDataDimensions()}},a}]),d.factory("$collectionRepeatManager",["$rootScope","$timeout",function(){function e(e){function t(){return n.viewportSize}var n=this;this.dataSource=e.dataSource,this.element=e.element,this.scrollView=e.scrollView,this.isVertical=!!this.scrollView.options.scrollingY,this.renderedItems={},this.dimensions=[],this.setCurrentIndex(0),this.scrollView.__$callback=this.scrollView.__callback,this.scrollView.__callback=angular.bind(this,this.renderScroll),this.isVertical?(this.scrollView.options.getContentHeight=t,this.scrollValue=function(){return this.scrollView.__scrollTop},this.scrollMaxValue=function(){return this.scrollView.__maxScrollTop},this.scrollSize=function(){return this.scrollView.__clientHeight},this.secondaryScrollSize=function(){return this.scrollView.__clientWidth},this.transformString=function(e,t){return"translate3d("+t+"px,"+e+"px,0)"},this.primaryDimension=function(e){return e.height},this.secondaryDimension=function(e){return e.width}):(this.scrollView.options.getContentWidth=t,this.scrollValue=function(){return this.scrollView.__scrollLeft},this.scrollMaxValue=function(){return this.scrollView.__maxScrollLeft},this.scrollSize=function(){return this.scrollView.__clientWidth},this.secondaryScrollSize=function(){return this.scrollView.__clientHeight},this.transformString=function(e,t){return"translate3d("+e+"px,"+t+"px,0)"},this.primaryDimension=function(e){return e.width},this.secondaryDimension=function(e){return e.height})}return e.prototype={destroy:function(){this.renderedItems={},this.render=angular.noop,this.calculateDimensions=angular.noop,this.dimensions=[]},calculateDimensions:function(){var e,t=0,n=0,i=this.secondaryScrollSize();return this.dataSource.dimensions.map(function(o){var r={primarySize:this.primaryDimension(o),secondarySize:Math.min(this.secondaryDimension(o),i)};return e&&(n+=e.secondarySize,e.primaryPos===t&&n+r.secondarySize>i&&(n=0,t+=e.primarySize)),r.primaryPos=t,r.secondaryPos=n,e=r,r},this)},resize:function(){this.dimensions=this.calculateDimensions();var e=this.dimensions[this.dimensions.length-1];this.viewportSize=e?e.primaryPos+e.primarySize:0,this.setCurrentIndex(0),this.render(!0),this.dataSource.backupItemsArray.length||this.dataSource.setup()},setCurrentIndex:function(e){var t=(this.dimensions[e]||{}).primaryPos||0;this.currentIndex=e,this.hasPrevIndex=e>0,this.hasPrevIndex&&(this.previousPos=Math.max(t-this.dimensions[e-1].primarySize,this.dimensions[e-1].primaryPos)),this.hasNextIndex=e+1<this.dataSource.getLength(),this.hasNextIndex&&(this.nextPos=Math.min(t+this.dimensions[e+1].primarySize,this.dimensions[e+1].primaryPos))},renderScroll:ionic.animationFrameThrottle(function(e,t,n,i){return this.renderIfNeeded(this.isVertical?t:e),this.scrollView.__$callback(e,t,n,i)}),renderIfNeeded:function(e){(this.hasNextIndex&&e>=this.nextPos||this.hasPrevIndex&&e<this.previousPos)&&this.render()},getIndexForScrollValue:function(e,t){var n;if(t<=this.dimensions[e].primaryPos)for(;(n=this.dimensions[e-1])&&n.primaryPos>t;)e--;else for(;(n=this.dimensions[e+1])&&n.primaryPos<t;)e++;return e},render:function(e){var t,n=this.currentIndex>=this.dataSource.getLength();if(n||e){for(t in this.renderedItems)this.removeItem(t);if(n)return}for(var i,o=this.scrollValue(),r=this.scrollSize(),a=r+o,s=this.getIndexForScrollValue(this.currentIndex,o),c=Math.max(s-1,0);c>0&&(i=this.dimensions[c])&&i.primaryPos===this.dimensions[s-1].primaryPos;)c--;for(t=c;(i=this.dimensions[t])&&i.primaryPos-i.primarySize<a;)this.renderItem(t,i.primaryPos,i.secondaryPos),t++;var l=t-1;for(t in this.renderedItems)(c>t||t>l)&&this.removeItem(t);this.setCurrentIndex(s)},renderItem:function(e,t,n){var i=this.dataSource.attachItemAtIndex(e);i&&i.element?((i.primaryPos!==t||i.secondaryPos!==n)&&(i.element.css(ionic.CSS.TRANSFORM,this.transformString(t,n)),i.primaryPos=t,i.secondaryPos=n),this.renderedItems[e]=i):delete this.renderedItems[e]},removeItem:function(e){var t=this.renderedItems[e];t&&(t.primaryPos=t.secondaryPos=null,this.dataSource.detachItem(t),delete this.renderedItems[e])}},e}]),d.factory("$ionicGesture",[function(){return{on:function(e,t,n){return window.ionic.onGesture(e,t,n[0])},off:function(e,t,n){return window.ionic.offGesture(e,t,n)}}}]);var m='<div class="loading-container"><div class="loading"></div></div>',$="$ionicLoading instance.hide() has been deprecated. Use $ionicLoading.hide().",b="$ionicLoading instance.show() has been deprecated. Use $ionicLoading.show().",w="$ionicLoading instance.setContent() has been deprecated. Use $ionicLoading.show({ template: 'my content' }).";d.constant("$ionicLoadingConfig",{template:'<i class="ion-loading-d"></i>'}).factory("$ionicLoading",["$ionicLoadingConfig","$document","$ionicTemplateLoader","$ionicBackdrop","$timeout","$q","$log","$compile","$ionicPlatform",function(e,t,n,i,o,r,a,s,c){function l(){return p||(p=n.compile({template:m,appendTo:t[0].body}).then(function(e){var a=e;return e.show=function(e){var c=e.templateUrl?n.load(e.templateUrl):r.when(e.template||e.content||"");this.isShown||(this.hasBackdrop=!e.noBackdrop&&e.showBackdrop!==!1,this.hasBackdrop&&(i.retain(),i.getElement().addClass("backdrop-loading"))),e.duration&&(o.cancel(this.durationTimeout),this.durationTimeout=o(angular.bind(this,this.hide),+e.duration)),c.then(function(e){if(e){var n=a.element.children();n.html(e),s(n.contents())(a.scope)}a.isShown&&(a.element.addClass("visible"),ionic.requestAnimationFrame(function(){a.isShown&&a.element.addClass("active"),t[0].body.classList.add("loading-active")}))}),this.isShown=!0},e.hide=function(){this.isShown&&(this.hasBackdrop&&(i.release(),i.getElement().removeClass("backdrop-loading")),a.element.removeClass("active"),t[0].body.classList.remove("loading-active"),setTimeout(function(){!a.isShown&&a.element.removeClass("visible")},200)),o.cancel(this.durationTimeout),this.isShown=!1},e})),p}function d(t){t=h(e||{},t||{});var n=t.delay||t.showDelay||0;return g&&o.cancel(g),g=o(angular.noop,n),g.then(l).then(function(e){return v(),v=c.registerBackButtonAction(angular.noop,T),e.show(t)}),{hide:u.method($,a.error,f),show:u.method(b,a.error,function(){d(t)}),setContent:u.method(w,a.error,function(e){l().then(function(t){t.show({template:e})})})}}function f(){v(),o.cancel(g),l().then(function(e){e.hide()})}var p,v=angular.noop,g=r.when();return{show:d,hide:f,_getLoader:l}}]),d.factory("$ionicModal",["$rootScope","$document","$compile","$timeout","$ionicPlatform","$ionicTemplateLoader","$q","$log",function(e,t,n,i,o,r,a,s){var c=ionic.views.Modal.inherit({initialize:function(e){ionic.views.Modal.prototype.initialize.call(this,e),this.animation=e.animation||"slide-in-up"},show:function(){var e=this;if(e.scope.$$destroyed)return void s.error("Cannot call modal.show() after remove(). Please create a new modal instance using $ionicModal.");var n=g(e.modalEl);return e.el.classList.remove("hide"),i(function(){t[0].body.classList.add("modal-open")},400),e.el.parentElement||(n.addClass(e.animation),t[0].body.appendChild(e.el)),n.addClass("ng-enter active").removeClass("ng-leave ng-leave-active"),e._isShown=!0,e._deregisterBackButton=o.registerBackButtonAction(e.hardwareBackButtonClose?angular.bind(e,e.hide):angular.noop,k),e._isOpenPromise=a.defer(),ionic.views.Modal.prototype.show.call(e),i(function(){n.addClass("ng-enter-active"),ionic.trigger("resize"),e.scope.$parent&&e.scope.$parent.$broadcast("modal.shown",e),e.el.classList.add("active")},20),i(function(){e.$el.on("click",function(t){e.backdropClickToClose&&t.target===e.el&&e.hide()})},400)},hide:function(){var e=this,n=g(e.modalEl);return e.el.classList.remove("active"),n.addClass("ng-leave"),i(function(){n.addClass("ng-leave-active").removeClass("ng-enter ng-enter-active active")},20),e.$el.off("click"),e._isShown=!1,e.scope.$parent&&e.scope.$parent.$broadcast("modal.hidden",e),e._deregisterBackButton&&e._deregisterBackButton(),ionic.views.Modal.prototype.hide.call(e),i(function(){t[0].body.classList.remove("modal-open"),e.el.classList.add("hide")},500)},remove:function(){var e=this;return e.scope.$parent&&e.scope.$parent.$broadcast("modal.removed",e),e.hide().then(function(){e.scope.$destroy(),e.$el.remove()})},isShown:function(){return!!this._isShown}}),l=function(t,i){var o=i.scope&&i.scope.$new()||e.$new(!0);h(o,{$hasHeader:!1,$hasSubheader:!1,$hasFooter:!1,$hasSubfooter:!1,$hasTabs:!1,$hasTabsTop:!1});var r=n("<ion-modal>"+t+"</ion-modal>")(o);i.$el=r,i.el=r[0],i.modalEl=i.el.querySelector(".modal");var a=new c(i);return a.scope=o,i.scope||(o.modal=a),a};return{fromTemplate:function(e,t){var n=l(e,t||{});return n},fromTemplateUrl:function(e,t,n){var i;return angular.isFunction(t)&&(i=t,t=n),r.load(e).then(function(e){var n=l(e,t||{});return i&&i(n),n})}}}]),d.service("$ionicNavBarDelegate",i(["back","align","showBackButton","showBar","setTitle","changeTitle","getTitle","getPreviousTitle"]));var y=100,S=150,k=200,C=300,I=400,T=500;d.constant("$ionicPlatformDefaults",{ios:{$ionicNavBarConfig:{transition:"nav-title-slide-ios7",alignTitle:"center",backButtonIcon:"ion-ios7-arrow-back"},$ionicNavViewConfig:{transition:"slide-left-right-ios7"},$ionicTabsConfig:{type:"",position:""}},android:{$ionicNavBarConfig:{transition:"nav-title-slide-ios7",alignTitle:"center",backButtonIcon:"ion-ios7-arrow-back"},$ionicNavViewConfig:{transition:"slide-left-right-ios7"},$ionicTabsConfig:{type:"tabs-striped",position:""}}}),d.config(["$ionicPlatformDefaults","$injector",function(e,t){var n=ionic.Platform.platform(),i=function(e){f(e,function(e,n){h(t.get(n),e)})};switch(n){case"ios":i(e.ios);break;case"android":i(e.android)}}]),d.provider("$ionicPlatform",function(){return{$get:["$q","$rootScope",function(e){var t={onHardwareBackButton:function(e){ionic.Platform.ready(function(){document.addEventListener("backbutton",e,!1)})},offHardwareBackButton:function(e){ionic.Platform.ready(function(){document.removeEventListener("backbutton",e)})},$backButtonActions:{},registerBackButtonAction:function(e,n,i){t._hasBackButtonHandler||(t.$backButtonActions={},t.onHardwareBackButton(t.hardwareBackButtonClick),t._hasBackButtonHandler=!0);var o={id:i?i:ionic.Utils.nextUid(),priority:n?n:0,fn:e};return t.$backButtonActions[o.id]=o,function(){delete t.$backButtonActions[o.id]}},hardwareBackButtonClick:function(e){var n,i;for(i in t.$backButtonActions)(!n||t.$backButtonActions[i].priority>=n.priority)&&(n=t.$backButtonActions[i]);return n?(n.fn(e),n):void 0},is:function(e){return ionic.Platform.is(e)},ready:function(t){var n=e.defer();return ionic.Platform.ready(function(){n.resolve(),t&&t()}),n.promise}};return t}]}});var x='<div class="popup"><div class="popup-head"><h3 class="popup-title" ng-bind-html="title"></h3><h5 class="popup-sub-title" ng-bind-html="subTitle" ng-if="subTitle"></h5></div><div class="popup-body"></div><div class="popup-buttons row"><button ng-repeat="button in buttons" ng-click="$buttonTapped(button, $event)" class="button col" ng-class="button.type || \'button-default\'" ng-bind-html="button.text"></button></div></div>';d.factory("$ionicPopup",["$ionicTemplateLoader","$ionicBackdrop","$q","$timeout","$rootScope","$document","$compile","$ionicPlatform",function(e,t,n,i,o,r,a,s){function c(t){t=h({scope:null,title:"",buttons:[]},t||{});var o=e.compile({template:x,scope:t.scope&&t.scope.$new(),appendTo:r[0].body}),s=t.templateUrl?e.load(t.templateUrl):n.when(t.template||t.content||"");return n.all([o,s]).then(function(e){var o=e[0],r=e[1],s=n.defer();o.responseDeferred=s;var c=g(o.element[0].querySelector(".popup-body"));return r?(c.html(r),a(c.contents())(o.scope)):c.remove(),h(o.scope,{title:t.title,buttons:t.buttons,subTitle:t.subTitle,$buttonTapped:function(e,t){var n=(e.onTap||angular.noop)(t);t=t.originalEvent||t,t.defaultPrevented||s.resolve(n)}}),o.show=function(){o.isShown||(o.isShown=!0,ionic.requestAnimationFrame(function(){o.isShown&&(o.element[0].offsetHeight>window.innerHeight-20&&(o.element[0].style.height=window.innerHeight-20+"px",popupBody=o.element[0].querySelectorAll(".popup-body"),popupHead=o.element[0].querySelectorAll(".popup-head"),popupButtons=o.element[0].querySelectorAll(".popup-buttons"),o.element.addClass("popup-tall"),newHeight=window.innerHeight-popupHead[0].offsetHeight-popupButtons[0].offsetHeight-20,popupBody[0].style.height=newHeight+"px"),o.element.removeClass("popup-hidden"),o.element.addClass("popup-showing active"),ionic.DomUtil.centerElementByMarginTwice(o.element[0]),d(o.element))}))},o.hide=function(e){return e=e||angular.noop,o.isShown?(o.isShown=!1,o.element.removeClass("active"),o.element.addClass("popup-hidden"),void i(e,250)):e()},o.remove=function(){o.removed||(o.hide(function(){o.element.remove(),o.scope.$destroy()}),o.removed=!0)},o})}function l(){$[0]&&$[0].responseDeferred.resolve()}function u(e){function n(e){o.then(function(t){t.removed||t.responseDeferred.resolve(e)})}var o=b._createPopup(e),r=$[0];r&&r.hide();var a=i(angular.noop,r?m.stackPushDelay:0).then(function(){return o}).then(function(e){return r||(document.body.classList.add("popup-open"),t.retain(),b._backButtonActionDone=s.registerBackButtonAction(l,I)),$.unshift(e),e.show(),e.responseDeferred.notify({close:a.close}),e.responseDeferred.promise.then(function(n){var i=$.indexOf(e);-1!==i&&$.splice(i,1),e.remove();var o=$[0];return o?o.show():(document.body.classList.remove("popup-open"),t.release(),(b._backButtonActionDone||angular.noop)()),n})});return a.close=n,a}function d(e){var t=e[0].querySelector("input[autofocus]");if(!t&&(t=e[0].querySelector("input"),!t)){var n=e[0].querySelectorAll("button");t=n[n.length-1]}t&&t.focus()}function f(e){return u(h({buttons:[{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function p(e){return u(h({buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){return!1}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return!0}}]},e||{}))}function v(e){var t=o.$new(!0);return t.data={},u(h({template:'<input ng-model="data.response" type="'+(e.inputType||"text")+'" placeholder="'+(e.inputPlaceholder||"")+'">',scope:t,buttons:[{text:e.cancelText||"Cancel",type:e.cancelType||"button-default",onTap:function(){}},{text:e.okText||"OK",type:e.okType||"button-positive",onTap:function(){return t.data.response||""}}]},e||{}))}var m={stackPushDelay:50},$=[],b={show:u,alert:f,confirm:p,prompt:v,_createPopup:c,_popupStack:$};return b}]),d.service("$ionicScrollDelegate",i(["resize","scrollTop","scrollBottom","scrollTo","scrollBy","getScrollPosition","anchorScroll","getScrollView","rememberScrollPosition","forgetScrollPosition","scrollToRememberedPosition"])),d.service("$ionicSideMenuDelegate",i(["toggleLeft","toggleRight","getOpenRatio","isOpen","isOpenLeft","isOpenRight","canDragContent","edgeDragThreshold"])),d.service("$ionicSlideBoxDelegate",i(["update","slide","enableSlide","previous","next","stop","start","currentIndex","slidesCount"])),d.service("$ionicTabsDelegate",i(["select","selectedIndex"])),d.factory("$ionicTemplateLoader",["$compile","$controller","$http","$q","$rootScope","$templateCache",function(e,t,n,i,o,r){function a(e){return n.get(e,{cache:r}).then(function(e){return e.data&&e.data.trim()})}function s(n){n=h({template:"",templateUrl:"",scope:null,controller:null,locals:{},appendTo:null},n||{});var r=n.templateUrl?this.load(n.templateUrl):i.when(n.template);return r.then(function(i){var r,a=n.scope||o.$new(),s=g("<div>").html(i).contents();return n.controller&&(r=t(n.controller,h(n.locals,{$scope:a})),s.children().data("$ngControllerController",r)),n.appendTo&&g(n.appendTo).append(s),e(s)(a),{element:s,scope:a}})}return{load:a,compile:s}}]),d.run(["$rootScope","$state","$location","$document","$animate","$ionicPlatform","$ionicViewService",function(e,t,n,i,o,r,a){function s(t){return e.$viewHistory.backView?e.$viewHistory.backView.go():ionic.Platform.exitApp(),t.preventDefault(),!1}e.$viewHistory={histories:{root:{historyId:"root",parentHistoryId:null,stack:[],cursor:-1}},views:{},backView:null,forwardView:null,currentView:null,disabledRegistrableTagNames:[]},a.disableRegisterByTagName&&(a.disableRegisterByTagName("ion-tabs"),a.disableRegisterByTagName("ion-side-menus")),e.$on("viewState.changeHistory",function(i,o){if(o){var r=o.historyId?e.$viewHistory.histories[o.historyId]:null;if(r&&r.cursor>-1&&r.cursor<r.stack.length){var a=r.stack[r.cursor];return a.go(o)}!o.url&&o.uiSref&&(o.url=t.href(o.uiSref)),o.url&&(0===o.url.indexOf("#")&&(o.url=o.url.replace("#","")),o.url!==n.url()&&n.url(o.url))}}),e.$on("viewState.viewEnter",function(e,t){t&&t.title&&(i[0].title=t.title)}),r.registerBackButtonAction(s,y)}]).factory("$ionicViewService",["$rootScope","$state","$location","$window","$injector","$animate","$ionicNavViewConfig",function(e,t,n,i,o,r,a){function s(){return ionic.Utils.nextUid()}var c=function(){};return c.prototype.initialize=function(e){if(e){for(var t in e)this[t]=e[t];return this}return null},c.prototype.go=function(){return this.stateName?t.go(this.stateName,this.stateParams):this.url&&this.url!==n.url()?e.$viewHistory.backView===this?i.history.go(-1):e.$viewHistory.forwardView===this?i.history.go(1):void n.url(this.url):null},c.prototype.destroy=function(){this.scope&&(this.scope.$destroy&&this.scope.$destroy(),this.scope=null)},{register:function(t,i){var o=e.$viewHistory,r=this.getCurrentStateId(),a=this._getHistory(t),c=o.currentView,l=o.backView,u=o.forwardView,d=this.nextViewOptions(),h={viewId:null,navAction:null,navDirection:null,historyId:a.historyId};if(i&&!this.isTagNameRegistrable(i))return h.navAction="disabledByTagName",h;if(c&&c.stateId===r&&c.historyId===a.historyId)return h.navAction="noChange",h;if(o.forcedNav)ionic.Utils.extend(h,o.forcedNav),e.$viewHistory.forcedNav=null;else if(l&&l.stateId===r)h.viewId=l.viewId,h.navAction="moveBack",h.viewId=l.viewId,l.historyId===c.historyId&&(h.navDirection="back");else if(u&&u.stateId===r){h.viewId=u.viewId,h.navAction="moveForward",u.historyId===c.historyId&&(h.navDirection="forward");var f=this._getParentHistoryObj(t);u.historyId&&f.scope&&(f.scope.$historyId=u.historyId,h.historyId=u.historyId)}else if(c&&c.historyId!==a.historyId&&a.cursor>-1&&a.stack.length>0&&a.cursor<a.stack.length&&a.stack[a.cursor].stateId===r)h.viewId=a.stack[a.cursor].viewId,h.navAction="moveBack";else{if(h.viewId=s(r),c){if(c.forwardViewId=h.viewId,a.historyId===c.historyId&&(h.navDirection="forward"),h.navAction="newView",u&&c.stateId!==u.stateId){var p=this._getHistoryById(u.historyId);if(p)for(var v=p.stack.length-1;v>=u.index;v--)p.stack[v].destroy(),p.stack.splice(v)}}else h.navAction="initialView";o.views[h.viewId]=this.createView({viewId:h.viewId,index:a.stack.length,historyId:a.historyId,backViewId:c&&c.viewId?c.viewId:null,forwardViewId:null,stateId:r,stateName:this.getCurrentStateName(),stateParams:this.getCurrentStateParams(),url:n.url()}),"moveBack"==h.navAction&&e.$emit("$viewHistory.viewBack",c.viewId,h.viewId),a.stack.push(o.views[h.viewId])}return d&&(d.disableAnimate&&(h.navDirection=null),d.disableBack&&(o.views[h.viewId].backViewId=null),this.nextViewOptions(null)),this.setNavViews(h.viewId),a.cursor=o.currentView.index,h},setNavViews:function(t){var n=e.$viewHistory;n.currentView=this._getViewById(t),n.backView=this._getBackView(n.currentView),n.forwardView=this._getForwardView(n.currentView),e.$broadcast("$viewHistory.historyChange",{showBack:n.backView&&n.backView.historyId===n.currentView.historyId})},registerHistory:function(e){e.$historyId=ionic.Utils.nextUid()},createView:function(e){var t=new c;return t.initialize(e)},getCurrentView:function(){return e.$viewHistory.currentView},getBackView:function(){return e.$viewHistory.backView},getForwardView:function(){return e.$viewHistory.forwardView},getNavDirection:function(){return e.$viewHistory.navDirection},getCurrentStateName:function(){return t&&t.current?t.current.name:null},isCurrentStateNavView:function(e){return t&&t.current&&t.current.views&&t.current.views[e]?!0:!1},getCurrentStateParams:function(){var e;if(t&&t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&(e=e||{},e[n]=t.params[n]);return e},getCurrentStateId:function(){var e;if(t&&t.current&&t.current.name){if(e=t.current.name,t.params)for(var n in t.params)t.params.hasOwnProperty(n)&&t.params[n]&&(e+="_"+n+"="+t.params[n]);return e}return ionic.Utils.nextUid()},goToHistoryRoot:function(t){if(t){var n=e.$viewHistory.histories[t];if(n&&n.stack.length){if(e.$viewHistory.currentView&&e.$viewHistory.currentView.viewId===n.stack[0].viewId)return;e.$viewHistory.forcedNav={viewId:n.stack[0].viewId,navAction:"moveBack",navDirection:"back"},n.stack[0].go()}}},_getViewById:function(t){return t?e.$viewHistory.views[t]:null},_getBackView:function(e){return e?this._getViewById(e.backViewId):null},_getForwardView:function(e){return e?this._getViewById(e.forwardViewId):null},_getHistoryById:function(t){return t?e.$viewHistory.histories[t]:null},_getHistory:function(t){var n=this._getParentHistoryObj(t);return e.$viewHistory.histories[n.historyId]||(e.$viewHistory.histories[n.historyId]={historyId:n.historyId,parentHistoryId:this._getParentHistoryObj(n.scope.$parent).historyId,stack:[],cursor:-1}),e.$viewHistory.histories[n.historyId]},_getParentHistoryObj:function(t){for(var n=t;n;){if(n.hasOwnProperty("$historyId"))return{historyId:n.$historyId,scope:n};n=n.$parent}return{historyId:"root",scope:e}},nextViewOptions:function(e){return arguments.length?void(this._nextOpts=e):this._nextOpts},getRenderer:function(e,t,n){function i(e){for(var t="";!t&&e;)t=e.getAttribute("animation"),e=e.parentElement;return t?t:a.transition}function o(){u&&e[0].classList.add(u),"back"===s.navDirection?e[0].classList.add("reverse"):e[0].classList.remove("reverse")}var s,c,l=this,u=i(e[0]);return function(t){return{enter:function(n){return c&&t?(o(),n.addClass("ng-enter"),document.body.classList.add("disable-pointer-events"),void r.enter(n,e,null,function(){document.body.classList.remove("disable-pointer-events"),u&&e[0].classList.remove(u)})):(c||document.body.classList.remove("disable-pointer-events"),void e.append(n))},leave:function(){var n=e.contents();return c&&t?(o(),void r.leave(n,function(){n.remove()})):void n.remove()},register:function(e){return s=l.register(n,e),c=null!==u&&null!==s.navDirection,s
}}}},disableRegisterByTagName:function(t){e.$viewHistory.disabledRegistrableTagNames.push(t.toUpperCase())},isTagNameRegistrable:function(t){var n,i,o=e.$viewHistory.disabledRegistrableTagNames;for(n=0;n<t.length;n++)if(1===t[n].nodeType)for(i=0;i<o.length;i++)if(t[n].tagName===o[i])return!1;return!0},clearHistory:function(){var t=e.$viewHistory.histories,n=e.$viewHistory.currentView;for(var i in t)t[i].stack&&(t[i].stack=[],t[i].cursor=-1),n.historyId===i?(n.backViewId=null,n.forwardViewId=null,t[i].stack.push(n)):t[i].destroy&&t[i].destroy();for(var o in e.$viewHistory.views)o!==n.viewId&&delete e.$viewHistory.views[o];this.setNavViews(n.viewId)}}}]),d.config(["$provide",function(e){function t(e,t){return e.__hash=e.hash,e.hash=function(n){return angular.isDefined(n)&&t(function(){var e=document.querySelector(".scroll-content");e&&(e.scrollTop=0)},0,!1),e.__hash(n)},e}e.decorator("$location",["$delegate","$timeout",t])}]),d.service("$ionicListDelegate",i(["showReorder","showDelete","canSwipeItems","closeOptionButtons"])).controller("$ionicList",["$scope","$attrs","$parse","$ionicListDelegate",function(e,t,n,i){var o=!0,r=!1,a=!1,s=i._registerInstance(this,t.delegateHandle);e.$on("$destroy",s),this.showReorder=function(e){return arguments.length&&(r=!!e),r},this.showDelete=function(e){return arguments.length&&(a=!!e),a},this.canSwipeItems=function(e){return arguments.length&&(o=!!e),o},this.closeOptionButtons=function(){this.listView&&this.listView.clearDragEffects()}}]),d.controller("$ionicNavBar",["$scope","$element","$attrs","$ionicViewService","$animate","$compile","$ionicNavBarDelegate",function(e,t,n,i,o,r,a){t.parent().data("$ionNavBarController",this);var s=a._registerInstance(this,n.delegateHandle);e.$on("$destroy",s);var c=this;this.leftButtonsElement=g(t[0].querySelector(".buttons.left-buttons")),this.rightButtonsElement=g(t[0].querySelector(".buttons.right-buttons")),this.back=function(){var e=i.getBackView();return e&&e.go(),!1},this.align=function(e){this._headerBarView.align(e)},this.showBackButton=function(t){return arguments.length&&(e.backButtonShown=!!t),!(!e.hasBackButton||!e.backButtonShown)},this.showBar=function(t){return arguments.length&&(e.isInvisible=!t,e.$parent.$hasHeader=!!t),!e.isInvisible},this.setTitle=function(t){e.title!==t&&(e.oldTitle=e.title,e.title=t||"")},this.changeTitle=function(t,n){return e.title===t?!1:(this.setTitle(t),e.isReverse="back"==n,e.shouldAnimate=!!n,e.shouldAnimate?this._animateTitles():this._headerBarView.align(),!0)},this.getTitle=function(){return e.title||""},this.getPreviousTitle=function(){return e.oldTitle||""},this._animateTitles=function(){var n,i,a;a=t[0].querySelectorAll(".title"),a.length&&(n=r('<h1 class="title" ng-bind-html="oldTitle"></h1>')(e),g(a[0]).replaceWith(n)),i=r('<h1 class="title invisible" ng-bind-html="title"></h1>')(e),ionic.requestAnimationFrame(function(){n&&o.leave(g(n));var r=n&&g(n)||null;o.enter(i,t,r,function(){c._headerBarView.align()}),f(a,function(e){e&&e.parentNode&&g(e).remove()}),e.$digest(),ionic.requestAnimationFrame(function(){i[0].classList.remove("invisible")})})}}]),d.factory("$$scrollValueCache",function(){return{}}).controller("$ionicScroll",["$scope","scrollViewOptions","$timeout","$window","$$scrollValueCache","$location","$rootScope","$document","$ionicScrollDelegate",function(e,t,n,i,o,r,a,s,c){var l=this;this._scrollViewOptions=t;var u=this.element=t.el,d=this.$element=g(u),h=this.scrollView=new ionic.views.Scroll(t);(d.parent().length?d.parent():d).data("$$ionicScrollController",this);var f=c._registerInstance(this,t.delegateHandle);angular.isDefined(t.bouncing)||ionic.Platform.ready(function(){h.options.bouncing=!0,ionic.Platform.isAndroid()&&(h.options.bouncing=!1,h.options.deceleration=.95)});var p=angular.bind(h,h.resize);ionic.on("resize",p,i);var v=angular.noop;e.$on("$destroy",function(){f(),h.__removeEventHandlers(),ionic.off("resize",p,i),i.removeEventListener("resize",p),v(),l._rememberScrollId&&(o[l._rememberScrollId]=h.getValues())}),d.on("scroll",function(t){var n=(t.originalEvent||t).detail||{};e.$onScroll&&e.$onScroll({event:t,scrollTop:n.scrollTop||0,scrollLeft:n.scrollLeft||0})}),e.$on("$viewContentLoaded",function(t,i){if(!t.defaultPrevented){t.preventDefault();var o=i&&i.viewId||e.$historyId;o&&n(function(){l.rememberScrollPosition(o),l.scrollToRememberedPosition(),v=a.$on("$viewHistory.viewBack",function(e,t){o===t&&l.forgetScrollPosition()})},0,!1)}}),n(function(){h.run()}),this._rememberScrollId=null,this.getScrollView=function(){return this.scrollView},this.getScrollPosition=function(){return this.scrollView.getValues()},this.resize=function(){return n(p)},this.scrollTop=function(e){this.resize().then(function(){h.scrollTo(0,0,!!e)})},this.scrollBottom=function(e){this.resize().then(function(){var t=h.getScrollMax();h.scrollTo(t.left,t.top,!!e)})},this.scrollTo=function(e,t,n){this.resize().then(function(){h.scrollTo(e,t,!!n)})},this.scrollBy=function(e,t,n){this.resize().then(function(){h.scrollBy(e,t,!!n)})},this.anchorScroll=function(e){this.resize().then(function(){var t=r.hash(),n=t&&s[0].getElementById(t);if(!t||!n)return void h.scrollTo(0,0,!!e);var i=n,o=0,a=0,c=0;do null!==i&&(o+=i.offsetLeft),null!==i&&(a+=i.offsetTop),i=i.offsetParent,c++;while(i.attributes!=l.element.attributes&&i.offsetParent);h.scrollTo(o,a,!!e)})},this.rememberScrollPosition=function(e){if(!e)throw new Error("Must supply an id to remember the scroll by!");this._rememberScrollId=e},this.forgetScrollPosition=function(){delete o[this._rememberScrollId],this._rememberScrollId=null},this.scrollToRememberedPosition=function(e){var t=o[this._rememberScrollId];t&&this.resize().then(function(){h.scrollTo(+t.left,+t.top,e)})},this._setRefresher=function(e,t){var n=this.refresher=t,i=l.refresher.clientHeight||0;h.activatePullToRefresh(i,function(){n.classList.add("active"),e.$onPulling()},function(){n.classList.remove("refreshing"),n.classList.remove("active")},function(){n.classList.add("refreshing"),e.$onRefresh()})}}]),d.controller("$ionicSideMenus",["$scope","$attrs","$ionicSideMenuDelegate","$ionicPlatform",function(e,t,n,i){var o=this;h(this,ionic.controllers.SideMenuController.prototype),this.$scope=e,ionic.controllers.SideMenuController.call(this,{left:{width:275},right:{width:275}}),this.canDragContent=function(t){return arguments.length&&(e.dragContent=!!t),e.dragContent},this.edgeThreshold=25,this.edgeThresholdEnabled=!1,this.edgeDragThreshold=function(e){return arguments.length&&(angular.isNumber(e)&&e>0?(this.edgeThreshold=e,this.edgeThresholdEnabled=!0):this.edgeThresholdEnabled=!!e),this.edgeThresholdEnabled},this.isDraggableTarget=function(t){var n=o.edgeThresholdEnabled&&!o.isOpen(),i=t.gesture.startEvent&&t.gesture.startEvent.center&&t.gesture.startEvent.center.pageX,r=!n||i<=o.edgeThreshold||i>=o.content.offsetWidth-o.edgeThreshold;return(e.dragContent||o.isOpen())&&r&&!t.gesture.srcEvent.defaultPrevented&&!t.target.tagName.match(/input|textarea|select|object|embed/i)&&!t.target.isContentEditable&&!(t.target.dataset?t.target.dataset.preventScroll:"true"==t.target.getAttribute("data-prevent-default"))},e.sideMenuContentTranslateX=0;var r=angular.noop,a=angular.bind(this,this.close);e.$watch(function(){return 0!==o.getOpenAmount()},function(e){r(),e&&(r=i.registerBackButtonAction(a,S))});var s=n._registerInstance(this,t.delegateHandle);e.$on("$destroy",function(){s(),r()})}]),d.controller("$ionicTab",["$scope","$ionicViewService","$attrs","$location","$state",function(e,t,n,i,o){this.$scope=e,this.hrefMatchesState=function(){return n.href&&0===i.path().indexOf(n.href.replace(/^#/,"").replace(/\/$/,""))},this.srefMatchesState=function(){return n.uiSref&&o.includes(n.uiSref.split("(")[0])},this.navNameMatchesState=function(){return this.navViewName&&t.isCurrentStateNavView(this.navViewName)},this.tabMatchesState=function(){return this.hrefMatchesState()||this.srefMatchesState()||this.navNameMatchesState()}}]),d.controller("$ionicTabs",["$scope","$ionicViewService","$element",function(e,t){var n=null,i=this;i.tabs=[],i.selectedIndex=function(){return i.tabs.indexOf(n)},i.selectedTab=function(){return n},i.add=function(e){t.registerHistory(e),i.tabs.push(e),1===i.tabs.length&&i.select(e)},i.remove=function(e){var t=i.tabs.indexOf(e);if(-1!==t){if(e.$tabSelected)if(i.deselect(e),1===i.tabs.length);else{var n=t===i.tabs.length-1?t-1:t+1;i.select(i.tabs[n])}i.tabs.splice(t,1)}},i.deselect=function(e){e.$tabSelected&&(n=null,e.$tabSelected=!1,(e.onDeselect||angular.noop)())},i.select=function(o,r){var a;if(angular.isNumber(o)?(a=o,o=i.tabs[a]):a=i.tabs.indexOf(o),!o||-1==a)throw new Error('Cannot select tab "'+a+'"!');if(n&&n.$historyId==o.$historyId)r&&t.goToHistoryRoot(o.$historyId);else if(f(i.tabs,function(e){i.deselect(e)}),n=o,o.$tabSelected=!0,(o.onSelect||angular.noop)(),r){var s={type:"tab",tabIndex:a,historyId:o.$historyId,navViewName:o.navViewName,hasNavView:!!o.navViewName,title:o.title,url:o.href,uiSref:o.uiSref};e.$emit("viewState.changeHistory",s)}}}]),d.directive("ionActionSheet",["$document",function(e){return{restrict:"E",scope:!0,replace:!0,link:function(t,n){var i=function(e){27==e.which&&(t.cancel(),t.$apply())},o=function(e){e.target==n[0]&&(t.cancel(),t.$apply())};t.$on("$destroy",function(){n.remove(),e.unbind("keyup",i)}),e.bind("keyup",i),n.bind("click",o)},template:'<div class="action-sheet-backdrop"><div class="action-sheet-wrapper"><div class="action-sheet"><div class="action-sheet-group"><div class="action-sheet-title" ng-if="titleText" ng-bind-html="titleText"></div><button class="button" ng-click="buttonClicked($index)" ng-repeat="button in buttons" ng-bind-html="button.text"></button></div><div class="action-sheet-group" ng-if="destructiveText"><button class="button destructive" ng-click="destructiveButtonClicked()" ng-bind-html="destructiveText"></button></div><div class="action-sheet-group" ng-if="cancelText"><button class="button" ng-click="cancel()" ng-bind-html="cancelText"></button></div></div></div></div>'}}]),d.directive("ionCheckbox",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<label class="item item-checkbox"><div class="checkbox checkbox-input-hidden disable-pointer-events"><input type="checkbox"><i class="checkbox-icon"></i></div><div class="item-content disable-pointer-events" ng-transclude></div></label>',compile:function(e,t){var n=e.find("input");f({name:t.name,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-checked":t.ngChecked,"ng-disabled":t.ngDisabled,"ng-true-value":t.ngTrueValue,"ng-false-value":t.ngFalseValue,"ng-change":t.ngChange},function(e,t){p(e)&&n.attr(t,e)})}}});var B="Cannot create a collection-repeat within a scrollView that is scrollable on both x and y axis.  Choose either x direction or y direction.",V="collection-repeat expected attribute collection-item-height to be a an expression that returns a number (in pixels) or percentage.",E="collection-repeat expected attribute collection-item-width to be a an expression that returns a number (in pixels) or percentage.",_="collection-repeat expected expression in form of '_item_ in _collection_[ track by _id_]' but got '%'";d.directive({ngSrc:o("ngSrc","src"),ngSrcset:o("ngSrcset","srcset"),ngHref:o("ngHref","href")}).directive("collectionRepeat",["$collectionRepeatManager","$collectionDataSource","$parse",function(e,t,n){return{priority:1e3,transclude:"element",terminal:!0,$$tlb:!0,require:"^$ionicScroll",controller:[function(){}],link:function(i,o,r,a,s){function c(e){u.resize(),y.setData(e),S.resize()}function l(){c(i.$eval(b))}var u=a.scrollView;if(u.options.scrollingX&&u.options.scrollingY)throw new Error(B);var d=!!u.options.scrollingY;if(d&&!r.collectionItemHeight)throw new Error(V);if(!d&&!r.collectionItemWidth)throw new Error(E);var h=n(r.collectionItemHeight||'"100%"'),f=n(r.collectionItemWidth||'"100%"'),p=function(e,t){var n=h(e,t);return v(n)&&n.indexOf("%")>-1?Math.floor(parseInt(n,10)/100*u.__clientHeight):n},g=function(e,t){var n=f(e,t);return v(n)&&n.indexOf("%")>-1?Math.floor(parseInt(n,10)/100*u.__clientWidth):n},m=r.collectionRepeat.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!m)throw new Error(_.replace("%",r.collectionRepeat));var $=m[1],b=m[2],w=m[3],y=new t({scope:i,transcludeFn:s,transcludeParent:o.parent(),keyExpr:$,listExpr:b,trackByExpr:w,heightGetter:p,widthGetter:g}),S=new e({dataSource:y,element:a.$element,scrollView:a.scrollView});i.$watchCollection(b,function(e){if(e&&!angular.isArray(e))throw new Error("collection-repeat expects an array to repeat over, but instead got '"+typeof e+"'.");c(e)}),ionic.on("resize",l,window),i.$on("$destroy",function(){S.destroy(),y.destroy(),ionic.off("resize",l,window)})}}}]),d.directive("ionContent",["$timeout","$controller","$ionicBind",function(e,t,n){return{restrict:"E",require:"^?ionNavView",scope:!0,priority:800,compile:function(e,i){function o(e,o,a){var s=e.$parent;e.$watch(function(){return(s.$hasHeader?" has-header":"")+(s.$hasSubheader?" has-subheader":"")+(s.$hasFooter?" has-footer":"")+(s.$hasSubfooter?" has-subfooter":"")+(s.$hasTabs?" has-tabs":"")+(s.$hasTabsTop?" has-tabs-top":"")},function(e,t){o.removeClass(t),o.addClass(e)}),e.$hasHeader=e.$hasSubheader=e.$hasFooter=e.$hasSubfooter=e.$hasTabs=e.$hasTabsTop=!1,n(e,a,{$onScroll:"&onScroll",$onScrollComplete:"&onScrollComplete",hasBouncing:"@",padding:"@",direction:"@",scrollbarX:"@",scrollbarY:"@",startX:"@",startY:"@",scrollEventInterval:"@"}),e.direction=e.direction||"y",angular.isDefined(a.padding)&&e.$watch(a.padding,function(e){(r||o).toggleClass("padding",!!e)}),"false"===a.scroll||("true"===i.overflowScroll?o.addClass("overflow-scroll"):t("$ionicScroll",{$scope:e,scrollViewOptions:{el:o[0],delegateHandle:i.delegateHandle,bouncing:e.$eval(e.hasBouncing),startX:e.$eval(e.startX)||0,startY:e.$eval(e.startY)||0,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,scrollEventInterval:parseInt(e.scrollEventInterval,10)||10,scrollingComplete:function(){e.$onScrollComplete({scrollTop:this.__scrollTop,scrollLeft:this.__scrollLeft})}}}))}var r;return e.addClass("scroll-content ionic-scroll"),"false"!=i.scroll?(r=g('<div class="scroll"></div>'),r.append(e.contents()),e.append(r)):e.addClass("scroll-content-false"),{pre:o}}}}]);var D="onHold onTap onTouch onRelease onDrag onDragUp onDragRight onDragDown onDragLeft onSwipe onSwipeUp onSwipeRight onSwipeDown onSwipeLeft".split(" ");D.forEach(function(e){d.directive(e,r(e))}),d.directive("ionNavBar",a()).directive("ionHeaderBar",a()).directive("ionHeaderBar",s(!0)).directive("ionFooterBar",s(!1)),d.directive("ionInfiniteScroll",["$timeout",function(e){function t(e,t,n){return n?t*(1-parseInt(e,10)/100):t-parseInt(e,10)}return{restrict:"E",require:["^$ionicScroll","ionInfiniteScroll"],template:'<div class="scroll-infinite"><div class="scroll-infinite-content"><i class="icon {{icon()}} icon-refreshing"></i></div></div>',scope:!0,controller:["$scope","$attrs",function(e,n){this.isLoading=!1,this.scrollView=null,this.getMaxScroll=function(){var e=(n.distance||"1%").trim(),i=-1!==e.indexOf("%"),o=this.scrollView.getScrollMax();return{left:this.scrollView.options.scrollingX?t(e,o.left,i):-1,top:this.scrollView.options.scrollingY?t(e,o.top,i):-1}}}],link:function(t,n,i,o){function r(){if(!s.isLoading){var e=c.getValues(),t=s.getMaxScroll();(-1!==t.left&&e.left>=t.left||-1!==t.top&&e.top>=t.top)&&l()}}var a=o[0],s=o[1],c=s.scrollView=a.scrollView;t.icon=function(){return angular.isDefined(i.icon)?i.icon:"ion-loading-d"};var l=function(){n[0].classList.add("active"),s.isLoading=!0,t.$parent&&t.$parent.$apply(i.onInfinite||"")},u=function(){n[0].classList.remove("active"),e(function(){c.resize()},0,!1),s.isLoading=!1};t.$on("scroll.infiniteScrollComplete",function(){u()}),t.$on("$destroy",function(){a.$element.off("scroll",d)});var d=ionic.animationFrameThrottle(r);setTimeout(d),a.$element.on("scroll",d)}}}]);var H='<a class="item-content" ng-href="{{$href()}}" target="{{$target()}}"></a>',P='<div class="item-content"></div>';d.directive("ionItem",["$animate","$compile",function(){return{restrict:"E",controller:["$scope","$element",function(e,t){this.$scope=e,this.$element=t}],scope:!0,compile:function(e,t){var n=angular.isDefined(t.href)||angular.isDefined(t.ngHref)||angular.isDefined(t.uiSref),i=n||/ion-(delete|option|reorder)-button/i.test(e.html());if(i){var o=g(n?H:P);o.append(e.contents()),e.append(o),e.addClass("item item-complex")}else e.addClass("item");return function(e,t,n){e.$href=function(){return n.href||n.ngHref},e.$target=function(){return n.target||"_self"}}}}}]);var A='<div class="item-left-edit item-delete enable-pointer-events"></div>';d.directive("ionDeleteButton",["$animate",function(){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(e,t){return t.$set("class",(t["class"]||"")+" button icon button-icon",!0),function(e,t,n,i){var o=i[0],r=i[1],a=g(A);a.append(t),o.$element.append(a).addClass("item-left-editable"),r&&r.showDelete()&&a.addClass("visible active")}}}}]),d.directive("itemFloatingLabel",function(){return{restrict:"C",link:function(e,t){var n=t[0],i=n.querySelector("input, textarea"),o=n.querySelector(".input-label");if(i&&o){var r=function(){i.value?o.classList.add("has-input"):o.classList.remove("has-input")};i.addEventListener("input",r);var a=angular.element(i).controller("ngModel");a&&(a.$render=function(){i.value=a.$viewValue||"",r()}),e.$on("$destroy",function(){i.removeEventListener("input",r)})}}}});var L='<div class="item-options invisible"></div>';d.directive("ionOptionButton",["$compile",function(){function e(e){e.stopPropagation()}return{restrict:"E",require:"^ionItem",priority:Number.MAX_VALUE,compile:function(t,n){return n.$set("class",(n["class"]||"")+" button",!0),function(t,n,i,o){o.optionsContainer||(o.optionsContainer=g(L),o.$element.append(o.optionsContainer)),o.optionsContainer.append(n),n.on("click",e)}}}}]);var N='<div data-prevent-scroll="true" class="item-right-edit item-reorder enable-pointer-events"></div>';d.directive("ionReorderButton",["$animate","$parse",function(e,t){return{restrict:"E",require:["^ionItem","^?ionList"],priority:Number.MAX_VALUE,compile:function(e,n){return n.$set("class",(n["class"]||"")+" button icon button-icon",!0),e[0].setAttribute("data-prevent-scroll",!0),function(e,n,i,o){var r=o[0],a=o[1],s=t(i.onReorder);e.$onReorder=function(t,n){s(e,{$fromIndex:t,$toIndex:n})};var c=g(N);c.append(n),r.$element.append(c).addClass("item-right-editable"),a&&a.showReorder()&&c.addClass("visible active")}}}}]),d.directive("keyboardAttach",function(){return function(e,t){function n(e){if(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen){var n=e.keyboardHeight||e.detail.keyboardHeight;t.css("bottom",n+"px"),o=t.controller("$ionicScroll"),o&&(o.scrollView.__container.style.bottom=n+c(t[0])+"px")}}function i(){(!ionic.Platform.isAndroid()||ionic.Platform.isFullScreen)&&(t.css("bottom",""),o&&(o.scrollView.__container.style.bottom=""))}ionic.on("native.keyboardshow",n,window),ionic.on("native.keyboardhide",i,window),ionic.on("native.showkeyboard",n,window),ionic.on("native.hidekeyboard",i,window);var o;e.$on("$destroy",function(){ionic.off("native.keyboardshow",n,window),ionic.off("native.keyboardhide",i,window),ionic.off("native.showkeyboard",n,window),ionic.off("native.hidekeyboard",i,window)})}}),d.directive("ionList",["$animate","$timeout",function(e,t){return{restrict:"E",require:["ionList","^?$ionicScroll"],controller:"$ionicList",compile:function(e,n){var i=g('<div class="list">').append(e.contents());return e.append(i),function(e,i,o,r){function a(){function o(e,t){t()&&e.addClass("visible")||e.removeClass("active"),ionic.requestAnimationFrame(function(){t()&&e.addClass("active")||e.removeClass("invisible")})}s.listView=new ionic.views.ListView({el:i[0],listEl:i.children()[0],scrollEl:c&&c.element,scrollView:c&&c.scrollView,onReorder:function(e,n,i){var o=g(e).scope();o&&o.$onReorder&&t(function(){o.$onReorder(n,i)})},canSwipe:function(){return s.canSwipeItems()}});p(n.canSwipe)&&e.$watch("!!("+n.canSwipe+")",function(e){s.canSwipeItems(e)}),p(n.showDelete)&&e.$watch("!!("+n.showDelete+")",function(e){s.showDelete(e)}),p(n.showReorder)&&e.$watch("!!("+n.showReorder+")",function(e){s.showReorder(e)}),e.$watch(function(){return s.showDelete()},function(e,t){if(e||t){e&&s.closeOptionButtons(),s.canSwipeItems(!e),i.children().toggleClass("list-left-editing",e),i.toggleClass("disable-pointer-events",e);var n=g(i[0].getElementsByClassName("item-delete"));o(n,s.showDelete)}}),e.$watch(function(){return s.showReorder()},function(e,t){if(e||t){e&&s.closeOptionButtons(),s.canSwipeItems(!e),i.children().toggleClass("list-right-editing",e),i.toggleClass("disable-pointer-events",e);var n=g(i[0].getElementsByClassName("item-reorder"));o(n,s.showReorder)}})}var s=r[0],c=r[1];t(a)}}}}]),d.directive("menuClose",["$ionicViewService",function(){return{restrict:"AC",require:"^ionSideMenus",link:function(e,t,n,i){t.bind("click",function(){i.close()})}}}]),d.directive("menuToggle",["$ionicViewService",function(){return{restrict:"AC",require:"^ionSideMenus",link:function(e,t,n,i){var o=n.menuToggle||"left";t.bind("click",function(){"left"===o?i.toggleLeft():"right"===o&&i.toggleRight()})}}}]),d.directive("ionModal",[function(){return{restrict:"E",transclude:!0,replace:!0,controller:[function(){}],template:'<div class="modal-backdrop"><div class="modal-wrapper" ng-transclude></div></div>'}}]),d.directive("ionModalView",function(){return{restrict:"E",compile:function(e){e.addClass("modal")}}}),d.directive("ionNavBackButton",["$animate","$rootScope","$sanitize","$ionicNavBarConfig","$ionicNgClick",function(e,t,n,i,o){var r=!1;return t.$on("$viewHistory.historyChange",function(e,t){r=!!t.showBack}),{restrict:"E",require:"^ionNavBar",compile:function(t){t.addClass("button back-button ng-hide");var a=!!(t.html()||"").match(/class=.*?ion-/);return function(t,s,c,l){a||-1!==s[0].className.indexOf("ion-")||s.addClass(i.backButtonIcon),p(c.ngClick)||o(t,s,l.back),t.$watch(function(){return p(c.fromTitle)&&(s[0].innerHTML='<span class="back-button-title">'+n(t.oldTitle)+"</span>"),!(!r||!t.backButtonShown)},ionic.animationFrameThrottle(function(t){t?e.removeClass(s,"ng-hide"):e.addClass(s,"ng-hide")}))}}}}]),d.constant("$ionicNavBarConfig",{transition:"nav-title-slide-ios7",alignTitle:"center",backButtonIcon:"ion-ios7-arrow-back"}),d.directive("ionNavBar",["$ionicViewService","$rootScope","$animate","$compile","$ionicNavBarConfig",function(e,t,n,i,o){return{restrict:"E",controller:"$ionicNavBar",scope:!0,compile:function(e,t){function n(e,t,n,i){i._headerBarView=new ionic.views.HeaderBar({el:t[0],alignTitle:n.alignTitle||o.alignTitle||"center"}),e.backButtonShown=!1,e.shouldAnimate=!0,e.isReverse=!1,e.isInvisible=!0,e.$on("$destroy",function(){e.$parent.$hasHeader=!1}),e.$watch(function(){return(e.isReverse?" reverse":"")+(e.isInvisible?" invisible":"")+(e.shouldAnimate?"":" no-animation")},function(e,n){t.removeClass(n),t.addClass(e)})}return e.addClass("bar bar-header nav-bar").append('<div class="buttons left-buttons"> </div><h1 ng-bind-html="title" class="title"></h1><div class="buttons right-buttons"> </div>'),e.addClass(p(t.animation)?t.animation:o.transition),{pre:n}}}}]),d.directive("ionNavButtons",["$compile","$animate",function(e,t){return{require:"^ionNavBar",restrict:"E",compile:function(n){var i=n.contents().remove();return function(n,o,r,a){var s="right"===r.side?a.rightButtonsElement:a.leftButtonsElement,c=g("<span>").append(i);o.append(c),e(c)(n),ionic.requestAnimationFrame(function(){n.$$destroyed||t.enter(c,s)}),n.$on("$destroy",function(){t.leave(c)}),o.css("display","none")}}}}]),d.directive("navClear",["$ionicViewService","$state","$location","$window","$rootScope",function(e,t,n,i,o){return o.$on("$stateChangeError",function(){e.nextViewOptions(null)}),{priority:100,restrict:"AC",compile:function(){function t(t,n){function o(){r=t.$on("$stateChangeStart",function(){e.nextViewOptions({disableAnimate:!0,disableBack:!0}),r()}),i.setTimeout(r,300)}var r;n.on("click",o)}return{pre:t}}}}]),d.constant("$ionicNavViewConfig",{transition:"slide-left-right-ios7"}),d.directive("ionNavView",["$ionicViewService","$state","$compile","$controller","$animate",function(e,t,n,i,o){var r=!1,a={restrict:"E",terminal:!0,priority:2e3,transclude:!0,controller:function(){},compile:function(s,c,l){return function(s,c,u){function d(r){o.enabled()===!1&&(r=!1);var a=t.$current&&t.$current.locals[p];if(a!==f){var l=e.getRenderer(c,u,s);if(h&&(h.$destroy(),h=null),!a)return f=null,b.state=null,c.append(m);var d=g("<div></div>").html(a.$template).contents(),$=l().register(d);l(r).leave(),f=a,b.state=a.$$state,l(r).enter(d);var w=n(d);if(h=s.$new(),h.$navDirection=$.navDirection,a.$$controller){a.$scope=h;var y=i(a.$$controller,a);c.children().data("$ngControllerController",y)}w(h);var S=e._getViewById($.viewId)||{};h.$broadcast("$viewContentLoaded",S),v&&h.$eval(v),d=null}}var h,f,p=u[a.name]||u.name||"",v=u.onload||"",m=l(s);c.append(m);var $=c.parent().inheritedData("$uiView");p.indexOf("@")<0&&(p=p+"@"+($&&$.state?$.state.name:""));var b={name:p,state:null};c.data("$uiView",b);var w=function(){if(!r){r=!0;try{d(!0)}catch(e){throw r=!1,e}r=!1}};s.$on("$stateChangeSuccess",w),d(!1)}}};return a}]),d.config(["$provide",function(e){e.decorator("ngClickDirective",["$delegate",function(e){return e.shift(),e}])}]).factory("$ionicNgClick",["$parse",function(e){return function(t,n,i){var o=angular.isFunction(i)?i:e(i);n.on("click",function(e){t.$apply(function(){o(t,{$event:e})})}),n.onclick=function(){}}}]).directive("ngClick",["$ionicNgClick",function(e){return function(t,n,i){e(t,n,i.ngClick)}}]).directive("ionStopEvent",function(){return{restrict:"A",link:function(e,t,n){t.bind(n.ionStopEvent,l)}}}),d.directive("ionPane",function(){return{restrict:"E",link:function(e,t){t.addClass("pane")}}}),d.directive("ionRadio",function(){return{restrict:"E",replace:!0,require:"?ngModel",scope:{ngModel:"=?",ngValue:"=?",ngDisabled:"=?",ngChange:"&",icon:"@",name:"@"},transclude:!0,template:'<label class="item item-radio"><input type="radio" name="radio-group" ng-model="ngModel" ng-value="getValue()" ng-change="ngChange()" ng-disabled="ngDisabled"><div class="item-content disable-pointer-events" ng-transclude></div><i class="radio-icon disable-pointer-events icon ion-checkmark"></i></label>',compile:function(e,t){return t.name&&e.children().eq(0).attr("name",t.name),t.icon&&e.children().eq(2).removeClass("ion-checkmark").addClass(t.icon),function(e,t,n){e.getValue=function(){return e.ngValue||n.value}}}}}),d.directive("ionRefresher",["$ionicBind",function(e){return{restrict:"E",replace:!0,require:"^$ionicScroll",template:'<div class="scroll-refresher"><div class="ionic-refresher-content" ng-class="{\'ionic-refresher-with-text\': pullingText || refreshingText}"><div class="icon-pulling"><i class="icon {{pullingIcon}}"></i></div><div class="text-pulling" ng-bind-html="pullingText"></div><i class="icon {{refreshingIcon}} icon-refreshing"></i><div class="text-refreshing" ng-bind-html="refreshingText"></div></div></div>',compile:function(t,n){return angular.isUndefined(n.pullingIcon)&&n.$set("pullingIcon","ion-arrow-down-c"),angular.isUndefined(n.refreshingIcon)&&n.$set("refreshingIcon","ion-loading-d"),function(t,n,i,o){e(t,i,{pullingIcon:"@",pullingText:"@",refreshingIcon:"@",refreshingText:"@",$onRefresh:"&onRefresh",$onPulling:"&onPulling"}),o._setRefresher(t,n[0]),t.$on("scroll.refreshComplete",function(){t.$evalAsync(function(){n[0].classList.remove("active"),o.scrollView.finishPullToRefresh()})})}}}}]),d.directive("ionScroll",["$timeout","$controller","$ionicBind",function(e,t,n){return{restrict:"E",scope:!0,controller:function(){},compile:function(e){function i(e,i,r){var a,s;n(e,r,{direction:"@",paging:"@",$onScroll:"&onScroll",scroll:"@",scrollbarX:"@",scrollbarY:"@",zooming:"@",minZoom:"@",maxZoom:"@"}),e.direction=e.direction||"y",angular.isDefined(r.padding)&&e.$watch(r.padding,function(e){o.toggleClass("padding",!!e)}),e.$eval(e.paging)===!0&&o.addClass("scroll-paging"),e.direction||(e.direction="y");var c=e.$eval(e.paging)===!0,l={el:i[0],delegateHandle:r.delegateHandle,bouncing:e.$eval(r.hasBouncing),paging:c,scrollbarX:e.$eval(e.scrollbarX)!==!1,scrollbarY:e.$eval(e.scrollbarY)!==!1,scrollingX:e.direction.indexOf("x")>=0,scrollingY:e.direction.indexOf("y")>=0,zooming:e.$eval(e.zooming)===!0,maxZoom:e.$eval(e.maxZoom)||3,minZoom:e.$eval(e.minZoom)||.5};c&&(l.speedMultiplier=.8,l.bouncing=!1),s=t("$ionicScroll",{$scope:e,scrollViewOptions:l}),a=e.$parent.scrollView=s.scrollView}e.addClass("scroll-view ionic-scroll");var o=g('<div class="scroll"></div>');return o.append(e.contents()),e.append(o),{pre:i}}}}]),d.directive("ionSideMenu",function(){return{restrict:"E",require:"^ionSideMenus",scope:!0,compile:function(e,t){return angular.isUndefined(t.isEnabled)&&t.$set("isEnabled","true"),angular.isUndefined(t.width)&&t.$set("width","275"),e.addClass("menu menu-"+t.side),function(e,t,n,i){e.side=n.side||"left";var o=i[e.side]=new ionic.views.SideMenu({width:275,el:t[0],isEnabled:!0});e.$watch(n.width,function(e){var t=+e;t&&t==e&&o.setWidth(+e)}),e.$watch(n.isEnabled,function(e){o.setIsEnabled(!!e)})}}}}),d.directive("ionSideMenuContent",["$timeout","$ionicGesture",function(e,t){return{restrict:"EA",require:"^ionSideMenus",scope:!0,compile:function(n,i){function o(o,r,a,s){function c(e){0!==s.getOpenAmount()&&(s.close(),e.gesture.srcEvent.preventDefault())}r.addClass("menu-content pane"),p(i.dragContent)?o.$watch(i.dragContent,function(e){s.canDragContent(e)}):s.canDragContent(!0),p(i.edgeDragThreshold)&&o.$watch(i.edgeDragThreshold,function(e){s.edgeDragThreshold(e)});var l=!1,u=!1;ionic.on("tap",c,r[0]);var d=function(e){!l&&s.isDraggableTarget(e)&&(u=!0,s._handleDrag(e),e.gesture.srcEvent.preventDefault())},h=function(e){u&&e.gesture.srcEvent.preventDefault()},f=t.on("dragright",d,r),v=t.on("dragleft",d,r),g=t.on("dragup",h,r),m=t.on("dragdown",h,r),$=function(e){u=!1,l||s._endDrag(e),l=!1},b=t.on("release",$,r);s.setContent({element:n[0],onDrag:function(){},endDrag:function(){},getTranslateX:function(){return o.sideMenuContentTranslateX||0},setTranslateX:ionic.animationFrameThrottle(function(t){r[0].style[ionic.CSS.TRANSFORM]="translate3d("+t+"px, 0, 0)",e(function(){o.sideMenuContentTranslateX=t})}),enableAnimation:function(){o.animationEnabled=!0,r[0].classList.add("menu-animated")},disableAnimation:function(){o.animationEnabled=!1,r[0].classList.remove("menu-animated")}}),o.$on("$destroy",function(){t.off(v,"dragleft",d),t.off(f,"dragright",d),t.off(g,"dragup",d),t.off(m,"dragdown",d),t.off(b,"release",$),ionic.off("tap",c,r[0])})}return{pre:o}}}}]),d.directive("ionSideMenus",[function(){return{restrict:"ECA",controller:"$ionicSideMenus",compile:function(e,t){t.$set("class",(t["class"]||"")+" view")}}}]),d.directive("ionSlideBox",["$timeout","$compile","$ionicSlideBoxDelegate",function(e,t,n){return{restrict:"E",replace:!0,transclude:!0,scope:{autoPlay:"=",doesContinue:"@",slideInterval:"@",showPager:"@",pagerClick:"&",disableScroll:"@",onSlideChanged:"&",activeSlide:"=?"},controller:["$scope","$element","$attrs",function(t,i,o){var r=t.$eval(t.doesContinue)===!0,a=p(o.autoPlay)?!!t.autoPlay:!1,s=a?t.$eval(t.slideInterval)||4e3:0,c=new ionic.views.Slider({el:i[0],auto:s,continuous:r,startSlide:t.activeSlide,slidesChanged:function(){t.currentSlide=c.currentIndex(),e(function(){})},callback:function(n){t.currentSlide=n,t.onSlideChanged({index:t.currentSlide,$index:t.currentSlide}),t.$parent.$broadcast("slideBox.slideChanged",n),t.activeSlide=n,e(function(){})}});c.enableSlide(t.$eval(o.disableScroll)!==!0),t.$watch("activeSlide",function(e){angular.isDefined(e)&&c.slide(e)
}),t.$on("slideBox.nextSlide",function(){c.next()}),t.$on("slideBox.prevSlide",function(){c.prev()}),t.$on("slideBox.setSlide",function(e,t){c.slide(t)}),this.__slider=c;var l=n._registerInstance(c,o.delegateHandle);t.$on("$destroy",l),this.slidesCount=function(){return c.slidesCount()},this.onPagerClick=function(e){t.pagerClick({index:e})},e(function(){c.load()})}],template:'<div class="slider"><div class="slider-slides" ng-transclude></div></div>',link:function(e,n){if(e.$eval(e.showPager)!==!1){var i=e.$new(),o=g("<ion-pager></ion-pager>");n.append(o),t(o)(i)}}}}]).directive("ionSlide",function(){return{restrict:"E",require:"^ionSlideBox",compile:function(e){return e.addClass("slider-slide"),function(){}}}}).directive("ionPager",function(){return{restrict:"E",replace:!0,require:"^ionSlideBox",template:'<div class="slider-pager"><span class="slider-pager-page" ng-repeat="slide in numSlides() track by $index" ng-class="{active: $index == currentSlide}" ng-click="pagerClick($index)"><i class="icon ion-record"></i></span></div>',link:function(e,t,n,i){var o=function(e){for(var n=t[0].children,i=n.length,o=0;i>o;o++)o==e?n[o].classList.add("active"):n[o].classList.remove("active")};e.pagerClick=function(e){i.onPagerClick(e)},e.numSlides=function(){return new Array(i.slidesCount())},e.$watch("currentSlide",function(e){o(e)})}}}),d.constant("$ionicTabConfig",{type:""}),d.directive("ionTab",["$rootScope","$animate","$ionicBind","$compile",function(e,t,n,i){function o(e,t){return angular.isDefined(t)?" "+e+'="'+t+'"':""}return{restrict:"E",require:["^ionTabs","ionTab"],replace:!0,controller:"$ionicTab",scope:!0,compile:function(e,r){var a="<ion-tab-nav"+o("ng-click",r.ngClick)+o("title",r.title)+o("icon",r.icon)+o("icon-on",r.iconOn)+o("icon-off",r.iconOff)+o("badge",r.badge)+o("badge-style",r.badgeStyle)+o("hidden",r.hidden)+o("class",r["class"])+"></ion-tab-nav>",s=g('<div class="pane">').append(e.contents().remove());return function(e,o,r,c){function l(){f.tabMatchesState()&&h.select(e)}var u,d,h=c[0],f=c[1],p=s[0].querySelector("ion-nav-view")||s[0].querySelector("data-ion-nav-view"),v=p&&p.getAttribute("name");n(e,r,{animate:"=",onSelect:"&",onDeselect:"&",title:"@",uiSref:"@",href:"@"}),h.add(e),e.$on("$destroy",function(){h.remove(e),m.isolateScope().$destroy(),m.remove()}),o[0].removeAttribute("title"),v&&(f.navViewName=v),e.$on("$stateChangeSuccess",l),l();var m=g(a);m.data("$ionTabsController",h),m.data("$ionTabController",f),h.$tabsElement.append(i(m)(e)),e.$watch("$tabSelected",function(n){u&&u.$destroy(),u=null,d&&t.leave(d),d=null,n&&(u=e.$new(),d=s.clone(),t.enter(d,h.$element),i(d)(u))})}}}}]),d.directive("ionTabNav",[function(){return{restrict:"E",replace:!0,require:["^ionTabs","^ionTab"],template:'<a ng-class="{\'tab-item-active\': isTabActive(), \'has-badge\':badge, \'tab-hidden\':isHidden()}"  class="tab-item"><span class="badge {{badgeStyle}}" ng-if="badge">{{badge}}</span><i class="icon {{getIconOn()}}" ng-if="getIconOn() && isTabActive()"></i><i class="icon {{getIconOff()}}" ng-if="getIconOff() && !isTabActive()"></i><span class="tab-title" ng-bind-html="title"></span></a>',scope:{title:"@",icon:"@",iconOn:"@",iconOff:"@",badge:"=",hidden:"@",badgeStyle:"@","class":"@"},compile:function(){return function(e,t,n,i){var o=i[0],r=i[1];t[0].removeAttribute("title"),e.selectTab=function(e){e.preventDefault(),o.select(r.$scope,!0)},n.ngClick||t.on("click",function(t){e.$apply(function(){e.selectTab(t)})}),e.isHidden=function(){return"true"===n.hidden||n.hidden===!0?!0:!1},e.getIconOn=function(){return e.iconOn||e.icon},e.getIconOff=function(){return e.iconOff||e.icon},e.isTabActive=function(){return o.selectedTab()===r.$scope}}}}}]),d.constant("$ionicTabsConfig",{position:"",type:""}),d.directive("ionTabs",["$ionicViewService","$ionicTabsDelegate","$ionicTabsConfig",function(e,t,n){return{restrict:"E",scope:!0,controller:"$ionicTabs",compile:function(e){function i(e,n,i,o){var r=t._registerInstance(o,i.delegateHandle);e.$on("$destroy",r),o.$scope=e,o.$element=n,o.$tabsElement=g(n[0].querySelector(".tabs"));var a=n[0];e.$watch(function(){return a.className},function(t){var n=-1!==t.indexOf("tabs-top"),i=-1!==t.indexOf("tabs-item-hide");e.$hasTabs=!n&&!i,e.$hasTabsTop=n&&!i}),e.$on("$destroy",function(){delete e.$hasTabs,delete e.$hasTabsTop})}e.addClass("view");var o=g('<div class="tabs"></div>');return o.append(e.contents()),e.append(o),e.addClass(n.position),e.addClass(n.type),{pre:i}}}}]),d.directive("ionToggle",["$ionicGesture","$timeout",function(){return{restrict:"E",replace:!0,require:"?ngModel",transclude:!0,template:'<div class="item item-toggle"><div ng-transclude></div><label class="toggle"><input type="checkbox"><div class="track"><div class="handle"></div></div></label></div>',compile:function(e,t){var n=e.find("input");return f({name:t.name,"ng-value":t.ngValue,"ng-model":t.ngModel,"ng-checked":t.ngChecked,"ng-disabled":t.ngDisabled,"ng-true-value":t.ngTrueValue,"ng-false-value":t.ngFalseValue,"ng-change":t.ngChange},function(e,t){p(e)&&n.attr(t,e)}),function(e,t){var n,i,o,r;n=t[0].getElementsByTagName("label")[0],i=n.children[0],o=n.children[1],r=o.children[0];var a=g(i).controller("ngModel");e.toggle=new ionic.views.Toggle({el:n,track:o,checkbox:i,handle:r,onChange:function(){a.$setViewValue(i.checked?!0:!1),e.$apply()}}),e.$on("$destroy",function(){e.toggle.destroy()})}}}}]),d.directive("ionView",["$ionicViewService","$rootScope","$animate",function(){return{restrict:"EA",priority:1e3,require:["^?ionNavBar","^?ionModal"],compile:function(e){return e.addClass("pane"),e[0].removeAttribute("title"),function(e,t,n,i){var o=i[0],r=i[1];if(o&&!r){if(angular.isDefined(n.title)){var a=n.title;o.changeTitle(a,e.$navDirection),n.$observe("title",function(e){o.setTitle(e)})}var s=angular.isDefined(n.hideBackButton)?n.hideBackButton:"false";e.$watch(s,function(e){o.showBackButton(!e)});var c=angular.isDefined(n.hideNavBar)?n.hideNavBar:"false";e.$watch(c,function(e){o.showBar(!e)})}}}}}])}();
/*
 AngularJS v1.2.21
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.2.21
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*! angular-payments 31-01-2014 */
angular.module("angularPayments",[]),angular.module("angularPayments").factory("Common",[function(){var a={};return a.parseExpiry=function(a){var b,c,d,e;return a=a||"",a=a.replace(/\s/g,""),e=a.split("/",2),b=e[0],d=e[1],2===(null!=d?d.length:void 0)&&/^\d+$/.test(d)&&(c=(new Date).getFullYear(),c=c.toString().slice(0,2),d=c+d),b=parseInt(b,10),d=parseInt(d,10),{month:b,year:d}},a}]),angular.module("angularPayments").factory("Cards",[function(){var a=/(\d{1,4})/g,b=/(?:^|\s)(\d{4})$/,c=[{type:"maestro",pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,format:a,inputFormat:b,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"dinersclub",pattern:/^(36|38|30[0-5])/,format:a,inputFormat:b,length:[14],cvcLength:[3],luhn:!0},{type:"laser",pattern:/^(6706|6771|6709)/,format:a,inputFormat:b,length:[16,17,18,19],cvcLength:[3],luhn:!0},{type:"jcb",pattern:/^35/,format:a,inputFormat:b,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",pattern:/^62/,format:a,inputFormat:b,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"discover",pattern:/^(6011|65|64[4-9]|622)/,format:a,inputFormat:b,length:[16],cvcLength:[3],luhn:!0},{type:"mastercard",pattern:/^5[1-5]/,format:a,inputFormat:b,length:[16],cvcLength:[3],luhn:!0},{type:"amex",pattern:/^3[47]/,format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,inputFormat:/^(\d{4}|\d{4}\s\d{6})$/,length:[15],cvcLength:[3,4],luhn:!0},{type:"visa",pattern:/^4/,format:a,inputFormat:b,length:[13,14,15,16],cvcLength:[3],luhn:!0}],d=function(a){var b,d,e;for(a=(a+"").replace(/\D/g,""),d=0,e=c.length;e>d;d++)if(b=c[d],b.pattern.test(a))return b},e=function(a){var b,d,e;for(d=0,e=c.length;e>d;d++)if(b=c[d],b.type===a)return b};return{fromNumber:function(a){return d(a)},fromType:function(a){return e(a)},defaultFormat:function(){return a},defaultInputFormat:function(){return b}}}]),angular.module("angularPayments").factory("_Format",["Cards","Common","$filter",function(a,b,c){var d={},e=function(a){var b;return null!=a.prop("selectionStart")&&a.prop("selectionStart")!==a.prop("selectionEnd")?!0:("undefined"!=typeof document&&null!==document?null!=(b=document.selection)?"function"==typeof b.createRange?b.createRange().text:void 0:void 0:void 0)?!0:!1},f=function(b){var c,d,e,f,g,h,i;if(e=String.fromCharCode(b.which),c=angular.element(b.currentTarget),i=c.val(),d=a.fromNumber(i+e),f=(i.replace(/\D/g,"")+e).length,h=16,d&&(h=d.length[d.length.length-1]),!(f>=h)){if(!/^\d+$/.test(e)&&!b.meta&&b.keyCode>=46)return void b.preventDefault();if(null==c.prop("selectionStart")||c.prop("selectionStart")===i.length)return g=a.defaultInputFormat(),d&&(g=d.inputFormat),g.test(i)?(b.preventDefault(),c.val(i+" "+e)):g.test(i+e)?(b.preventDefault(),c.val(i+e+" ")):void 0}},g=function(b){var c,d,f,g;c=angular.element(b.currentTarget),f=String.fromCharCode(b.which),/^\d+$/.test(f)&&(e(c)||(g=(c.val()+f).replace(/\D/g,""),d=a.fromNumber(g),d?g.length<=d.length[d.length.length-1]||b.preventDefault():g.length<=16||b.preventDefault()))},h=function(a){var b,c;return b=angular.element(a.currentTarget),c=b.val(),a.meta||8!==a.which||null!=b.prop("selectionStart")&&b.prop("selectionStart")!==c.length?void 0:/\d\s$/.test(c)&&!a.meta&&a.keyCode>=46?(a.preventDefault(),b.val(c.replace(/\d\s$/,""))):/\s\d?$/.test(c)?(a.preventDefault(),b.val(c.replace(/\s\d?$/,""))):void 0},i=function(b){var c,d,e,f;return(c=a.fromNumber(b))?(e=c.length[c.length.length-1],b=b.replace(/\D/g,""),b=b.slice(0,+e+1||9e9),c.format.global?null!=(f=b.match(c.format))?f.join(" "):void 0:(d=c.format.exec(b),null!=d&&d.shift(),null!=d?d.join(" "):void 0)):b},j=function(a){return setTimeout(function(){var b,c;return b=angular.element(a.target),c=b.val(),c=i(c),b.val(c)})},k=function(a){return null!=a?a.replace(/\s/g,""):a};d.card=function(a,b){a.bind("keypress",g),a.bind("keypress",f),a.bind("keydown",h),a.bind("paste",j),b.$parsers.push(k),b.$formatters.push(i)},_formatCVC=function(a){return $target=angular.element(a.currentTarget),digit=String.fromCharCode(a.which),!/^\d+$/.test(digit)&&!a.meta&&a.keyCode>=46?void a.preventDefault():(val=$target.val()+digit,val.length<=4?void 0:void a.preventDefault())},d.cvc=function(a){a.bind("keypress",_formatCVC)},_restrictExpiry=function(a){var b,c,d;return b=angular.element(a.currentTarget),c=String.fromCharCode(a.which),!/^\d+$/.test(c)&&!a.meta&&a.keyCode>=46?void a.preventDefault():e(b)?void 0:(d=b.val()+c,d=d.replace(/\D/g,""),d.length>6?void a.preventDefault():void 0)},_formatExpiry=function(a){var b,c,d;return c=String.fromCharCode(a.which),!/^\d+$/.test(c)&&!a.meta&&a.keyCode>=46?void a.preventDefault():(b=angular.element(a.currentTarget),d=b.val()+c,/^\d$/.test(d)&&"0"!==d&&"1"!==d?(a.preventDefault(),b.val("0"+d+" / ")):/^\d\d$/.test(d)?(a.preventDefault(),b.val(""+d+" / ")):void 0)},_formatForwardExpiry=function(a){var b,c,d;return c=String.fromCharCode(a.which),!/^\d+$/.test(c)&&!a.meta&&a.keyCode>=46?void 0:(b=angular.element(a.currentTarget),d=b.val(),/^\d\d$/.test(d)?b.val(""+d+" / "):void 0)},_formatForwardSlash=function(a){var b,c,d;return c=String.fromCharCode(a.which),"/"===c?(b=angular.element(a.currentTarget),d=b.val(),/^\d$/.test(d)&&"0"!==d?b.val("0"+d+" / "):void 0):void 0},_formatBackExpiry=function(a){var b,c;if(!a.meta&&(b=angular.element(a.currentTarget),c=b.val(),8===a.which&&(null==b.prop("selectionStart")||b.prop("selectionStart")===c.length)))return/\d(\s|\/)+$/.test(c)?(a.preventDefault(),b.val(c.replace(/\d(\s|\/)*$/,""))):/\s\/\s?\d?$/.test(c)?(a.preventDefault(),b.val(c.replace(/\s\/\s?\d?$/,""))):void 0};var l=function(a){if(null!=a){var d=b.parseExpiry(a),e=new Date(d.year,d.month-1);return c("date")(e,"MM/yyyy")}return null},m=function(a){if(null!=a){var d=b.parseExpiry(a),e=new Date(d.year,d.month-1);return c("date")(e,"MM / yyyy")}return null};return d.expiry=function(a,b){a.bind("keypress",_restrictExpiry),a.bind("keypress",_formatExpiry),a.bind("keypress",_formatForwardSlash),a.bind("keypress",_formatForwardExpiry),a.bind("keydown",_formatBackExpiry),b.$parsers.push(l),b.$formatters.push(m)},function(a,b,c){if(!d[a])throw types=Object.keys(d),errstr='Unknown type for formatting: "'+a+'". ',errstr+='Should be one of: "'+types.join('", "')+'"';return d[a](b,c)}}]).directive("paymentsFormat",["$window","_Format",function(a,b){return{restrict:"A",require:"ngModel",link:function(a,c,d,e){b(d.paymentsFormat,c,e)}}}]),angular.module("angularPayments").factory("_Validate",["Cards","Common","$parse",function(a,b,c){var d=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},e=function(a){var b,c,d,e,f,g;for(d=!0,e=0,c=(a+"").split("").reverse(),f=0,g=c.length;g>f;f++)b=c[f],b=parseInt(b,10),(d=!d)&&(b*=2),b>9&&(b-=9),e+=b;return e%10===0},f={};return f.cvc=function(b,e,f,g){var h,i;if(null==b||0==b.length)return!0;if(!/^\d+$/.test(b))return!1;var j;if(g.paymentsTypeModel){var k=c(g.paymentsTypeModel);j=k(f)}return j?(h=b.length,d.call(null!=(i=a.fromType(j))?i.cvcLength:void 0,h)>=0):b.length>=3&&b.length<=4},f.card=function(b,f,g,h){var i,j,k;h.paymentsTypeModel&&(k=c(h.paymentsTypeModel));var l=function(){k&&k.assign(g,null),f.$card=null};return null==b||0==b.length?(l(),!0):(b=(b+"").replace(/\s+|-/g,""),/^\d+$/.test(b)?(i=a.fromNumber(b))?(f.$card=angular.copy(i),k&&k.assign(g,i.type),j=b.length,ret=d.call(i.length,j)>=0&&(i.luhn===!1||e(b)),ret):(l(),!1):(l(),!1))},f.expiry=function(a){if(null==a||0==a.length)return!0;obj=b.parseExpiry(a),month=obj.month,year=obj.year;var c,d,e;return month&&year?/^\d+$/.test(month)?/^\d+$/.test(year)?parseInt(month,10)<=12?(2===year.length&&(e=(new Date).getFullYear(),e=e.toString().slice(0,2),year=e+year),d=new Date(year,month),c=new Date,d.setMonth(d.getMonth()-1),d.setMonth(d.getMonth()+1,1),d>c):!1:!1:!1:!1},function(a,b,c,d,e){if(!f[a])throw types=Object.keys(f),errstr='Unknown type for validation: "'+a+'". ',errstr+='Should be one of: "'+types.join('", "')+'"';return f[a](b,c,d,e)}}]).factory("_ValidateWatch",["_Validate",function(a){var b={};return b.cvc=function(b,c,d,e){e.paymentsTypeModel&&d.$watch(e.paymentsTypeModel,function(f,g){if(f!=g){var h=a(b,c.$modelValue,c,d,e);c.$setValidity(b,h)}})},function(a,c,d,e){return b[a]?b[a](a,c,d,e):void 0}}]).directive("paymentsValidate",["$window","_Validate","_ValidateWatch",function(a,b,c){return{restrict:"A",require:"ngModel",link:function(a,d,e,f){var g=e.paymentsValidate;c(g,f,a,e);var h=function(c){var d=b(g,c,f,a,e);return f.$setValidity(g,d),d?c:void 0};f.$formatters.push(h),f.$parsers.push(h)}}}]),angular.module("angularPayments").directive("stripeForm",["$window","$parse","Common",function(a,b,c){return _getDataToSend=function(a){var b=["number","expMonth","expYear","cvc","name","addressLine1","addressLine2","addressCity","addressState","addressZip","addressCountry"],c=function(a){return a.replace(/([A-Z])/g,function(a){return"_"+a.toLowerCase()})},d={};for(i in b)b.hasOwnProperty(i)&&(d[c(b[i])]=angular.copy(a[b[i]]));return d.number=(d.number||"").replace(/ /g,""),d},{restrict:"A",link:function(b,d,e){if(!a.Stripe)throw"stripeForm requires that you have stripe.js installed. Include https://js.stripe.com/v2/ into your html.";var f=angular.element(d);f.bind("submit",function(){expMonthUsed=b.expMonth?!0:!1,expYearUsed=b.expYear?!0:!1,expMonthUsed&&expYearUsed||(exp=c.parseExpiry(b.expiry),b.expMonth=exp.month,b.expYear=exp.year);var d=f.find("button");d.prop("disabled",!0),f.hasClass("ng-valid")?a.Stripe.createToken(_getDataToSend(b),function(){var a=arguments;b.$apply(function(){b[e.stripeForm].apply(b,a)}),d.prop("disabled",!1)}):(b.$apply(function(){b[e.stripeForm].apply(b,[400,{error:"Invalid form submitted."}])}),d.prop("disabled",!1)),b.expiryMonth=expMonthUsed?b.expMonth:null,b.expiryYear=expYearUsed?b.expMonth:null})}}}]);
(function(){"use strict";var a=angular.module("LocalStorageModule",[]);a.provider("localStorageService",function(){this.prefix="ls",this.storageType="localStorage",this.cookie={expiry:30,path:"/"},this.notify={setItem:!0,removeItem:!1},this.setPrefix=function(a){this.prefix=a},this.setStorageType=function(a){this.storageType=a},this.setStorageCookie=function(a,b){this.cookie={expiry:a,path:b}},this.setStorageCookieDomain=function(a){this.cookie.domain=a},this.setNotify=function(a,b){this.notify={setItem:a,removeItem:b}},this.$get=["$rootScope","$window","$document",function(a,b,c){var d,e=this,f=e.prefix,g=e.cookie,h=e.notify,i=e.storageType;c?c[0]&&(c=c[0]):c=document,"."!==f.substr(-1)&&(f=f?f+".":"");var j=function(a){return f+a},k=function(){try{var c=i in b&&null!==b[i],e=j("__"+Math.round(1e7*Math.random()));return c&&(d=b[i],d.setItem(e,""),d.removeItem(e)),c}catch(f){return i="cookie",a.$broadcast("LocalStorageModule.notification.error",f.message),!1}}(),l=function(b,c){if(!k||"cookie"===e.storageType)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),h.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:"cookie"}),r(b,c);"undefined"==typeof c&&(c=null);try{(angular.isObject(c)||angular.isArray(c))&&(c=angular.toJson(c)),d&&d.setItem(j(b),c),h.setItem&&a.$broadcast("LocalStorageModule.notification.setitem",{key:b,newvalue:c,storageType:e.storageType})}catch(f){return a.$broadcast("LocalStorageModule.notification.error",f.message),r(b,c)}return!0},m=function(b){if(!k||"cookie"===e.storageType)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),s(b);var c=d?d.getItem(j(b)):null;return c&&"null"!==c?"{"===c.charAt(0)||"["===c.charAt(0)?angular.fromJson(c):c:null},n=function(b){if(!k)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),h.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:b,storageType:"cookie"}),t(b);try{d.removeItem(j(b)),h.removeItem&&a.$broadcast("LocalStorageModule.notification.removeitem",{key:b,storageType:e.storageType})}catch(c){return a.$broadcast("LocalStorageModule.notification.error",c.message),t(b)}return!0},o=function(){if(!k)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),!1;var b=f.length,c=[];for(var e in d)if(e.substr(0,b)===f)try{c.push(e.substr(b))}catch(g){return a.$broadcast("LocalStorageModule.notification.error",g.Description),[]}return c},p=function(b){b=b||"";var c=f.slice(0,-1),e=new RegExp(c+"."+b);if(!k)return a.$broadcast("LocalStorageModule.notification.warning","LOCAL_STORAGE_NOT_SUPPORTED"),u();var g=f.length;for(var h in d)if(e.test(h))try{n(h.substr(g))}catch(i){return a.$broadcast("LocalStorageModule.notification.error",i.message),u()}return!0},q=function(){try{return navigator.cookieEnabled||"cookie"in c&&(c.cookie.length>0||(c.cookie="test").indexOf.call(c.cookie,"test")>-1)}catch(b){return a.$broadcast("LocalStorageModule.notification.error",b.message),!1}},r=function(b,d){if("undefined"==typeof d)return!1;if(!q())return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;try{var e="",f=new Date,h="";if(null===d?(f.setTime(f.getTime()+-864e5),e="; expires="+f.toGMTString(),d=""):0!==g.expiry&&(f.setTime(f.getTime()+24*g.expiry*60*60*1e3),e="; expires="+f.toGMTString()),b){var i="; path="+g.path;g.domain&&(h="; domain="+g.domain),c.cookie=j(b)+"="+encodeURIComponent(d)+e+i+h}}catch(k){return a.$broadcast("LocalStorageModule.notification.error",k.message),!1}return!0},s=function(b){if(!q())return a.$broadcast("LocalStorageModule.notification.error","COOKIES_NOT_SUPPORTED"),!1;for(var d=c.cookie&&c.cookie.split(";")||[],e=0;e<d.length;e++){for(var g=d[e];" "===g.charAt(0);)g=g.substring(1,g.length);if(0===g.indexOf(j(b)+"="))return decodeURIComponent(g.substring(f.length+b.length+1,g.length))}return null},t=function(a){r(a,null)},u=function(){for(var a=null,b=f.length,d=c.cookie.split(";"),e=0;e<d.length;e++){for(a=d[e];" "===a.charAt(0);)a=a.substring(1,a.length);var g=a.substring(b,a.indexOf("="));t(g)}},v=function(){return i},w=function(a,b,c){var d=m(b);null===d&&angular.isDefined(c)?d=c:angular.isObject(d)&&angular.isObject(c)&&(d=angular.extend(c,d)),a[b]=d,a.$watchCollection(b,function(a){l(b,a)})};return{isSupported:k,getStorageType:v,set:l,add:l,get:m,keys:o,remove:n,clearAll:p,bind:w,deriveKey:j,cookie:{set:r,add:r,get:s,remove:t,clearAll:u}}}]})}).call(this);
/*!
 * ngCordova
 * Copyright 2014 Drifty Co. http://drifty.com/
 * See LICENSE in this repository for license information
 */
(function(){

angular.module('ngCordova', [
  'ngCordova.plugins'
]);

angular.module('ngCordova.plugins.appAvailability', [])

.factory('$cordovaAppAvailability', ['$q', function ($q) {

  return {
    check: function(urlScheme) {
      var q = $q.defer();

      appAvailability.check(urlScheme, function (result) {
        q.resolve(result);
      }, function (err) {
        q.reject(err);
      });

      return q.promise;
    }
  }
}]);
angular.module('ngCordova.plugins.barcodeScanner', [])

.factory('$cordovaBarcodeScanner', ['$q', function ($q) {

  return {
    scan: function (options) {
      var q = $q.defer();

      cordova.plugins.barcodeScanner.scan(function (result) {
        q.resolve(result);
      }, function (err) {
        q.reject(err);
      });

      return q.promise;
    },

    encode: function (type, data) {
      var q = $q.defer();

      /* TODO needs work for type:
       make the default:  BarcodeScanner.Encode.TEXT_TYPE
       other options: .EMAIL_TYPE, .PHONE_TYPE, .SMS_TYPE

       docs: https://github.com/wildabeast/BarcodeScanner#encoding-a-barcode
       */

      cordova.plugins.barcodeScanner.encode(type, data, function (result) {
        q.resolve(result);
      }, function (err) {
        q.reject(err);
      });

      return q.promise;
    }
  }
}]);

angular.module('ngCordova.plugins.bluetoothSerial', [])

.factory('$cordovaBluetoothSerial', ['$q' , function ($q) {

  var promise_f = function() {
    var q = $q.defer();

    // callbacks
    var success =  function (success) {
      q.resolve(success);
    };
    var failure = function (failure) {
      q.reject(failure);
    };

    // get func and set args
    var f_name = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    args.push(success);
    args.push(failure);

    cordova.plugins.bluetoothSerial[f_name].apply(this, args);

    return q.promise;
  };

  return {
    connect:          promise_f('connect', macAddress),
    connectInsecure:  promise_f('connectInsecure', macAddress),
    disconnect:       promise_f('disconnect'),
    list:             promise_f('list'),
    isEnabled:        promise_f('isEnabled'),
    isConnected:      promise_f('isConnected'),
    available:        promise_f('available'),
    read:             promise_f('read'),
    readUntil:        promise_f('readUntil', delimiter),
    write:            promise_f('write', data),
    subscribe:        promise_f('subscribe', delimiter),
    unsubscribe:      promise_f('unsubscribe'),
    clear:            promise_f('clear'),
    readRSSI:         promise_f('readRSSI')
  };
}]);

angular.module('ngCordova.plugins.camera', [])

.factory('$cordovaCamera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      if(!navigator.camera) {
        q.resolve(null);
        return q.promise;
      }

      navigator.camera.getPicture(function(imageData) {
        q.resolve(imageData);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    },
    cleanup: function(options) {
      var q = $q.defer();

      navigator.camera.cleanup(function() {
        q.resolve(arguments);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    }

  }
}]);

angular.module('ngCordova.plugins.capture', [])

.factory('$cordovaCapture', ['$q', function($q) {

  return {
    captureAudio: function(options) {
      var q = $q.defer();

      if(!navigator.device.capture) {
        q.resolve(null);
        return q.promise;
      }

      navigator.device.capture.captureAudio(function(audioData) {
          q.resolve(audioData);
        }, function(err) {
          q.reject(err);
        }, options);

      return q.promise;
    },
    captureImage: function(options) {
      var q = $q.defer();

      if(!navigator.device.capture) {
        q.resolve(null);
        return q.promise;
      }

      navigator.device.capture.captureImage(function(imageData) {
          q.resolve(imageData);
        }, function(err) {
          q.reject(err);
        }, options);

      return q.promise;
    },
    captureVideo: function(options) {
      var q = $q.defer();

      if(!navigator.device.capture) {
        q.resolve(null);
        return q.promise;
      }

      navigator.device.capture.captureVideo(function(videoData) {
          q.resolve(videoData);
        }, function(err) {
          q.reject(err);
        }, options);

      return q.promise;
    }
  }
}]);

angular.module('ngCordova.plugins.contacts', [])

.factory('$cordovaContacts', ['$q', function ($q) {

  return {
    save: function (contact) {
      var q = $q.defer();
      var deviceContact = navigator.contacts.create(contact);

      deviceContact.save(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    remove: function (contact) {
      var q = $q.defer();
      var deviceContact = navigator.contacts.create(contact);

      deviceContact.remove(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    clone: function (contact) {
      var deviceContact = navigator.contacts.create(contact);
      return deviceContact.clone(contact)
    },

    find: function (options) {
      var q = $q.defer();
      var fields = options.fields || ['id', 'displayName'];
      delete options.fields;

      navigator.contacts.find(fields, function (results) {
          q.resolve(results);
        },
        function (err) {
          q.reject(err);
        },
        options);

      return q.promise;
    }

    /*
     getContact: function (contact) {
     var q = $q.defer();

     navigator.contacts.pickContact(function (contact) {

     })

     }
     */

    // TODO: method to set / get ContactAddress
    // TODO: method to set / get ContactError
    // TODO: method to set / get ContactField
    // TODO: method to set / get ContactName
    // TODO: method to set / get ContactOrganization

  }

}]);

angular.module('ngCordova.plugins.device', [])

.factory('$cordovaDevice', [function () {

  return {
    getDevice: function () {
      return device;
    },

    getCordova: function () {
      return device.cordova;
    },

    getModel: function () {
      return device.model;
    },

    // Waraning: device.name is deprecated as of version 2.3.0. Use device.model instead.
    getName: function () {
      return device.name;
    },

    getPlatform: function () {
      return device.platform;
    },

    getUUID: function () {
      return device.uuid;
    },

    getVersion: function () {
      return device.version;
    }
  }
}]);

angular.module('ngCordova.plugins.deviceMotion', [])

.factory('$cordovaDeviceMotion', ['$q', function($q) {

  return {
    getCurrentAcceleration: function() {
      var q = $q.defer();

      navigator.accelerometer.getCurrentAcceleration(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    },
    watchAcceleration: function(options) {
      var q = $q.defer();

      var watchId = navigator.accelerometer.watchAcceleration(function(result) {
        // Do any magic you need
        //q.resolve(watchID);
        q.notify(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return {
        watchId: watchId,
        promise: q.promise
      }
    },
    clearWatch: function(watchID) {
      return navigator.accelerometer.clearWatch(watchID);
    }
  }
}]);

angular.module('ngCordova.plugins.deviceOrientation', [])

.factory('$cordovaDeviceOrientation', ['$q', function($q) {

  return {
    getCurrentHeading: function() {
      var q = $q.defer();

      navigator.compass.getCurrentHeading(function(heading) {
        q.resolve(heading);
      }, function(err) {
        q.reject(err);
      });

      return q.promise;
    },
    watchHeading: function(options) {
      var q = $q.defer();

      var watchId = navigator.compass.watchHeading(function(result) {
        q.notify(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return {
        watchId: watchId,
        promise: q.promise
      }
    },
    clearWatch: function(watchID) {
      navigator.compass.clearWatch();
    }
  }
}]);

angular.module('ngCordova.plugins.dialogs', [])

.factory('$cordovaDialogs', [function() {

  return {
    alert: function(message, callback, title, buttonName) {
      return navigator.notification.alert.apply(navigator.notification, arguments);
    },

    confirm: function(message, callback, title, buttonName) {
      return navigator.notification.confirm.apply(navigator.notification, arguments);
    },

    prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
      return navigator.notification.prompt.apply(navigator.notification, arguments);
    },

    beep: function(times) {
      return navigator.notification.beep(times);
    }
  }
}]);

// TODO: add support for readFile -> readAsData
// TODO: add support for readFile -> readAsBinaryString
// TODO: add support for readFile -> readAsArrayBuffer
// TODO: add functionality to define storage size in the getFilesystem() -> requestFileSystem() method
// TODO: add documentation for FileError types
// TODO: add abort() option to downloadFile and uploadFile methods.
// TODO: add support for downloadFile and uploadFile options. (or detailed documentation) -> for fileKey, fileName, mimeType, headers
// TODO: add support for onprogress property


angular.module('ngCordova.plugins.file', [])

//Filesystem (checkDir, createDir, checkFile, creatFile, removeFile, writeFile, readFile)
  .factory('$cordovaFile', ['$q', function ($q) {

    return {
      checkDir: function (dir) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getDirectory(dir, {create: false},
              //Dir exists
              function () {
                q.resolve();
              },
              //Dir doesn't exist
              function () {
                q.reject();
              }
            );
          }
        );

        return q.promise;
      },

      createDir: function (dir, replaceBOOL) {
        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getDirectory(dir, {create: true, exclusive: replaceBOOL});
          }
        );
      },

      checkFile: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function checkFile(dir, file)
        if (arguments.length == 2) {
            filePath = '/' + filePath + '/' + arguments[1];
        }

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile(filePath, {create: false},
              // File exists
              function () {
                q.resolve();
              },
              // File doesn't exist
              function () {
                q.reject();
              }
            );
          }
        );

        return q.promise;
      },

      createFile: function (filePath, replaceBOOL) {
        // Backward compatibility for previous function createFile(dir, file, replaceBOOL)
        if (arguments.length == 3) {
            filePath = '/' + filePath + '/' + arguments[1];
            replaceBOOL = arguments[2];
        }

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile(filePath, {create: true, exclusive: replaceBOOL},
              function (success) {

              },
              function (err) {

              });
          }
        );
      },

      removeFile: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function removeFile(dir, file)
        if (arguments.length == 2) {
            filePath = '/' + filePath + '/' + arguments[1];
        }

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile(filePath, {create: false}, function (fileEntry) {
              fileEntry.remove(function () {
                q.resolve();
              });
            });
          }
        );

        return q.promise;
      },

      writeFile: function (filePath, data) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile(filePath, {create: true},
              function (fileEntry) {
                fileEntry.createWriter(
                  function (fileWriter) {
                    fileWriter.onwriteend = function(evt) {
                      q.resolve(evt);
                    }
                    fileWriter.write(data);
                  },
                  function (error) {
                    q.reject(error);
                  });
              }
            );
          }
        );

        return q.promise;
      },

      readFile: function (filePath) {
        var q = $q.defer();

        // Backward compatibility for previous function readFile(dir, file)
        if (arguments.length == 2) {
            filePath = '/' + filePath + '/' + arguments[1];
        }

        getFilesystem().then(
          function (filesystem) {

            filesystem.root.getFile(filePath, {create: false},
              // success
              function (fileEntry) {
                fileEntry.file(function (file) {
                  var reader = new FileReader();
                  reader.onloadend = function () {
                    q.resolve(this.result);
                  };

                  reader.readAsText(file);
                });
              },
              // error
              function (error) {
                q.reject(error);
              });
          }
        );

        return q.promise;
      },

      readFileMetadata: function (filePath) {
        var q = $q.defer();

        getFilesystem().then(
          function (filesystem) {
            filesystem.root.getFile(filePath, {create: false},
              // success
              function (fileEntry) {
                fileEntry.file(function (file) {
                  q.resolve(file);
                });
              },
              // error
              function (error) {
                q.reject(error);
              });
          }
        );

        return q.promise;
      },

      downloadFile: function (source, filePath, trustAllHosts, options) {
        var q = $q.defer();
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(source);

        fileTransfer.onprogress = function(progressEvent) {
            q.notify(progressEvent);
        };

        fileTransfer.download(
          uri,
          filePath,
          function (entry) {
            q.resolve(entry);
          },
          function (error) {
            q.reject(error);
          },
          trustAllHosts, options);

          return q.promise;
      },

      uploadFile: function (server, filePath, options) {
        var q = $q.defer();
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(server);

        fileTransfer.onprogress = function(progressEvent) {
            q.notify(progressEvent);
        };

        fileTransfer.upload(
          filePath,
          uri,
          function (result) {
            q.resolve(result);
          },
          function (error) {
            q.reject(error);
          },
          options)

          return q.promise
      }

    };

    function getFilesystem() {
      var q = $q.defer();

      window.requestFileSystem(LocalFileSystem.PERSISTENT, 1024 * 1024, function (filesystem) {
          q.resolve(filesystem);
        },
        function (err) {
          q.reject(err);
        });

      return q.promise;
    }
  }]);
angular.module('ngCordova.plugins.flashlight', [])

.factory('$cordovaFlashlight', ['$q', function ($q) {

    return {
      available: function () {
        var q = $q.defer();
        window.plugins.flashlight.available(function (isAvailable) {
          q.resolve(isAvailable);
        });
        return q.promise;
      },

      switchOn: function () {
        var q = $q.defer();
        window.plugins.flashlight.switchOn(function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        });
        return q.promise;
      },

      switchOff: function () {
        var q = $q.defer();
        window.plugins.flashlight.switchOff(function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        });
        return q.promise;
      }
    }
  }
]);
angular.module('ngCordova.plugins.ga', [])

    .factory('$cordovaGA', ['$q', function ($q) {

        return {

            init: function (id, mingap) {
                var q = $q.defer();
                mingap = (mingap >= 0) ? mingap : 10;
                window.plugins.gaPlugin.init(function (result) {q.resolve(result); },
                                                    function (error) {q.reject(error); },
                                                    id, mingap);
                return q.promise;
            },

            trackEvent: function (success, fail, category, eventAction, eventLabel, eventValue) {
                var q = $q.defer();
                window.plugins.gaPlugin.trackEvent(function (result) {q.resolve(result); },
                                                    function (error) {q.reject(error); },
                                                    category, eventAction, eventLabel, eventValue);
                return q.promise;
            },

            trackPage: function (success, fail, pageURL) {
                var q = $q.defer();
                window.plugins.gaPlugin.trackPage(function (result) {q.resolve(result); },
                                                    function (error) {q.reject(error); },
                                                    pageURL);
                return q.promise;
            },

            setVariable: function (success, fail, index, value) {
                var q = $q.defer();
                window.plugins.gaPlugin.setVariable(function (result) {q.resolve(result); },
                                                    function (error) {q.reject(error); },
                                                    index, value);
                return q.promise;
            },

            exit: function (success, fail) {
                var q = $q.defer();
                window.plugins.gaPlugin.exit(function (result) {q.resolve(result); },
                                                    function (error) {q.reject(error); });
                return q.promise;
            }

        };

    }]);
angular.module('ngCordova.plugins.geolocation', [])

.factory('$cordovaGeolocation', ['$q', function($q) {

  return {
    getCurrentPosition: function(options) {
      var q = $q.defer();

      navigator.geolocation.getCurrentPosition(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    },
    watchPosition: function(options) {
      var q = $q.defer();

      var watchId = navigator.geolocation.watchPosition(function(result) {
        // Do any magic you need
        q.notify(result);

      }, function(err) {
        q.reject(err);
      }, options);

      return {
        watchId: watchId,
        promise: q.promise
      }
    },

    clearWatch: function(watchID) {
      return navigator.geolocation.clearWatch(watchID);
    }
  }
}]);

angular.module('ngCordova.plugins.globalization', [])

.factory('$cordovaGlobalization', ['$q', function ($q) {

  return {
    getPreferredLanguage: function () {
      var q = $q.defer();

      navigator.globalization.getPreferredLanguage(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    getLocaleName: function () {
      var q = $q.defer();

      navigator.globalization.getLocaleName(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    getFirstDayOfWeek: function () {
      var q = $q.defer();

      navigator.globalization.getFirstDayOfWeek(function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    // "date" parameter must be a JavaScript Date Object.
    dateToString: function(date, options) {
      var q = $q.defer();

      navigator.globalization.dateToString(
        date,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    stringToDate: function(dateString, options) {
      var q = $q.defer();

      navigator.globalization.stringToDate(
        dateString,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    getDatePattern: function(options) {
      var q = $q.defer();

      navigator.globalization.getDatePattern(
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    getDateNames: function(options) {
      var q = $q.defer();

      navigator.globalization.getDateNames(
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    // "date" parameter must be a JavaScript Date Object.
    isDayLightSavingsTime: function(date) {
      var q = $q.defer();

      navigator.globalization.isDayLightSavingsTime(
        date,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    },

    numberToString: function(number, options) {
      var q = $q.defer();

      navigator.globalization.numberToString(
        number,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    stringToNumber: function(numberString, options) {
      var q = $q.defer();

      navigator.globalization.stringToNumber(
        numberString,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    getNumberPattern: function(options) {
      var q = $q.defer();

      navigator.globalization.getNumberPattern(
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        },
        options);
      return q.promise;
    },

    getCurrencyPattern: function(currencyCode) {
      var q = $q.defer();

      navigator.globalization.getCurrencyPattern(
        currencyCode,
        function (result) {
          q.resolve(result);
        },
        function (err) {
          q.reject(err);
        });
      return q.promise;
    }

  }

}]);

angular.module('ngCordova.plugins.keyboard', [])

.factory('$cordovaKeyboard', [function () {

  return {
    hideAccessoryBar: function (bool) {
      return cordova.plugins.Keyboard.hideKeyboardAccessoryBar(bool);
    },

    close: function () {
      return cordova.plugins.Keyboard.close();
    },

    disableScroll: function (bool) {
      return cordova.plugins.Keyboard.disableScroll(bool);
    },

    isVisible: function () {
      return cordova.plugins.Keyboard.isVisible
    }

    //TODO: add support for native.keyboardshow + native.keyboardhide
  }
}]);

angular.module('ngCordova.plugins.localNotification', [])

.factory('$cordovaLocalNotification', ['$q',
    function ($q) {

        return {
            add: function (options, scope) {
                var q = $q.defer();
                window.plugin.notification.local.add(
                    options,
                    function (result) {
                        q.resolve(result);
                    },
                    scope);
                return q.promise;
            },

            cancel: function (id, scope) {
                var q = $q.defer();
                window.plugin.notification.local.cancel(
                    id, function (result) {
                        q.resolve(result);
                    }, scope);

                return q.promise;
            },

            cancelAll: function (scope) {
                var q = $q.defer();

                window.plugin.notification.local.cancelAll(
                    function (result) {
                        q.resolve(result);
                    }, scope);

                return q.promise;
            },

            isScheduled: function (id, scope) {
                var q = $q.defer();

                window.plugin.notification.local.isScheduled(
                    id,
                    function (result) {
                        q.resolve(result);
                    }, scope);

                return q.promise;
            },

            getScheduledIds: function (scope) {
                var q = $q.defer();

                window.plugin.notification.local.getScheduledIds(
                    function (result) {
                        q.resolve(result);
                    }, scope);

                return q.promise;
            },

            isTriggered: function (id, scope) {
                var q = $q.defer();

                window.plugin.notification.local.isTriggered(
                    id, function (result) {
                        q.resolve(result);
                    }, scope);

                return q.promise;
            },

            getTriggeredIds: function (scope) {
                var q = $q.defer();

                window.plugin.notification.local.getTriggeredIds(
                    function (result) {
                        q.resolve(result);
                    }, scope);

                return q.promise;
            },

            getDefaults: function () {
                return window.plugin.notification.local.getDefaults();
            },

            setDefaults: function (Object) {
                window.plugin.notification.local.setDefaults(Object);
            },

            onadd: function () {
                return window.plugin.notification.local.onadd;
            },

            ontrigger: function () {
                return window.plugin.notification.local.ontrigger;
            },

            onclick: function () {
                return window.plugin.notification.local.onclick;
            },

            oncancel: function () {
                return window.plugin.notification.local.oncancel;
            }
        }
    }
]);
angular.module('ngCordova.plugins', [
  'ngCordova.plugins.deviceMotion',
  'ngCordova.plugins.camera',
  'ngCordova.plugins.geolocation',
  'ngCordova.plugins.deviceOrientation',
  'ngCordova.plugins.dialogs',
  'ngCordova.plugins.vibration',
  'ngCordova.plugins.network',
  'ngCordova.plugins.device',
  'ngCordova.plugins.barcodeScanner',
  'ngCordova.plugins.splashscreen',
  'ngCordova.plugins.keyboard',
  'ngCordova.plugins.contacts',
  'ngCordova.plugins.statusbar',
  'ngCordova.plugins.file',
  'ngCordova.plugins.socialSharing',
  'ngCordova.plugins.globalization',
  'ngCordova.plugins.sqlite',
  'ngCordova.plugins.ga',
  'ngCordova.plugins.push',
  'ngCordova.plugins.spinnerDialog',
  'ngCordova.plugins.sms',
  'ngCordova.plugins.pinDialog',
  'ngCordova.plugins.localNotification',
  'ngCordova.plugins.toast',
  'ngCordova.plugins.flashlight',
  'ngCordova.plugins.capture',
  'ngCordova.plugins.appAvailability',
  'ngCordova.plugins.prefs',
  'ngCordova.plugins.printer',
  'ngCordova.plugins.bluetoothSerial'
]);

angular.module('ngCordova.plugins.network', [])

.factory('$cordovaNetwork', [function () {

  return {

    getNetwork: function () {
      return navigator.connection.type;
    },

    isOnline: function () {
      var networkState = navigator.connection.type;
      return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
    },

    isOffline: function () {
      var networkState = navigator.connection.type;
      return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
    }
  }
}]);

angular.module('ngCordova.plugins.pinDialog', [])

.factory('$cordovaPinDialog', [function() {

  return {
    prompt: function(message, promptCallback, title, buttonLabels, defaultText) {
      return window.plugins.pinDialog.prompt.apply(navigator.notification, arguments);
    }
  }

}]);
angular.module('ngCordova.plugins.prefs', [])

  .factory('$cordovaPreferences', ['$window', '$q', function ($window, $q) {

    return {

      set: function (key, value) {
        var q = $q.defer();

        $window.applicationPreferences.set(key, value, function(result) {
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        });

        return q.promise;
      },


      get: function (key) {
        var q = $q.defer();

        $window.applicationPreferences.get(key, function(value) {
          q.resolve(value);
        }, function(err) {
          q.reject(err);
        });

        return q.promise;
      }

    }
  }]);

angular.module('ngCordova.plugins.printer', [])

.factory('$cordovaPrinter', ['$q', function ($q) {

    return {
      isAvailable: function () {
        window.plugin.printer.isServiceAvailable(function (isAvailable) {
          return isAvailable ? true : false;
        });
      },

      print: function (doc) {
        window.plugin.printer.print(doc);
      }
    }
  }
]);
angular.module('ngCordova.plugins.push', [])

.factory('$cordovaPush', ['$q', function ($q) {
    return {
        register: function (config) {
            var q = $q.defer();
            window.plugins.pushNotification.register(
            function (result) {
                q.resolve(result);
            },
            function (error) {
                q.reject(error);
            },
            config);

            return q.promise;
        },

        unregister: function (options) {
            var q = $q.defer();
            window.plugins.pushNotification.unregister(
            function (result) {
                q.resolve(result);
            },
            function (error) {
                q.reject(error);
            },
            options);

            return q.promise;
        },

        // iOS only
        setBadgeNumber: function(number) {
          var q = $q.defer();
            window.plugins.pushNotification.setApplicationIconBadgeNumber(
            function (result) {
                q.resolve(result);
            },
            function (error) {
                q.reject(error);
            },
            number);
            return q.promise;
        }
    };
}]);
angular.module('ngCordova.plugins.sms', [])

.factory('$cordovaSms', ['$q', function ($q) {

    return {
      send: function (number, message, intent) {
        var q = $q.defer();
        sms.send(number, message, intent, function (res) {
          q.resolve(res);
        }, function (err) {
          q.reject(err)
        })
        return q.promise;
      }
    }

}]);
// NOTE: shareViaEmail -> if user cancels sharing email, success is still called
// NOTE: shareViaEmail -> TO, CC, BCC must be an array, Files can be either null, string or array
// TODO: add support for iPad
// TODO: detailed docs for each social sharing types (each social platform has different requirements)

angular.module('ngCordova.plugins.socialSharing', [])

  .factory('$cordovaSocialSharing', ['$q', function ($q) {

    return {
      share: function (message, subject, file, link) {
        var q = $q.defer();
        window.plugins.socialsharing.share(message, subject, file, link,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaTwitter: function (message, file, link) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaTwitter(message, file, link,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaWhatsApp: function (message, file, link) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaWhatsApp(message, file, link,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaFacebook: function (message, file, link) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaFacebook(message, file, link,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaSMS: function (message, commaSeparatedPhoneNumbers) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaSMS(message, commaSeparatedPhoneNumbers,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      shareViaEmail: function (message, subject, toArr, ccArr, bccArr, fileArr) {
        var q = $q.defer();
        window.plugins.socialsharing.shareViaEmail(message, subject, toArr, ccArr, bccArr, fileArr,
          function () {
            q.resolve(true); // success
          },
          function () {
            q.reject(false); // error
          });
        return q.promise;
      },

      canShareViaEmail: function () {
        var q = $q.defer();
        window.plugins.socialsharing.canShareViaEmail(
            function () {
              q.resolve(true); // success
            },
            function () {
              q.reject(false); // error
            });
        return q.promise;
      },

      canShareVia: function (via, message, subject, file, link) {
        var q = $q.defer();
        window.plugins.socialsharing.canShareVia(via, message, subject, file, link,
          function (success) {
            q.resolve(success); // success
          },
          function (error) {
            q.reject(error); // error
          });
        return q.promise;
      },

      shareVia: function (via, message, subject, file, link) {
        var q = $q.defer();
        window.plugins.socialsharing.shareVia(via, message, subject, file, link,
            function () {
              q.resolve(true); // success
            },
            function () {
              q.reject(false); // error
            });
        return q.promise;
      }

    }
  }]);

angular.module('ngCordova.plugins.spinnerDialog', [])

.factory('$cordovaSpinnerDialog', [function() {

  return {
    show: function(title, message) {
      return window.plugins.spinnerDialog.show(title, message);
    },
    hide: function() {
      return window.plugins.spinnerDialog.hide();
    }
  }

}]);
angular.module('ngCordova.plugins.splashscreen', [])

.factory('$cordovaSplashscreen', [ function () {

  return {
    hide: function () {
      return navigator.splashscreen.hide();
    },

    show: function () {
      return navigator.splashscreen.show();
    }
  };

}]);

angular.module('ngCordova.plugins.sqlite', [])

  .factory('$cordovaSQLite', ['$q', function ($q) {

    return  {
      openDB: function (dbName) {
        return  window.sqlitePlugin.openDatabase({name: dbName});
      },


      openDBBackground: function (dbName) {
        return window.sqlitePlugin.openDatabase({name: dbName, bgType: 1});
      },

      execute: function (db, query, binding) {
        q = $q.defer();
        db.transaction(function (tx) {
          tx.executeSql(query, binding, function (tx, result) {
              q.resolve(result);
            },
            function (transaction, error) {
              q.reject(error);
            });
        });
        return q.promise;
      },

      nestedExecute: function (db, query1, query2, binding1, binding2) {
        q = $q.defer();

        db.transaction(function (tx) {
            tx.executeSql(query1, binding1, function (tx, result) {
              q.resolve(result);
              tx.executeSql(query2, binding2, function (tx, res) {
                q.resolve(res);
              })
            })
          },
          function (transaction, error) {
            q.reject(error);
          });

        return q.promise;
      }

      // more methods here
    }
  }]);

angular.module('ngCordova.plugins.statusbar', [])

.factory('$cordovaStatusbar', [function() {

  return {
    overlaysWebView: function(bool) {
      return StatusBar.overlaysWebView(true);
    },

    // styles: Default, LightContent, BlackTranslucent, BlackOpaque
    style: function (style) {
      switch (style) {
        case 0:     // Default
          return StatusBar.styleDefault();
          break;

        case 1:     // LightContent
          return StatusBar.styleLightContent();
          break;

        case 2:     // BlackTranslucent
          return StatusBar.styleBlackTranslucent();
          break;

        case 3:     // BlackOpaque
          return StatusBar.styleBlackOpaque();
          break;

        default:  // Default
          return StatusBar.styleDefault();
      }
    },


    // supported names: black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown
    styleColor: function (color) {
      return StatusBar.backgroundColorByName(color);
    },

    styleHex: function (colorHex) {
      return StatusBar.backgroundColorByHexString(colorHex);
    },

    hide: function () {
      return StatusBar.hide();
    },

    show: function () {
      return StatusBar.show()
    },

    isVisible: function () {
      return StatusBar.isVisible();
    }
  }
}]);

angular.module('ngCordova.plugins.toast', [])

.factory('$cordovaToast', ['$q', function ($q) {

    return {
      showShortTop: function (message) {
        var q = $q.defer();
        window.plugins.toast.showShortTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        })
        return q.promise;
      },

      showShortCenter: function (message) {
        var q = $q.defer();
        window.plugins.toast.showShortCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        })
        return q.promise;
      },

      showShortBottom: function (message) {
        var q = $q.defer();
        window.plugins.toast.showShortBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        })
        return q.promise;
      },

      showLongTop: function (message) {
        var q = $q.defer();
        window.plugins.toast.showLongTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        })
        return q.promise;
      },

      showLongCenter: function (message) {
        var q = $q.defer();
        window.plugins.toast.showLongCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        })
        return q.promise;
      },

      showLongBottom: function (message) {
        var q = $q.defer();
        window.plugins.toast.showLongBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        })
        return q.promise;
      },


      show: function (message, duration, position) {
        var q = $q.defer();
        window.plugins.toast.show(message, duration, position, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error)
        })
        return q.promise;
      }
    }

  }
]);
angular.module('ngCordova.plugins.vibration', [])

.factory('$cordovaVibration', [function() {

  return {
    vibrate: function(times) {
      return navigator.notification.vibrate(times);
    },
    vibrateWithPattern: function(pattern, repeat) {
      return navigator.notification.vibrateWithPattern(pattern, repeat);
    },
    cancelVibration: function() {
      return navigator.notification.cancelVibration();
    }
  }
}]);

})();
(function(){angular.module("ionic.rating",[]).constant("ratingConfig",{max:5,stateOn:null,stateOff:null}).controller("RatingController",function($scope,$attrs,ratingConfig){var ngModelCtrl;ngModelCtrl={$setViewValue:angular.noop};this.init=function(ngModelCtrl_){var max,ratingStates;ngModelCtrl=ngModelCtrl_;ngModelCtrl.$render=this.render;this.stateOn=angular.isDefined($attrs.stateOn)?$scope.$parent.$eval($attrs.stateOn):ratingConfig.stateOn;this.stateOff=angular.isDefined($attrs.stateOff)?$scope.$parent.$eval($attrs.stateOff):ratingConfig.stateOff;max=angular.isDefined($attrs.max)?$scope.$parent.$eval($attrs.max):ratingConfig.max;ratingStates=angular.isDefined($attrs.ratingStates)?$scope.$parent.$eval($attrs.ratingStates):new Array(max);return $scope.range=this.buildTemplateObjects(ratingStates)};this.buildTemplateObjects=function(states){var i,_i,_len,_ref;_ref=states.length;for(_i=0,_len=_ref.length;_i<_len;_i++){i=_ref[_i];states[i]=angular.extend({index:1},{stateOn:this.stateOn,stateOff:this.stateOff},states[i])}return states};$scope.rate=function(value){if(!$scope.readonly&&value>=0&&value<=$scope.range.length){ngModelCtrl.$setViewValue(value);return ngModelCtrl.$render()}};$scope.reset=function(){$scope.value=ngModelCtrl.$viewValue;return $scope.onLeave()};$scope.enter=function(value){if(!$scope.readonly){$scope.value=value}return $scope.onHover({value:value})};$scope.onKeydown=function(evt){if(/(37|38|39|40)/.test(evt.which)){evt.preventDefault();evt.stopPropagation();return $scope.rate($scope.value+(evt.which===38||evt.which===39?{1:-1}:void 0))}};this.render=function(){return $scope.value=ngModelCtrl.$viewValue};return this}).directive("rating",function(){return{restrict:"EA",require:["rating","ngModel"],scope:{readonly:"=?",onHover:"&",onLeave:"&"},controller:"RatingController",template:'<ul class="rating" ng-mouseleave="reset()" ng-keydown="onKeydown($event)">'+'<li ng-repeat="r in range track by $index" ng-click="rate($index + 1)"><i class="icon" ng-class="$index < value && (r.stateOn || \'ion-ios7-star\') || (r.stateOff || \'ion-ios7-star-outline\')"></i></li>'+"</ul>",replace:true,link:function(scope,element,attrs,ctrls){var ngModelCtrl,ratingCtrl;ratingCtrl=ctrls[0];ngModelCtrl=ctrls[1];if(ngModelCtrl){return ratingCtrl.init(ngModelCtrl)}}}})}).call(this);
(function ( window, angular, undefined ) {

angular.module( 'app', [
	// 'ngAnimate',
	'ngSanitize',
	// 'ngTouch',
	'ngCordova',
	'ngCookies',
	'ionic',
	'Offline',
	'User',
	'app.sidemenu',
	'app.home',
	'app.order',
	'app.vinibar',
	'app.wine',
	'app.ratedwine',
	'app.deliverymode',
	'app.profile',
	'app.pay',
	'security',
	'templates-app',
	'templates-common'
])

	.run(['security', '$window', '$rootScope', function(security, $window, $rootScope) {
		// Get the current user state the application starts
		// (in case they are still logged in from a previous session)
		security.requestCurrentUser();
		var onNetworkOff = function() {
			$rootScope.$broadcast('offline');
		};

		var onNetworkOn = function() {
			$rootScope.$broadcast('online');
		};

		// Triggers on network state change.
		var onDeviceReady = function(){
			document.addEventListener("offline", onNetworkOff, false);
			document.addEventListener("online", onNetworkOn, false);
		};

		document.addEventListener("deviceready", onDeviceReady, false);


}])

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
}])

.config(['$httpProvider', function($httpProvider) {
				delete $httpProvider.defaults.headers.common['X-Requested-With'];
				$httpProvider.defaults.xsrfCookieName = 'csrftoken';
				$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		}
])

.controller('AppCtrl', ["$scope", "$rootScope", "$ionicSideMenuDelegate", "$ionicModal", "$window", "OfflineQueue", "$ionicPlatform", "$ionicLoading", "$cordovaToast", "$cordovaNetwork", "$cordovaSplashscreen", "Bottles", function($scope, $rootScope, $ionicSideMenuDelegate, $ionicModal, $window, OfflineQueue, $ionicPlatform, $ionicLoading, $cordovaToast, $cordovaNetwork, $cordovaSplashscreen, Bottles) {

	// Catches online event and fires Offline Queue
	$rootScope.$on('online',function(event){
		$cordovaToast.show('Vous êtes connecté, synchronisation en cours', 'short', 'top');
		OfflineQueue.sendRatings().then(function(response){
			console.log(response);
			Bottles.updateList().then(function(response){
				$cordovaToast.show('Terminé ...', 'short', 'top');
			},function(response){
				//error
			});
		});
	});

	$scope.windowSize = {
		'height': ionic.Platform.isIOS() ? ($window.innerHeight - 20) : $window.innerHeight,
		'width': $window.innerWidth
	};

	$ionicPlatform.ready(function(){
		if(ionic.Platform.isWebView()) {$cordovaSplashscreen.hide();}
		console.log(ionic.Platform.device());
		console.log(ionic.Platform.isIOS());
		// console.log( $cordovaNetwork.isOnline());
		console.log( ionic.Platform.isWebView());
		console.log( ionic.Platform.isWebView());
		console.log( ionic.Platform.isWebView());
	});

	$scope.toggleLeft = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};

	// Trigger the loading indicator
	$scope.show = function() {

		// Show the loading overlay and text
		$scope.loading = $ionicLoading.show({

			// The text to display in the loading indicator
			content: '<i class="icon ion-loading-a">',

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
	$scope.hide = function(){
		$ionicLoading.hide();
	};

	// TODO VERIFY WITH STATUS BAR
var height = $window.innerHeight;
	$scope.full_height = {
		"height": height+ 'px'
	};

	// YIPEE MODAL
	$ionicModal.fromTemplateUrl('tpl/yipee.tpl.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.yipee = modal;
	});

	// Open & close the modal
	$scope.openYipeeModal = function() {
		$scope.yipee.show();
	};
	$scope.closeYipeeModal = function() {
		$scope.yipee.hide();
	};

	// OOPS MODAL
	$ionicModal.fromTemplateUrl('tpl/oops.tpl.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.oops = modal;
	});

	// Open & close the modal
	$scope.openOopsModal = function() {
		$scope.oops.show();
	};
	$scope.closeOopsModal = function() {
		$scope.oops.hide();
	};

}]);
angular.module( 'app.deliverymode', ['Order', 'User', 'Loading', 'ngCordova'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('sidemenu.deliverymode', {
			url: "/deliverymode",
			views: {
				'menuContent' :{
					controller: 'deliverymodeCtrl',
					templateUrl: "home/deliverymode/deliverymode.tpl.html"
				}
			}
	});
}])

.controller( 'deliverymodeCtrl', ["$scope", "$http", "$state", "orderInstance", "SerializedOrder", "$window", "User", "Addresses", "Address", "$ionicModal", "$ionicLoading", "Loading", "$cordovaToast", function deliverymodeCtrl( $scope, $http, $state, orderInstance, SerializedOrder, $window, User, Addresses, Address, $ionicModal, $ionicLoading, Loading, $cordovaToast ) {
	$scope.order = orderInstance;
	$scope.user = User.getUser();
	var apiEndPoint =  'https://api.vinify.co/api';
	Addresses.getList().then(function(response){
			$scope.addresses = response.data;
			console.log($scope.addresses);
		});

	$scope.createRefillOrder = function() {
		if($scope.order.data.delivery_mode) {
				Loading.show();
				$scope.order.data.delivery_cost = $scope.deliveryPrices[$scope.order.data.delivery_mode][$scope.order.data.quantity -1];
				$scope.order.createRefillOrder().then(function(data){
					Loading.hide();
					$state.go('sidemenu.pay');
				},function(data){
					Loading.hide();
					if (ionic.Platform.isWebView()) {
						$cordovaToast.show('Oops, un erreur est survenue. Merci de réessayer ...', 'short', 'top').then(function(success) {
						}, function (error) {
							// error
						});
					}
				});
		} else {
			if (ionic.Platform.isWebView()) {
				$cordovaToast.show('Merci de choisir un mode de livraison ...', 'short', 'top').then(function(success) {
				}, function (error) {
					// error
				});
			}
		}
	};
	$scope.displayPrice = function(price) {
		return price;
		//var string = price.toString();
		//var len = string.length - 2;
		//return string.substring(0, len) + "." + string.substring(len);
	};
	$scope.deliveryPrices = {
		'Point Relais': [4.90, 6.90],
		'Vinify': [0, 0],
		'Colissimo': [8.90, 11.90]
	};

          // BLUR EVENT
          $scope.onBlur = function(){
             $scope.testCoupon();
          };


        $scope.testCoupon = function() {
              Loading.show();
              var request = $http({
                                  url: apiEndPoint + '/orders/testcoupon/',
                                  method: 'POST',
                                  data: {coupon: $scope.order.data.coupon},
                                  headers: {
                                    'Content-Type': 'application/json; charset=UTF-8'
                                  }
                                })

                                .success(function(data, status, headers, config) {
						Loading.hide();
						if (ionic.Platform.isWebView()) {
							$cordovaToast.show('Coupon Validé!', 'short', 'top').then(function(success) {
							}, function (error) {
								//error
							});
						}
                                  })
                                .error(function(data, status, headers, config) {
                                    Loading.hide();
						//IF THE COUPON IS NOT VALID WE TELL THE USER DEPENDING ON THE ERROR
						if (data === 'This code is not valid') {
							if (ionic.Platform.isWebView()) {
								$cordovaToast.show('Oops, votre code d\'accès semble erroné !', 'short', 'top').then(function(success) {
								}, function (error) {
									//error
								});
							}
						}

						else if (data === 'This coupon has been redeemed') {
							if (ionic.Platform.isWebView()) {
								$cordovaToast.show('Ce coupon n\'est plus valable', 'short', 'top').then(function(success) {
								}, function (error) {
									// error
								});
							}
						}
                                  });
        };
	// TODO VERIFY WITH STATUS BAR
	var appropriatedHeight = ($window.innerHeight - 135) / 4;

	$scope.calcHeight = {
		"min-height": appropriatedHeight + 'px'
	};

	// ADDRESS MODAL
	$ionicModal.fromTemplateUrl('tpl/address.tpl.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Open & close the modal
	$scope.openModal = function() {
		$scope.current = {
			'delivery_address' : (User.getUser().delivery_address) ? User.getUser().delivery_address.uuid : null,
			'billing_address' : (User.getUser().billing_address) ? User.getUser().billing_address.uuid : null
		};
		$scope.modal.show();
		$scope.address_suppl = new Address(User.getUser().uuid);
		delete $scope.address_suppl.uuid;
	};
	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	$scope.fireBilling = function(id) {
		Addresses.fireBilling(id);
	};

	$scope.fireDelivery = function(id) {
		Addresses.fireDelivery(id);
	};

        // CHECK FORM AND ADD ADRESS
        $scope.addAddress = function(form) {
          if(!form.$valid) {
                $ionicLoading.show({ template: 'Merci de vérifier votre formulaire, un ou plusieurs champs requis sont manquants.', noBackdrop: true, duration: 3000 });
          } else {
            Loading.show();
              $scope.address_suppl.createAddress()
                                              .success(function(data, status, headers, config) {
                                                          Loading.hide();
                                                          $scope.form.show = false;
                                                            // TODO gracefully manage errors/successes
                                                            User.setUser(data);
                                                            $scope.user = data;
                                                            Addresses.updateList().then(function(response){
                                                              $scope.addresses = Addresses.data;
                                                              console.log($scope.addresses);
                                                            });
                                                          })
                                                          .error(function(data, status, headers, config) {
                                                            // TODO gracefully manage errors/successes
                                                            console.log(data);
                                                            Loading.hide();
                                                          });
          }
        };

}]);
  angular.module( 'app.home', ['User'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.home', {
              url: "/home",
              views: {
                'menuContent' :{
                  controller: 'homeCtrl',
                  templateUrl: "home/home.tpl.html"
                }
              }
          });
     }])

      .controller( 'homeCtrl', ["$scope", "$rootScope", "$http", "$state", "$window", function homeCtrl( $scope, $rootScope, $http, $state, $window ) {

        $scope.stateGo = function(to) {
          $state.go('sidemenu.' + to);
        };
        // console.log($rootScope.isOnline);
        // TODO VERIFY WITH STATUS BAR
        var appropriatedHeight = Math.round(($scope.windowSize.height  - 43) / 3); //43 because of -1 margin on scroll content
        var thirdHeight = ($scope.windowSize.height  - 43) - 2*appropriatedHeight;

        $scope.calcHeight = {
          "min-height": appropriatedHeight + 'px'
        };

        $scope.calcThirdHeight = {
          "min-height": thirdHeight + 'px'
        };

        console.log($window.innerHeight);
      }]);
  angular.module( 'app.order', ['Order'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.order', {
              url: "/order",
              views: {
                'menuContent' :{
                  controller: 'orderCtrl',
                  templateUrl: "home/order/order.tpl.html"
                }
              }
          });
     }])

      .controller( 'orderCtrl', ["$scope", "$http", "$state", "Order", "orderInstance", "SerializedOrder", "$window", function orderCtrl( $scope, $http, $state, Order, orderInstance, SerializedOrder, $window ) {

        $scope.price = {
          valueA: 50,
          levelA: 49.90,
          valueB: 50,
          levelB: 49.90
        };

        // TODO VERIFY WITH STATUS BAR
        var appropriatedHeight = ($window.innerHeight - 43) / 3;

        $scope.calcHeight = {
          "height": appropriatedHeight + 'px'
        };

        $scope.refill = {
          num: 1
        };

        $scope.order = new Order();

        $scope.addRefill = function() {
          $scope.order.addRefill();
        };

        $scope.createRefillOrder = function() {
          $scope.order.data.refills[0].price_level = $scope.price.levelA;
          $scope.order.data.quantity = parseInt($scope.order.data.quantity, 10);
          if($scope.order.data.quantity == 2) {$scope.order.addRefill($scope.price.levelB);}
          orderInstance.setOrderInstance($scope.order);
          $state.go('sidemenu.deliverymode');
        };

      }]);
angular.module( 'app.pay', ['Order', 'User', 'ionic', 'ngCordova', 'angularPayments', 'Loading'])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('sidemenu.pay', {
					url: "/pay",
					views: {
						'menuContent' :{
							controller: 'payCtrl',
							templateUrl: "home/pay/pay.tpl.html"
						}
					}
			});
	}])
	.directive('syncFocusWith', ["$timeout", "$rootScope", function($timeout, $rootScope) {
			return {
					restrict: 'A',
					scope: {
							focusValue: "=syncFocusWith"
					},
					link: function($scope, $element, attrs) {
							$scope.$watch("focusValue", function(currentValue, previousValue) {
									if (currentValue === true && !previousValue) {
											$element[0].focus();
									} else if (currentValue === false && previousValue) {
											$element[0].blur();
									}
							});
					}
			};
	}])
	.controller( 'payCtrl', ["$scope", "$http", "$location", "SerializedOrder", "User", "$window", "$ionicPlatform", "$cordovaToast", "Loading", "$state", function payCtrl( $scope, $http, $location, SerializedOrder, User, $window, $ionicPlatform, $cordovaToast, Loading, $state ) {
		$scope.serializedOrder = SerializedOrder;
		console.log(SerializedOrder);
		var apiEndPoint =  'https://api.vinify.co/api';

		Stripe.setPublishableKey('pk_live_gNv4cCe8tsZpettPUsdQj25F');
		$scope.submit = function(status, response) {

				if (response.error) {
					if (ionic.Platform.isWebView()) {
						$cordovaToast.show('Merci de vérifier vos informations', 'short', 'top').then(function(success) {
						}, function (error) {
						// error
						});
						//if (response.error.code == 'incorrect_number') {
						//	$cordovaToast.show('The card number is incorrect.', 'short', 'top').then(function(success) {
						//	}, function (error) {
						//	// error
						//	});
						//}
						//if (response.error.code == 'invalid_number') {
						//	$cordovaToast.show('The card number is not a valid credit card number.', 'short', 'top').then(function(success) {
						//	}, function (error) {
						//	// error
						//	});
						//}
						//if (response.error.code == 'invalid_expiry_month') {
						//	$cordovaToast.show('The card\'s expiration month is invalid.', 'short', 'top').then(function(success) {
						//	}, function (error) {
						//	// error
						//	});
						//}
						//if (response.error.code == 'invalid_expiry_year') {
						//	$cordovaToast.show('The card\'s expiration year is invalid.', 'short', 'top').then(function(success) {
						//	}, function (error) {
						//	// error
						//	});
						//}
						//if (response.error.code == 'invalid_cvc') {
						//	$cordovaToast.show('The card\'s security code is invalid.', 'short', 'top').then(function(success) {
						//	}, function (error) {
						//	// error
						//	});
						//}
						//if (response.error.code == 'expired_card') {
						//	$cordovaToast.show('The card has expired.', 'short', 'top').then(function(success) {
						//	}, function (error) {
						//	// error
						//	});
						//}
						//if (response.error.code == 'incorrect_cvc') {
						//	$cordovaToast.show('The card\'s security code is invalid.', 'short', 'top').then(function(success) {
						//	}, function (error) {
						//	// error
						//	});
						//}
					} else {
						console.log(response);
					}
				} else {
					Loading.show();
					var data = {
						token: response.id,
						order_id: $scope.serializedOrder.uuid
					};
					$http({
						url: apiEndPoint + '/orders/chargerefill/',
						method: "POST",
						data: data
					})
					.success(function(data, status, headers, config) {
						Loading.hide();
						$scope.openYipeeModal();
						if ($scope.serializedOrder.delivery_mode === 'Point Relais') {
							$http({
								url: apiEndPoint + '/orders/pickmremail/',
								method: "POST",
								data: { 'order_id': $scope.serializedOrder.uuid },
								headers: {
									'Content-Type': 'application/json; charset=UTF-8'
								}
							});
						}
						$state.go('sidemenu.home');
					})
					.error(function(data, status, headers, config) {
						Loading.hide();
						$scope.openOopsModal();
					});
				}

		};

		// TODO VERIFY WITH STATUS BAR
		var appropriatedHeight = ($window.innerHeight - 60) / 3;

		$scope.calcHeight = {
			"height": appropriatedHeight + 'px'
		};

		$scope.calcPrice = function() {
				var price = 0;
				for (var i = SerializedOrder.refills.length - 1; i >= 0; i--) {
					price += SerializedOrder.refills[i].price_level;
				}
				//return price.toString().substring(0, 2) + "." + price.toString().substring(2);
				return price;
		};

		$scope.displayPrice = function(price) {
			return price;
			//var string = price.toString();
			//var len = string.length - 2;
			//return string.substring(0, len) + "." + string.substring(len);
		};

		$scope.user = User.getUser();
	}]);
  angular.module( 'app.profile', ['User', 'Referrals', 'Loading', 'ngCordova'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.profile', {
              url: "/profile",
              views: {
                'menuContent' :{
                  controller: 'profileCtrl',
                  templateUrl: "home/profile/profile.tpl.html"
                }
              }
          });
     }])

      .controller( 'profileCtrl', ["$scope", "$http", "$location", "User", "$ionicModal", "$ionicLoading", "Referrals", "Referral", "Addresses", "Address", "Loading", "$cordovaToast", function profileCtrl( $scope, $http, $location, User, $ionicModal, $ionicLoading, Referrals, Referral, Addresses, Address, Loading, $cordovaToast) {
        $scope.user = User.getUser();
        $scope.form = {show: false};
        console.log(User);
        console.log($scope.user.phone);

        Referrals.getList().then(function(results){
          $scope.referrals = Referrals.data;
        });

        Addresses.getList().then(function(response){
            $scope.addresses = response.data;
            console.log($scope.addresses);
          });

      // YIPEE MODAL
      $ionicModal.fromTemplateUrl('home/profile/user.tpl.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.userModal = modal;
      });

      // Open & close the modal
      $scope.openUserModal = function() {
        $scope.userModal.show();
          $scope.current = {
            'delivery_address' : (User.getUser().delivery_address) ? User.getUser().delivery_address.uuid : null,
            'billing_address' : (User.getUser().billing_address) ? User.getUser().billing_address.uuid : null
          };
          $scope.address_suppl = new Address(User.getUser().uuid);
      };
      $scope.closeUserModal = function() {
        $scope.userModal.hide();
      };
      $scope.updateUser = function() {
        // TODO update USER
        User.setUser($scope.user);
        User.postUser().then(function(response){
          $scope.user = response.data;
          User.setUser(response.data);
        });
        $scope.userModal.hide();
      };

      // YIPEE MODAL
      $ionicModal.fromTemplateUrl('home/profile/referral.tpl.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.referralModal = modal;
      });

      // Open & close the modal
      $scope.openReferralModal = function() {
        $scope.referralModal.show();
          $scope.referral = new Referral();
      };
      $scope.closeReferralModal = function() {
        // TODO UPDATE USER INFOS
        $scope.referralModal.hide();
      };
      $scope.sendReferral = function() {
        // TODO UPDATE USER INFOS
        Loading.show();
        $scope.referral.sendReferral().success(function(data, status, headers, config) {
                                                                          Referrals.updateList().then(function(results){
                                                                            $scope.referrals = Referrals.data;
                                                                          $scope.referralModal.hide();
                                                                          Loading.hide();
                                                                          });
                                                                    }).error(function(data, status, headers, config) {
                                                                        // TODO gracefully manage errors/successes
                                                                          $scope.referralModal.hide();
                                                                          Loading.hide();
                                                                          if (data === 'User with email already a client') {
                                                                            $cordovaToast.show($scope.referral.first_name + ' est déja un de nos clients :)', 'short', 'top').then(function(success) {
                                                                            }, function (error) {
                                                                            // error
                                                                            });
                                                                         } else if (data === 'User cannot refer himself') {
                                                                            $cordovaToast.show('Petit malin ... :)', 'short', 'top').then(function(success) {
                                                                            }, function (error) {
                                                                            // error
                                                                            });
                                                                          } else {
                                                                              $scope.openOopsModal();
                                                                          }
                                                                    });
      };

        $scope.fireBilling = function(id) {
          Addresses.fireBilling(id);
        };

        $scope.fireDelivery = function(id) {
          Addresses.fireDelivery(id);
        };

        // CHECK FORM AND ADD ADRESS
        $scope.addAddress = function(form) {
          if(!form.$valid) {
                $ionicLoading.show({ template: 'Merci de vérifier votre formulaire, un ou plusieurs champs requis sont manquants.', noBackdrop: true, duration: 3000 });
          } else {
            Loading.show();
              $scope.address_suppl.createAddress()
                                              .success(function(data, status, headers, config) {
                                                          Loading.hide();
                                                          $scope.form.show = false;
                                                            // TODO gracefully manage errors/successes
                                                            User.setUser(data);
                                                            $scope.user = data;
                                                            Addresses.updateList().then(function(response){
                                                              $scope.addresses = Addresses.data;
                                                              console.log($scope.addresses);
                                                            });
                                                          })
                                                          .error(function(data, status, headers, config) {
                                                            // TODO gracefully manage errors/successes
                                                            console.log(data);
                                                            Loading.hide();
                                                          });
          }
        };
      }]);
  angular.module( 'app.ratedwine', ['ngResource', 'User', 'Rating', 'ngCordova', 'ionic'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.ratedwine', {
              url: '/ratedwine/{uuid:[^/]*}',
              views: {
                'menuContent' :{
                  controller: 'ratedwineCtrl',
                  templateUrl: "home/ratedwine/ratedwine.tpl.html"
                }
              }
          });
     }])
      .controller( 'ratedwineCtrl', ["$scope", "$stateParams", "$resource", "$state", "Bottles", "$ionicModal", "Rating", "GroupRating", "$cordovaSocialSharing", "$ionicPlatform", "$cordovaToast", function ratedwineCtrl( $scope, $stateParams , $resource, $state , Bottles, $ionicModal, Rating, GroupRating,  $cordovaSocialSharing, $ionicPlatform, $cordovaToast) {
            $scope.id = $stateParams.uuid;
            // We can retrieve a collection from the server

          var getById = function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].uuid === id) {
                    return arr[d];
                }
            }
          };

          $scope.share = {
            twitter: null,
            facebook: null,
            mail: undefined
          };

          if (ionic.Platform.isWebView()) {
            $scope.share.twitter = function () {
                  var message = "Je viens de noter le" + $scope.bottle.wine.display_name + ". Super découverte grâce à @vinifyco !";
                  $cordovaSocialSharing.shareViaTwitter(message).then(function(result) {
                      // Success!
                  }, function(err) {
                      // An error occured. Show a message to the user
                  });
            };

            $scope.share.facebook = function () {
                  var message = "Je viens de noter le" + $scope.bottle.wine.display_name + "Super découverte grâce à @vinify !";
                  $cordovaSocialSharing.shareViaFacebook(message).then(function(result) {
                      // Success!
                  }, function(err) {
                      // An error occured. Show a message to the user
                  });
            };

            $scope.share.mail = function () {
                  var message = "Je viens de noter le" + $scope.bottle.wine.display_name + "Super découverte grâce à @vinify !";
                  var subject = $scope.bottle.wine.display_name + " | Vinify";
                  $cordovaSocialSharing.shareViaEmail(message, subject).then(
                    function(result) {
                      // Success!
                    }, function(err) {
                      // An error occured. Show a message to the user
                    });
            };
          }

           Bottles.getList().then(function(response){
              $scope.bottle = getById(response.data.results, $scope.id);
              console.log($scope.star);
           });

            // RATING SETTINGS
            $scope.rate = 3;
            $scope.max = 5;

            $scope.literalRating = {};

            // RATING MODAL
            $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.tpl.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $scope.modal = modal;
            });

            // Open & close the modal
            $scope.openModal = function() {
              $scope.rating = new Rating($scope.bottle.uuid, $scope.bottle.rating, $scope.bottle.comment);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal < 2)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
                if (newVal > 1.5 && newVal < 3)  { $scope.literalRating.value = "Non, pas trop mon style";}
                if (newVal > 2.5 && newVal < 4)  { $scope.literalRating.value = "J'ai bien aimé ce vin";}
                if (newVal > 3.5 && newVal < 5)  { $scope.literalRating.value = "Oui, c’est bien mon style";}
                if (newVal  == 5)  { $scope.literalRating.value = "C’est exactement le style que j’aime !";}
              });
              $scope.modal.show();
            };
            $scope.closeModal = function() {
              $scope.modal.hide();
            };

            $scope.rateWine = function() {
              if(ionic.Platform.isWebView()) { //if we use cordova
                if ($cordovaNetwork.isOffline()) {//if we are offline
                  $cordovaToast.show('Vous ne pouvez pas modifier votre note quand vous n\'êtes pas connecté :(', 'short', 'top');
                } else {
                  $scope.rating.updateWine().then(function(response){
                                  $scope.closeModal();
                                  console.log(response);
                                  $state.go('sidemenu.vinibar');
                  });
                }
              } else {
                  $scope.rating.updateWine().then(function(response){
                                  $scope.closeModal();
                                  console.log(response);
                                  $state.go('sidemenu.vinibar');
                  });
              }
            };
              // if ($cordovaNetwork.isOffline()) {
              //   // Store Rating and Fake it
              //     OfflineQueue.addUpdateRating($scope.rating);
              //     Bottles.fakeRating($scope.rating).then(function(response){
              //                     $scope.closeModal();
              //                     $state.go('sidemenu.vinibar');
              //                     $cordovaToast.show('Offline Rating ...', 'short', 'top');
              //     });

              // } else {
              //       Loading.show();
              //       $scope.rating.updateWine()
              //         .then(function(data, status, headers, config) {
              //               Loading.hide();
              //               $scope.closeModal();
              //               $state.go('sidemenu.vinibar');
              //               $cordovaToast.show('Bien reçu !', 'short', 'top');
              //         }, function(data, status, headers, config) {
              //             Loading.hide();
              //             $cordovaToast.show('Oops, Vous n\'êtes pas connecté :(', 'short', 'top');
              //               // TODO gracefully manage errors/successes
              //                console.log(data);
              //       });
              // }
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
              $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
              // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
              // Execute action
            });

            // GROUP RATING MODAL
            $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.group.tpl.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $scope.group = modal;
            });

            // Open & close the modal
            $scope.openGroupModal = function() {
              $scope.rating = new Rating($scope.bottle.uuid, $scope.bottle.rating, $scope.bottle.comment);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal == 1)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
                if (newVal == 2)  { $scope.literalRating.value = "Non, pas trop mon style";}
                if (newVal == 3)  { $scope.literalRating.value = "J'ai bien aimé ce vin";}
                if (newVal == 4)  { $scope.literalRating.value = "Oui, c’est bien mon style";}
                if (newVal == 5)  { $scope.literalRating.value = "C’est exactement le style que j’aime !";}
              });
              $scope.groupRating = new GroupRating($scope.bottle.wine.uuid, 4);
              $scope.group.show();
            };
            $scope.closeGroupModal = function() {
              $scope.group.hide();
            };

            $scope.rateWines = function() {
              if ($cordovaNetwork.isOffline()) {
                // Store Rating and Fake it
                  OfflineQueue.addRating($scope.rating);
                  OfflineQueue.addGroupRating($scope.groupRating);
                  Bottles.fakeRating($scope.rating).then(function(response){
                                  $scope.closeGroupModal();
                                  $state.go('sidemenu.vinibar');
                  });
              } else {
                Loading.show();
                  // Rate Wine then rate group wines
                  $scope.groupRating.rateWines().then(function(){
                    $scope.rating.rateWine().then(function(response){
                          $scope.closeGroupModal();
                          Loading.hide();
                          $state.go('sidemenu.vinibar');
                    });
                  });
              }
            };

            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
              $scope.group.remove();
            });
            // Execute action on hide group
            $scope.$on('group.hidden', function() {
              // Execute action
            });
            // Execute action on remove group
            $scope.$on('group.removed', function() {
              // Execute action
            });
        }]);
  angular.module( 'app.vinibar', ['ngResource', 'User', 'ngCordova'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.vinibar', {
              url: "/vinibar?q",
              views: {
                'menuContent' :{
                  controller: 'vinibarCtrl',
                  templateUrl: "home/vinibar/vinibar.tpl.html"
                }
              }
          });
     }])
      .controller( 'vinibarCtrl', ["$scope", "$rootScope", "$http", "$location", "$resource", "User", "Bottles", "$stateParams", "$cordovaToast", function vinibarCtrl( $scope, $rootScope, $http, $location, $resource, User, Bottles, $stateParams, $cordovaToast ) {

            $scope.getNumber = function(num) {
              var _num = Math.floor(num);
                return new Array(Math.floor(_num));
            };
            $scope.isInteger = function(num){
              return (Math.floor(num) == num);
            };
            $scope.search = {
              toggle: false,
              value: ""
            };

            // TODO manage accents
          $scope.searchFilter = function (bottle) {
              return !!((bottle.wine.display_name.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1 || bottle.wine.appellation.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1 || bottle.wine.region.toLowerCase().indexOf($scope.search.value.toLowerCase() || '') !== -1));
          };

           // We can retrieve a collection from the server
           Bottles.getList().then(function(response){
              $scope.bottleList = response.data;
           });

           $scope.update = function() {
            Bottles.updateList().then(function(response){
              $scope.bottleList = response.data;
             // Stop the ion-refresher from spinning
             $scope.$broadcast('scroll.refreshComplete');
             },function(response){
              $scope.$broadcast('scroll.refreshComplete');
              $cordovaToast.show('Problème de connexion ...', 'short', 'top');
             });
           };

           $scope.get = function() {
            Bottles.getList();
           };

           console.log($stateParams.q);

           $scope.segmentedControl = {
              value: ($stateParams.q == 'rated') ? 'rated' : 'toDrink'
           };

        }]);
  angular.module( 'app.wine', ['ngResource', 'User', 'Rating', 'ionic.rating', 'Offline', 'Loading', 'ngCordova'])
      .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('sidemenu.wine', {
              url: '/wine/{uuid:[^/]*}',
              views: {
                'menuContent' :{
                  controller: 'wineCtrl',
                  templateUrl: "home/wine/wine.tpl.html"
                }
              }
          });
     }])
      .controller( 'wineCtrl', ["$scope", "$rootScope", "$stateParams", "$resource", "$state", "Bottles", "$ionicModal", "Rating", "GroupRating", "OfflineQueue", "$ionicLoading", "$cordovaToast", "$ionicPlatform", "$cordovaNetwork", "Loading", function wineCtrl($scope, $rootScope, $stateParams , $resource, $state , Bottles, $ionicModal, Rating, GroupRating, OfflineQueue, $ionicLoading, $cordovaToast, $ionicPlatform, $cordovaNetwork, Loading) {
            $scope.id = $stateParams.uuid;
            // We can retrieve a collection from the server

          var getById = function (arr, id) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].uuid === id) {
                    return arr[d];
                }
            }
          };

          $scope.rateStars = {
            value: 4
          };
          $scope.showHalf = false;
          $scope.star = {
            full: new Array(4),
            outline: new Array(1)
          };

          $scope.$watch('rateStars.value', function(newValue, oldValue, scope) {
            console.log(newValue);
            // Toggle half star if we have a non integer rating
            $scope.showHalf = (Math.floor(newValue)!=newValue) ? true : false;
            $scope.star = {
              full: new Array(Math.floor(newValue)),
              outline: (Math.floor(newValue)!=newValue) ?  new Array(4-Math.floor(newValue)) : new Array(5-Math.floor(newValue))
            };
          });

           Bottles.getList().then(function(response){
              $scope.bottle = getById(response.data.results, $scope.id);
           });

            // RATING SETTINGS
            $scope.rate = 3;
            $scope.max = 5;

            $scope.literalRating = {};


            // RATING MODAL
            $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.tpl.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $scope.modal = modal;
            });

            // Open & close the modal
            $scope.openModal = function() {
              $scope.rating = new Rating($scope.bottle.uuid, 4);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal < 2)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
                if (newVal > 1.5 && newVal < 3)  { $scope.literalRating.value = "Non, pas trop mon style";}
                if (newVal > 2.5 && newVal < 4)  { $scope.literalRating.value = "J'ai bien aimé ce vin";}
                if (newVal > 3.5 && newVal < 5)  { $scope.literalRating.value = "Oui, c’est bien mon style";}
                if (newVal  == 5)  { $scope.literalRating.value = "C’est exactement le style que j’aime !";}
              });
              $scope.modal.show();
            };
            $scope.closeModal = function() {
              $scope.modal.hide();
            };

            $scope.rateWine = function() {
              if(ionic.Platform.isWebView()) { //if we use cordova
                if ($cordovaNetwork.isOffline()) {//if we are offline
                  // Store Rating and Fake it
                    OfflineQueue.addRating($scope.rating);
                    Bottles.fakeRating($scope.rating).then(function(response){
                                    $scope.closeModal();
                                    $state.go('sidemenu.vinibar');
                                    $cordovaToast.show('Offline Rating ...', 'short', 'top');
                    });

                } else {//if we are online
                      Loading.show();
                      $scope.rating.rateWine().then(function(data, status, headers, config) {
                                                                              Loading.hide();
                                                                              $scope.closeModal();
                                                                              $state.go('sidemenu.vinibar');
                                                                              $cordovaToast.show('Bien reçu !', 'short', 'top');
                                                                        }, function(data, status, headers, config) {
                                                                            Loading.hide();
                                                                            $cordovaToast.show('Oops, Vous n\'êtes pas connecté :(', 'short', 'top').then(function(success) {
                                                                            }, function (error) {
                                                                            // error
                                                                            });
                                                                              // TODO gracefully manage errors/successes
                                                                               console.log(data);
                                                                          });
                }
              } else { // if we are on the web app
                      Loading.show();
                      $scope.rating.rateWine().then(function(data, status, headers, config) {
                                                                              Loading.hide();
                                                                              $scope.closeModal();
                                                                              $state.go('sidemenu.vinibar');
                                                                              $cordovaToast.show('Bien reçu !', 'short', 'top');
                                                                        }, function(data, status, headers, config) {
                                                                            Loading.hide();
                                                                            $cordovaToast.show('Oops, Vous n\'êtes pas connecté :(', 'short', 'top').then(function(success) {
                                                                            }, function (error) {
                                                                            // error
                                                                            });
                                                                              // TODO gracefully manage errors/successes
                                                                               console.log(data);
                                                                          });
              }
            };

            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
              $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
              // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
              // Execute action
            });

            // GROUP RATING MODAL
            $ionicModal.fromTemplateUrl('home/wine.rating/wine.rating.group.tpl.html', {
              scope: $scope,
              animation: 'slide-in-up'
            }).then(function(modal) {
              $scope.group = modal;
            });

            // Open & close the modal
            $scope.openGroupModal = function() {
              $scope.invite = {value: []};
              $scope.updateInviteValue = function(num){
                $scope.invite = {value: new Array(num)};
                $scope.groupRating = new GroupRating($scope.bottle.wine.uuid, 4, num);
              };
              $scope.rating = new Rating($scope.bottle.uuid, 4);
              $scope.$watch('rating.data.rating', function(newVal, oldVal) {
                if (newVal == 1)  { $scope.literalRating.value = "Oops, vraiment pas mon style !";}
                if (newVal == 2)  { $scope.literalRating.value = "Non, pas trop mon style";}
                if (newVal == 3)  { $scope.literalRating.value = "J'ai bien aimé ce vin";}
                if (newVal == 4)  { $scope.literalRating.value = "Oui, c’est bien mon style";}
                if (newVal == 5)  { $scope.literalRating.value = "C’est exactement le style que j’aime !";}
              });
              $scope.group.show();
            };
            $scope.closeGroupModal = function() {
              $scope.group.hide();
            };

            $scope.rateWines = function() {
              if(ionic.Platform.isWebView()) { //if we use cordova
                if ($cordovaNetwork.isOffline()) {
                  // Store Rating and Fake it
                    OfflineQueue.addRating($scope.rating);
                    OfflineQueue.addGroupRating($scope.groupRating);
                    Bottles.fakeRating($scope.rating).then(function(response){
                                    $scope.closeGroupModal();
                                    $state.go('sidemenu.vinibar');
                    });
                } else {
                  Loading.show();
                    // Rate Wine then rate group wines
                    $scope.groupRating.rateWines().then(function(){
                      $scope.rating.rateWine().then(function(response){
                            $scope.closeGroupModal();
                            Loading.hide();
                            $state.go('sidemenu.vinibar');
                      });
                    });
                }
              } else { // if we are on the web app
                  Loading.show();
                    // Rate Wine then rate group wines
                    $scope.groupRating.rateWines().then(function(){
                      $scope.rating.rateWine().then(function(response){
                            $scope.closeGroupModal();
                            Loading.hide();
                            $state.go('sidemenu.vinibar');
                      });
                    });
                }
            };

            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
              $scope.group.remove();
            });
            // Execute action on hide group
            $scope.$on('group.hidden', function() {
              // Execute action
            });
            // Execute action on remove group
            $scope.$on('group.removed', function() {
              // Execute action
            });
        }]);
  angular.module( 'app.sidemenu', ['security'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('sidemenu', {
          // url: "/event",
          abstract: true,
          templateUrl: "sidemenu/sidemenu.tpl.html",
          controller: 'sidemenuCtrl'
        });
}])

      .controller( 'sidemenuCtrl', ["$scope", "$http", "$location", "security", function sidemenuCtrl( $scope, $http, $location, security ) {

        $scope.logOut = function () {
          security.logout('/login');
        };

      }]);

angular.module('security.login.form', ['ngCordova', 'ionic', 'Loading'])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: "/login",
        templateUrl: "security/loginform.tpl.html",
        controlller: 'LoginFormController'
      });
  }])

// The LoginFormController provides the behaviour behind a reusable form to allow users to authenticate.
// This controller and its template (login/form.tpl.html) are used in a modal dialog box by the security service.
.controller('LoginFormController', ['$location', 'Loading', '$rootScope','$scope', 'security', '$cordovaToast', '$cordovaNetwork', '$ionicPlatform', function($location, Loading, $rootScope, $scope, security, $cordovaToast, $cordovaNetwork, $ionicPlatform) {
  // The model for this form
  $scope.user = {};


  // Any error message from failing to login
  $scope.authError = null;

  // The reason that we are being asked to login - for instance because we tried to access something to which we are not authorized
  // We could do something diffent for each reason here but to keep it simple...
  $scope.authReason = null;
  // if ( security.getLoginReason() ) {
  //   $scope.authReason = ( security.isAuthenticated() ) ?
  //     localizedMessages.get('login.reason.notAuthorized') :
  //     localizedMessages.get('login.reason.notAuthenticated');
  // }

  // Attempt to authenticate the user specified in the form's model
  $scope.login = function() {
    if (ionic.Platform.isWebView()) {
          if(!$cordovaNetwork.isOnline()) {
              $cordovaToast.show('Vous n\'êtes pas connecté au réseau', 'long', 'top').then(function(success) {
              }, function (error) {
                // error
              });
          }
          console.log("try to login");
          // $scope.show();
          // Clear any previous security errors
          $scope.authError = null;

          // Try to login
          security.login($scope.user.email, $scope.user.password).then(function(loggedIn) {
            if ( !loggedIn ) {
              // If we get here then the login failed due to bad credentials
              // $scope.hide();
            Loading.hide();
              $scope.authError = 'Combinaison email/mot de passe erronée';
            }
            else {
              // $scope.hide();
            Loading.hide();
              $location.path('/home'); }
          }, function(x) {
            // If we get here then there was a problem with the login request to the server
            // $scope.hide();
            Loading.hide();
            $scope.authError = 'Il y a un problème de connexion. Merci de réessayer';
          });
    } else {
        console.log("try to login");
        // $scope.show();
        // Clear any previous security errors
        $scope.authError = null;

        // Try to login
        security.login($scope.user.email, $scope.user.password).then(function(loggedIn) {
          if ( !loggedIn ) {
            // If we get here then the login failed due to bad credentials
            // $scope.hide();
                        Loading.hide();
            $scope.authError = 'Combinaison email/mot de passe erronée';
          }
          else {
            // $scope.hide();
            Loading.hide();
            $location.path('/home'); }
        }, function(x) {
          // If we get here then there was a problem with the login request to the server
          // $scope.hide();
            Loading.hide();
          $scope.authError = 'Il y a un problème de connexion. Merci de réessayer';
        });
    }
  };

  $scope.clearForm = function() {
    $scope.user = {};
  };

}]);
// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('security', [
  'security.service',
  'security.login.form',
  'security.interceptor']);

angular.module('security.interceptor', ['ngCookies'])

// We'll intercept all request and put the token in it
.factory('authInterceptor', ["$rootScope", "$q", "$window", "$location", function ($rootScope, $q, $window, $location) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Token ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
        $location.path('/login');
      }
      return response || $q.when(response);
    }
  };
}])
.config(["$httpProvider", function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
}]);
angular.module('services.localizedMessages', []).factory('localizedMessages', ['$interpolate', 'I18N.MESSAGES', function ($interpolate, i18nmessages) {

  var handleNotFound = function (msg, msgKey) {
    return msg || '?' + msgKey + '?';
  };

  return {
    get : function (msgKey, interpolateParams) {
      var msg =  i18nmessages[msgKey];
      if (msg) {
        return $interpolate(msg)(interpolateParams);
      } else {
        return handleNotFound(msg, msgKey);
      }
    }
  };
}]);
angular.module('security.retryQueue', [])

// This is a generic retry queue for security failures.  Each item is expected to expose two functions: retry and cancel.
.factory('securityRetryQueue', ['$q', '$log', function($q, $log) {
  var retryQueue = [];
  var service = {
    // The security service puts its own handler in here!
    onItemAddedCallbacks: [],

    hasMore: function() {
      return retryQueue.length > 0;
    },
    push: function(retryItem) {
      retryQueue.push(retryItem);
      // Call all the onItemAdded callbacks
      angular.forEach(service.onItemAddedCallbacks, function(cb) {
        try {
          cb(retryItem);
        } catch(e) {
          $log.error('securityRetryQueue.push(retryItem): callback threw an error' + e);
        }
      });
    },
    pushRetryFn: function(reason, retryFn) {
      // The reason parameter is optional
      if ( arguments.length === 1) {
        retryFn = reason;
        reason = undefined;
      }

      // The deferred object that will be resolved or rejected by calling retry or cancel
      var deferred = $q.defer();
      var retryItem = {
        reason: reason,
        retry: function() {
          // Wrap the result of the retryFn into a promise if it is not already
          $q.when(retryFn()).then(function(value) {
            // If it was successful then resolve our deferred
            deferred.resolve(value);
          }, function(value) {
            // Othewise reject it
            deferred.reject(value);
          });
        },
        cancel: function() {
          // Give up on retrying and reject our deferred
          deferred.reject();
        }
      };
      service.push(retryItem);
      return deferred.promise;
    },
    retryReason: function() {
      return service.hasMore() && retryQueue[0].reason;
    },
    cancelAll: function() {
      while(service.hasMore()) {
        retryQueue.shift().cancel();
      }
    },
    retryAll: function() {
      while(service.hasMore()) {
        retryQueue.shift().retry();
      }
    }
  };
  return service;
}]);

// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('security.service', [
  'security.login.form',         // Contains the login form template and controller
  'User', 'Referrals',
  'Loading',
  'Offline',
  'ngCookies'
])
.factory('security', [ '$http', '$q', '$location', 'User', 'Bottles', 'Referrals', 'Addresses', '$window', 'Loading', 'OfflineUser', '$cookies', function($http, $q, $location, User, Bottles, Referrals, Addresses, $window, Loading, OfflineUser, $cookies) {
 var apiEndPoint =  'https://api.vinify.co/api';
 var restApiEndPoint =  'https://api.vinify.co/restapi';
  // Redirect to the given url (defaults to '/')
  function redirect(url) {
    url = url || '/';
    $location.path(url);
  }

  // // Register a handler for when an item is added to the retry queue
  // queue.onItemAddedCallbacks.push(function(retryItem) {
  //   if ( queue.hasMore() ) {
  //     service.showLogin();
  //   }
  // });

  // The public API of the service
  var service = {

    // // Get the first reason for needing a login
    // getLoginReason: function() {
    //   return queue.retryReason();
    // },

    // Show the modal login dialog
    showLogin: function() {
     redirect('/login');
    },

    // Attempt to authenticate a user by the given email and password
    login: function(email, password) {
      Loading.show();
      service.currentUser = null;
      User.removeUser();
      delete $window.sessionStorage.token;
      var request = $http({
                            url: apiEndPoint + '/users/login/',
                            method: "POST",
                            data: {'username': email,  'password': password},
                            headers: {
                                     'Content-Type': 'application/json; charset=UTF-8'
                            }
                    });
      return request.success(function(data, status, headers, config) {
                                      Loading.hide();
                                      // SET USER FOR THIS SERVICE (USEFUL FOR ISLOGGEDIN)
                                      service.currentUser = data;
                                      // SET USER IN ANGULAR AND LOCAL STORAGE
                                      User.setUser(data);
                                      // SET AUTH TOKEN FOR FURTHER REQUESTS
                                      $window.sessionStorage.token = data.token;
                                      console.log($window.sessionStorage.token);
                                      return service.isAuthenticated();
                                    })
                                    .error(function(){
                                      Loading.hide();
                                    });
    },

    // Logout the current user and redirect
    logout: function(redirectTo) {
        service.currentUser = null;
        // Erase all traces.
        User.removeUser();
        Addresses.removeAddresses();
        Referrals.removeReferrals();
        Bottles.removeBottles();
        console.log('removing traces');
        delete $window.sessionStorage.token;
        redirect(redirectTo);
    },

    // Ask the backend to see if a user is already authenticated - this may be from a previous session.
    requestCurrentUser: function() {
      if ( service.isAuthenticated() ) {
        // let's go home
        console.log('Method isAuth');
        return $q.when(service.currentUser);
      } else if ( User.getUser() ) {
            console.log('Logging With Local');
            service.currentUser = User.getUser();
            $window.sessionStorage.token = User.getUser().token;
            return $q.when(User.getUser());
      } else {
        // We don't need to try isloggedin. Without token we're naked.
        // return $http.get(apiEndPoint + '/users/isloggedin/').then(
        //   //Success: set currentUser
        //   function(response) {
        //     service.currentUser = response.data;
        //     User.setUser(response.data);
        //     OfflineUser.setUser(data);
        //     $window.sessionStorage.token = response.data.token;
        //     console.log($window.sessionStorage.token);
        //     return service.currentUser;
        //   },
          //Error: Reroute User to login
          // function(){
            $location.path('/login');
            console.log('Redirect');
            delete $window.sessionStorage.token;
          // }
        // );
      }
    },

    // Information about the current user
    currentUser: null,
    currentUserData: null,

    // Is the current user authenticated?
    isAuthenticated: function(){
      return !!service.currentUser;
    },

    // Is the current user an adminstrator?
    isStaff: function() {
      return !!(service.currentUser && service.currentUser.is_staff);
    }
  };

  return service;
}]);


angular.module('Loading', ['ionic'])

  //  The base Class from which every object will inherit

.factory('Loading', ["$ionicLoading", function($ionicLoading) {

  // Trigger the loading indicator
  var show = function() {

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
  var hide = function(){
    $ionicLoading.hide();
  };

    return {
      'show': show,
      'hide': hide
    };
}]);
angular.module('Offline', ['LocalStorageModule'])
.factory('OfflineQueue', ["localStorageService", "$q", function(localStorageService, $q) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';
	// instantiate our initial object
	var _ratingQueue =[];
	var _updateRatingQueue =[];
	var _groupRatingQueue =[];
	var _rateAndDelete = function(i){
		_ratingQueue[i].rateWine()
			.success(function(response){
				_ratingQueue.splice(i,1);
			});
	};
	var _updateRatingAndDelete = function(i){
		_updateRatingQueue[i].updateWine()
			.success(function(response){
				_updateRatingQueue.splice(i,1);
			});
	};
	var _groupRateAndDelete = function(i){
		_groupRatingQueue[j].rateWines()
			.success(function(response){
				_groupRatingQueue.splice(i,1);
			});
	};

	return {
		getRatings : function() {
			_ratingQueue = localStorageService.get('ratings');
			_updateRatingQueue = localStorageService.get('updateRatings');
			_groupRatingQueue = localStorageService.get('groupRatings');
			return {
				'ratings': _ratingQueue,
				'updateRatings': _updateRatingQueue,
				'groupRatings': _groupRatingQueue
			};
		},
		addRating : function(rating) {
			_ratingQueue.push(rating);
			localStorageService.set('ratings', _ratingQueue);
			console.log('added rating to local storage');
			console.log(localStorageService.get('ratings'));
			return localStorageService.get('ratings');
		},
		addUpdateRating : function(rating) {
			_updateRatingQueue.push(rating);
			localStorageService.set('updateRatings', _updateRatingQueue);
			console.log('added updateRating to local storage');
			console.log(localStorageService.get('updateRatings'));
			return localStorageService.get('updateRatings');
		},
		addGroupRating : function(groupRating) {
			_groupRatingQueue.push(groupRating);
			localStorageService.set('groupRatings', _groupRatingQueue);
			console.log('added groupRating to local storage');
			console.log(localStorageService.get('groupRatings'));
			return localStorageService.get('groupRatings');
		},
		sendRatings : function() {
			// Creates two promises that will tell if all is in order
			var rating = $q.defer();
			var groupRating = $q.defer();
			var updateRating = $q.defer();

			if (_ratingQueue.length) { // we have ratings to send
				for (var i = _ratingQueue.length - 1; i >= 0; i--) {
					_rateAndDelete(i); // rate a wine and delete it from the array
					console.log(i);
				}
				console.log(_ratingQueue);
				localStorageService.remove('ratings');
				console.log('sent Ratings');
				rating.resolve('RatingsSent');

			} else { // we have no ratings to send
				console.log('no ratings to send');
				rating.resolve('NoRatingsToSend');
			}
			if (_groupRatingQueue.length) {// we have groupRatings to send
				for (var j = _groupRatingQueue.length - 1; j >= 0; j--) {
						_groupRateAndDelete(j); // rate a wine and delete it from the array
				}
				localStorageService.remove('groupRatings');
				console.log('sent groupRatings');
				rating.resolve('GroupRatingsSent');
			} else {// we have no ratings to send
				console.log('no GroupRatings to send');
				rating.resolve('NoGroupRatingsToSend');
			}
			if (_updateRatingQueue.length) {// we have updates to send
				for (var k = _updateRatingQueue.length - 1; k >= 0; k--) {
						_updateRatingAndDelete(k); // rate a wine and delete it from the array
				}
				localStorageService.remove('updateRatings');
				console.log('sent updateRatings');
				updateRating.resolve('updateRatingsSent');
			} else {// we have no updateRatings to send
				console.log('no updateRatings to send');
				updateRating.resolve('NoUpdateRatingsToSend');
			}
			return $q.all([rating.promise, groupRating.promise, updateRating.promise]);
		}
	};
}])

.factory('OfflineUser', ["localStorageService", function(localStorageService) {
	// instantiate our initial object
	var _user = null;

	return {
		getUser: function() {
			_user = localStorageService.get('user');
			// returns null if not set
			return _user;
		},
		setUser: function(user) {
			_user = user;
			localStorageService.set('user', user);
			console.log('added user to local storage');
			return _user;
		},
		removeUser: function(user) {
			localStorageService.clearAll();
			console.log(localStorageService.keys());
			return _user;
		}
	};
}])

.factory('OfflineWineData', ["localStorageService", function(localStorageService) {

	return {
		getWines : function() {
			// returns null in not set
			return localStorageService.get('wines');
		},
		setWines : function(wines) {
			localStorageService.set('wines', wines);
			console.log('added wines to local storage');
			console.log(localStorageService.get('wines'));
			return localStorageService.get('wines');
		}
	};

}])

.factory('OfflineReferralsData', ["localStorageService", function(localStorageService) {

	return {
		getReferrals : function() {
			return localStorageService.get('referrals');
		},
		setReferrals : function(referrals) {
			localStorageService.set('referrals', referrals);
			console.log('added referrals to local storage');
			console.log(localStorageService.get('referrals'));
			return localStorageService.get('referrals');
		}
	};
}]);
angular.module('Order', [])

.factory('Order', ["$http", "Bottles", "SerializedOrder", function($http, Bottles, SerializedOrder) {
		var apiEndPoint =  'https://api.vinify.co/api';
		var restApiEndPoint =  'https://api.vinify.co/restapi';

		var Order = function (id){
				this.data = {
						quantity: 1,
						refills: [new Refill(1, 49.90)],
						coupon: "",
						delivery_mode: null,
						delivery_cost: null,
						split:  {
							red:2,
							rose:2,
							white:2
						}
				};
				this.serializedOrder = {};
		};

		var Refill = function (num, price){
				this.refill_number = num;
				this.price_level = price;
		};

		// add one refill and increment _refillNumber
		Order.prototype.addRefill = function(price) {
				this.data.refills.push(new Refill(this.data.quantity, price));
		};

		// TODO REFACTOR
		Order.prototype.createRefillOrder = function() {
				var data = this.data;
				var self = this;
				var request = $http({
												url:  apiEndPoint + '/orders/refillorder/',
												method: 'POST',
												data: data,
												headers: {
													'Content-Type': 'application/json; charset=UTF-8'
												}
											});

					return request
														.success(function(data, status, headers, config) {
																// TODO gracefully manage errors/successes
																angular.extend(SerializedOrder, data);
														})
														.error(function(data, status, headers, config) {
																// TODO gracefully manage errors/successes
																console.log(data);
														});
		};

		return Order;
}])

.factory('orderInstance', ["Order", function(Order) {
		var orderInstance = new Order();

		orderInstance.setOrderInstance = function(orderData) {
				angular.extend(orderInstance, orderData);
		};
		return orderInstance;
}])

// Store the Order
.factory('SerializedOrder', ["$http", "Bottles", function($http, Bottles) {

		var SerializedOrder = {};

		return SerializedOrder;
}])
// Stripe Directive
	.directive('ngSparkline', function() {
		return {
			restrict: 'A',
			controller: ["$scope", "$http", "$state", function($scope, $http, $state) {
				$scope.handler = StripeCheckout.configure({
					key: "pk_live_gNv4cCe8tsZpettPUsdQj25F",
					//key: "pk_test_sK21onMmCuKNuoY7pbml8z3Q",
					image: "assets/utils/apple-touch-icon.png",
					token: function(token, args) {
						var data = {
							token: token,
							order_id: $scope.serializedOrder.uuid
					};
						var apiEndPoint =  'https://api.vinify.co/api';
						$http({
															url: apiEndPoint + '/orders/chargerefill',
															method: "POST",
															data: data
											})
											.success(function(data, status, headers, config) {
												// IF MRELAY SEND EMAIL TO USER
												if ($scope.serializedOrder.delivery_mode === 'Point Relais') {
													// TODO SEND EMAIL
														// $http({
														//     url: '/pickmremail/',
														//     method: "POST",
														//     data: { 'order_id': $scope.user_contact.order.id },
														//     headers: {
														//              'Content-Type': 'application/json; charset=UTF-8'
														//     }
														// })
												}
												alert('success !');
												$state.go('sidemenu.home');
											})
											.error(function(data, status, headers, config) {
												alert(data);
											});
					}
				});
			}],
			link: function(scope, element, attrs) {


				element.bind('click',function(e) {
					// Open Checkout with further options
					// Check nb.refill and update amount to be charged
					// if (scope.user_contact.profile.nb_refill === 1)
					//   {scope.user_contact.order.updated_amount = scope.user_contact.order.amount * 100 + 90 +690;}
					// if (scope.user_contact.profile.nb_refill === 2)
					//   {scope.user_contact.order.updated_amount = scope.user_contact.order.amount * 200 + 180 +1090;}

					scope.handler.open({
						name: "Vinify",
						description: "Recharge Vinibar",
						currency: "EUR",
						panelLabel: "Payer",
						amount: Math.ceil(scope.serializedOrder.final_price * 100),
						email: scope.user.email
					});
					e.preventDefault();
				});
			}
		};
	});

angular.module('Rating', ['ngResource', 'User'])

.factory('Rating', ["$http", "Bottles", function($http, Bottles) {
     var apiEndPoint =  'https://api.vinify.co/api';
     var restApiEndPoint =  'https://api.vinify.co/restapi';

    var Rating = function (uuid, urating, ucomment){
        this.data = {
            bottle_uuid:  uuid,
            // set to previous rating or null if unrated
            rating: (typeof urating === "undefined") ? null : urating,
            comment: (typeof ucomment === "undefined") ? null : ucomment
        };
    };

    // Rating.protoype.rateWine = function (id) {

    // };

    // Url & request private variables
    var theUrl;


// TODO REFACTOR
    Rating.prototype.updateWine = function() {
        theUrl = '/wines/updaterating/';
        var data = this.data;
        var request = $http({
                        url:  apiEndPoint + theUrl,
                        method: 'POST',
                        data: data,
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8'
                        }
                      });
          return request.success(function(data, status, headers, config) {
                                                            Bottles.setList(data);
                                                        });
    };

    Rating.prototype.rateWine = function() {
        // Rate and update BotlesList
        theUrl = '/wines/rate/';
        var data = this.data;
        var request = $http({
                        url:  apiEndPoint + theUrl,
                        method: 'POST',
                        data: data,
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8'
                        }
                      });
          return request.success(function(data, status, headers, config) {
                                                            Bottles.setList(data);
                                                        });
    };

    return Rating;
}])

.factory('GroupRating', ["$http", "Bottles", "Rating", function($http, Bottles, Rating) {
     var apiEndPoint =  'https://api.vinify.co/api';
     var restApiEndPoint =  'https://api.vinify.co/restapi';

    var GroupRating = function (uuid, urating, num){
        // TODO PUSH RATING WHEN THEY COME
        this.data = {
            wine_uuid: uuid,
            ratings:[]
        };
        for (var i = num - 1; i >= 0; i--) {
            this.data.ratings.push(new GuestRating(urating));
         }
    };

    var GuestRating = function (urating){
            this.email =  "";
            this.rating =  (typeof urating === "undefined") ? null : urating;
            this.comment = "";
    };

    GroupRating.prototype.addRating = function(guestRating) {
        this.data.ratings.push(guestRating);
    };

    GroupRating.prototype.rateWines = function() {

        var data = this.data;
        var request = $http({
                            url: apiEndPoint + '/wines/guestrating/',
                            method: 'POST',
                            data: data,
                            headers: {
                              'Content-Type': 'application/json; charset=UTF-8'
                            }
                          });

          return request.success(function(data, status, headers, config) {
                                                            Bottles.setList(data);
                                                        });
    };

    return GroupRating;
}]);

angular.module('Referrals', ['Offline'])
.factory('Referrals', ["$http", "$q", "OfflineReferralsData", function($http, $q, OfflineReferralsData) {
    var apiEndPoint =  'https://api.vinify.co/api';
    var restApiEndPoint =  'https://api.vinify.co/restapi';
    // instantiate our initial object
    var Referrals = {};

    Referrals.getList = function () {
        // TODO REFACTOR
        var promise;
        if (Referrals.data) {
                var deferred = $q.defer();
                promise = deferred.promise;
                deferred.resolve(Referrals.data);
        }

        else {

                // promise = $resource( restApiEndPoint + '/vinibar/' )
                promise = $http({
                                                url:  apiEndPoint + '/users/referrals/' ,
                                                method: 'GET'
                                              })
                                        .success(
                                            // Success Handler
                                            function(data, status, headers, config) {
                                                Referrals.data =  data;
                                                OfflineReferralsData.setReferrals(data);
                                            })
                                        .error(
                                            // Error Handler
                                            function(data){}
                                        );
        }

        return promise;

    };

    Referrals.updateList = function () {

                // promise = $resource( restApiEndPoint + '/vinibar/' )
                promise = $http({
                                                url:  apiEndPoint + '/users/referrals/' ,
                                                method: 'GET'
                                              })
                                        .success(
                                            // Success Handler
                                            function(data, status, headers, config) {
                                                Referrals.data =  data;
                                                OfflineReferralsData.setReferrals(data);
                                            })
                                        .error(
                                            // Error Handler
                                            function(data){}
                                        );

        return promise;

    };

    Referrals.removeReferrals = function () {
        Referrals.data = null;
    };

    return Referrals;
}])

.factory('Referral', ["$http", "OfflineReferralsData", "Referrals", function($http, OfflineReferralsData, Referrals) {
    var apiEndPoint =  'https://api.vinify.co/api';
    var restApiEndPoint =  'https://api.vinify.co/restapi';

    var Referral = function (){
        this.first_name = null;
        this.email = null;
    };


    // TODO REFACTOR
    Referral.prototype.sendReferral = function() {
        var self = this;
        var request = $http({
                            url:  apiEndPoint + '/orders/referralemail/',
                            method: 'POST',
                            data: self,
                            headers: {
                            'Content-Type': 'application/json; charset=UTF-8'
                            }
                        });
        return request.success(
                                        // Success Handler
                                        function(data, status, headers, config) {
                                            Referrals.data =  data;
                                            OfflineReferralsData.setReferrals(data);
                                        })
                                    .error(
                                        // Error Handler
                                        function(data){}
                                    );
    };

    return Referral;
}]);
// angular.module('RestResource', ['ngResource'])

// .factory('RestResource', function($resource) {

//     // instantiate our initial object
//     var endPoint = '/restapi/'
//     var RestResource = $resource("", {},
//     {
//         getAll: function (obj) {
//             return {
//                 method: "GET",
//                 url: endPoint + obj + '/'
//             }
//         },
//         getAll: function (obj) {
//             return {
//                 method: "GET",
//                 url: endPoint + obj + '/'
//             }
//         },
//         getAll: function (obj) {
//             return {
//                 method: "GET",
//                 url: endPoint + obj + '/'
//             }
//         },

//     });

//     return RestResource;
// });

        // User.status = UserData.status;
        // User.profile = UserData.profile;
        // User.first_name = UserData.first_name;
        // User.last_name = UserData.last_name;
        // User.is_staff = UserData.is_staff;
        // User.uuid = UserData.uuid;
        // User.is_superuser = UserData.is_superuser;
        // User.class_name = UserData.class_name;
        // User.sex = UserData.sex;
        // User.phone = UserData.phone;
        // User.birthday = UserData.birthday;
        // User.last_login = UserData.last_login;
        // User.beta_tester = UserData.beta_tester;
        // User.email = UserData.email;
        // User.addresses = UserData.addresses;
angular.module('User', ['ngResource', 'Loading', 'Offline'])
.factory('User', ["OfflineUser", "$http", "$location", function(OfflineUser, $http, $location) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';
	// instantiate our initial object
	var _user = null;
	var self = this;
	return  {
		setUser: function(UserData) {
			_user =  UserData;
			OfflineUser.setUser(UserData);
			console.log('User updated');
			console.log(_user);
		},
		getUser: function () {
			// The getter returns either the angular user, or the local data user (and sets the angular user) or false
			if (_user) {
				console.log('returning _user {}');
				console.log(_user);
				return _user;
			} else if (OfflineUser.getUser()) {
				_user = OfflineUser.getUser();
				console.log('returning OfflineUser.getUser()');
				return OfflineUser.getUser();
			} else {
				console.log('returning false');
				return false;
			}
		},
		updateUser: function() {
			return $http.get(apiEndPoint + '/users/isloggedin/')
					.success(function(data, status, headers, config) {
						setUser(data);
						return getUser();
					})
					.error(function(response){
						// TODO manage errors
						alert(data);
						location.path('/login');
					});
		},
		postUser: function() {
			return $http.put(restApiEndPoint + '/users/'+_user.uuid + '/', _user);
		},
		removeUser: function () {
			_user = {};
			OfflineUser.removeUser();
		}
	};
}])

.factory('Bottles', ["$q", "$http", "Loading", "OfflineWineData", function($q, $http, Loading, OfflineWineData) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';
	// instantiate our initial object
	var _bottles = null;

	return {
		getList : function () {
			// TODO REFACTOR
			if (_bottles) {
				return $q.when({'data': _bottles});
			} else if (OfflineWineData.getWines()) {
				_bottles = OfflineWineData.getWines();
				console.log('returning OfflineWineData.getWines()');
				return $q.when({'data': _bottles});
			} else {
				Loading.show();
				// promise = $resource( restApiEndPoint + '/vinibar/' )
				var promise = $http({
					url:  restApiEndPoint + '/vinibar/' ,
					method: 'GET'
				})
				.success(function(data, status, headers, config) {
					Loading.hide();
					_bottles = data;
					OfflineWineData.setWines(data);
					console.log(_bottles);
				})
				.error(function(data){
					Loading.hide();
				});
				return promise;
			}
		},

		// Fake Rating // OFFLINE
		fakeRating : function (rating) {
			// getByID and Update
			for (var d = 0, len = _bottles.results.length; d < len; d += 1) {
				if (_bottles.results[d].uuid === rating.data.bottle_uuid) {
					var date_rated = new Date();
					_bottles.results[d].date_rated = date_rated.toISOString();
					_bottles.results[d].comment = rating.data.comment;
					_bottles.results[d].rating = rating.data.rating;
					console.log('faked rating of' + _bottles.results[d].uuid);
					console.log(_bottles.results[d]);
				}
			}
			return $q.when({'data': _bottles});
		},

		updateList : function () {
			console.log('try to update');
			// TODO REFACTOR
			// returning fetched bottlesList
			return $http({
						url:  restApiEndPoint + '/vinibar/' ,
						method: 'GET'
					})
					.success(
						// Success Handler
						function(BottlesData) {
							_bottles = BottlesData;
							OfflineWineData.setWines(BottlesData);
							console.log(_bottles);
							return $q.when({'data': _bottles});
					})
					.error(
						// Error Handler
						function(data){}
					);
		},

		setList : function (list) {
			_bottles.results = list;
			OfflineWineData.setWines(list);
		},

		removeBottles: function () {
			_bottles = null;
		}
	};
}])

.factory('Bottle', ["User", function(User) {

	// instantiate our initial object
	var Bottle = {
	class_name: "Bottle",
	uuid: ""
	};

	Bottle.setBottle = function(BottleData) {
		Bottle = BottleData;
	};

	Bottle.unSetBottle = function () {
		Bottle = {};
	};

	return Bottle;
}])


.factory('Addresses', ["$q", "$http", "Loading", "User", function($q, $http, Loading, User) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';
	// instantiate our initial object
	var Addresses = {};

	Addresses.getList = function () {
		// TODO REFACTOR
		var promise;
		if (Addresses.data) {
		var deferred = $q.defer();
		promise = deferred.promise;
		deferred.resolve(Addresses);
		}

		else {

		promise = $http({
						url:  apiEndPoint + '/users/addresses/',
						method: 'GET'
					})
					.success(
						// Success Handler
						function(addressData) {
							Addresses.data = addressData;
							console.log(Addresses);
							return Addresses.data;
					})
					.error(
						// Error Handler
						function(data){}
					);
		}

	return promise;

	};

	// Updates current adresses when a select change occurres
	Addresses.fireDelivery = function (id) {
		console.log(id);
		Loading.show();
		var data = {
			'uuid': id,
			'current_delivery': true
		};

		$http({
			url:  apiEndPoint + '/users/updateaddress/',
			method: 'PUT',
			data: data,
			headers: {
			'Content-Type': 'application/json; charset=UTF-8'
			}
		})
		.success(function(data, status, headers, config) {
			// TODO gracefully manage errors/successes
			console.log(data);
			// we changed the user so we need to update it
			User.setUser(data);
			Loading.hide();
		})
		.error(function(data, status, headers, config) {
			// TODO gracefully manage errors/successes
			Loading.hide();
		});
	};

	// Updates current adresses when a select change occurres
	Addresses.fireBilling = function (id) {
		console.log(id);
		Loading.show();
		var data = {
		'uuid': id,
		'current_billing': true
		};

		$http({
			url:  apiEndPoint + '/users/updateaddress/',
			method: 'PUT',
			data: data,
			headers: {
			'Content-Type': 'application/json; charset=UTF-8'
			}
		})
		.success(function(data, status, headers, config) {
			// we changed the user so we need to update it
			// TODO gracefully manage errors/successes
			console.log(data);
			User.setUser(data);
			Loading.hide();
		})
		.error(function(data, status, headers, config) {
			// TODO gracefully manage errors/successes
			Loading.hide();
		});
	};

	Addresses.updateList = function () {
		console.log('try to update');
		// TODO REFACTOR
		// returning fetched AddressesList
		return   $http({
					url:  apiEndPoint + '/users/addresses/',
					method: 'GET'
				})
				.success(
					// Success Handler
					function(addressData) {
					Addresses.data = addressData;
				})
				.error(
					// Error Handler
					function(data){}
				);
	};

	Addresses.removeAddresses = function () {
		Addresses.data = null;
	};

	return Addresses;
}])

.factory('Address', ["$http", "Addresses", "User", function($http, Addresses, User) {
	var apiEndPoint =  'https://api.vinify.co/api';
	var restApiEndPoint =  'https://api.vinify.co/restapi';

	var Address = function (user){
		this.data = {
		city: "",
		current_billing: true,
		class_name: 'address',
		country: "",
		company: "",
		intercom: "",
		digicode: "",
		other_info: "",
		zipcode: "",
		street: "",
		user: user,
		current_delivery: true
		};
	};

	var theUrl = '/users/';


	// TODO REFACTOR
	Address.prototype.updateAddress = function() {
		var data = this.data;
		var request = $http({
							url:  apiEndPoint + theUrl + 'updateaddress/',
							method: 'PUT',
							data: data,
							headers: {
							'Content-Type': 'application/json; charset=UTF-8'
							}
						});
		return request;
	};

	Address.prototype.createAddress = function() {
		var data = this.data;
		var request = $http({
							url:  apiEndPoint + theUrl + 'addaddress/',
							method: 'POST',
							data: data,
							headers: {
							'Content-Type': 'application/json; charset=UTF-8'
							}
						});
		return request;
	};

	Address.prototype.setAddress = function(address) {
		angular.extend(this.data, address);
	};

	return Address;
}]);
angular.module('templates-app', ['home/deliverymode/deliverymode.tpl.html', 'home/home.tpl.html', 'home/order/order.tpl.html', 'home/pay/pay.tpl.html', 'home/profile/profile.tpl.html', 'home/profile/referral.tpl.html', 'home/profile/user.tpl.html', 'home/ratedwine/ratedwine.tpl.html', 'home/vinibar/vinibar.tpl.html', 'home/wine.rating/wine.rating.group.tpl.html', 'home/wine.rating/wine.rating.tpl.html', 'home/wine/wine.tpl.html', 'sidemenu/sidemenu.tpl.html']);

angular.module("home/deliverymode/deliverymode.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/deliverymode/deliverymode.tpl.html",
    "<ion-view title=\"Mode de Livraison\">\n" +
    "	<ion-content class=\"has-footer\" has-bouncing=\"false\">\n" +
    "		<!-- <div class=\"list radio-delivery\"> -->\n" +
    "			<label class=\"item item-radio\">\n" +
    "				<input type=\"radio\" ng-model=\"order.data.delivery_mode\" name=\"choice\" value=\"Colissimo\">\n" +
    "				<div class=\"item-content item-delivery-mode item-text-wrap\">\n" +
    "					<div class=\"row row-center\">\n" +
    "						<div class=\"col col-25\">\n" +
    "							<svg viewBox=\"0 0 50 50\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "									<!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "									<title>TRUCK</title>\n" +
    "									<desc>Created with Sketch.</desc>\n" +
    "									<defs></defs>\n" +
    "									<g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "											<g id=\"Camion-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 1.000000)\">\n" +
    "													<circle class=\"circle-svg\" stroke=\"#FC3432\" fill=\"#FC3432\" sketch:type=\"MSShapeGroup\" cx=\"24\" cy=\"24\" r=\"24\"></circle>\n" +
    "													<path d=\"M32.0615332,31.689462 L21.7671599,31.689462 C21.5846895,30.3969631 20.4784625,29.4085817 19.1365446,29.4085817 C17.7946266,29.4085817 16.6883997,30.3969631 16.5059293,31.689462 L13.4343437,31.689462 L13.4343437,18.0041799 L32.0615332,18.0041799 L32.0615332,31.689462 Z\" id=\"Shape\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n" +
    "													<path d=\"M37.7637341,21.8056472 L32.8218267,21.8056472 L32.8218267,31.689462 L33.9926786,31.689462 C34.175149,30.3969631 35.281376,29.4085817 36.6232939,29.4085817 C37.9652118,29.4085817 39.0714388,30.3969631 39.2539092,31.689462 L40.4247611,31.689462 L40.4247611,24.4666742 C40.4247611,22.9955064 39.2349019,21.8056472 37.7637341,21.8056472 L37.7637341,21.8056472 Z M39.6644677,25.6071144 L33.5821201,25.6071144 L33.5821201,22.5659406 L37.2999551,22.5659406 C39.284321,22.5659406 39.6644677,23.6227485 39.6644677,24.9304533 L39.6644677,25.6071144 L39.6644677,25.6071144 Z\" id=\"Shape\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n" +
    "													<ellipse id=\"Oval\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\" cx=\"19.1365446\" cy=\"32.0696087\" rx=\"1.90073362\" ry=\"1.90073362\"></ellipse>\n" +
    "													<ellipse id=\"Oval\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\" cx=\"36.6232939\" cy=\"32.0696087\" rx=\"1.90073362\" ry=\"1.90073362\"></ellipse>\n" +
    "													<rect id=\"Rectangle-path\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\" x=\"8.49243631\" y=\"20.2850603\" width=\"3.80146724\" height=\"0.760293449\"></rect>\n" +
    "													<rect id=\"Rectangle-path\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\" x=\"8.49243631\" y=\"24.0865275\" width=\"3.80146724\" height=\"0.760293449\"></rect>\n" +
    "													<rect id=\"Rectangle-path\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\" x=\"8.49243631\" y=\"27.8879948\" width=\"3.80146724\" height=\"0.760293449\"></rect>\n" +
    "											</g>\n" +
    "									</g>\n" +
    "							</svg>\n" +
    "						</div>\n" +
    "						<div class=\"col\">\n" +
    "							<h2>Colissimo - {{displayPrice(deliveryPrices['Colissimo'][order.data.quantity - 1])}} €</h2>\n" +
    "							<p>Livraison suivie sous 15j par la Poste.</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<i class=\"radio-icon ion-checkmark\"></i>\n" +
    "			</label>\n" +
    "\n" +
    "			<label class=\"item item-radio\">\n" +
    "				<input type=\"radio\" ng-model=\"order.data.delivery_mode\" name=\"choice\" value=\"Point Relais\">\n" +
    "				<div class=\"item-content item-delivery-mode item-text-wrap\">\n" +
    "					<div class=\"row row-center\">\n" +
    "						<div class=\"col col-25\">\n" +
    "							<svg viewBox=\"0 0 50 50\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "							    <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "							    <title>STORE</title>\n" +
    "							    <desc>Created with Sketch.</desc>\n" +
    "							    <defs></defs>\n" +
    "							    <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "							        <g id=\"Store-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(1.000000, 1.000000)\">\n" +
    "							            <g id=\"Your_Icon\" transform=\"translate(0.075444, 0.010935)\" sketch:type=\"MSShapeGroup\">\n" +
    "							                <circle class=\"circle-svg\" stroke=\"#FC3432\" fill=\"#FC3432\" sketch:type=\"MSShapeGroup\" cx=\"24\" cy=\"24\" r=\"24\"></circle>\n" +
    "							                <path d=\"M15.2216521,35.3692109 L32.7894093,35.3692109 L15.2216521,35.3692109 Z M33.4981159,35.4447738 C33.8741021,35.4447738 34.2059084,35.1400848 34.2059084,34.7628799 L34.2059084,24.4354469 C34.4892692,24.4997362 34.5971291,24.537213 34.8021847,24.537213 C35.9922999,24.537213 36.8792495,23.3099258 36.9395779,22.5058515 L36.9737031,22.1265138 L36.9441483,22.1265138 C36.9456717,22.1265138 36.9481092,22.0561306 36.9362264,22.0171304 C36.9182497,21.9592395 36.8826011,21.9193253 36.8411634,21.8818485 L33.8753209,12.1644029 C33.8317503,12.0215037 33.69982,11.9261361 33.549913,11.9261361 L14.4617578,11.9261361 C14.3115461,11.9261361 14.1787017,12.0248553 14.1354359,12.1689732 L11.2134686,21.8577781 C11.1452182,21.9037861 11.0918976,21.9601536 11.0675225,22.0415055 C11.0583819,22.0741073 11.0620381,22.1265138 11.0620381,22.1265138 L11.0370536,22.1265138 L11.0647803,22.5061562 C11.1254134,23.3099258 12.0178475,24.5311192 13.2082673,24.5311192 C13.4136277,24.5311192 13.5214876,24.4994315 13.8048483,24.4354469 L13.8048483,34.7628799 C13.8048483,35.1400848 14.137264,35.4447738 14.5135549,35.4447738 L33.4981159,35.4447738 Z M29.7413008,22.1265138 L28.461607,12.4928576 L30.5054607,12.4928576 L32.6364555,22.1265138 L29.7413008,22.1265138 L29.7413008,22.1265138 Z M22.562219,22.1265138 L22.985432,12.4928576 L24.9494572,12.4928576 L25.3537794,22.1265138 L22.562219,22.1265138 L22.562219,22.1265138 Z M15.3938014,22.1265138 L17.5019444,12.4928576 L19.5588997,12.4928576 L18.2542215,22.1265138 L15.3938014,22.1265138 L15.3938014,22.1265138 Z M15.2213474,30.627641 L15.2213474,23.6307633 C15.5047082,24.1301485 16.1491253,24.538127 16.8380271,24.538127 C17.6216872,24.538127 18.2499559,24.0094917 18.620153,23.4205279 C18.9897407,24.0094917 19.6280641,24.538127 20.4120289,24.538127 C21.1956889,24.538127 21.8391921,24.0094917 22.2084751,23.4205279 C22.5780628,24.0094917 23.2236988,24.538127 24.0079682,24.538127 C24.7916283,24.538127 25.4387877,24.0094917 25.8086801,23.4205279 C26.1779631,24.0094917 26.8254272,24.538127 27.6087826,24.538127 C28.3933567,24.538127 29.0408208,24.0094917 29.4110179,23.4205279 C29.780301,24.0094917 30.3884602,24.538127 31.1727296,24.538127 C31.8619361,24.538127 32.5054392,24.1301485 32.7888,23.6307633 L32.7888,30.6279457 L15.2213474,30.6279457 L15.2213474,30.627641 Z\" id=\"Shape\" fill=\"#FFFFFF\"></path>\n" +
    "							            </g>\n" +
    "							        </g>\n" +
    "							    </g>\n" +
    "							</svg>\n" +
    "						</div>\n" +
    "						<div class=\"col\">\n" +
    "							<h2>Point Relais -  {{displayPrice(deliveryPrices['Point Relais'][order.data.quantity - 1])}}  €</h2>\n" +
    "							<p>Venez retirer votre colis dans le Mondial Relay le plus proche de chez vous.</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<i class=\"radio-icon ion-checkmark\"></i>\n" +
    "			</label>\n" +
    "\n" +
    "			<label class=\"item item-radio\">\n" +
    "				<input type=\"radio\" ng-model=\"order.data.delivery_mode\" name=\"choice\" value=\"Vinify\">\n" +
    "				<div class=\"item-content  item-delivery-mode item-text-wrap\">\n" +
    "					<div class=\"row row-center\">\n" +
    "						<div class=\"col col-25\">\n" +
    "							<svg viewBox=\"0 0 50 50\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n" +
    "							    <!-- Generator: Sketch 3.0.4 (8054) - http://www.bohemiancoding.com/sketch -->\n" +
    "							    <title>DELIVERYMAN</title>\n" +
    "							    <desc>Created with Sketch.</desc>\n" +
    "							    <defs></defs>\n" +
    "							    <g id=\"Page-4\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n" +
    "							        <g id=\"DeliveryMan-2\" sketch:type=\"MSLayerGroup\" transform=\"translate(2.000000, 1.000000)\">\n" +
    "							            <g id=\"Symbol_2_copy_3\" sketch:type=\"MSShapeGroup\">\n" +
    "							                <circle class=\"circle-svg\" stroke=\"#FC3432\" fill=\"#FC3432\" sketch:type=\"MSShapeGroup\" cx=\"24\" cy=\"24\" r=\"24\"></circle>\n" +
    "							                <path d=\"M35.1430868,17.763646 L34.0603026,15.9304954 C33.9638538,15.7672343 33.7906723,15.6673729 33.6039026,15.6673729 L27.0270011,15.6673729 C26.8402314,15.6673729 26.6670499,15.7672343 26.5706011,15.9304954 L25.4531806,17.82242 C25.4491841,17.8289505 25.4478519,17.8365693 25.4443883,17.8433719 C25.4286688,17.8724868 25.41588,17.9026901 25.4054891,17.9347981 C25.4014926,17.9467706 25.3977625,17.9581989 25.3945653,17.9704435 C25.3860395,18.0055446 25.3807108,18.0417342 25.3788458,18.0790121 C25.3785793,18.0858147 25.3769807,18.0923451 25.3769807,18.0991477 C25.3769807,18.1005082 25.3764479,18.1021408 25.3764479,18.1035013 L25.3764479,19.8367905 L22.3606914,17.0259777 C21.8872397,16.4483054 21.160943,16.1313067 20.390152,16.2292633 C19.1658918,16.3846335 18.2970534,17.5241963 18.4489203,18.7745046 L19.3031049,25.9628929 L17.8052179,29.8778952 L13.2233675,30.0490473 C12.4962715,30.1181612 11.9428899,30.7576007 11.9759276,31.5102346 C12.0102975,32.2859971 12.6537335,32.8862539 13.4578286,32.8495202 L19.7224706,32.5532012 L21.7961196,27.5152343 L25.5267162,30.4348878 L26.4043469,35.0396684 C26.5801927,35.7631874 27.2827769,36.2257607 28.0064092,36.0793698 C28.7524219,35.9283533 29.2365309,35.1887803 29.0801347,34.3819981 L27.9198184,28.7086733 L23.7290919,25.4635859 L23.2207375,21.1872323 L25.3767143,23.1251421 L25.3767143,24.9226473 C25.3767143,25.2230478 25.6154384,25.4668511 25.9095805,25.4668511 L34.7215896,25.4668511 C35.0157318,25.4668511 35.2544558,25.2230478 35.2544558,24.9226473 L35.2544558,18.156017 C35.2563209,18.1386025 35.2597845,18.12146 35.2597845,18.1032292 C35.2595181,17.9747971 35.2160895,17.8567049 35.1430868,17.763646 L35.1430868,17.763646 Z M30.8484513,16.7557805 L33.3030997,16.7557805 L33.777617,17.5592975 L30.8484513,17.5592975 L30.8484513,16.7557805 L30.8484513,16.7557805 Z M27.3278041,16.7557805 L29.7829853,16.7557805 L29.7829853,17.5592975 L26.8530202,17.5592975 L27.3278041,16.7557805 L27.3278041,16.7557805 Z M34.1884569,24.3781714 L26.4421804,24.3781714 L26.4421804,23.3643197 L29.8818319,23.3700338 L30.0142492,23.3692175 C30.7210963,23.3567008 31.2536961,22.793994 31.2422395,22.1115625 C31.2310493,21.4492664 30.7112383,20.9192119 30.0699337,20.8990763 L26.5101208,20.8933622 L26.4421804,20.8302346 L26.4421804,18.6477051 L34.1884569,18.6477051 L34.1884569,24.3781714 L34.1884569,24.3781714 Z M22.1989665,15.9522636 C23.3664764,16.1011033 24.4308767,15.2554106 24.5766156,14.06306 C24.7223546,12.8707095 23.894014,11.7836623 22.7267705,11.6348226 C21.559527,11.4859828 20.4948602,12.3316756 20.3488549,13.5240262 C20.2033824,14.7161046 21.0314565,15.8034239 22.1989665,15.9522636 L22.1989665,15.9522636 Z\" id=\"Shape\" fill=\"#FFFFFF\"></path>\n" +
    "							            </g>\n" +
    "							        </g>\n" +
    "							    </g>\n" +
    "							</svg>\n" +
    "						</div>\n" +
    "						<div class=\"col\">\n" +
    "							<h2>Chez Vinify -  Gratuit</h2>\n" +
    "							<p>Venez retirer votre colis en semaine entre 10h et 19h (Issy-Les-Moulineaux).</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<i class=\"radio-icon ion-checkmark\"></i>\n" +
    "			</label>\n" +
    "			<div class=\"item item-input-inset input-coupon\">\n" +
    "				<h2>Coupon</h2>\n" +
    "				<label class=\"item-input-wrapper\">\n" +
    "					<input type=\"text\" placeholder=\"Coupon de Reduction\" ng-model=\"order.data.coupon\" ng-blur=\"onBlur()\">\n" +
    "				</label>\n" +
    "			</div>\n" +
    "			<div class=\"item centered item-delivery-address\">\n" +
    "				<div class=\"row row-center\">\n" +
    "					<div class=\"col\">\n" +
    "							<h4>Adresse de Livraison</h4>\n" +
    "							<p>{{user.delivery_address.street}}\n" +
    "							<br>{{user.delivery_address.zipcode}} - {{user.delivery_address.city}}</p>\n" +
    "					</div>\n" +
    "					<div class=\"col\">\n" +
    "								<button class=\"button button-outline-primary\" ng-click=\"openModal()\">Modifier</button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "\n" +
    "		<!-- </div> -->\n" +
    "\n" +
    "	</ion-content>\n" +
    "	<div class=\"bar bar-footer bar-positive\" ng-click=\"createRefillOrder()\">\n" +
    "			<div class=\"title\">Commander ></div>\n" +
    "	</div>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "      <ion-view hide-back-button=\"true\" title=\"Welcome\">\n" +
    "        <ion-content has-bouncing=\"false\">\n" +
    "          <ion-nav-buttons side=\"left\">\n" +
    "            <button class=\"button button-icon button-clear ion-navicon\" ng-click=\"toggleLeft()\">\n" +
    "            </button>\n" +
    "          </ion-nav-buttons>\n" +
    "          <div ng-style=\"calcHeight\" class=\"section\" id=\"section-vinibar\" ng-click=\"stateGo('vinibar')\">\n" +
    "          <!-- <div class=\"section\" id=\"section-vinibar\" ng-click=\"stateGo('vinibar')\"> -->\n" +
    "            <div class=\"home-header\">\n" +
    "              <h3>Mon Vinibar</h3>\n" +
    "              <h4>Noter ma sélection\n" +
    "              <br>et retrouver mes vins préférés</h4>\n" +
    "            </div>\n" +
    "            <div class=\"chevron-right\">\n" +
    "              <i class=\"icon ion-chevron-right\"></i>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <!-- <div class=\"section\" id=\"section-order\" ng-click=\"stateGo('order')\"> -->\n" +
    "          <div ng-style=\"calcHeight\" class=\"section\" id=\"section-order\" ng-click=\"stateGo('order')\">\n" +
    "            <div class=\"home-header\">\n" +
    "              <h3>Mes recharges</h3>\n" +
    "              <h4>Commander de nouveaux vins</h4>\n" +
    "            </div>\n" +
    "            <div class=\"chevron-right\">\n" +
    "              <i class=\"icon ion-chevron-right\"></i>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div ng-style=\"calcThirdHeight\" class=\"section\" id=\"section-profile\" ng-click=\"stateGo('profile')\">\n" +
    "          <!-- <div class=\"section\" id=\"section-profile\" ng-click=\"stateGo('profile')\"> -->\n" +
    "            <div class=\"home-header\">\n" +
    "              <h3>Mon Profil</h3>\n" +
    "              <h4>Découvrir mes goûts\n" +
    "              <br>et mes statistiques de consommation</h4>\n" +
    "            </div>\n" +
    "            <div class=\"chevron-right\">\n" +
    "              <i class=\"icon ion-chevron-right\"></i>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </ion-content>\n" +
    "      </ion-view>");
}]);

angular.module("home/order/order.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/order/order.tpl.html",
    "<ion-view title=\"Order\">\n" +
    "	<ion-content class=\"has-footer\" has-bouncing=\"false\">\n" +
    "		<div class=\"bottle-number-selector\">\n" +
    "			<h4 class=\"centered\">Nombre de bouteilles</h4>\n" +
    "			<p class=\"segmented-control\">\n" +
    "					<span class=\"segmented\">\n" +
    "							<label><input type=\"radio\" name=\"list\" ng-model=\"order.data.quantity\" value=\"1\"><span class=\"label\">3 bouteilles</span></label>\n" +
    "							<label><input type=\"radio\" name=\"list\" ng-model=\"order.data.quantity\" value=\"2\"><span class=\"label\">6 bouteilles</span></label>\n" +
    "					</span>\n" +
    "			</p>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"list list-select\">\n" +
    "			<h4>Composition des recharges</h4>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col\">\n" +
    "					<label class=\"item-input item-select\">\n" +
    "						<div class=\"input-label\">\n" +
    "							<div class=\"red-pin\"></div>\n" +
    "							<div ng-show=\"order.data.split.red > 0\" class=\"red-pin\"></div>\n" +
    "							<div ng-show=\"order.data.split.red > 1\" class=\"red-pin\"></div>\n" +
    "						</div>\n" +
    "						<select ng-model=\"order.data.split.red\">\n" +
    "							<option value=\"0\">Pas du tout</option>\n" +
    "							<option value=\"1\">Un peu</option>\n" +
    "							<option value=\"2\">Beaucoup</option>\n" +
    "						</select>\n" +
    "					</label>\n" +
    "				</div>\n" +
    "				<div class=\"col\">\n" +
    "					<label class=\"item-input item-select\">\n" +
    "						<div class=\"input-label\">\n" +
    "							<div class=\"white-pin\"></div>\n" +
    "							<div ng-show=\"order.data.split.white > 0\" class=\"white-pin\"></div>\n" +
    "							<div ng-show=\"order.data.split.white > 1\" class=\"white-pin\"></div>\n" +
    "						</div>\n" +
    "						<select ng-model=\"order.data.split.white\">\n" +
    "							<option value=\"0\">Pas du tout</option>\n" +
    "							<option value=\"1\">Un peu</option>\n" +
    "							<option value=\"2\">Beaucoup</option>\n" +
    "						</select>\n" +
    "					</label>\n" +
    "				</div>\n" +
    "				<div class=\"col\">\n" +
    "					<label class=\"item-input item-select\">\n" +
    "						<div class=\"input-label\">\n" +
    "							<div class=\"rose-pin\"></div>\n" +
    "							<div ng-show=\"order.data.split.rose > 0\" class=\"rose-pin\"></div>\n" +
    "							<div ng-show=\"order.data.split.rose > 1\" class=\"rose-pin\"></div>\n" +
    "						</div>\n" +
    "						<select ng-model=\"order.data.split.rose\">\n" +
    "							<option value=\"0\">Pas du tout</option>\n" +
    "							<option value=\"1\">Un peu</option>\n" +
    "							<option value=\"2\">Beaucoup</option>\n" +
    "						</select>\n" +
    "					</label>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"list first-refill\">\n" +
    "			<div class=\"item price-selector\">\n" +
    "				<h4 class=\"centered\">Recharge 1</h4>\n" +
    "				<div class=\"button-bar\">\n" +
    "				  <a  ng-class=\"{highlighted: price.levelA == '29.90' }\" ng-click=\"price.levelA = 29.90 \" class=\"button\">29€90</a>\n" +
    "				  <a  ng-class=\"{highlighted: price.levelA == '39.90' }\" ng-click=\"price.levelA = 39.90 \" class=\"button\">39€90</a>\n" +
    "				  <a  ng-class=\"{highlighted: price.levelA == '49.90' }\" ng-click=\"price.levelA = 49.90 \" class=\"button\">49€90</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div ng-show=\"order.data.quantity == '2'\" class=\"item price-selector\">\n" +
    "				<h4 class=\"centered\">Recharge 2</h4>\n" +
    "				<div class=\"button-bar\">\n" +
    "				  <a  ng-class=\"{highlighted: price.levelB == '29.90' }\" ng-click=\"price.levelB = 29.90 \" class=\"button\">29€90</a>\n" +
    "				  <a  ng-class=\"{highlighted: price.levelB == '39.90' }\" ng-click=\"price.levelB = 39.90 \" class=\"button\">39€90</a>\n" +
    "				  <a  ng-class=\"{highlighted: price.levelB == '49.90' }\" ng-click=\"price.levelB = 49.90 \" class=\"button\">49€90</a>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		 </div>\n" +
    "\n" +
    "		<div class=\"list card\" ng-show=\"order.data.quantity == '1'\">\n" +
    "			<div class=\"item item-text-wrap refill-description\">\n" +
    "				<p ng-show=\"price.levelA == '29.90' \">Je découvre mes goûts sur toutes les régions françaises à prix mini.</p>\n" +
    "				<p ng-show=\"price.levelA == '39.90' \">J'explore les appellations et les cépages de France et d'ailleurs.</p>\n" +
    "				<p ng-show=\"price.levelA == '49.90' \">A moi les grandes appellations ! Des vins fins, élégants et racés.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"list card\" ng-show=\"order.data.quantity == '2'\">\n" +
    "			<div class=\"item item-text-wrap refill-description\">\n" +
    "				<p ng-show=\"price.levelB == '29.90' \">Je découvre mes goûts sur toutes les régions françaises à prix mini.</p>\n" +
    "				<p ng-show=\"price.levelB == '39.90' \">J'explore les appellations et les cépages de France et d'ailleurs.</p>\n" +
    "				<p ng-show=\"price.levelB == '49.90' \">A moi les grandes appellations ! Des vins fins, élégants et racés.</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</ion-content>\n" +
    "	<div class=\"bar bar-footer bar-positive\" ng-click=\"createRefillOrder()\">\n" +
    "			<div class=\"title\">Mode de Livraison ></div>\n" +
    "	</div>\n" +
    "</ion-view>");
}]);

angular.module("home/pay/pay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/pay/pay.tpl.html",
    "<ion-view title=\"Commander\">\n" +
    " <ion-content has-bouncing=\"false\">\n" +
    "   <div ng-style=\"calcHeight\" class=\"pay-header\">\n" +
    "       <h3 class=\"centered\">Récapitulatif de ma commande</h3>\n" +
    "   </div>\n" +
    "   <div class=\"list\">\n" +
    "     <div class=\"item item-text-wrap item-bill\">\n" +
    "       <div class=\"row\">\n" +
    "         <div class=\"col\">\n" +
    "           <h3 ng-show=\"serializedOrder.quantity == 1\">{{serializedOrder.quantity}} recharge</h3>\n" +
    "           <h3 ng-show=\"serializedOrder.quantity == 2\">{{serializedOrder.quantity}} recharges</h3>\n" +
    "         </div>\n" +
    "         <div class=\"col\">\n" +
    "           <p class=\"subtitle\">{{calcPrice()}} €</p>\n" +
    "         </div>\n" +
    "       </div>\n" +
    "       <div class=\"row row-center\">\n" +
    "         <div class=\"col\">\n" +
    "           <h3>Livraison </h3>\n" +
    "           <p>{{serializedOrder.delivery_mode}} </p>\n" +
    "         </div>\n" +
    "         <div class=\"col\">\n" +
    "            <p>{{displayPrice(serializedOrder.delivery_cost)}} €</p>\n" +
    "         </div>\n" +
    "     </div>\n" +
    "       <div class=\"row row-center\" ng-show=\"serializedOrder.coupon\">\n" +
    "         <div class=\"col\">\n" +
    "           <h3>Réduction :</h3>\n" +
    "         </div>\n" +
    "         <div class=\"col\">\n" +
    "            <h3>{{serializedOrder.coupon.value}} €</h3>\n" +
    "         </div>\n" +
    "     </div>\n" +
    "       <div class=\"row row-center\">\n" +
    "         <div class=\"col\">\n" +
    "           <h3>Total : </h3>\n" +
    "         </div>\n" +
    "         <div class=\"col\">\n" +
    "            <h3>{{displayPrice(serializedOrder.final_price)}} €</h3>\n" +
    "         </div>\n" +
    "     </div>\n" +
    "     </div>\n" +
    "     <form name=\"stripe-form\" id=\"stripe-form\" stripe-form=\"submit\">\n" +
    "      <img class=\"pull-right\" src=\"assets/utils/poweredbystripe.svg\" alt=\"stripe_verification\">\n" +
    "       <div class=\"row item\">\n" +
    "         <div class=\"col\">\n" +
    "            <label class=\"item-input\">\n" +
    "             <i class=\"icon ion-card\"></i> <input type=\"text\" name=\"number\" id=\"number\" ng-model=\"number\" placeholder=\"N° de Carte\" payments-validate=\"card\" payments-type-model=\"type\" payments-format=\"card\"  required/>\n" +
    "\n" +
    "           </label>\n" +
    "         </div>\n" +
    "         <div class=\"col col-25\">\n" +
    "           <label class=\"item item-input\">\n" +
    "             <i class=\"icon ion-locked\"></i> <input type=\"text\" name=\"cvc\" id=\"cvc\" ng-model=\"cvc\" placeholder=\"CVC\" payments-validate=\"cvc\" payments-format=\"cvc\" required/>\n" +
    "           </label>\n" +
    "         </div>\n" +
    "       </div>\n" +
    "       <div class=\"row item\">\n" +
    "         <div class=\"col\">\n" +
    "           <label class=\"item item-input item-select\">\n" +
    "             <div class=\"input-label\">\n" +
    "               Mois\n" +
    "             </div>\n" +
    "             <select name=\"expMonth\" ng-model=\"expMonth\" placeholder=\"MM\"required>\n" +
    "               <option value=\"01\">Janv.</option>\n" +
    "               <option value=\"02\">Févr.</option>\n" +
    "               <option value=\"03\">Mars</option>\n" +
    "               <option value=\"04\">Avril</option>\n" +
    "               <option value=\"05\">Mai</option>\n" +
    "               <option value=\"06\">Juin</option>\n" +
    "               <option value=\"07\">Juill.</option>\n" +
    "               <option value=\"08\">Août</option>\n" +
    "               <option value=\"09\">Sept.</option>\n" +
    "               <option value=\"10\">Oct.</option>\n" +
    "               <option value=\"11\">Nov.</option>\n" +
    "               <option value=\"12\">Déc.</option>\n" +
    "             </select>\n" +
    "           </label>\n" +
    "<!--             <label class=\"item item-input\">\n" +
    "             <i class=\"icon ion-ios7-calendar-outline\"></i> <input type=\"text\" name=\"expiry\" id=\"expiry\" ng-model=\"expiry\" placeholder=\"MM\" payments-validate=\"expiry\" payments-format=\"expiry\" required/>\n" +
    "           </label> -->\n" +
    "         </div>\n" +
    "         <div class=\"col\">\n" +
    "           <label class=\"item item-input item-select\">\n" +
    "             <div class=\"input-label\">\n" +
    "               Année\n" +
    "             </div>\n" +
    "             <select name=\"expYear\" ng-model=\"expYear\" required>\n" +
    "               <option>2014</option>\n" +
    "               <option>2015</option>\n" +
    "               <option>2016</option>\n" +
    "               <option>2017</option>\n" +
    "               <option>2018</option>\n" +
    "               <option>2019</option>\n" +
    "               <option>2020</option>\n" +
    "             </select>\n" +
    "           </label>\n" +
    "<!--             <label class=\"item item-input\">\n" +
    "             <i class=\"icon ion-locked\"></i> <input type=\"text\" name=\"cvc\" id=\"cvc\" ng-model=\"cvc\" placeholder=\"CVC\" payments-validate=\"cvc\" payments-format=\"cvc\" required/>\n" +
    "           </label> -->\n" +
    "         </div>\n" +
    "       </div>\n" +
    "       <div class=\"row row-submit centered\">\n" +
    "         <button class=\"button button-order\" value=\"submit\">Payer ma commande</button>\n" +
    "       </div>\n" +
    "     </form>\n" +
    "\n" +
    "   </div>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("home/profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/profile/profile.tpl.html",
    "<ion-view title=\"Profil\">\n" +
    "	<ion-content has-bouncing=\"false\">\n" +
    "		<div class=\"item item-gray centered\">\n" +
    "			<h3>{{user.first_name}} {{user.last_name}}</h3>\n" +
    "			<p>{{user.email}}</p>\n" +
    "		</div>\n" +
    "		<div class=\"item centered item-profile\">\n" +
    "			<div class=\"coming-soon\">\n" +
    "				<p>Coming Soon !</p>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col\">\n" +
    "					<div class=\"row row-center\">\n" +
    "						<div class=\"col col-20\"><img src=\"assets/utils/grapes-black.svg\" alt=\"cepage\"></div>\n" +
    "						<div class=\"col\">\n" +
    "								<h4>Cépage Préféré</h4>\n" +
    "								<p class=\"subtitle\">{{user.profile.favorite_variety}}</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col\">\n" +
    "					<div class=\"row row-center\">\n" +
    "						<div class=\"col col-20\"><img src=\"assets/utils/france.svg\" alt=\"cepage\"></div>\n" +
    "						<div class=\"col\">\n" +
    "								<h4>Région Préférée</h4>\n" +
    "								<p class=\"subtitle\">{{user.profile.favorite_region}}</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"row row-center\">\n" +
    "						<div class=\"col col-20\"><img src=\"assets/utils/chart.png\" alt=\"cepage\"></div>\n" +
    "						<div class=\"col align-left\">\n" +
    "								<h4>Consommation</h4>\n" +
    "								<p class=\"subtitle\">{{user.profile.conso[red]}} %, {{user.profile.conso[white]}} %, {{user.profile.conso[rose]}} %</p>\n" +
    "						</div>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col\">\n" +
    "					<h4>Note Moyenne</h4>\n" +
    "					<h3>{{user.profile.average_rating}}</h3>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"row row-center\">\n" +
    "				<div class=\"col centered\">\n" +
    "					<h4>ViniPoints</h4>\n" +
    "					<span class=\"subtitle\">{{user.profile.vinipoints}}</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"item\">\n" +
    "			<h3 class=\"centered\">Parrainez des amis et gagnez 10€ !</h3>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col centered\"><p>Mon Code : <br> {{user.referral_code}}</p></div>\n" +
    "				<div class=\"col centered\"><button class=\"button button-outline-primary\" ng-click=\"openReferralModal()\"><p>Je parraine !</p></button></div>\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col centered\">\n" +
    "						<h4>Filleul</h4>\n" +
    "				</div>\n" +
    "				<div class=\"col centered\">\n" +
    "						<h4>Mail envoyé</h4>\n" +
    "				</div>\n" +
    "				<div class=\"col centered\">\n" +
    "						<h4>Achat</h4>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div ng-repeat=\"referral in referrals\" class=\"row\">\n" +
    "				<div class=\"col centered\">\n" +
    "						<p>{{referral.referred.first_name}}</p>\n" +
    "				</div>\n" +
    "				<div class=\"col centered\">\n" +
    "						<p><img ng-show=\"referral.created_at\" src=\"assets/utils/tick.svg\" alt=\"tick\"></p>\n" +
    "				</div>\n" +
    "				<div class=\"col centered\">\n" +
    "						<p><img ng-show=\"referral.validated_at\" src=\"assets/utils/tick.svg\" alt=\"tick\"></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"item item-gray centered\">\n" +
    "				<p>{{user.delivery_address.street}}</p>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col\">\n" +
    "							<p> {{user.delivery_address.zipcode}}</p>\n" +
    "					</div>\n" +
    "					<div class=\"col\">\n" +
    "							<p>{{user.delivery_address.city}}</p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col\">\n" +
    "							<p><i class=\"icon ion-ios7-telephone\"></i> {{user.phone}}</p>\n" +
    "					</div>\n" +
    "					<div class=\"col\">\n" +
    "							<p class=\"p-button\" ng-click=\"openUserModal()\">Modifier</p></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "		</div>\n" +
    "<!--             <div class=\"row\">\n" +
    "				<div class=\"col\">\n" +
    "						<button class=\"button share share-facebook\"> <img src=\"assets/utils/facebook.svg\" alt=\"facebook-logo\"><p>Partager sur facebook</p></button>\n" +
    "				</div>\n" +
    "				<div class=\"col\">\n" +
    "						<button class=\"button share share-twitter\"> <img src=\"assets/utils/twitter.svg\" alt=\"facebook-logo\"> <p>Partager sur twitter</p></button>\n" +
    "				</div>\n" +
    "		</div> -->\n" +
    "	</ion-content>\n" +
    "</ion-view>");
}]);

angular.module("home/profile/referral.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/profile/referral.tpl.html",
    "<ion-modal-view>\n" +
    "	<ion-header-bar class=\"bar-positive\">\n" +
    "		<button class=\"button\" ng-click=\"closeReferralModal()\">Annuler</button>\n" +
    "		<h1 class=\"title\">Inviter un ami</h1>\n" +
    "		<button class=\"button\" ng-click=\"sendReferral()\">Terminé</button>\n" +
    "	</ion-header-bar>\n" +
    "	<ion-content>\n" +
    "\n" +
    "	<form name=\"form_address\" class=\"list\">\n" +
    "		<div class=\"item item-text-wrap\">\n" +
    "		<p>Vinify pense à vos proches : en les parrainant offrez leur <span class=\"p-highlight\">10€ de réduction</span> pour leur première commande. </p>\n" +
    "		</div>\n" +
    "		<label class=\"item item-input\">\n" +
    "				<input type=\"text\" ng-model=\"referral.first_name\" name=\"first_name\" autocomplete=\"first_name\" placeholder=\"Prénom\">\n" +
    "		</label>\n" +
    "		<label class=\"item item-input\">\n" +
    "				<input type=\"email\" ng-model=\"referral.email\" name=\"email\" autocomplete=\"email\" placeholder=\"Email\">\n" +
    "		</label>\n" +
    "		<div class=\"item item-text-wrap\">\n" +
    "			<p>Et vous dans l’histoire ? Ne vous inquiétez pas vous recevez aussi <span class=\"p-highlight\">10€ de réduction</span> sur votre prochaine commande.</p>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "	<div class=\"centered\">\n" +
    "		<button ng-click=\"sendReferral()\" class=\"button button-outline-primary\">Je parraine !</button>\n" +
    "	</div>\n" +
    "	</ion-content>\n" +
    "</ion-modal-view>");
}]);

angular.module("home/profile/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/profile/user.tpl.html",
    "  <ion-modal-view>\n" +
    "    <ion-header-bar class=\"bar-positive\">\n" +
    "          <button class=\"button\" ng-click=\"closeUserModal()\">Annuler</button>\n" +
    "          <h1 class=\"title\">Mes Infos</h1>\n" +
    "          <button class=\"button\" ng-click=\"updateUser()\">Terminé</button>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "\n" +
    "    <form name=\"form_address\" class=\"list\">\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"user.first_name\" name=\"first_name\" autocomplete=\"first_name\" placeholder=\"Prénom\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"user.last_name\" name=\"last_name\" autocomplete=\"last_name\" placeholder=\"Nom\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"user.phone\" name=\"phone\" autocomplete=\"phone\" placeholder=\"Téléphone\">\n" +
    "      </label>\n" +
    "\n" +
    "      <label class=\"item item-input item-select\">\n" +
    "        <div class=\"input-label\">\n" +
    "          Livraison\n" +
    "        </div>\n" +
    "        <select name=\"addresses\" ng-change=\"fireDelivery(current.delivery_address)\" ng-model=\"current.delivery_address\" ng-options=\"address.uuid as address.street for address in addresses\"></select>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input item-select\">\n" +
    "        <div class=\"input-label\">\n" +
    "          Facturation\n" +
    "        </div>\n" +
    "        <select name=\"addresses\" ng-change=\"fireBilling(current.billing_address)\" ng-model=\"current.billing_address\" ng-options=\"address.uuid as address.street for address in addresses\"></select>\n" +
    "      </label>\n" +
    "    </form>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"padding centered\">\n" +
    "      <button class=\"button button-less\" ng-show=\"!form.show\" ng-click=\"form.show = true\">Ajouter une adresse</button>\n" +
    "    </div>\n" +
    "    <form name=\"form_address\" class=\"list card\" ng-show=\"form.show\">\n" +
    "\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.company\" name=\"company\" autocomplete=\"company\" placeholder=\"Société\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.street\" name=\"street\" autocomplete=\"street\" placeholder=\"N° et Rue *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.city\" name=\"city\" autocomplete=\"city\" placeholder=\"Ville *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"number\" ng-model=\"address_suppl.data.zipcode\" name=\"zipcode\" autocomplete=\"zipcode\" placeholder=\"Code Postal *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.country\" name=\"country\" autocomplete=\"country\" placeholder=\"Pays *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.intercom\" name=\"intercom\" autocomplete=\"intercom\" placeholder=\"Interphone\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.digicode\" name=\"digicode\" autocomplete=\"digicode\" placeholder=\"Code\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <textarea type=\"text\" ng-model=\"address_suppl.data.other_info\" name=\"other_info\" autocomplete=\"other_info\" placeholder=\"Infos Suppl. (Code, Escalier ..)\"></textarea>\n" +
    "      </label>\n" +
    "      <li class=\"item item-checkbox\">\n" +
    "         <label class=\"checkbox\">\n" +
    "            <input type=\"checkbox\" ng-model=\"address_suppl.data.current_billing\">\n" +
    "         </label>\n" +
    "        <p>Adresse de Facturation</p>\n" +
    "      </li>\n" +
    "      <li class=\"item item-checkbox\">\n" +
    "         <label class=\"checkbox\">\n" +
    "          <input type=\"checkbox\" ng-model=\"address_suppl.data.current_delivery\">\n" +
    "         </label>\n" +
    "        <p>Adresse de Livraison</p>\n" +
    "      </li>\n" +
    "      <li class=\"item\">\n" +
    "        <button class=\"button button-full button-positive\" ng-click=\"addAddress(form_address)\">Ajouter</button>\n" +
    "      </li>\n" +
    "\n" +
    "    </form>\n" +
    "    </ion-content>\n" +
    "  </ion-modal-view>");
}]);

angular.module("home/ratedwine/ratedwine.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/ratedwine/ratedwine.tpl.html",
    "<ion-view title=\"Déguster\">\n" +
    "  <ion-content has-bouncing=\"false\">\n" +
    "  <div class=\"wine-header\">\n" +
    "    <div class=\"row row-center\">\n" +
    "        <div class=\"col centered\">\n" +
    "          <h3>{{bottle.wine.display_name}}</h3>\n" +
    "          <h4>{{bottle.wine.region}} - {{bottle.wine.appellation}}</h4>\n" +
    "          <!-- <h4>{{bottle.wine.appellation}}</h4> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row row-header-bottom row-center\">\n" +
    "        <div class=\"col  col-75\">\n" +
    "          <div class=\"row row-center align-left\">\n" +
    "            <div class=\"col col-20\">\n" +
    "                  <img class=\"img-grapes\" src=\"assets/utils/grapes.svg\" alt=\"grapes-logo\">\n" +
    "            </div>\n" +
    "            <div class=\"col\">\n" +
    "                  <p>{{bottle.wine.variety}}</p>\n" +
    "                  <!-- <h4>{{bottle.wine.variety}}</h4> -->\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col align-right\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col\"><p>{{bottle.wine.vintage}}</p></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"wine-content padding\">\n" +
    "\n" +
    "          <div class=\"row row-order\">\n" +
    "            <div class=\"col centered\">\n" +
    "              <h4>Prix Vinify : {{bottle.wine.public_price}}&nbsp;€</h4>\n" +
    "            </div>\n" +
    "            <div class=\"col centered\">\n" +
    "            <!-- TODO BUY WINE -->\n" +
    "            <a class=\"button button-outline-primary\" href=\"mailto:charlotte@vinify.co?subject=Commande%20de%20{{bottle.wine.display_name}}&body=Bonjour%2C%0AJe%20voudrais%20effectuer%20une%20commande%20de%20vin.%0A%0AR%C3%A9f%C3%A9rence%3A%20{{bottle.wine.display_name}},%20{{bottle.wine.region}},%20{{bottle.wine.vintage}}%0ANombre%20de%20bouteilles:%20(par%20trois)%3A%20%5BX%5D%0A%0AMerci%20de%20m'indiquer%20la%20disponibilit%C3%A9%20et%20de%20confirmer%20le%20prix%20de%20{{bottle.wine.public_price}}%20euros.%0A%0ACordialement%2C%0A\">\n" +
    "                Commander\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "        <h4>Description</h4>\n" +
    "\n" +
    "        <p ng-bind-html=\"bottle.wine.description\" class=\"justified\"><p>\n" +
    "\n" +
    "        <h4>Note</h4>\n" +
    "\n" +
    "       <ul class=\"rating\">\n" +
    "        <ul ng-show=\"bottle.rating == '1' \" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '1.5' \" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '2'\" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '2.5' \" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '3'\" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '3.5' \" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '4'\" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '4.5' \" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "        </ul>\n" +
    "        <ul ng-show=\"bottle.rating == '5'\" class=\"rating\">\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "          <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "        </ul>\n" +
    "       </ul>\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <p>{{bottle.comment}}</p>\n" +
    "\n" +
    "<!--         <div class=\"centered\">\n" +
    "          <button class=\"button share share-facebook\"><img src=\"assets/utils/facebook.svg\" alt=\"facebook-logo\">  <img src=\"assets/utils/twitter.svg\" alt=\"facebook-logo\"> <img src=\"assets/utils/mail.svg\" alt=\"mail-logo\"> Partager ce vin</button>\n" +
    "        </div> -->\n" +
    "\n" +
    "        <div class=\"row centered row-social\">\n" +
    "          <div class=\"social-container\">\n" +
    "            <div ng-click=\"share.facebook()\" id=\"facebook\"><p><i class=\"icon ion-social-facebook\"></i></p></div>\n" +
    "            <div ng-click=\"share.twitter()\" id=\"twitter\"><p><i class=\"icon ion-social-twitter\"></i></p></div>\n" +
    "            <div ng-click=\"share.mail()\" id=\"mail\"><p><i class=\"icon ion-paper-airplane\"></i></p></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <p class=\"centered\">Partager ce vin pour gagner des ViniPoints !</p>\n" +
    "\n" +
    "<!--         <div class=\"row\">\n" +
    "          <div class=\"col\">\n" +
    "              <button class=\"button share share-facebook\"> <img src=\"assets/utils/facebook.svg\" alt=\"facebook-logo\"><p>Partager sur facebook</p></button>\n" +
    "          </div>\n" +
    "          <div class=\"col\">\n" +
    "              <button class=\"button share share-twitter\"> <img src=\"assets/utils/twitter.svg\" alt=\"facebook-logo\"> <p>Partager sur twitter</p></button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"col col-25\">\n" +
    "          </div>\n" +
    "          <div class=\"col\">\n" +
    "              <button class=\"button share share-mail\"> <img src=\"assets/utils/mail.svg\" alt=\"mail-logo\"> <p>Partager <br> par mail</p></button>\n" +
    "          </div>\n" +
    "          <div class=\"col col-25\">\n" +
    "          </div>\n" +
    "        </div> -->\n" +
    "\n" +
    "        <h4>Service</h4>\n" +
    "        <div class=\"row row-center\">\n" +
    "          <div class=\"col\"><p class=\"service-par\"><i class=\"icon ion-thermometer\"></i> {{bottle.wine.temperature}}</p></div>\n" +
    "          <div class=\"col\"><p class=\"service-par\"><i class=\"icon ion-beaker\"></i> Carafer le vin <span ng-show=\"bottle.wine.carafage\">1h30</span> <span ng-show=\"!bottle.wine.carafage\">1h30</span> avant dégustation.</p></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <h4>Dégustation</h4>\n" +
    "        <p ng-bind-html=\"bottle.wine.tasting_info\" class=\"justified\"><p>\n" +
    "\n" +
    "        <div class=\"row row-buttons\">\n" +
    "              <div class=\"col\">\n" +
    "                <a class=\"button button-outline-primary\" ng-click=\"openModal()\">\n" +
    "                  Modifier\n" +
    "                </a>\n" +
    "              </div>\n" +
    "<!--               <div class=\"col\">\n" +
    "                <a class=\"button button-less\" ng-click=\"openGroupModal()\">\n" +
    "                  Noter à plusieurs\n" +
    "                </a>\n" +
    "              </div> -->\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("home/vinibar/vinibar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/vinibar/vinibar.tpl.html",
    "	<ion-view title=\"Vinibar\">\n" +
    "	<ion-nav-buttons side=\"right\">\n" +
    "		<button class=\"button\" ng-click=\"search.toggle = !search.toggle\">\n" +
    "			<i class=\"icon ion-search\"></i>\n" +
    "		</button>\n" +
    "	</ion-nav-buttons>\n" +
    "	<ion-header-bar align-title=\"left\" class=\"bar-positive bar-subheader bar-segmented-control\">\n" +
    "		<p ng-show=\"!search.toggle\" class=\"segmented-control\">\n" +
    "				<span class=\"segmented\">\n" +
    "						<label><input type=\"radio\" name=\"list\" ng-model=\"segmentedControl.value\" value=\"toDrink\" checked><span class=\"label\">A boire</span></label>\n" +
    "						<label><input type=\"radio\" name=\"list\" ng-model=\"segmentedControl.value\" value=\"rated\"><span class=\"label\">Notés</span></label>\n" +
    "				</span>\n" +
    "		</p>\n" +
    "		<div ng-show=\"search.toggle\" class=\"item-input-inset search-vinibar\">\n" +
    "			<label class=\"item-input-wrapper\">\n" +
    "				<i class=\"icon ion-ios7-search placeholder-icon\"></i>\n" +
    "				<input type=\"search\" ng-model=\"search.value\" placeholder=\"Search\">\n" +
    "			</label>\n" +
    "			<button class=\"button-clear\" ng-click=\"search.value = '' \">\n" +
    "				Annuler\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</ion-header-bar>\n" +
    "	<ion-content class=\"has-subheader\">\n" +
    "	<ion-refresher\n" +
    "		pulling-text=\"Pull to refresh...\"\n" +
    "		on-refresh=\"update()\">\n" +
    "	</ion-refresher>\n" +
    "		<ion-list ng-show=\"segmentedControl.value === 'rated'\">\n" +
    "			<a ng-repeat=\"bottle in bottleList.results | filter: {date_rated: '!!'}  | filter: searchFilter\" class=\"item\" href=\"#/ratedwine/{{bottle.uuid}}\">\n" +
    "					<h3>{{bottle.wine.display_name}}</h3>\n" +
    "					<p class=\"vinitext\">\n" +
    "							{{bottle.wine.region}}\n" +
    "							<span class=\"item-note\">\n" +
    "								<i ng-repeat=\"i in getNumber(bottle.rating) track by $index\" class=\"icon ion-ios7-star full-star\"></i>\n" +
    "								<i ng-hide=\"isInteger(bottle.rating)\" class=\"icon ion-ios7-star-half full-star\"></i>\n" +
    "							</span>\n" +
    "							<br>\n" +
    "							{{bottle.wine.appellation}}\n" +
    "					</p>\n" +
    "			</a>\n" +
    "		</ion-list>\n" +
    "		<ion-list ng-show=\"segmentedControl.value === 'toDrink'\">\n" +
    "			<a ng-repeat=\"bottle in bottleList.results | filter: {date_rated: '!'}  | filter: searchFilter\" class=\"item\" href=\"#/wine/{{bottle.uuid}}\">\n" +
    "					<h3>{{bottle.wine.display_name}}</h3>\n" +
    "					<p class=\"vinitext\">\n" +
    "							{{bottle.wine.region}}\n" +
    "							<span class=\"item-note\">{{bottle.wine.vintage}}</span>\n" +
    "							<br>\n" +
    "							{{bottle.wine.appellation}}\n" +
    "						</p>\n" +
    "			</a>\n" +
    "		</ion-list>\n" +
    "	</ion-content>\n" +
    "	</ion-view>");
}]);

angular.module("home/wine.rating/wine.rating.group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/wine.rating/wine.rating.group.tpl.html",
    "  <ion-modal-view>\n" +
    "    <ion-header-bar class=\"bar-positive\">\n" +
    "          <button class=\"button\" ng-click=\"closeGroupModal()\">Close</button>\n" +
    "      <h1 class=\"title\">Noter mon Vin</h1>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content  has-bouncing=\"false\">\n" +
    "\n" +
    "  <div class=\"wine-header\">\n" +
    "    <div class=\"row row-center\">\n" +
    "        <div class=\"col centered\">\n" +
    "          <h3>{{bottle.wine.display_name}}</h3>\n" +
    "          <h4>{{bottle.wine.region}} - {{bottle.wine.appellation}}</h4>\n" +
    "          <!-- <h4>{{bottle.wine.appellation}}</h4> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row row-header-bottom row-center\">\n" +
    "        <div class=\"col col-75\">\n" +
    "          <div class=\"row row-center align-left\">\n" +
    "            <div class=\"col col-20\">\n" +
    "                  <img class=\"img-grapes\" src=\"assets/utils/grapes.svg\" alt=\"grapes-logo\">\n" +
    "            </div>\n" +
    "            <div class=\"col\">\n" +
    "                  <p>{{bottle.wine.variety}}</p>\n" +
    "                  <!-- <h4>{{bottle.wine.variety}}</h4> -->\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"col align-right\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col\"><p>{{bottle.wine.vintage}}</p></div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "    <div class=\"wine-content padding\">\n" +
    "      <form class=\"rating-form\">\n" +
    "        <h4>Note</h4>\n" +
    "        <p class=\"literal-rating\">\"{{literalRating.value}}\"</p>\n" +
    "        <div class=\"icon-rating centered\">\n" +
    "            <ul ng-show=\"rating.data.rating == '1' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '1.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '2'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '2.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '3'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '3.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '4'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '4.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"rating.data.rating == '5'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "          <div class=\"range-container\">\n" +
    "                <input ng-model=\"rating.data.rating\" type=\"range\" name=\"volume\" min=\"1\" max=\"5\" value=\"4\" step=\"0.5\">\n" +
    "          </div>\n" +
    "\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <input type=\"text\" ng-name=\"commentaire\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"rating.data.comment\">\n" +
    "\n" +
    "        <div class=\"checkbox-nude\">\n" +
    "          <ion-checkbox ng-model=\"rating.data.get_more\"><p>Revoir ce vin dans mon vinibar</p></ion-checkbox>\n" +
    "      </div>\n" +
    "\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"card card-guests\">\n" +
    "      <h4>Nombre d'invités</h4>\n" +
    "        <div class=\"button-bar\">\n" +
    "          <a ng-class=\"{highlighted: invite.value.length == 1}\" ng-click=\"updateInviteValue(1)\" class=\"button\">1</a>\n" +
    "          <a ng-class=\"{highlighted: invite.value.length == 2}\" ng-click=\"updateInviteValue(2)\" class=\"button\">2</a>\n" +
    "          <a ng-class=\"{highlighted: invite.value.length == 3}\" ng-click=\"updateInviteValue(3)\" class=\"button\">3</a>\n" +
    "          <a ng-class=\"{highlighted: invite.value.length == 4}\" ng-click=\"updateInviteValue(4)\" class=\"button\">4</a>\n" +
    "          <a ng-class=\"{highlighted: invite.value.length == 5}\" ng-click=\"updateInviteValue(5)\" class=\"button\">5</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div ng-repeat=\"i in invite.value track by $index\" class=\"wine-content item item-body\">\n" +
    "      <form class=\"rating-form-group\">\n" +
    "        <h2>Invité {{$index +1}}</h2>\n" +
    "        <input type=\"email\" ng-model=\"groupRating.data.ratings[$index].email\" placeholder=\"Email\">\n" +
    "        <h4>Note</h4>\n" +
    "        <div class=\"icon-rating centered\">\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '1' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '1.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '2'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '2.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '3'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '3.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '4'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '4.5' \" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "            </ul>\n" +
    "            <ul ng-show=\"groupRating.data.ratings[$index].rating == '5'\" class=\"rating\">\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "              <li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "          <div class=\"range-container\">\n" +
    "                <input ng-model=\"groupRating.data.ratings[$index].rating\" type=\"range\" name=\"volume\" min=\"1\" max=\"5\" value=\"4\" step=\"0.5\">\n" +
    "          </div>\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <input type=\"text\" ng-name=\"commentaire\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"groupRating.data.ratings[$index].comment\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "      <button class=\"button bar-footer-button\" ng-click=\"rateWines()\"><h4>Noter</h4></button>\n" +
    "\n" +
    "    </ion-content>\n" +
    "  </ion-modal-view>");
}]);

angular.module("home/wine.rating/wine.rating.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/wine.rating/wine.rating.tpl.html",
    "	<ion-modal-view>\n" +
    "	<ion-header-bar class=\"bar-positive\">\n" +
    "			<button class=\"button\" ng-click=\"closeModal()\">Annuler</button>\n" +
    "		<h1 class=\"title\">Noter mon Vin</h1>\n" +
    "	</ion-header-bar>\n" +
    "	<ion-content  has-bouncing=\"false\">\n" +
    "	<div class=\"wine-header\">\n" +
    "	<div class=\"row row-center\">\n" +
    "		<div class=\"col centered\">\n" +
    "			<h3>{{bottle.wine.display_name}}</h3>\n" +
    "			<h4>{{bottle.wine.region}} - {{bottle.wine.appellation}}</h4>\n" +
    "			<!-- <h4>{{bottle.wine.appellation}}</h4> -->\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row row-header-bottom row-center\">\n" +
    "		<div class=\"col col-75\">\n" +
    "			<div class=\"row row-center align-left\">\n" +
    "			<div class=\"col col-20\">\n" +
    "					<img class=\"img-grapes\" src=\"assets/utils/grapes.svg\" alt=\"grapes-logo\">\n" +
    "			</div>\n" +
    "			<div class=\"col\">\n" +
    "					<p>{{bottle.wine.variety}}</p>\n" +
    "					<!-- <h4>{{bottle.wine.variety}}</h4> -->\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col align-right\">\n" +
    "			<div class=\"row\">\n" +
    "			<div class=\"col\"><p>{{bottle.wine.vintage}}</p></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"wine-content padding\">\n" +
    "		<form class=\"rating-form\">\n" +
    "		<h4>Note <span class=\"item-note\">glissez jusqu'à votre note</span></h4>\n" +
    "		<p class=\"literal-rating\">\"{{literalRating.value}}\"</p>\n" +
    "\n" +
    "		<div class=\"icon-rating centered\">\n" +
    "				<ul ng-show=\"rating.data.rating == '1' \" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '1.5' \" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '2'\" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '2.5' \" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '3'\" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '3.5' \" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '4'\" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '4.5' \" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-half\"></i></li>\n" +
    "				</ul>\n" +
    "				<ul ng-show=\"rating.data.rating == '5'\" class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div class=\"range-container\">\n" +
    "		    		<input ng-model=\"rating.data.rating\" type=\"range\" name=\"volume\" min=\"1\" max=\"5\" value=\"4\" step=\"0.5\">\n" +
    "			</div>\n" +
    "\n" +
    "\n" +
    "		<h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "		<textarea ng-name=\"commentaire\" rows=\"4\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"rating.data.comment\"></textarea>\n" +
    "\n" +
    "		<div class=\"checkbox-nude\">\n" +
    "			<ion-checkbox  ng-model=\"rating.data.get_more\"><p>Revoir ce vin dans mon vinibar</p></ion-checkbox>\n" +
    "		</div>\n" +
    "\n" +
    "		</form>\n" +
    "	</div>\n" +
    "	<button class=\"button bar-footer-button\" ng-click=\"rateWine()\"><h4>Noter</h4></button>\n" +
    "	</ion-content>\n" +
    "	<!-- <div class=\"bar bar-footer bar-footer-button\"> -->\n" +
    "	<!-- </div> -->\n" +
    "	</ion-modal-view>");
}]);

angular.module("home/wine/wine.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/wine/wine.tpl.html",
    "<ion-view title=\"Déguster\">\n" +
    "  <ion-content has-bouncing=\"false\">\n" +
    "    <div class=\"wine-header\">\n" +
    "      <div class=\"row row-center\">\n" +
    "          <div class=\"col centered\">\n" +
    "            <h3>{{bottle.wine.display_name}}</h3>\n" +
    "            <h4>{{bottle.wine.region}} - {{bottle.wine.appellation}}</h4>\n" +
    "            <!-- <h4>{{bottle.wine.appellation}}</h4> -->\n" +
    "          </div>\n" +
    "      </div>\n" +
    "      <div class=\"row row-header-bottom row-center\">\n" +
    "          <div class=\"col col-75\">\n" +
    "            <div class=\"row row-center align-left\">\n" +
    "              <div class=\"col col-20\">\n" +
    "                    <img class=\"img-grapes\" src=\"assets/utils/grapes.svg\" alt=\"grapes-logo\">\n" +
    "              </div>\n" +
    "              <div class=\"col\">\n" +
    "                    <p>{{bottle.wine.variety}}</p>\n" +
    "                    <!-- <h4>{{bottle.wine.variety}}</h4> -->\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "          <div class=\"col align-right\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col\"><p>{{bottle.wine.vintage}}</p></div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"wine-content padding\">\n" +
    "        <div class=\"row row-buttons\">\n" +
    "              <div class=\"col\">\n" +
    "                <a class=\"button button-outline-primary\" ng-click=\"openModal()\">\n" +
    "                  Noter ce vin\n" +
    "                </a>\n" +
    "              </div>\n" +
    "              <div class=\"col\">\n" +
    "                <a class=\"button button-less\" ng-click=\"openGroupModal()\">\n" +
    "                  Noter à plusieurs\n" +
    "                </a>\n" +
    "              </div>\n" +
    "        </div>\n" +
    "\n" +
    "          <h4>Description</h4>\n" +
    "\n" +
    "          <p ng-bind-html=\"bottle.wine.description\" class=\"justified\"><p>\n" +
    "\n" +
    "        <h4>Service</h4>\n" +
    "        <div class=\"row row-center\">\n" +
    "          <div class=\"col\"><p class=\"service-par\"><i class=\"icon ion-thermometer\"></i> {{bottle.wine.temperature}}</p></div>\n" +
    "          <div class=\"col\"><p class=\"service-par\"><i class=\"icon ion-beaker\"></i> Carafer le vin <span ng-show=\"bottle.wine.carafage\">1h30</span> <span ng-show=\"!bottle.wine.carafage\">1h30</span> avant dégustation.</p></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <h4>Dégustation</h4>\n" +
    "        <p ng-bind-html=\"bottle.wine.tasting_info\" class=\"justified\"><p>\n" +
    "  </div>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("sidemenu/sidemenu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidemenu/sidemenu.tpl.html",
    "<ion-side-menus>\n" +
    "\n" +
    "        <ion-side-menu-content>\n" +
    "          <ion-nav-bar class=\"bar-positive\">\n" +
    "            <ion-nav-back-button class=\"button-icon ion-ios7-arrow-back\">\n" +
    "            </ion-nav-back-button>\n" +
    "          </ion-nav-bar>\n" +
    "          <ion-nav-view animation=\"slide-left-right-ios7\" name=\"menuContent\"></ion-nav-view>\n" +
    "        </ion-side-menu-content>\n" +
    "\n" +
    "        <ion-side-menu side=\"left\">\n" +
    "          <ion-header-bar class=\"bar-assertive\">\n" +
    "            <h1 class=\"title\">Menu</h1>\n" +
    "          </ion-header-bar>\n" +
    "          <ion-content>\n" +
    "            <ul class=\"list side-list\">\n" +
    "              <a href ui-sref=\"sidemenu.home\" class=\"item\" menu-close><i class=\"icon ion-home\"></i> Home</a>\n" +
    "              <a href ui-sref=\"sidemenu.vinibar\" class=\"item\" menu-close><i class=\"icon ion-wineglass\"></i> Vinibar</a>\n" +
    "              <a href ui-sref=\"sidemenu.profile\" class=\"item\" menu-close><i class=\"icon ion-person\"></i> Profil</a>\n" +
    "              <a href ui-sref=\"sidemenu.order\" class=\"item\" menu-close><i class=\"icon ion-ios7-cart\"></i> Commander</a>\n" +
    "              <a ng-click=\"logOut()\" class=\"item\" menu-close><i class=\"icon ion-log-out\"></i> Se Déconnecter</a>\n" +
    "              <a href=\"mailto:charlotte@vinify.co?subject=Feedback%20%7C%20Vinify%20App&amp;body=Bonjour%20!\" class=\"item\" menu-close><i class=\"icon ion-help-circled\"></i> Feedback</a>\n" +
    "            </ul>\n" +
    "          </ion-content>\n" +
    "        </ion-side-menu>\n" +
    "\n" +
    "</ion-side-menus>");
}]);

angular.module('templates-common', ['security/loginform.tpl.html', 'tpl/address.tpl.html', 'tpl/oops.tpl.html', 'tpl/yipee.tpl.html']);

angular.module("security/loginform.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/loginform.tpl.html",
    "<ion-view title=\"Login\" ng-controller=\"LoginFormController\"  class=\"full-background-primary\" >\n" +
    "  <ion-content has-header=\"true\" has-footer=\"false\" id=\"login-screen\">\n" +
    "\n" +
    "    <img src=\"assets/utils/logo-vinify-primary.svg\" alt=\"logo-vinify\">\n" +
    "\n" +
    "    <form name=\"form\" novalidate>\n" +
    "              <p class=\"padding p-white\" ng-show=\"authError\">\n" +
    "                {{authError}}\n" +
    "              </p>\n" +
    "              <p class=\"padding p-white\">\n" +
    "                L'appli Vinify évolue !, pour vous logguer <br><a href=\"https://api.vinify.co/api/users/password/reset\" target=\"_blank\" >cliquez ici</a> et réinitialisez votre mot de passe.\n" +
    "              </p>\n" +
    "              <!-- TODO SUPPR -->\n" +
    "        <div class=\"list card\">\n" +
    "            <label for=\"email\" class=\"item item-input\">\n" +
    "              <!-- <span class=\"input-label\">Email</span> -->\n" +
    "              <input id=\"email\" name=\"email\" autocomplete=\"email\" type=\"email\" ng-model=\"user.email\" required placeholder=\"Email\">\n" +
    "            </label>\n" +
    "            <label for=\"password\" class=\"item item-input\">\n" +
    "              <!-- <span class=\"input-label\">Mot de Passe</span> -->\n" +
    "              <input id=\"password\" autocomplete=\"password\" name=\"pass\" type=\"password\" ng-model=\"user.password\" required placeholder=\"Mot de Passe\">\n" +
    "            </label>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "          <button class=\"button button-outline-white\" ng-click=\"login()\" ng-disabled='form.$invalid'>Se connecter</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <div>\n" +
    "          <a href=\"https://api.vinify.co/api/users/password/reset\" target=\"_blank\" class=\"p-white\">J'ai oublié mon mot de passe</a>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <a href=\"https://start.vinify.co\" target=\"_blank\" class=\"p-white\">Je n'ai pas de compte, commencer l'aventure</a>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("tpl/address.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/address.tpl.html",
    "  <ion-modal-view>\n" +
    "    <ion-header-bar class=\"bar-positive\">\n" +
    "          <h1 class=\"title\">Mes addresses</h1>\n" +
    "          <button class=\"button\" ng-click=\"closeModal()\">Terminé</button>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "    <label class=\"item item-input item-select\">\n" +
    "      <div class=\"input-label\">\n" +
    "        Livraison\n" +
    "      </div>\n" +
    "      <select name=\"addresses\" ng-change=\"fireDelivery(current.delivery_address)\" ng-model=\"current.delivery_address\" ng-options=\"address.uuid as address.street for address in addresses\"></select>\n" +
    "    </label>\n" +
    "    <label class=\"item item-input item-select\">\n" +
    "      <div class=\"input-label\">\n" +
    "        Facturation\n" +
    "      </div>\n" +
    "      <select name=\"addresses\" ng-change=\"fireBilling(current.billing_address)\" ng-model=\"current.billing_address\" ng-options=\"address.uuid as address.street for address in addresses\"></select>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"padding centered\">\n" +
    "      <button class=\"button button-less\" ng-show=\"!form_show\" ng-click=\"form_show = true\">Ajouter une adresse</button>\n" +
    "    </div>\n" +
    "    <form name=\"form_address\" class=\"list card\" ng-show=\"form_show\">\n" +
    "\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.company\" name=\"company\" autocomplete=\"company\" placeholder=\"Société\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.street\" name=\"street\" autocomplete=\"street\" placeholder=\"N° et Rue *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.city\" name=\"city\" autocomplete=\"city\" placeholder=\"Ville *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"number\" ng-model=\"address_suppl.data.zipcode\" name=\"zipcode\" autocomplete=\"zipcode\" placeholder=\"Code Postal *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.country\" name=\"country\" autocomplete=\"country\" placeholder=\"Pays *\" required>\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.intercom\" name=\"intercom\" autocomplete=\"intercom\" placeholder=\"Interphone\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <input type=\"text\" ng-model=\"address_suppl.data.digicode\" name=\"digicode\" autocomplete=\"digicode\" placeholder=\"Code\">\n" +
    "      </label>\n" +
    "      <label class=\"item item-input\">\n" +
    "          <textarea type=\"text\" ng-model=\"address_suppl.data.other_info\" name=\"other_info\" autocomplete=\"other_info\" placeholder=\"Infos Suppl. (Code, Escalier ..)\"></textarea>\n" +
    "      </label>\n" +
    "      <li class=\"item item-checkbox\">\n" +
    "         <label class=\"checkbox\">\n" +
    "            <input type=\"checkbox\" ng-model=\"address_suppl.data.current_billing\">\n" +
    "         </label>\n" +
    "        <p>Adresse de Facturation</p>\n" +
    "      </li>\n" +
    "      <li class=\"item item-checkbox\">\n" +
    "         <label class=\"checkbox\">\n" +
    "          <input type=\"checkbox\" ng-model=\"address_suppl.data.current_delivery\">\n" +
    "         </label>\n" +
    "        <p>Adresse de Livraison</p>\n" +
    "      </li>\n" +
    "      <li class=\"item\">\n" +
    "        <button class=\"button button-full button-positive\" ng-click=\"addAddress(form_address)\">Ajouter</button>\n" +
    "      </li>\n" +
    "\n" +
    "    </form>\n" +
    "\n" +
    "    </ion-content>\n" +
    "    <div class=\"bar bar-footer bar-positive\" ng-click=\"updateOrCreateAddress()\">\n" +
    "        <div class=\"title\">Terminé</div>\n" +
    "    </div>\n" +
    "  </ion-modal-view>");
}]);

angular.module("tpl/oops.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/oops.tpl.html",
    "  <ion-modal-view>\n" +
    "    <ion-header-bar class=\"bar-positive\">\n" +
    "          <button class=\"button\" ng-click=\"closeOopsModal()\"><i class=\"icon ion-android-close\"></i></button>\n" +
    "          <h1 class=\"title\"></h1>\n" +
    "          <button class=\"button\" ng-click=\"closeOopsModal()\">OK</button>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "    <div ng-style=\"full_height\" class=\"row row-center response-modal\">\n" +
    "      <div class=\"col centered\">\n" +
    "        <img src=\"assets/utils/oops.svg\" alt=\"Oops\">\n" +
    "        <h3>Oops ...</h3>\n" +
    "        <h4>Il y a eu une erreur, merci de recommencer.</h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    </ion-content>\n" +
    "  </ion-modal-view>");
}]);

angular.module("tpl/yipee.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tpl/yipee.tpl.html",
    "  <ion-modal-view>\n" +
    "    <ion-header-bar class=\"bar-positive\">\n" +
    "          <button class=\"button\" ng-click=\"closeYipeeModal()\"><i class=\"icon ion-android-close\"></i></button>\n" +
    "          <h1 class=\"title\"></h1>\n" +
    "          <button class=\"button\" ng-click=\"closeYipeeModal()\">OK</button>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
    "    <div ng-style=\"full_height\" class=\"row row-center response-modal\">\n" +
    "      <div class=\"col centered\">\n" +
    "        <img src=\"assets/utils/yipee.svg\" alt=\"Yipee\">\n" +
    "        <h3>Yipee !</h3>\n" +
    "        <h4>Tout c'est bien passé.</h4>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    </ion-content>\n" +
    "  </ion-modal-view>");
}]);

})( window, window.angular );
