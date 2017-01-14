app.controller('HomeController', ['$scope', 'shows', function($scope, shows) {
  shows.success(function(data) {
    $scope.shows = data;
  });
}]);