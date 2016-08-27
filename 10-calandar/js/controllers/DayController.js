app.controller('DayController', ['$scope', 'events', 
    function($scope, events, $routeParams) {
        events.success(function(data) {
            $scope.day = data;
        });
    }
]);