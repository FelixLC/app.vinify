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

});