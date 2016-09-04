var app = angular.module('NearMeApp3', ['ngRoute', 'leaflet-directive']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
            controller: "MainController",
            templateUrl: "views/main.html"
        }).when('/about', {
            controller: 'AboutController',
            templateUrl: 'views/about.html'
        }).otherwise({
            redirectTo: '/'
        });
});