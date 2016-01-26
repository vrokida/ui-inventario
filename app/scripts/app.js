'use strict';

/**
 * @ngdoc overview
 * @name uiInventarioApp
 * @description
 * # uiInventarioApp
 *
 * Main module of the application.
 */
angular
    .module('uiInventarioApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'http-auth-interceptor'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when("/login",{
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
