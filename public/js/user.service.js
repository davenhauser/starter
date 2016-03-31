(function () {
  'use strict';

  angular
    .module('app')
    .factory("userService", userService);

  userService.$inject = ["$log", "authService", "$http"];

  function userService($log, authservice, $http) {
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
      .then(function(res){
        authService.logIn(data);
      });

      return promise;
    }
  }

})();
