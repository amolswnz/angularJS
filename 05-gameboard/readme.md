# Gameboard
1. New module GameboardApp
2. Creating directive ``app.directive`` 
    * js/directives/game.js in this file, create a new directive named game
    * Use restrict to create a new Element
    * Use scope to specify that we'll pass information into this directive through an attribute named info
    * Use templateUrl to tell this directive to use the js/directives/game.html file
3. include game.js in view
4. The programListing directive takes in information through the listing attribute. 
    * The data in listing becomes available to use in the directive's template. 
    * Update the expressions in the directive's template so that it uses listing to display each item.
5. In the view, use the ```<game>`` directive to display the details of score using ```<game ng-repeat="data in scores" info="data"></game>``
