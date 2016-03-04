'use strict';
 
 

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'dashboard'
])
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/' });
}]);

app.controller('loginCtrl', ['$scope', 'LoginService', function ($scope, LoginService) {
    LoginService.getPullRequests()
      .then(function (data) {
        $scope.user = data;
      });
  }])



//登录服务
app.factory('LoginService', [
  '$q', '$http',
  function ($q, $http) {
    var getPullRequests = function () {
      var deferred = $q.defer();
      var client = hprose.Client.create('http://127.0.0.1:8080', [ "loginIn"]);
      client.ready(function (stub) {
        stub.loginIn.idempotent = true;
        stub.loginIn({ zuaa: 1, psw: "aaaaa" })
          .then(function (result) {
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

angular.module('dashboard', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard/', {
      templateUrl: 'template/route/dashboard.html',
      controller: 'View1Ctrl'
    });
    $routeProvider.when('/', {
      templateUrl: 'template/route/dashboard.html',
      controller: 'View1Ctrl'
    });
  }])
  .controller('View1Ctrl', ['$scope', 'LoginService', function ($scope, LoginService) {
    LoginService.getPullRequests()
      .then(function (data) {
        $scope.loginMsg = data;
      });
  }])
 
 
 