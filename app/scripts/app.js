'use strict';

angular.module('customerUiApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/createCustomer', {
        templateUrl: 'views/createView.html',
        controller: 'CreateCtrl'
      })
      .when('/getCustomer', {
        templateUrl: 'views/getView.html',
        controller: 'GetCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
