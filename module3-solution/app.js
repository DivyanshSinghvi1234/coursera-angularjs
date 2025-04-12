(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  return {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.found = [];
  ctrl.nothingFound = false;

  ctrl.narrowItDown = function () {
    if (!ctrl.searchTerm) {
      ctrl.found = [];
      ctrl.nothingFound = true;
      return;
    }

    MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
      .then(function (result) {
        ctrl.found = result;
        ctrl.nothingFound = ctrl.found.length === 0;
      });
  };

  ctrl.removeItem = function (index) {
    ctrl.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
      .then(function (response) {
        var allItems = response.data.menu_items;
        var foundItems = allItems.filter(function (item) {
          return item.description.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return foundItems;
      });
  };
}

})();
