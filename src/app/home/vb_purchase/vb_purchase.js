angular.module('app.userinfos',
  [ 'visitorFactory', 'vinibarOrderService', 'Toaster', 'Loading', 'Analytics', 'app.vb_purchase.deliverymode' ])

  .config(function ($stateProvider) {
    $stateProvider
      .state('sidemenu.userinfos', {
          url: "/informations",
          abstract: true,
          views: {
            menuContent: {
              controller: 'userInfosCtrl',
              template: '<ui-view/>'
            }
          }
      })
      .state('sidemenu.userinfos.civil_state', {
          url: "/prenom-nom",
          templateUrl: 'home/vb_purchase/userinfos.tpl.html'
      })
      .state('sidemenu.userinfos.delivery_address', {
          url: "/addresse-livraison",
          templateUrl: 'home/vb_purchase/delivery.tpl.html'
      })
      .state('sidemenu.userinfos.billing_address', {
          url: "/addresse-livraison",
          templateUrl: 'home/vb_purchase/billing.tpl.html'
      });
  })
  .controller('userInfosCtrl',
    function userInfosCtrl ($scope, currentVisitor, toasters, $state, Mixpanel, vinibarOrder, $ionicModal, Loading) {

    var init = function () {
      $scope.client = currentVisitor.instance;
      $scope.client.userinfos.first_name = currentVisitor.instance.first_name;
      $scope.client.userinfos.last_name = currentVisitor.instance.last_name;
      $scope.b = {};
      $scope.coupon = {
        coupon: ''
      };
    };
    init();

    $scope.userInfosToDelivery = function (form) {
      if (form.$invalid) {
        toasters.pop('Merci de remplir tous les champs avec une *.', 'top', 'info');
      } else {
        currentVisitor.instance = $scope.client;
        $state.go('sidemenu.userinfos.delivery_address');
      }
    };

    $scope.addBilling = function (form) {
      if (form.$invalid) {
        toasters.pop('Merci de remplir tous les champs avec une *.', 'top', 'info');
      } else {
        currentVisitor.instance = $scope.client;
        $state.go('sidemenu.userinfos.billing_address');
      }
    };

    $scope.addCoupon = function (form) {
      $scope.openCouponModal();
    };

    $scope.registerBilling = function (form) {
      if (form.$invalid) {
        toasters.pop('Merci de remplir tous les champs avec une *.', 'top', 'info');
      } else {
        $scope.client.userinfos.same_billing = false;
        currentVisitor.instance = $scope.client;
        $scope.addUserInfo(form);
      }
    };

    $scope.registerDelivery = function (form) {
      console.log($scope.client);
      if (form.$invalid) {
        toasters.pop('Merci de remplir tous les champs avec une *.', 'top', 'info');
      } else {
        currentVisitor.instance = $scope.client;
        $scope.addUserInfo(form);
      }
    };

    var couponCheckerFail = function (response) {
      if (response === 'This code is not valid') {
        toasters.pop('Oops, votre code d\'accès semble erroné ! ' +
          'Veuillez réessayer ou contacter charlotte@vinify.co', 'top', 'info');
      } else if (response === 'This coupon has been redeemed') {
        toasters.pop('Malheureusement, Ce code est expiré !', 'top', 'info');
      } else if (response === 'Referrals may not be used on Discovery orders') {
        toasters.pop('Malheureusement, ' +
          'Vous ne pouvez pas utiliser un code parrainnage avec l\'offre découverte', 'top', 'info');
      } else if (response === 'Gift Coupon not allowed') {
        toasters.pop('Pour activer votre cadeau ' +
          'rendez vous sur Cadeau / Recevoir dans la barre de navigation de la page d\'acceuil', 'top', 'info');
      }
    };

    var couponCheckerSuccess = function (response) {
      if (response.coupon_type === 'Referral') {
        toasters.pop('Coupon validé ! Vous économisez 10€ !', 'top', 'success');
      } else if (response.coupon_type === 'Percentage') {
        toasters.pop('Coupon validé ! Vous économisez ' + response.value * 100 + ' % !', 'top', 'success');
      } else if (response.coupon_type === 'Monetary') {
        toasters.pop('Coupon validé ! Vous économisez ' + response.value + ' € !', 'top', 'success');
      }
    };

    //  ADD SCOPE INFO TO FACTORY THEN TRIGGER ORDER IF SUCCESS
    $scope.addUserInfo = function (form) {
      console.log($scope.client);
      Loading.show();
      if (form.$invalid) { // form is NOT valid
        Loading.hide();
        $scope.submitted = true;
        toasters.pop('Merci de remplir tous les champs avec une *.', 'top', 'info');
      } else { // form is valid
        $scope.client.userinfos.birthday = $scope.b.birthyear + "-" + $scope.b.birthmonth + "-" + $scope.b.birthday;
        currentVisitor.instance = $scope.client;
        $scope.client.addUserInfo(
          /****************
          * user info added
          *****************/
          function (response) {
            Mixpanel.track('UserInfo Added');
            vinibarOrder.create($scope.coupon.coupon,
              function (data) { // order created
                $scope.client.order = data;
                $scope.client.order.final_price = Math.round($scope.client.order.final_price * 100) / 100;
                currentVisitor.instance = $scope.client;
                $state.go('sidemenu.vb_purchase_deliverymode');
                Loading.hide();
              },
              function (response) { // order failed
                Loading.hide();
                toasters.pop('Oops, il y a eu une erreur ! Merci de réessayer', 'top', 'success');
                couponCheckerFail(response); // handles toaster in case of errors
              });
          },
          /*********************
          * user info NOT added
          *********************/
          function (response) {
            Loading.hide();
            toasters.pop('Oops, il y a eu une erreur ! Merci de réessayer', 'top', 'success');
          });
      }

    };

    // COUPON MODAL
    $ionicModal.fromTemplateUrl('home/vb_purchase/coupon.modal.tpl.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.couponModal = modal;
    });

    // Open & close the modal
    $scope.openCouponModal = function () {
      $scope.couponModal.show();
    };
    $scope.closeCouponModal = function () {
      $scope.couponModal.hide();
    };
    $scope.validateCoupon = function (coupon) {
      vinibarOrder.testCoupon(coupon,
        function (response) {
          $scope.client.coupon = coupon;
          couponCheckerSuccess(response);
          $scope.couponModal.hide();
        },
        function (response) {
          couponCheckerFail(response);
        });
    };

  });