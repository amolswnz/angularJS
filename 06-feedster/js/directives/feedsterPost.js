app.directive("feedsterPost", function() {
    return {
        scope: { post: '='}, 
        templateUrl: 'js/directives/feedsterPost.html'
    };
});