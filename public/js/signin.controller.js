(function() {
  "use strict";

  angular
    .module("app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "authService", "userService"];

  function SignInController($log, authService, userService) {
    var vm = this;

    // BINDINGS
    vm.signUp = {
      email:    "pj@ga.co",
      name:     "Philip Hughes",
      password: "12345",
      passwordConfirmation: "12345"
    };
    vm.submitSignUp = submitSignUp;
    vm.logIn = {
      email:    "pj@ga.co",
      password: "12345"
    };
    vm.submitLogIn = submitLogIn;

    // FUNCTIONS
    function submitSignUp() {
      userService.create(vm.signUp)
    }

    function submitLogIn() {
      authService.logIn(vm.logIn);
    }

    $log.info("SignInController loaded!");
  }
})();
