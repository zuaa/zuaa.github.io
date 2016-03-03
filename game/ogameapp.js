/**
 * Created by zuac on 2016/2/25.
 */


'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('game', ['ngAnimate',
    "game.overview", "game.main",
    "game.keji", "game.chuanchang",
    'game.fangyu', 'game.officier',
    'game.caituan', "game.fleet",
    "game.messages", "game.galaxy",
    "game.simulatorTest", "game.resources"
])
//angular.config(['$routeProvider', function($routeProvider) {
//        //$routeProvider.otherwise({redirectTo: '/map'});
//}])
var sidebar="overview"
app.controller('ziyuanCtrl', function ($scope, $http) {

    $http.post('server/ogame/ziyuan.json', {}).success(function (data, status) {
        $scope.ziyuan = data;
    }).error(function (data, status) {
        $scope.ziyuan = {};
    });
})
angular.module('game.main', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'game/index.html',
            controller: 'myCtrl',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('myCtrl', function ($scope, $http) {
        $scope.sidebar = 'main';
    $scope.doingList=[
         {
            name:"金属矿 ",
            level:2,
            "timer":"12:12:00",
            "totleTime":1300,
            "nowTime":231
        }
    ]
    $scope.doneList=[
        {
            name:"金属矿 ",
            level:2,
            "timer":"12:12:00"
        }
    ]

        $http.post('server/ogame/jianzhu.json', {}).success(function (data, status) {
            $scope.pList = data;
        }).error(function (data, status) {
            $scope.pList = {};
        });
    //向建筑队列增加新的建筑需求
    var  addDoingList=function (obj){
        $scope.doneList.push(obj);
    }
    $scope.addDoingList=addDoingList;
})

////////////////////////////////overview////////////////////////////////////
angular.module('game.overview', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/overview/', {
            templateUrl: 'game/overview.html',
            controller: 'overview',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('overview', function ($scope, $http, $routeParams) {
        $scope.message = "母星-概况"
        $scope.hi = "指挥官欢迎回来"
        getMuxingInfo($scope, $http)
    })
////////////////////////////////keji////////////////////////////////////
angular.module('game.keji', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/keji/', {
            templateUrl: 'game/keji.html',
            controller: 'keji',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('keji', function ($scope, $http, $routeParams) {
        getKeji($scope, $http)
    })
////////////////////////////////chuanchang////////////////////////////////////
angular.module('game.chuanchang', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/chuanchang/', {
            templateUrl: 'game/chuanchang.html',
            controller: 'chuanchang',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('chuanchang', function ($scope, $http, $routeParams) {
        getChuanchang($scope, $http)
    })
////////////////////////////////chuanchang////////////////////////////////////
angular.module('game.fangyu', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/fangyu/', {
            templateUrl: 'game/fangyu.html',
            controller: 'fangyu',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('fangyu', function ($scope, $http, $routeParams) {
        getFangyu($scope, $http)
    })
////////////////////////////////officier////////////////////////////////////
angular.module('game.officier', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/officier/', {
            templateUrl: 'game/officier.html',
            controller: 'officier',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('officier', function ($scope, $http, $routeParams) {
        officier($scope, $http)
    })
////////////////////////////////caituan////////////////////////////////////
angular.module('game.caituan', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/caituan/', {
            templateUrl: 'game/caituan.html',
            controller: 'caituan',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('caituan', function ($scope, $http, $routeParams) {
        caituan($scope, $http)
    })

////////////////////////////////fleet////////////////////////////////////
angular.module('game.fleet', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/fleet/', {
            templateUrl: 'game/fleet.html',
            controller: 'fleet',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('fleet', function ($scope, $http, $routeParams) {
        $http.post('server/ogame/fleet.json', {}).success(function (data, status) {
            $scope.fleet = data;
        }).error(function (data, status) {
            $scope.fleet = {};
        });
    })

////////////////////////////////fleet////////////////////////////////////
angular.module('game.messages', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/messages/', {
            templateUrl: 'game/messages.html',
            controller: 'messages',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('messages', function ($scope, $http, $routeParams) {
        $http.post('server/ogame/messages.json', {}).success(function (data, status) {
            $scope.messages = data;
        }).error(function (data, status) {
            $scope.messages = {};
        });
    })////////////////////////////////fleet////////////////////////////////////
angular.module('game.galaxy', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/galaxy/', {
            templateUrl: 'game/galaxy.html',
            controller: 'galaxy',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('galaxy', function ($scope, $http, $routeParams) {
        $http.post('server/ogame/galaxy.json', {}).success(function (data, status) {
            $scope.galaxy = data;
        }).error(function (data, status) {
            $scope.galaxy = {};
        });
    })
////////////////////////////////simulatorTest////////////////////////////////////
angular.module('game.simulatorTest', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/simulatorTest/', {
            templateUrl: 'game/simulatorTest.html',
            controller: 'simulatorTest',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('simulatorTest', function ($scope, $http, $routeParams) {
        $http.post('server/ogame/simulatorTest.json', {}).success(function (data, status) {
            $scope.simulatorTest = data;
        }).error(function (data, status) {
            $scope.simulatorTest = {};
        });
    })
////////////////////////////////resources////////////////////////////////////
angular.module('game.resources', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/resources/', {
            templateUrl: 'game/resources.html',
            controller: 'resources',
            resolve: {
                load: function () {
                    //
                }
            }
        });
    }]).controller('resources', function ($scope, $http, $routeParams) {
        $http.post('server/ogame/resources.json', {}).success(function (data, status) {
            $scope.resources = data;
        }).error(function (data, status) {
            $scope.resources = {};
        });
    })


///////////////////////概要模块///////////////////////////////////


function getMuxingInfo($scope, $http) {
    $http.post('server/ogame/muxing.json', {}).success(function (data, status) {
        $scope.muxing = data;
    }).error(function (data, status) {
        $scope.muxing = {};
    });
}
function getKeji($scope, $http) {
    $http.post('server/ogame/keji.json', {}).success(function (data, status) {
        $scope.keji = data;
    }).error(function (data, status) {
        $scope.keji = {};
    });
}
function getChuanchang($scope, $http) {
    $http.post('server/ogame/chuanchang.json', {}).success(function (data, status) {
        $scope.chuanchang = data;
    }).error(function (data, status) {
        $scope.chuanchang = {};
    });
}

function getFangyu($scope, $http) {
    $http.post('server/ogame/fangyu.json', {}).success(function (data, status) {
        $scope.fangyu = data;
    }).error(function (data, status) {
        $scope.fangyu = {};
    });
}
function officier($scope, $http) {
    $http.post('server/ogame/officier.json', {}).success(function (data, status) {
        $scope.officier = data;
    }).error(function (data, status) {
        $scope.officier = {};
    });
}
function caituan($scope, $http) {
    $http.post('server/ogame/caituan.json', {}).success(function (data, status) {
        $scope.caituan = data;
    }).error(function (data, status) {
        $scope.caituan = {};
    });
}