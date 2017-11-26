(function () {
'use strict';

angular.module('assignmentOneApp', [])
       .controller('MsgController', MsgController);
MsgController.$inject = ['$scope'];

function MsgController($scope) {
    // Initialize the variables
    $scope.myMessage = "";
    $scope.lenVar = 0;
    $scope.lunchItems = null;
    $scope.tmpItems = null;
    $scope.lunchItemsList = {};

    $scope.showMessage = function() {
      // Reset the message and length of lunch items
      $scope.lenVar = 0;
      $scope.myMessage = "";

      if ($scope.lunchItems) {
        // Split the lunch items on comma and calculate the count of items
        $scope.lunchItemsList = $scope.lunchItems.split(',');
        $scope.lenVar =  $scope.lunchItemsList.length;

        // If the user has entered more than 3 items, display "Too much!"
        // else display "Enjoy!"
        if ($scope.lenVar > 3) {
          $scope.myMessage = "Too much!";
        } else {
          $scope.myMessage = "Enjoy!";
        };
      } else {
        $scope.myMessage = "Please enter data first";
      };
    };

    // Reset the variable at the end
    $scope.lunchItems = null;
}

})();
