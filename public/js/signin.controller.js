(function() {
  "use strict";

  angular
    .module("app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "authService", "userService", "$state"];

  function SignInController($log, authService, userService, $state) {
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
      userService
      .create(vm.signUp)
      .then(function(){
        $state.go('welcome');
      }, function(err) {
        $log.info('Error:', err)
      });
    }

    function submitLogIn() {
      authService
      .logIn(vm.logIn)
      .then(function(decodedToken){
        $state.go('welcome')
      },
      function(err) {
          $log.info('Error', err);
      }
      );
    }

    $log.info("SignInController loaded!");
  }
})();
