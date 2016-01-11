angular.module('flapperNews', ['ui.router'])

app.factory('posts', [function(){//basically an object used to return the variable o which has posts
  var o = {
    posts: []
  };
  return o;
}]);



var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope', 'posts'
    function($scope, posts){
      $scope.posts = posts.posts;
      $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push(
          {
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
          });
        $scope.title = "";
        $scope.link = '';
    };
    $scope.incrementUpvotes = function(post){
        post.upvotes +=1;
    };
}]);
