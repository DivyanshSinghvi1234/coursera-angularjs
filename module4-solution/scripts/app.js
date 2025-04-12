(function() {
  'use strict';
  
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController)
  .controller('ItemsController', ItemsController);
  
  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var ctrl = this;
    ctrl.categories = categories;
  }
  
  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var ctrl = this;
    ctrl.items = items;
  }
})();
