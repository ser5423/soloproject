var app = angular.module("Heroesguidance",[]);
app.controller("heroesguidance", function($scope, $rootScope){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Heroes-Guidance.html";
	
	$scope.bGArry = [{text:"고척 스카이돔",  type:"gochuck", toggle: true, html: "resources/views/Guidance/gochuck.html"},
				     {text:"화성 베이스볼파크", type:"hwaseong", toggle: false, html: "resources/views/Guidance/hwaseong.html"}];
	
	$scope.bGGArry = [{text:"고척 스카이돔",  type:"gochuck", toggle: true, html: "resources/views/Guidance/Details/go.html"},
					  {text:"편의시설",  type:"facilities", toggle: true, html: "resources/views/Guidance/Details/facilities.html"},
					  {text:"찾아오시는 길",  type:"way", toggle: true, html: "resources/views/Guidance/Details/way.html"},
	     			  {text:"주차안내", type:"parking", toggle: false, html: "resources/views/Guidance/Details/parking.html"}];

	$scope.viewDiv = function(index){
		for(var i = 0; i < $scope.bGArry.length; i++){
			$scope.bGArry[i].toggle = false;
		}
		$scope.bGArry[index].toggle = true;
	}
	
	$scope.viewDiv2 = function(index){
		for(var i = 0; i < $scope.bGGArry.length; i++){
			$scope.bGGArry[i].toggle = false;
		}
		$scope.bGGArry[index].toggle = true;
	}

	
});