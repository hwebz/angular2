'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'commentModule',
  'loginModule',
  'dataBinding',
  'bookListing'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/test', {templateUrl: 'partials/test.html', controller: 'FinanceController'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginController'});
  $routeProvider.when('/comment', {templateUrl: 'partials/comment.html', controller: 'CommentController', controllerAs: 'commentCtrl'});
  $routeProvider.when('/data-binding', {templateUrl: 'partials/data-binding.html', controller: 'DataBindingController'});
  $routeProvider.when('/book-listing', {templateUrl: 'partials/book-listing.html', controller: 'SiteController'});
  $routeProvider.otherwise({redirectTo: '/login'});
}])
.run(function($rootScope) {
  $rootScope.title = "Famous Books";
  $rootScope.name = "Root Scope";
});
