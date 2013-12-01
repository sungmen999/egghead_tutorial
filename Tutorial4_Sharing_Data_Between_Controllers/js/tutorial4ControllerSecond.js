function ControllerOne($scope, sharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'ONE: ' + sharedService.message;
    });        
}

ControllerOne.$inject = ['$scope', 'mySharedService'];