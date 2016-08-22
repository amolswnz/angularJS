app.directive('plusoneButton', function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/directives/plusOne.html',
        link: function(scope, element, attrs) {
            scope.like = function() {
                element.toggleClass('btn-info');
                console.log(element);
            }
        }
    };
});