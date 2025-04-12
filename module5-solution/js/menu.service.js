(function () {
    'use strict';
    
    angular.module('public')
    .service('MenuService', MenuService);
    
    MenuService.$inject = ['$http'];
    function MenuService($http) {
      var service = this;
      var user = null;
    
      service.saveUser = function (userInfo) {
        user = userInfo;
      };
    
      service.getUser = function () {
        return user;
      };
    
      service.getMenuItem = function (shortName) {
        var category = shortName.charAt(0);
        var index = parseInt(shortName.substring(1)) - 1;
        var url = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + category + "/menu_items/" + index + ".json";
        return $http.get(url).then(function (response) {
          if (!response.data) throw new Error("Not found");
          return response.data;
        });
      };
    }
    })();
    