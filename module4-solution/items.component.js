(function () {
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.html',
    controller: ItemsController,
    bindings: {
      items: '<'  // One-way binding to pass the 'items' data to the component
    }
  });

  // Controller for the items component
  ItemsController.$inject = [];
  function ItemsController() {
    var $ctrl = this; // Controller context

    // Optional: You can add logic here if needed, like filtering or transforming data
  }
})();
