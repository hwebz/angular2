'use strict';

// When minify your code, your params name will be change, 
// so AngularJS will no longer be able to identify the dependencies
// 2nd way
angular.module('mainApp.login.controllers', [])
.controller('LoginController', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
    
}]);