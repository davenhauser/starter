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
      var promise = $http({
        method: 'POST',
        url:    '/api/users',
        data:   data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(
        function(res) {

          $log.info("Success:", res);
          return res;
          // authService.logIn(res.config.data);
          authService.logIn(data);
        }
      );
      return promise;
    }
  }

})();
