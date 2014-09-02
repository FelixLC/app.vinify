angular.module( 'app.pay', ['Order', 'User', 'ionic', 'ngCordova', 'angularPayments', 'Loading'])
	.config(function($stateProvider, $urlRouterProvider) {
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
	})
	.directive('syncFocusWith', function($timeout, $rootScope) {
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
	})
	.controller( 'payCtrl', function payCtrl( $scope, $http, $location, SerializedOrder, User, $window, $ionicPlatform, $cordovaToast, Loading, $state ) {
		$scope.serializedOrder = SerializedOrder;
		console.log(SerializedOrder);

		Stripe.setPublishableKey('pk_test_sK21onMmCuKNuoY7pbml8z3Q');
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
					var apiEndPoint =  'http://powerful-cliffs-5344.herokuapp.com/api';
					$http({
						url: apiEndPoint + '/orders/chargerefill/',
						method: "POST",
						data: data
					})
					.success(function(data, status, headers, config) {
						Loading.hide();
						$scope.openYipeeModal();
						$state.go('sidemenu.home');
					})
					.error(function(data, status, headers, config) {
						Loading.hide();
						$scope.openOopsModal();
					});
				}

		};

		// TODO VERIFY WITH STATUS BAR
		var appropriatedHeight = ($window.innerHeight - 43) / 3;

		$scope.calcHeight = {
			"height": appropriatedHeight + 'px'
		};

		$scope.calcPrice = function() {
				var price = 0;
				for (var i = SerializedOrder.refills.length - 1; i >= 0; i--) {
					price += SerializedOrder.refills[i].price_level;
				}
				return price;
		};

		$scope.user = User.getUser();
	});