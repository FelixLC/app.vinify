angular.module('templates-app', ['home/deliverymode/deliverymode.tpl.html', 'home/home.tpl.html', 'home/order/order.tpl.html', 'home/pay/pay.tpl.html', 'home/profile/profile.tpl.html', 'home/profile/user.tpl.html', 'home/ratedwine/ratedwine.tpl.html', 'home/vinibar/vinibar.tpl.html', 'home/wine.rating/wine.rating.group.tpl.html', 'home/wine.rating/wine.rating.tpl.html', 'home/wine/wine.tpl.html', 'sidemenu/sidemenu.tpl.html']);

angular.module("home/deliverymode/deliverymode.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/deliverymode/deliverymode.tpl.html",
    "      <ion-view title=\"Mode de Livraison\">\n" +
    "        <ion-content class=\"has-footer\">\n" +
    "          <!-- <div class=\"list radio-delivery\"> -->\n" +
    "            <label class=\"item item-radio item-thumbnail-left\">\n" +
    "              <input type=\"radio\" ng-model=\"order.data.delivery_mode\" name=\"choice\" value=\"Transporteur\">\n" +
    "              <div ng-style=\"calcHeight\" class=\"item-content item-text-wrap\">\n" +
    "                <img src=\"assets/utils/truck.svg\" alt=\"\">\n" +
    "                <h2>Transporteur</h2>\n" +
    "                <h3>12 €</h3>\n" +
    "                <p>Livraison suivie sous 15j par la Poste ou TNT.</p>\n" +
    "              </div>\n" +
    "              <i class=\"radio-icon ion-checkmark\"></i>\n" +
    "            </label>\n" +
    "\n" +
    "            <label class=\"item item-radio item-thumbnail-left\">\n" +
    "              <input type=\"radio\" ng-model=\"order.data.delivery_mode\" name=\"choice\" value=\"Point Relais\">\n" +
    "              <div ng-style=\"calcHeight\" class=\"item-content item-text-wrap\">\n" +
    "                <img src=\"assets/utils/store.svg\" alt=\"\">\n" +
    "                <h2>Point Relais</h2>\n" +
    "                <h3>9 €</h3>\n" +
    "                <p>Venez retirer votre colis dans le Mondial Relay le plus proche de chez vous.</p>\n" +
    "              </div>\n" +
    "              <i class=\"radio-icon ion-checkmark\"></i>\n" +
    "            </label>\n" +
    "\n" +
    "            <label class=\"item item-radio item-thumbnail-left\">\n" +
    "              <input type=\"radio\" ng-model=\"order.data.delivery_mode\" name=\"choice\" value=\"Retrait Vinify\">\n" +
    "              <div ng-style=\"calcHeight\" class=\"item-content item-text-wrap\">\n" +
    "                <img src=\"assets/utils/deliveryman.svg\" alt=\"\">\n" +
    "                <h2>Chez Vinify</h2>\n" +
    "                <h3>Gratuit</h3>\n" +
    "                <p>Venez retirer votre colis en semaine entre 10h et 19h (Issy-Les-Moulineaux).</p>\n" +
    "              </div>\n" +
    "              <i class=\"radio-icon ion-checkmark\"></i>\n" +
    "            </label>\n" +
    "\n" +
    "            <div ng-style=\"calcHeight\" class=\"item centered\">\n" +
    "            <div class=\"row row-center\">\n" +
    "              <div class=\"col\">\n" +
    "                  <h4>Adresse de Livraison</h4>\n" +
    "                  <br>\n" +
    "                  <p>{{user.delivery_address.street}}\n" +
    "                  <br>{{user.delivery_address.zipcode}} - {{user.delivery_address.city}}</p>\n" +
    "              </div>\n" +
    "              <div class=\"col\">\n" +
    "                    <button class=\"button button-outline-primary\" ng-click=\"openModal()\">Modifier</button>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            </div>\n" +
    "\n" +
    "          <!-- </div> -->\n" +
    "\n" +
    "        </ion-content>\n" +
    "        <div class=\"bar bar-footer bar-positive\" ng-click=\"createRefillOrder()\">\n" +
    "            <div class=\"title\">Commander ></div>\n" +
    "        </div>\n" +
    "      </ion-view>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "      <ion-view title=\"Welcome\">\n" +
    "        <ion-content>\n" +
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
    "	<ion-content class=\"has-footer\">\n" +
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
    "		<div class=\"list first-refill\">\n" +
    "			<div class=\"item price-selector\">\n" +
    "				<h4 class=\"centered\">Recharge 1</h4>\n" +
    "				<div class=\"row centered\">\n" +
    "					<div class=\"col\"><span ng-class=\"{highlighted: price.levelA == '3990' }\">39€90</span></div>\n" +
    "					<div class=\"col\"><span ng-class=\"{highlighted: price.levelA == '4990' }\">49€90</span></div>\n" +
    "					<div class=\"col\"><span ng-class=\"{highlighted: price.levelA == '5990' }\">59€90</span></div>\n" +
    "				</div>\n" +
    "				<div class=\"range range-assertive\">\n" +
    "					<input type=\"range\" name=\"volume\" min=\"0\" max=\"100\" ng-model=\"price.valueA\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		 </div>\n" +
    "\n" +
    "\n" +
    "		<div class=\"list second-refill\" ng-show=\"order.data.quantity == '2'\">\n" +
    "			<div class=\"item price-selector\">\n" +
    "				<h4 class=\"centered\">Recharge 2</h4>\n" +
    "				<div class=\"row centered\">\n" +
    "					<div class=\"col\"><span ng-class=\"{highlighted: price.levelB == '3990' }\">39€90</span></div>\n" +
    "					<div class=\"col\"><span ng-class=\"{highlighted: price.levelB == '4990' }\">49€90</span></div>\n" +
    "					<div class=\"col\"><span ng-class=\"{highlighted: price.levelB == '5990' }\">59€90</span></div>\n" +
    "				</div>\n" +
    "				<div class=\"range range-assertive\">\n" +
    "					<input type=\"range\" name=\"volume\" min=\"0\" max=\"100\" ng-model=\"price.valueB\">\n" +
    "				</div>\n" +
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
    " <ion-content>\n" +
    "   <div ng-style=\"calcHeight\" class=\"pay-header\">\n" +
    "       <h3 class=\"centered\">Récapitulatif de ma commande</h3>\n" +
    "   </div>\n" +
    "   <div class=\"list\">\n" +
    "     <div class=\"item item-text-wrap\">\n" +
    "       <div class=\"row\">\n" +
    "         <div class=\"col\">\n" +
    "           <p ng-show=\"serializedOrder.quantity == 1\">{{serializedOrder.quantity}} recharge</p>\n" +
    "           <p ng-show=\"serializedOrder.quantity == 2\">{{serializedOrder.quantity}} recharges</p>\n" +
    "         </div>\n" +
    "         <div class=\"col\">\n" +
    "           <p class=\"subtitle\">{{calcPrice()}}</p>\n" +
    "         </div>\n" +
    "       </div>\n" +
    "       <div class=\"row\">\n" +
    "         <div class=\"col\">\n" +
    "           <p>Livraison - {{serializedOrder.delivery_mode}}</p>\n" +
    "         </div>\n" +
    "         <div class=\"col\">\n" +
    "\n" +
    "         </div>\n" +
    "     </div>\n" +
    "     </div>\n" +
    "     <form name=\"stripe-form\" id=\"stripe-form\" stripe-form=\"submit\">\n" +
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
    "       <div class=\"row\">\n" +
    "         <img class=\"pull-right\" src=\"assets/utils/poweredbystripe.svg\" alt=\"stripe_verification\">\n" +
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
    "	<ion-content>\n" +
    "		<div class=\"item centered\">\n" +
    "			<h3>{{user.first_name}} {{user.last_name}}</h3>\n" +
    "			<p>{{user.email}}</p>\n" +
    "		</div>\n" +
    "		<div class=\"item centered item-profile\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col\">\n" +
    "					<h4>Note Moyenne</h4>\n" +
    "				<ul class=\"rating\">\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "					<li><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
    "				</ul>\n" +
    "				</div>\n" +
    "\n" +
    "			</div>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col\">\n" +
    "					<div class=\"row row-center\">\n" +
    "						<div class=\"col col-20\"><img src=\"assets/utils/grapes-black.svg\" alt=\"cepage\"></div>\n" +
    "						<div class=\"col\">\n" +
    "								<h4>Cépage Préféré</h4>\n" +
    "								<p class=\"subtitle\">Cab. Sauv.</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col\">\n" +
    "					<div class=\"row row-center\">\n" +
    "						<div class=\"col col-20\"><img src=\"assets/utils/france.svg\" alt=\"cepage\"></div>\n" +
    "						<div class=\"col\">\n" +
    "								<h4>Région Préférée</h4>\n" +
    "								<p class=\"subtitle\">Bretagne {{favorite_region}}</p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"row row-center\">\n" +
    "						<div class=\"col col-20\"><img src=\"assets/utils/chart.png\" alt=\"cepage\"></div>\n" +
    "						<div class=\"col align-left\">\n" +
    "								<h4>Consommation</h4>\n" +
    "								<p class=\"subtitle\">50% rouge, 40% blanc, 10% rosé.</p>\n" +
    "						</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"item item-gray\">\n" +
    "			<div class=\"row row-center\">\n" +
    "				<div class=\"col centered\">\n" +
    "					<h4>ViniPoints</h4>\n" +
    "					<span class=\"subtitle\">48</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"item\">\n" +
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
    "		<div class=\"item\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col centered\"><button class=\"button button-outline-primary\"><p>Récupérer ma récompense</p></button></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
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

angular.module("home/profile/user.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/profile/user.tpl.html",
    "  <ion-modal-view>\n" +
    "    <ion-header-bar class=\"bar-positive\">\n" +
    "          <button class=\"button\" ng-click=\"closeUserModal()\">Annuler</button>\n" +
    "          <h1 class=\"title\">Mes Infos</h1>\n" +
    "          <button class=\"button\" ng-click=\"closeUserModal()\">Terminé</button>\n" +
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
    "          <input type=\"number\" ng-model=\"user.phone\" name=\"phone\" autocomplete=\"phone\" placeholder=\"Téléphone\">\n" +
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
    "    </ion-content>\n" +
    "  </ion-modal-view>");
}]);

