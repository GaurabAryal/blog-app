var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
    function($scope){
      $scope.posts = [
      {title: 'Hello', upvotes:5},
      {title: 'Hello 2', upvotes:5},
      {title: 'Hello 3', upvotes:4},
      {title: 'Hello 4', upvotes:3},
      {title: 'Hello 5', upvotes:2}
    ];
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = "";
    };
    $scope.incrementUpvotes = function(post){
        post.upvotes +=1;
    };
}]);
