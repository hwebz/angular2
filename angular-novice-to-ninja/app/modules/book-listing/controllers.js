'use strict';

angular.module('bookListing', [])
.controller('SiteController', function($scope) {
    $scope.publisher = "SitePoint";
    $scope.type = "Web Development";
    $scope.name = "Scope for SiteController";
})
.controller('BookController', function($scope) {
    $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
    $scope.name = "Scope for BookController";
    $scope.addToWishList = function(book) {
        $scope.wishListCount++;
    };
    $scope.wishListCount = 0;
    $scope.$watch('wishListCount', function(newValue, oldValue) {
        if (newValue != oldValue) {
            console.log('called '+ newValue +' times');

            if (newValue == 2) {
                alert('Great! You have 2 items in your wish list. Time to buy what you love');
                // unbindWatcher();
            }
        }
    });

    // $scope.$watchCollection('myCollection', function(newCollection, oldCollection) {
    //     // handle the change
    //     console.log(newCollection); // Print new collection
    // });
});