angular.module("home/ratedwine/ratedwine.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/ratedwine/ratedwine.tpl.html",
    "<ion-view title=\"Déguster\">\n" +
    "  <ion-content>\n" +
    "  <div class=\"wine-header\">\n" +
    "    <div class=\"row row-center\">\n" +
    "        <div class=\"col centered\">\n" +
    "          <h3>{{bottle.wine.display_name}}</h3>\n" +
    "          <h4>{{bottle.wine.region}} - {{bottle.wine.appellation}}</h4>\n" +
    "          <!-- <h4>{{bottle.wine.appellation}}</h4> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row row-header-bottom row-center\">\n" +
    "        <div class=\"col\">\n" +
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
    "              <a class=\"button button-outline-primary\">\n" +
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
    "         <li ng-repeat=\"i in star.full track by $index\"><i class=\"icon ion-ios7-star\"></i></li>\n" +
    "         <li ng-repeat=\"i in star.outline track by $index\"><i class=\"icon ion-ios7-star-outline\"></i></li>\n" +
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
    "              <div class=\"col\">\n" +
    "                <a class=\"button button-less\" ng-click=\"openGroupModal()\">\n" +
    "                  Noter à plusieurs\n" +
    "                </a>\n" +
    "              </div>\n" +
    "        </div>\n" +
    "</div>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("home/vinibar/vinibar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/vinibar/vinibar.tpl.html",
    "      <ion-view title=\"Vinibar\">\n" +
    "      <ion-nav-buttons side=\"right\">\n" +
    "        <button class=\"button\" ng-click=\"search.toggle = !search.toggle\">\n" +
    "          <i class=\"icon ion-search\"></i>\n" +
    "        </button>\n" +
    "      </ion-nav-buttons>\n" +
    "        <div class=\"bar bar-subheader bar-segmented-control\">\n" +
    "          <p class=\"segmented-control\">\n" +
    "              <span class=\"segmented\">\n" +
    "                  <label><input type=\"radio\" name=\"list\" ng-model=\"segmentedControl.value\" value=\"toDrink\" checked><span class=\"label\">A boire</span></label>\n" +
    "                  <label><input type=\"radio\" name=\"list\" ng-model=\"segmentedControl.value\" value=\"rated\"><span class=\"label\">Notés</span></label>\n" +
    "              </span>\n" +
    "          </p>\n" +
    "      </div>\n" +
    "      <div ng-show=\"search.toggle\" class=\"bar bar-subheader item-input-inset\">\n" +
    "        <label class=\"item-input-wrapper\">\n" +
    "          <i class=\"icon ion-ios7-search placeholder-icon\"></i>\n" +
    "          <input type=\"search\" ng-model=\"search.value\" placeholder=\"Search\">\n" +
    "        </label>\n" +
    "        <button class=\"button-clear\" ng-click=\"search.value = '' \">\n" +
    "          Annuler\n" +
    "        </button>\n" +
    "      </div>\n" +
    "        <ion-content class=\"has-subheader\">\n" +
    "          <ion-list ng-show=\"segmentedControl.value === 'rated'\">\n" +
    "            <a ng-repeat=\"bottle in bottleList.results | filter: {date_rated: '!!'}  | filter: searchFilter\" class=\"item\" href=\"#/ratedwine/{{bottle.uuid}}\">\n" +
    "                <h3>{{bottle.wine.display_name}}</h3>\n" +
    "                <p class=\"vinitext\">\n" +
    "                    {{bottle.wine.region}}\n" +
    "                    <span class=\"item-note\"><i ng-repeat=\"i in getNumber(bottle.rating) track by $index\" class=\"icon ion-ios7-star full-star\"></i></span>\n" +
    "                    <br>\n" +
    "                    {{bottle.wine.appellation}}\n" +
    "                </p>\n" +
    "            </a>\n" +
    "          </ion-list>\n" +
    "          <ion-list ng-show=\"segmentedControl.value === 'toDrink'\">\n" +
    "            <a ng-repeat=\"bottle in bottleList.results | filter: {date_rated: '!'}  | filter: searchFilter\" class=\"item\" href=\"#/wine/{{bottle.uuid}}\">\n" +
    "                <h3>{{bottle.wine.display_name}}</h3>\n" +
    "                <p class=\"vinitext\">\n" +
    "                    {{bottle.wine.region}}\n" +
    "                    <span class=\"item-note\">{{bottle.wine.vintage}}</span>\n" +
    "                    <br>\n" +
    "                    {{bottle.wine.appellation}}\n" +
    "                  </p>\n" +
    "            </a>\n" +
    "          </ion-list>\n" +
    "        </ion-content>\n" +
    "      </ion-view>");
}]);

