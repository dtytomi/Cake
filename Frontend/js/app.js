var myApp = angular.module('cakemartz', ['ngRoute', 'ui.router']);

myApp
  .constant('constants', {
    API_URL: 'http://localhost:8000/api/'
  });

myApp
  .config(function($locationProvider, $stateProvider, $urlRouterProvider, $routeProvider) {

    // $urlRouterProvider.otherwise('/Cake/');

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    

  });
