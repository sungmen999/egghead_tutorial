function ControllerTwo($scope, sharedService) {
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'TWO: ' + sharedService.message;
    });
}

ControllerTwo.$inject = ['$scope', 'mySharedService'];