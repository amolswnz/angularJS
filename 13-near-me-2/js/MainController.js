app.controller('MainController', ['$scope', 'places', 
    function($scope, places) {
        $scope.center = {
            lat: 40.741934,
            lng: -74.004897,
            zoom: 17
        };

        places.success(function(data) {
            $scope.geoData = data;
            $scope.markers = geodataToMarkers($scope.geoData);
        });
    }
]);