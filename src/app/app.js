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
		$rootScope.online = $window.navigator.onLine;

		$window.addEventListener("offline", function () {
			$rootScope.$apply(function() {
				$rootScope.online = false;
			});
		}, false);

		$window.addEventListener("online", function () {
			$rootScope.$apply(function() {
				$rootScope.online = true;
			});
		}, false);

		$rootScope.toggleOnline = function(){
			$rootScope.isOnline = !$rootScope.isOnline;
		};

}])

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
})

.config(['$httpProvider', function($httpProvider) {
				delete $httpProvider.defaults.headers.common['X-Requested-With'];
				$httpProvider.defaults.xsrfCookieName = 'csrftoken';
				$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		}
])

.controller('AppCtrl', function($scope, $rootScope, $ionicSideMenuDelegate, $ionicModal, $window, OfflineQueue, $ionicPlatform, $ionicLoading, $cordovaToast, $cordovaNetwork, $cordovaSplashscreen, Bottles) {

	$scope.$watch('online', function(newValue, oldValue) {
		if (newValue === true) {
				console.log('Onliiiiiine');
				OfflineQueue.sendRatings();
				Bottles.updateList();
				//if (ionic.Platform.isWebView()) {
				//		$cordovaToast.show('Mise à jour de la liste des  vins ...', 'short', 'top').then(function(success) {
				//		}, function (error) {
				//			//error
				//		});
				//}
		}

		if (newValue === false) {
				console.log('Offfliiiiiine');
				// $cordovaToast.show('Offline ...', 'short', 'top').then(function(success) {
				// }, function (error) {
				//   // error
				// });
		}
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

});