(function () {
  'use strict';

  angular
      .module('mockBackend', [])
      .factory('mockWine', mockWine);

  /* @ngInject */
  function mockWine () {
    return {
        uuid: "6e6fba1920564bb8b6fb374bc35478cf",
        class_name: "bottle",
        wine: {
          uuid: "f26324907df243b191ba903d84a0aa6d",
          class_name: "wine",
          color: "Rouge",
          vintage: 2007,
          country: "France",
          region: "Bordeaux",
          appellation: "Pauillac",
          display_name: "L'effrontée de Venus",
          variety: "Cabernet-Sauvignon, Carmènere",
          price_level: 29,
          product_code: "DDV09BBLC20",
          name: "L'effrontée de Venus",
          testimonial: "j'ai beaucoup aimé le nez fumé, frais ! bonne densité en bouche et bonne lougueur ! nous l'avons bu à l'apéro mais effectivement sur un bar ou un saint pierre ... ca doit etre top  ",
          occasion: "lors d'un apéritif entre amis au bord de l'eau",
          tasting: "Un assemblage de  Grenache, Carignan et Macabeu pour un Vin du sud ensoleillé, intense, et fruité.",
          dress: "Jaune pâle avec de nombreux reflets verts",
          nose: "Intense, Epices d'Orient, Thé, Jolies notes de fruits exotiques et de fruits secs",
          mouth: "Attaque franche, Notes d'agrûmes,  Grasse et Ample, Finale est longue et fraîche sur des notes de torréfaction et d’eucalyptus",
          food: "Poisson noble, à chair ferme, de mer ou d'eau douce (sole, bar, saint-pierre, cabillaud, saumon, omble chevalier, truite),  Une viande blanche (volaille, veau, ris de veau)",
          cuisine: "Cuisine méditerranéenne ",
          meat_fish: "Volaille, Poisson à chaire blanche",
          cooking: "Grillé(Barbecue), Four",
          sides: "Tomates, Olives, Riz",
          cheeses: "Fromages à pate dure",
          deserts: "Desserts chocolatés",
          domain: "Une bande d’amis passionnés de vins se sont regroupés il y a quelques années pour donner vie à ce beau terroir perdu sur les hauteurs de la vallée de l’Agly.",
          domain_know_more: "L’altitude des côteaux les plus élevés des Côtes du Rousillon, sur les contreforts du massif des corbières, voit les vents marins tempérer la chaleur de l’été et donner au vin une fraîcheur équilibrant sa puissance.",
          temperature_min: "12",
          temperature_max: "14",
          info: "Stockage : Sortez-le du réfrigérateur et ouvrez la bouteille 30min avant la dégustation pour qu’elle soit à température optimale.  Si la bouteille était stockée à température ambiante, laissez-la 30 min. au congélateur entouré d’un chiffon bien humide ou placez-le un quart, d’heure dans un seau d’eau fraîche avec quelques glaçons.",
          education: "Les schistes donnent une remarquable minéralité à ce blanc au nom provocateur constitué de vieilles vignes de grenache gris, de macabeu, et de carignan blanc."
        },
        user: {
          uuid: "3aa1800299dd495db027a192d8b33747",
          class_name: "user",
          first_name: "Félix",
          last_name: "Le Chevallier",
          email: "felix@vinify.co",
          phone: "0683620433",
          token: "97df10636bf13a7633aed21b23f9430c6b01e05d",
          status: 1
        },
        visible: false,
        date_rated: null,
        date_mounted: "2014-09-12T13:34:14.580Z",
        rating: null,
        comment: null,
        get_more: false
      };
  }
})();