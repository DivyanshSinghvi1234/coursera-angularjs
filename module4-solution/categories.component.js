(function () {
    angular.module('MenuApp')
    .component('categories', {
        template: `
            <div ng-if="categoriesCtrl.categories">
                <h2>Categories</h2>
                <ul>
                    <li ng-repeat="category in categoriesCtrl.categories">
                        <a ui-sref="items({categoryShortName: category.short_name})">{{ category.name }}</a>
                    </li>
                </ul>
            </div>`,
        controller: CategoriesController
    });

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var categoriesCtrl = this;

        // Fetch all categories
        MenuDataService.getAllCategories().then(function (data) {
            categoriesCtrl.categories = data;
        });
    }
})();
