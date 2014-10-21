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
    "							<p>Livraison suivie par la Poste.</p>\n" +
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
    "      <ion-view hide-back-button=\"true\" title=\"Accueil\">\n" +
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
    "<ion-view title=\"Commander\">\n" +
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
    "			<div ng-repeat=\"referral in user.referrals\" class=\"row\">\n" +
    "				<div class=\"col centered\">\n" +
    "						<p>{{referral.referred.first_name}}</p>\n" +
    "				</div>\n" +
    "				<div class=\"col centered\">\n" +
    "						<p><img ng-show=\"referral.created_at\" src=\"assets/utils/tick.svg\" alt=\"tick\"></p>\n" +
    "				</div>\n" +
    "				<div class=\"col centered\">\n" +
    "						<p>\n" +
    "							<img ng-show=\"referral.validated_at\" src=\"assets/utils/tick.svg\" alt=\"tick\">\n" +
    "							<a class=\"link-dotted link-black\" ng-show=\"isWebView && !referral.validated_at\" ng-click=\"sendMail(referral.referred.first_name, referral.referred.email)\">Relancer</a>\n" +
    "						</p>\n" +
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
    "            <a class=\"button button-outline-primary\" ng-click=\"buy()\">\n" +
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
    "<ion-view title=\"Vinibar\">\n" +
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
    "		<ion-refresher\n" +
    "			pulling-text=\"Pull to refresh...\"\n" +
    "			on-refresh=\"update()\">\n" +
    "		</ion-refresher>\n" +
    "		<!-- order notification -->\n" +
    "		<a ng-show=\"user.awaiting_order\" class=\"item centered\" ng-click=\"orderReceived()\">\n" +
    "			<h3>Une commande est en route !</h3>\n" +
    "			<p>Cliquez ici si vous l'avez reçue</p>\n" +
    "		</a>\n" +
    "		<a  ng-show=\"user.status == 1\" class=\"item centered\" ng-click=\"questionnaire()\">\n" +
    "			<h3>Vous n'avez pas encore de vinibar !</h3>\n" +
    "			<p>Cliquez ici pour démarrer l'aventure</p>\n" +
    "		</a>\n" +
    "		<a  ng-show=\"user.status == 2 || user.status == 2.5\" class=\"item centered\" ng-click=\"payOrder()\">\n" +
    "			<h3>Vous n'avez pas finalisé votre commande !</h3>\n" +
    "			<p>Cliquez ici pour continuer l'aventure</p>\n" +
    "		</a>\n" +
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
    "</ion-view>");
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
