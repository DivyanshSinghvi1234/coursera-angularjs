(function () {
'use strict';

angular.module('public')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/signup');

  $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: 'src/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signCtrl'
    })

    .state('myinfo', {
      url: '/myinfo',
      templateUrl: 'src/myinfo/myinfo.html',
      controller: 'MyInfoController',
      controllerAs: 'infoCtrl'
    });
}
})();
