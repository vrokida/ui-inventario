/**
 * @ngdoc directive
 * @name App:loginDirective
 *
 * @description
 *
 *
 * @restrict A
 * */
angular.module('uiInventarioApp')
    .directive('loginDirective', function ($http, $cookieStore, authService) {
        var serverAddress = "localhost:8000/"
        return {
            rrestrict: 'A',
            templateUrl: '../../views/directives/login.html',
            link: function(scope, elem, attrs) {
                elem.find("#js-submit").click(function() {

                    var user_data = {
                        "username": scope.username,
                        "password": scope.password,
                    };

                    //$http.post(constants.serverAddress + "api-token-auth", user_data)
                    $http({
                        "url":'http://localhost:8000/api-token-auth/',
                        "method":"POST",
                        "data":user_data
                    }).success(function(response) {
                        $cookieStore.put('djangotoken', response.token);
                        $http.defaults.headers.common['Authorization'] = 'Token ' + response.token;
                        authService.loginConfirmed();
                    });

                });

            }
    }
});
