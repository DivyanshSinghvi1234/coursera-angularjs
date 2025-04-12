(function () {
  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categories.html',
    controller: CategoriesController,
    bindings: {
      categories: '<'
    }
  });

  CategoriesController.$inject = [];
  function CategoriesController() {
    var $ctrl = this;
  }
})();
