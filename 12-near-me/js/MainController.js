app.controller('MainController', ['$scope',
    function($scope) {
        $scope.center = {
            lat: 40.741934,
            lng: -74.004897,
            zoom: 17
        };

        $scope.markers = [{
            lat: 40.741389,
            lng: -74.003056,
            message: "111 Eighth Avenue"
        }, {
            lat: 40.7425,
            lng: -74.006111,
            message: "Chelsea Market"
        }];
        console.log("test");
        console.log($scope.center, $scope.markers);
    }
]);