# Bolt Network - Advance
1. Using existing project 1-bolt-network
2. Creating directive ``app.directive`` 
    * js/directives/programListing.js in this file, create a new directive named programListing
    * Use restrict to create a new Element
    * Use scope to specify that we'll pass information into this directive through an attribute named listing
    * Use templateUrl to tell this directive to use the js/directives/programListing.html file
3. include programListing.js in view
4. The programListing directive takes in information through the listing attribute. 
    * The data in listing becomes available to use in the directive's template. 
    * Update the expressions in the directive's template so that it uses listing to display each item.
5. In the view, use the ```<program-listing>`` directive to display the details of program.
