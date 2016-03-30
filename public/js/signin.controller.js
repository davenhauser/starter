(function() {
  "use strict";

  angular
    .module("app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "$http", "authService"];

  function SignInController($log, $http, authService) {
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
      $http
        .post('/api/users', vm.signUp, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(
          function(res) {
            $log.info("Success:", res);
            authService.logIn(vm.signUp);
          },
          function(err) { $log.info("Error:", err); }
        );
    }

    function submitLogIn() {
      authService.logIn(vm.logIn);
    }

    $log.info("SignInController loaded!");
  }
})();
