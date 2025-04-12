(function () {
    angular.module('MenuApp')
    .component('items', {
        template: `
            <div ng-if="itemsCtrl.items">
                <h2>Items in {{ itemsCtrl.categoryName }}</h2>
                <ul>
                    <li ng-repeat="item in itemsCtrl.items">
                        <p>{{ item.name }}</p>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </div>`,
        controller: ItemsController,
        bindings: {
            items: '<',
            categoryName: '<'
        }
    });

    ItemsController.$inject = [];
    function ItemsController() {
        var itemsCtrl = this;
    }
})();
