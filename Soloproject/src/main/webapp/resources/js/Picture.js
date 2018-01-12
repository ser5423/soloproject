var app = angular.module("Picture",[]);
app.controller("picture", function($scope, $rootScope){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Story/Picture.html";
	
	$scope.picture = [{pic:"resources/images/picture/ch.jpg"},
					  {pic:"resources/images/picture/mic.jpg"},
					  {pic:"resources/images/picture/han.jpg"},
					  {pic:"resources/images/picture/ben.jpg"},
					  {pic:"resources/images/picture/seo.jpg"},
					  {pic:"resources/images/picture/lee.jpg"},
					  {pic:"resources/images/picture/jung.jpg"}];
	
});