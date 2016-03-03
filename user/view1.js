'use strict';

angular.module('myApp.user', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user/:id/', {
            //  templateUrl: 'user/view1.html',
            templateUrl: function ($routeParams) {
                return 'user/' + $routeParams.id + '.html';
            },
            controller: 'View1Ctrl'

        });
    }])

    .controller('View1Ctrl', function ($scope, $routeParams) {
        var id = $routeParams.id;
        $scope.title = "aaaaa id :" + id;
        $scope.arrayList = [
            {name: "zuaa", price: 11.000, count: 10},
            {name: "zuaa", price: 1.000, count: 2110},
            {name: "zuaa", price: 1.000, count: 110}
        ]
        $scope.allPrice=0
        $scope.$watch('arrayList', allprice, true);// 监听显示表格的数据，如果修改了就调用aa的方法
        function allprice(){
            for (var i = 0; i < $scope.arrayList.length; i++) {
                $scope.allPrice = $scope.allPrice +$scope.arrayList[i].price * $scope.arrayList[i].count
            }
        }
        //初始化执行一次
        allprice()
    });

