var app = angular.module("Heroesbi",[]);
app.controller("heroesbi", function($scope, $rootScope){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Heroes-bi.html";
	
	$scope.bIArry = [{text:"엠블럼",  type:"emblem", toggle: true, html: "resources/views/bi/emblem.html"},
				     {text:"마스코트", type:"mascot", toggle: false, html: "resources/views/bi/mascot.html"},
				     {text:"유니폼",  type:"former", toggle: false, html: "resources/views/bi/uniform.html"}];

	$scope.viewDiv = function(index){
		for(var i = 0; i < $scope.bIArry.length; i++){
			$scope.bIArry[i].toggle = false;
		}
		$scope.bIArry[index].toggle = true;
	}

	$scope.uniform2016 = true;
    $scope.toggleuniform2016 = function() {
        $scope.uniform2016 = $scope.uniform2016 === false ? true: false;
    };
    $scope.uniform2015 = true;
    $scope.toggleuniform2015 = function() {
        $scope.uniform2015 = $scope.uniform2015 === false ? true: false;
    };
    $scope.uniform20132014 = true;
    $scope.toggleuniform20132014 = function() {
        $scope.uniform20132014 = $scope.uniform20132014 === false ? true: false;
    };
    $scope.uniform2012 = true;
    $scope.toggleuniform2012 = function() {
        $scope.uniform2012 = $scope.uniform2012 === false ? true: false;
    };
    $scope.uniform20102011 = true;
    $scope.toggleuniform20102011 = function() {
        $scope.uniform20102011 = $scope.uniform20102011 === false ? true: false;
    };
    $scope.uniform2009 = true;
    $scope.toggleuniform2009 = function() {
        $scope.uniform2009 = $scope.uniform2009 === false ? true: false;
    };
    $scope.uniform2008 = true;
    $scope.toggleuniform2008 = function() {
        $scope.uniform2008 = $scope.uniform2008 === false ? true: false;
    };
	
});