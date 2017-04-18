'use strict';

angular.module('mainApp.comment.controllers', [])
.controller('CommentController', function($scope) {
    $scope.now = new Date(); // set the model 'now' on scope
    $scope.messages = ['This view for viewing comments', 
                    '这种观点查看评论', 
                    'Este punto de vista para ver los comentarios', 
                    'มุมมองนี้สำหรับการดูความเห็น', 
                    'Denna uppfattning för att visa kommentarer'];
    $scope.message = $scope.messages[0];
    $scope.getRandomMessage = function() {
        $scope.message = $scope.messages[parseInt(Math.random() * $scope.messages.length)];
    }                

    // Instance variables
    this.anotherMessage = 'Another message from CommentController';
});