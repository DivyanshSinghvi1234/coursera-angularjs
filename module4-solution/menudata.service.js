(function () {
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method: "GET",
        url: "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
      }).then(function (response) {
        return response.data;
      }).catch(function (error) {
        console.log("Error fetching categories: ", error);
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json"
      }).then(function (response) {
        return response.data;
      }).catch(function (error) {
        console.log("Error fetching menu items: ", error);
      });
    };
  }
})();
