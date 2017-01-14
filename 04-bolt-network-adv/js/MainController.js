app.controller('MainController', ['$scope', function($scope) {
    $scope.sherlock = {
        series: "Sherlock", 
        series_img: "img/sherlock.jpg", 
        genre: "Crime drama", 
        season: 3, 
        episode: "The Empty Hearse", 
        description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", 
        datetime: new Date(2014, 11, 31, 21, 00, 00, 00) 
    };
    $scope.hancock = {
        series: "Hancock", 
        series_img: "img/hancock.jpg", 
        genre: "Crime drama", 
        season: 3, 
        episode: "The Empty Hearse", 
        description: "Hancock is a 2008 American superhero comedy-drama film directed by Peter Berg and starring Will Smith, Charlize Theron, Jason Bateman and Eddie Marsan. It tells the story of a vigilante superhero, John Hancock (Smith) from Los Angeles whose reckless actions routinely cost the city millions of dollars. Eventually one person he saves, Ray Embrey (Bateman), makes it his mission to change Hancock's public image for the better.", 
        datetime: new Date(2010, 12, 1, 11, 00, 00, 00) 
     };
}]);