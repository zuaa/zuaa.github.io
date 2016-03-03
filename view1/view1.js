'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1/:id/', {
    templateUrl: 'view1/view1.html',
  //  templateUrl: function($routeParams){return 'view'+$routeParams.id+'/view'+$routeParams.id+'.html';},
    controller: 'View1Ctrl'

  });
}])

.controller('View1Ctrl',  function( $scope,$routeParams) {
      var id = $routeParams.id;
      //console.log('i am otherDetailCtrl page',id);
      $scope.title = "aaaaa id :"+id;
} );