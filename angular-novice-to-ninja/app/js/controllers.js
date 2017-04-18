'use strict';

/* Controllers */

function MyCtrl1($rootScope, $scope, $http) {

} 

// When minify your code, your params name will be change, 
// so AngularJS will no longer be able to identify the dependencies
// 1st way
MyCtrl1.$inject = ['$rootScope', '$scope', '$http']; 

angular.module('myApp.controllers', []).
  controller('MyCtrl1', MyCtrl1)
  .controller('MyCtrl2', [function() {

  }])
  .controller('FinanceController', function($scope) {
    $scope.salary = 0;
    $scope.percentage = 0;
    $scope.result = function() {
      return $scope.salary * $scope.percentage * 0.01; 
    };
  })
  .controller('TimeoutController', function($scope) {
    $scope.scheduleTask = function() {
      setTimeout(function() {
        $scope.$apply(function() { // wrapped the code in $apply() to update view, if no the view will not updated
          $scope.message = 'Fetched after 3 seconds';
          console.log('message='+$scope.message); // log this to console
        });
      }, 3000);
    }
  });