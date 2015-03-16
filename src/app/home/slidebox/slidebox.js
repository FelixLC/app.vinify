angular.module('app.slidebox', [])

  .config(function ($stateProvider) {
    $stateProvider
      .state('sidemenu.slidebox', {
          url: "/tutoriel",
          views: {
            menuContent: {
              controller: 'slideBoxCtrl',
              templateUrl: 'home/slidebox/slidebox.tpl.html'
            }
          }
      })
      .state('sidemenu.slidebox_2', {
          url: "/tutoriel-2",
          views: {
            menuContent: {
              controller: 'slideBoxCtrl',
              templateUrl: 'home/slidebox/slidebox_2.tpl.html'
            }
          }
      });
  })
  .controller('slideBoxCtrl', function slideBoxCtrl ($scope) {

  });