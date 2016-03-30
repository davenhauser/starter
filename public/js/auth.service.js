(function () {
  'use strict';

  angular
    .module('app')
    .factory("authService", authService);

  authService.$inject = ["$log", "tokenService", "$http"];

  function authService($log, token, $http) {
    $log.info("auth service loaded!");

    var service = {
      logIn: logIn
    };
    return service;

    function logIn(data) {
      var promise = $http({
        method: 'POST',
        url:    '/api/token',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        function(res) {
          token.store(res.data.token);
          $log.info("Success:", token.decode());
        },
        function(err) { $log.info("Error:", err); }
      );
      return promise; //so we can keep chanining on it (in our signin controller)
    }
  }

})();
