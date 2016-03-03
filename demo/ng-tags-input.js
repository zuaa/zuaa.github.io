'use strict';

angular.module('myApp.ngtagsinput', ['ngRoute','ngTagsInput'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ngtagsinput/', {
    templateUrl: 'demo/ng-tags-input.html',
    controller: 'ngtagsinput'
  });
}])
.controller('ngtagsinput',  function($scope, $http) {
        $scope.tags = [
            { text: 'just' },
            { text: 'some' },
            { text: 'cool' },
            { text: 'tags' }
        ];
        $scope.loadTags = function(query) {
//                        return $http.get('/tags?query=' + query);
            return [{ text: 'Tag1' }, { text: 'Tag2' }, { text: 'Tag3' }]
        };
} );