# Move log App
1. Creating new module
2. Attaching the module to HTML
3. Creating a controller
4. Addding property to the controller
5. Attaching the controller to HTML
6. Displaying the data from controller to view using ```ng-repeat```
7. Display images using ``ng-src``
8. In the controller, add another property called ``$scope.increase``
    * Set it equal to a function that takes in the index of the exercise that was clicked
    * Adds one to that exercise's count property
    * In the view use ``ng-click`` to tell AngularJS to run the increase() function when clicked
    * Use $index to pass in the index of the item that was clicked
9. In the controller, add another property called ``$scope.descrease``
    * Set it equal to a function that takes in the index of the exercise that was clicked
    * Substract one to that exercise's count property
    * In the view use ``ng-click`` to tell AngularJS to run the descrese() function when clicked
    * Use $index to pass in the index of the item that was clicked
