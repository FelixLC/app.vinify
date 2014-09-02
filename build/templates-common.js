angular.module('templates-common', ['security/loginform.tpl.html', 'tpl/address.tpl.html', 'tpl/oops.tpl.html', 'tpl/yipee.tpl.html']);

angular.module("security/loginform.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("security/loginform.tpl.html",
    "<ion-view title=\"Login\" ng-controller=\"LoginFormController\">\n" +
    "  <ion-content has-header=\"true\" has-footer=\"false\" class=\"full-background-primary\" id=\"login-screen\">\n" +
    "\n" +
    "    <img src=\"assets/utils/logo-vinify-primary.svg\" alt=\"logo-vinify\">\n" +
    "\n" +
    "    <form name=\"form\" novalidate>\n" +
    "              <p class=\"p-white\" ng-show=\"authError\">\n" +
    "                {{authError}}\n" +
    "              </p>\n" +
    "            <div class=\"list card\">\n" +
    "                <label for=\"email\" class=\"item item-input\">\n" +
    "                  <!-- <span class=\"input-label\">Email</span> -->\n" +
    "                  <input id=\"email\" name=\"email\" autocomplete=\"email\" type=\"email\" ng-model=\"user.email\" required placeholder=\"Email\">\n" +
    "                </label>\n" +
    "                <label for=\"password\" class=\"item item-input\">\n" +
    "                  <!-- <span class=\"input-label\">Mot de Passe</span> -->\n" +
    "                  <input id=\"password\" autocomplete=\"password\" name=\"pass\" type=\"password\" ng-model=\"user.password\" required placeholder=\"Mot de Passe\">\n" +
    "                </label>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "              <button class=\"button button-outline-white\" ng-click=\"login()\" ng-disabled='form.$invalid'>Se connecter</button>\n" +
    "          </div>\n" +
    "\n" +
    "<!--           <div>\n" +
    "              <a href=\"/user/password/reset\" class=\"button button-less-white\"><p>J'ai oublié mon mot de passe</p></a>\n" +
    "          </div> -->\n" +
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
    "    <button class=\"button bar-footer-button\" ng-click=\"updateOrCreateAddress()\"><h4>Terminé</h4></button>\n" +
    "    </ion-content>\n" +
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
