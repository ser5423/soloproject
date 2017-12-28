var app = angular.module("Heroes",[]);
app.controller("heroes", function($scope, $rootScope){ // 컨트롤러의 이름이 ""안에 있는 값 scope는 데이터 바인딩 용 저걸 선언해야 function안에서 사용 가능
	// rootScope로 상위로 올리게 되면 지역변수에서 전역변수로 변경이 되서 다른 곳에서도 사용이 가능함
	$rootScope.navEvent();
	$scope.contents = "resources/views/Heroes.html";
});