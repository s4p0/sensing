'use strict';

angular.module('sensingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'mgcrea.ngStrap'
])
  .config(function ($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // .when('/navbar', {
      //   templateUrl: 'views/navbar.html',
      //   controller: 'NavbarCtrl'
      // })
      // .otherwise({
      //   redirectTo: '/'
      // });
  });
