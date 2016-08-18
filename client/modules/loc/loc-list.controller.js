// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: angular-live-set-example
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/**
 * @inject $scope
 * @inject LiveSet
 * @inject createChangeStream
 * @inject Loc
 * @inject Obj
 * @dep ngMap
 * @dep ls.LiveSet
 * @dep ls.ChangeStream
 * @dep lbServices
 */

var locChanges = createChangeStream(new EventSource('/api/locs/change-stream?_format=event-source'));
var objChanges = createChangeStream(new EventSource('/api/objs/change-stream?_format=event-source'));

Loc.find().$promise.then(function(results) {
    $scope.locs = new LiveSet(results, locChanges).toLiveArray();
});

Obj.find().$promise.then(function (results) {
    $scope.objs = new LiveSet(results, objChanges).toLiveArray();
});

$scope.objId = 1;
$scope.lat = 0;
$scope.lng = 0;

$scope.createLoc = function () {
    Obj.locations.create({
        id: $scope.objId
    }, {
        coordinates: {
            lat: $scope.lat,
            lng: $scope.lng
        }
    });
    $scope.newLoc = null;
};

$scope.createObj = function () {
    Obj.create({
        name: $scope.objName
    });
};