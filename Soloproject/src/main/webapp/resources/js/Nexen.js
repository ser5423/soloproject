// 앵귤라 모듈 만들기
var app = angular.module("Nexen", ["ngRoute","Heroes","Heroesbi","Heroesguidance"]);
		
// 라우터 처리 부분 (싱글 페이지 적용)
app.config(function($routeProvider){
	$routeProvider.when("/Intro", {
		templateUrl : "resources/views/main.html"
	}).when("/Heroes", {
		templateUrl : "resources/views/index.html",
		controller : "heroes"
	}).when("/HeroesBI", {
		templateUrl : "resources/views/index.html",
		controller : "heroesbi"
	}).when("/HeroesGuidance", {
		templateUrl : "resources/views/index.html",
		controller : "heroesguidance"
	}).otherwise({redirectTo: "/Intro"});
	
});

app.run(function($rootScope){
	$rootScope.nav = 'resources/views/nav.html';
	$rootScope.footer = 'resources/views/footer.html';
	$rootScope.navEvent = function(){
		$rootScope.navDis = location.hash;
	};
});

app.controller("t2", function($scope, $rootScope){ // 컨트롤러의 이름이 ""안에 있는 값 scope는 데이터 바인딩 용 저걸 선언해야 function안에서 사용 가능
	// rootScope로 상위로 올리게 되면 지역변수에서 전역변수로 변경이 되서 다른 곳에서도 사용이 가능함
	$rootScope.navEvent();
	$scope.contents = "resources/views/t2.html";
});

