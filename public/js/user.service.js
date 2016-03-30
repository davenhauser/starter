(function () {
  'use strict';

  angular
    .module('app')
    .factory("userService", userService);

  userService.$inject = ["$log", "$http", "authService"];

  function userService($log, $http, authService) {
    $log.info("user service loaded!");

    var service = {
      create: create
    };
    return service;

    function create(data) {
      $http({
        method: 'POST',
        url:    '/api/users',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        function(res) {
          // authService.logIn(res.config.data);
          authService.logIn(data);
        },
        function(err) { $log.info("Error:", err); }
      );
    }
  }

})();
