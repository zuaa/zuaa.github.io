'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2/:id/', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
//ϵͳ���ɵĺ���Ĭ����һ�����飬��������д��ݲ����Ļ��� $scope,$routeParams�������յ�����
//����鿴 view1�еģ�
}]);