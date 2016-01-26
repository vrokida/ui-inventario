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
    'ngRoute'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name uiInventarioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uiInventarioApp
 */
angular.module('uiInventarioApp')
  .controller('MainCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name uiInventarioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the uiInventarioApp
 */
angular.module('uiInventarioApp')
  .controller('AboutCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
