angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrvc) {
    mainSrvc.getPackageInfo().then(function(res) {
        $scope.locations = res.data
    })
});