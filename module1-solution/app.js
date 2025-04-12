(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.messageClass = "";
    $scope.inputClass = "";

    $scope.checkLunch = function () {
      if (!$scope.lunchItems.trim()) {
        $scope.message = "Please enter data first";
        $scope.messageClass = "red";
        $scope.inputClass = "red";
        return;
      }

      var items = $scope.lunchItems.split(',').filter(function (item) {
        return item.trim() !== "";
      });

      if (items.length === 0) {
        $scope.message = "Please enter data first";
        $scope.messageClass = "red";
        $scope.inputClass = "red";
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageClass = "green";
        $scope.inputClass = "green";
      } else {
        $scope.message = "Too much!";
        $scope.messageClass = "green";
        $scope.inputClass = "green";
      }
    };
  }

})();
