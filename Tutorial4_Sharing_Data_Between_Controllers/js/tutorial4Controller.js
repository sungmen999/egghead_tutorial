function ControllerZero($scope, sharedServices) {
    
    // when users click button it will take service('factory')
    // it will find 'handleBroadcast' in $rootScope for communicated between two controller
    $scope.handleClick = function(msg) {
        sharedServices.prepForBroadcast(msg);
    };
       
    $scope.$on('handleBroadcast', function() {
        $scope.message = sharedServices.message;
    });        
}

// inject value into this controller for do something
// 'mySharedService' is service name
ControllerZero.$inject = ['$scope', 'mySharedService'];        
