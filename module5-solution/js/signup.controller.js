(function () {
    'use strict';
    
    angular.module('public')
    .controller('SignupController', SignupController);
    
    SignupController.$inject = ['MenuService'];
    function SignupController(MenuService) {
      var signupCtrl = this;
      signupCtrl.user = {};
      signupCtrl.invalidMenu = false;
      signupCtrl.saved = false;
    
      signupCtrl.submit = function () {
        MenuService.getMenuItem(signupCtrl.user.favMenu).then(function (response) {
          signupCtrl.invalidMenu = false;
          signupCtrl.saved = true;
          MenuService.saveUser(signupCtrl.user);
        }).catch(function () {
          signupCtrl.invalidMenu = true;
          signupCtrl.saved = false;
        });
      };
    }
    })();
    