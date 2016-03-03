'use strict';
  var client = hprose.Client.create('http://127.0.0.1:8080', ['hello',"saveMessage","findMessage"]);
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1','ngTagsInput',
  'myApp.view2','myApp.user','myApp.ngtagsinput','myApp.hprose',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

 