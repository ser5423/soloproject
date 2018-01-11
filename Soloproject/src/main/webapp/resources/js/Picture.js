var app = angular.module("Picture",[]);
app.controller("picture", function($scope, $rootScope){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Story/Picture.html";
	
});