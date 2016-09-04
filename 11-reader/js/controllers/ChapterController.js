app.controller('ChapterController', ['$scope', 'books', '$routeParams',
    function($scope, books, $routeParams) {
        books.success(function(data) {
            $scope.book = data[$routeParams.book];
            $scope.chapter = $scope.book.chapters[$routeParams.chapter];
            if ($routeParams.chapter >= $scope.book.chapters.length - 1) {
                $scope.nextChapterIndex = "#";
            }
        });
        $scope.currentBookIndex = parseInt($routeParams.book);
        $scope.currentChapterIndex = parseInt($routeParams.chapter);
        $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
    }
]);
