'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id/', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
//系统生成的函数默认是一个数组，这个数组中传递参数的话（ $scope,$routeParams），接收到不到
//具体查看 view1中的，
}]);