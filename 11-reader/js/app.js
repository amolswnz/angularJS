var app = angular.module('ReaderApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/books', {
            controller: "BookshelfController",
            templateUrl: "views/bookshelf.html"
        }).when('/books/:book', {
            controller: 'BookController',
            templateUrl: 'views/book.html'
        }).when('/books/:book/chapters/:chapter', {
            controller: 'ChapterController',
            templateUrl: 'views/chapter.html'
        }).otherwise({
            redirectTo: '/books'
        });
});