app.controller('BookController', ['$scope', 'books', '$routeParams',
    function($scope, books, $routeParams) {
        books.success(function(data) {
            $scope.book = data[$routeParams.book];
        });
        $scope.currentBookIndex = parseInt($routeParams.book);
    }
]);