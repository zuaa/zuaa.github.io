'use strict';

angular.module('game.map', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/map/:x/:y/', {
            templateUrl: 'game/map.html',
            controller: 'mapCtrl',
            resolve: {
                load: function(){
                    $('a').borderEffect({borderColor : '#000', speed : 100, borderWidth: 5});
                }
            }
        });
        $routeProvider.when('/map', {
            templateUrl: 'game/map.html',
            controller: 'mapCtrl',
            //resolve: { //这里默认加载，但是不会在list循环之后执行，
            //    load: function(){
            //        $('a').borderEffect({borderColor : '#000', speed : 100, borderWidth: 5});
            //    }
            //}
        });
    }]).directive('onLastRepeat', function() {
        return function(scope, element, attrs) {
            if (scope.$last) setTimeout(function(){
                scope.$emit('onRepeatLast', element, attrs);
                $('a.map').borderEffect({borderColor : '#FFF', speed : 100, borderWidth: 3});
            }, 1);
        };
    })
    .controller('mapCtrl', function ($scope, $http,$routeParams) {
        var x = $routeParams.x;
        var y = $routeParams.y;
        $scope.y = y;
        $scope.x = x;
        //创建地图
        function mkMap(x, y) {
            if(isNaN(x)){
                x=20
            }
            if(isNaN(y)){
                y=20
            }
            var mapList = [];
            for (var i = 1; i <= y; i++) {
                var ylist = []
                for (var j = 1; j <= x; j++) {
                    var _t = getRandom(9)
                    ylist.push({y: i, x: j, map: "game/lib/" + _t + ".png", dixing: getDixing(_t)});
                }
                mapList.push(ylist)
            }
            $scope.x=x;
            $scope.y=y;
            $scope.map = mapList;
        }
        //初始化地图
        mkMap(x, y);
        function getRandom(num) {
            return Math.ceil(Math.random() * num);
        }
        function getDixing(num) {
            return "人类";
            if (num == 1) {
                return "森林"
            } else if (num == 2) {
                return "水地"
            } else {
                return "山地"
            }
        }

        //设置用户信息
        $scope.UserInfo={
            UserName:"zuaa",
            Password:"zuaa"
        }
        $scope.loginIN=function() {
            $http.post('server/account/login.json', $scope.UserInfo).success(function (data,status) {
                console.log('登录成功',data);
                isLogin($scope);
            }).error(function (data,status) {
                console.log('登录失败');
            });
        }
        //调用 检查用户是不是登陆了

        $scope.reloadMap= function () {
            mkMap($scope.x,$scope.y)
        }






        function isLogin($scope){
            $http.post('server/account/isLogin.json', $scope.UserInfo).success(function (data,status) {
                $scope.isLogin=true;
            }).error(function (data,status) {
                $scope.isLogin=false;
            });
        }



    })


