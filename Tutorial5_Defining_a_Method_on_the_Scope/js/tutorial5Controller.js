function tutorial5ControllerFirst ($scope, sharedService){
	$scope.message = sharedService;
};

function tutorial5ControllerSecond ($scope, sharedService) {
	$scope.message = sharedService;

	$scope.reversedMessage = function(){
		return $scope.message.text.split("").reverse().join("");
	};
};

tutorial5ControllerFirst.$inject = ['$scope', 'mySharedService'];
tutorial5ControllerSecond.$inject = ['$scope', 'mySharedService']