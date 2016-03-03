'use strict';
 
 

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'dashboard'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);

 
 angular.module('dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard/', {
    templateUrl: 'template/route/dashboard.html', 
    controller: 'View1Ctrl' 
  });
    $routeProvider.when('/', {
    templateUrl: 'template/route/dashboard.html', 
    controller: 'View1Ctrl' 
  });
}])
.controller('View1Ctrl',  function( $scope,$routeParams) {
      var id = $routeParams.id;
      //console.log('i am otherDetailCtrl page',id);
      $scope.title = "aaaaa id :"+id;
} );
 
 
 