function ControllerTwo($scope, sharedService) {
	// when users click button it will take service('factory')
	// it will find 'handleBroadcast' in $rootScope for communicated between two controller
    $scope.$on('handleBroadcast', function() {
        $scope.message = 'TWO: ' + sharedService.message;
    });
}

// inject value into this controller for do something
// 'mySharedService' is service name
ControllerTwo.$inject = ['$scope', 'mySharedService'];