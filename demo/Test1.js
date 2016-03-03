angular.module('myApp', [])

  .controller('DashboardController', [
    '$scope', 'GithubService',
    function ($scope, GithubService) {
      GithubService.getPullRequests()
        .then(function (data) {
          $scope.pullRequests = data;
        });
    }])
  .factory('GithubService', [
    '$q', '$http',
    function ($q, $http) {
      var getPullRequests = function () {
        var deferred = $q.defer();
        var client = hprose.Client.create('http://127.0.0.1:8080', ['hello', "saveMessage", "findMessage"]);
        client.ready(function (stub) {
          stub.hello.idempotent = true;
         stub.findMessage({zuaa:1,psw:"aaaaa"})
        .then(function(result) { 
              console.log(result)
              deferred.resolve(result);
            }, function (e) {
              deferred.reject(e);
            });
        },
          function (e) {
            deferred.reject(e);
          });
        return deferred.promise; 
      }
      return { // return factory object
        getPullRequests: getPullRequests
      };
    }]);

 