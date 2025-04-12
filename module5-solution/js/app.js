(function () {
    'use strict';
    
    angular.module('public', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/signup', {
          templateUrl: 'signup.html',
          controller: 'SignupController',
          controllerAs: 'signupCtrl'
        })
        .when('/myinfo', {
          templateUrl: 'myinfo.html',
          controller: 'MyInfoController',
          controllerAs: 'myInfoCtrl'
        })
        .otherwise({redirectTo: '/signup'});
    });
    })();
    