'use strict';

// Declare app level module which depends on views, and components
angular.module('game', [
  'ngRoute',
  'game.map',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/map'});
}])
