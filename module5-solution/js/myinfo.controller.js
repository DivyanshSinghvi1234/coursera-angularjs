(function () {
    'use strict';
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = MenuService.getUser();
      if (myInfoCtrl.user && myInfoCtrl.user.favMenu) {
        MenuService.getMenuItem(myInfoCtrl.user.favMenu).then(function (response) {
          myInfoCtrl.menu = response;
        });
      }
    }
    })();
    