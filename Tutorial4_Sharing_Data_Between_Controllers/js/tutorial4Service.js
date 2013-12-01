angular.module('tutorial4', []).factory('mySharedService', function($rootScope) {
    
    // create object name 'sharedService'
    var sharedService = {};
    
    // create attribute of object and set value to empty string
    sharedService.message = '';

    // create attribute of object and set value  to function
    sharedService.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    // create attribute of object and set value  to function
    sharedService.broadcastItem = function() {

        // set broadcast for communicated between two controller, it will set 'handleBroadcast' into $rootScope and wait controller call by used $on
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});