(function () {
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categories.html',
    controller: CategoriesController,
    bindings: {
      categories: '<'  // Use one-way data binding to pass categories to the component
    }
  });

  CategoriesController.$inject = [];
  function CategoriesController() {
    var $ctrl = this;
    // Categories will be available as $ctrl.categories
  }
})();
