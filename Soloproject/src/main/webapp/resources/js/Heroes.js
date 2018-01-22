var app = angular.module("Heroes",[]);
app.controller("heroes", function($scope, $rootScope, $location, $anchorScroll){ // 컨트롤러의 이름이 ""안에 있는 값 scope는 데이터 바인딩 용 저걸 선언해야 function안에서 사용 가능
	// rootScope로 상위로 올리게 되면 지역변수에서 전역변수로 변경이 되서 다른 곳에서도 사용이 가능함
	$rootScope.navEvent();
	
	$scope.btArry = [{text:"구단 소개",   type:"club", toggle: true, html: "resources/views/Heroes/introduction/club.html"},
		             {text:"히어로즈 기록", type:"history", toggle: false, html: "resources/views/Heroes/introduction/history.html"},
		             {text:"히어로즈 전신", type:"former", toggle: false, html: "resources/views/Heroes/introduction/former.html"}];
	
	$scope.viewDiv = function(index){
		for(var i = 0; i < $scope.btArry.length; i++){
			$scope.btArry[i].toggle = false;
		}
		$scope.btArry[index].toggle = true;
	}

	$scope.contents = "resources/views/Heroes.html";
	
	$scope.custom2016 = true;
    $scope.toggleCustom2016 = function() {
        $scope.custom2016 = $scope.custom2016 === false ? true: false;
    };
    $scope.custom2015 = true;
    $scope.toggleCustom2015 = function() {
        $scope.custom2015 = $scope.custom2015 === false ? true: false;
    };
    $scope.custom2014 = true;
    $scope.toggleCustom2014 = function() {
        $scope.custom2014 = $scope.custom2014 === false ? true: false;
    };
    $scope.custom2013 = true;
    $scope.toggleCustom2013 = function() {
        $scope.custom2013 = $scope.custom2013 === false ? true: false;
    };
	
    $scope.gotoTop = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        $location.hash('top_location');

        // call $anchorScroll()
        $anchorScroll();
      };
    
    
});