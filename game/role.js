'use strict';

angular.module('game.role', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/role/', {
            templateUrl: 'game/role.html',
            controller: 'mainCtrl',
            resolve: {
                load: function(){
                    //$('a').borderEffect({borderColor : '#000', speed : 100, borderWidth: 5});
                }
            }
        });
    }]).controller('mainCtrl', function ($scope, $http,$routeParams) {


    })