angular.module("home/wine.rating/wine.rating.group.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/wine.rating/wine.rating.group.tpl.html",
    "  <ion-modal-view>\n" +
    "    <ion-header-bar class=\"bar-positive\">\n" +
    "          <button class=\"button\" ng-click=\"closeGroupModal()\">Close</button>\n" +
    "      <h1 class=\"title\">Noter mon Vin</h1>\n" +
    "    </ion-header-bar>\n" +
    "    <ion-content>\n" +
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
    "        <div class=\"col\">\n" +
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
    "        <rating ng-model=\"rating.data.rating\" isReadonly=\"false\" max=\"5\"></rating>\n" +
    "\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <input type=\"text\" ng-name=\"commentaire\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"rating.data.comment\">\n" +
    "\n" +
    "        <div class=\"checkbox-nude\">\n" +
    "          <ion-checkbox><p>Revoir ce vin dans mon vinibar</p></ion-checkbox>\n" +
    "      </div>\n" +
    "\n" +
    "      </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"wine-content item item-body\">\n" +
    "      <form class=\"rating-form-group\">\n" +
    "        <h2>Invité 1</h2>\n" +
    "        <input type=\"email\" ng-model=\"groupRating.data.ratings[0].email\" placeholder=\"Email\">\n" +
    "        <h4>Note</h4>\n" +
    "        <rating ng-model=\"groupRating.data.ratings[0].rating\" isReadonly=\"false\" max=\"5\"></rating>\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <input type=\"text\" ng-name=\"commentaire\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"groupRating.data.ratings[0].comment\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"wine-content item item-body\">\n" +
    "      <form class=\"rating-form-group\">\n" +
    "        <h2>Invité 2</h2>\n" +
    "        <input type=\"email\" ng-model=\"groupRating.data.ratings[1].email\" placeholder=\"Email\">\n" +
    "        <h4>Note</h4>\n" +
    "        <rating ng-model=\"groupRating.data.ratings[1].rating\" isReadonly=\"false\" max=\"5\"></rating>\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <input type=\"text\" ng-name=\"commentaire\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"groupRating.data.ratings[1].comment\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"wine-content item item-body\">\n" +
    "      <form class=\"rating-form-group\">\n" +
    "        <h2>Invité 3</h2>\n" +
    "        <input type=\"email\" ng-model=\"groupRating.data.ratings[2].email\" placeholder=\"Email\">\n" +
    "        <h4>Note</h4>\n" +
    "        <rating ng-model=\"groupRating.data.ratings[2].rating\" isReadonly=\"false\" max=\"5\"></rating>\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <input type=\"text\" ng-name=\"commentaire\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"groupRating.data.ratings[2].comment\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "\n" +
    "        <div class=\"wine-content item item-body\">\n" +
    "      <form class=\"rating-form-group\">\n" +
    "        <h2>Invité 4</h2>\n" +
    "        <input type=\"email\" ng-model=\"groupRating.data.ratings[3].email\" placeholder=\"Email\">\n" +
    "        <h4>Note</h4>\n" +
    "        <rating ng-model=\"groupRating.data.ratings[3].rating\" isReadonly=\"false\" max=\"5\"></rating>\n" +
    "\n" +
    "        <h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "        <input type=\"text\" ng-name=\"commentaire\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"groupRating.data.ratings[3].comment\">\n" +
    "      </form>\n" +
    "    </div>\n" +
    "\n" +
    "      <button class=\"button button-less\" ng-click=\"addGuest()\">Ajouter un invité</button>\n" +
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
    "	<ion-content>\n" +
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
    "		<h4>Note</h4>\n" +
    "		<p class=\"literal-rating\">\"{{literalRating.value}}\"</p>\n" +
    "		<rating ng-model=\"rating.data.rating\" isReadonly=\"false\" max=\"5\"></rating>\n" +
    "\n" +
    "\n" +
    "		<h4 class=\"header-margin-top\">Commentaire :</h4>\n" +
    "		<textarea ng-name=\"commentaire\" rows=\"4\" placeholder=\"J'écris ici mon commentaire ...\" ng-model=\"rating.data.comment\"></textarea>\n" +
    "\n" +
    "		<div class=\"checkbox-nude\">\n" +
    "			<ion-checkbox><p>Revoir ce vin dans mon vinibar</p></ion-checkbox>\n" +
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
    "  <ion-content>\n" +
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
    "\n" +
    "          <h4>Description</h4>\n" +
    "\n" +
    "          <p ng-bind-html=\"bottle.wine.description\" class=\"justified\"><p>\n" +
    "\n" +
    "          <div class=\"row row-buttons\">\n" +
    "                <div class=\"col\">\n" +
    "                  <a class=\"button button-outline-primary\" ng-click=\"openModal()\">\n" +
    "                    Noter ce vin\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "                <div class=\"col\">\n" +
    "                  <a class=\"button button-less\" ng-click=\"openGroupModal()\">\n" +
    "                    Noter à plusieurs\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "          </div>\n" +
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
    "            <ion-nav-back-button class=\"button-icon ion-arrow-left-c\">\n" +
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
