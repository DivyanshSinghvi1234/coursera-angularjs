(function () {
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.html',
    controller: ItemsController,
    bindings: {
      items: '<'
    }
  });

  ItemsController.$inject = [];
  function ItemsController() {
    var $ctrl = this;
  }
})();
