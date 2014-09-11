angular.module('Order', [])

.factory('Order', function($http, Bottles, SerializedOrder) {
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
})

.factory('orderInstance', function(Order) {
		var orderInstance = new Order();

		orderInstance.setOrderInstance = function(orderData) {
				angular.extend(orderInstance, orderData);
		};
		return orderInstance;
})

// Store the Order
.factory('SerializedOrder', function($http, Bottles) {

		var SerializedOrder = {};

		return SerializedOrder;
})
// Stripe Directive
	.directive('ngSparkline', function() {
		return {
			restrict: 'A',
			controller: function($scope, $http, $state) {
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
			},
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
