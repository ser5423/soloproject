// 앵귤라 모듈 만들기
var app = angular.module("Nexen", ["ngRoute","Heroes","Heroesbi","Heroesguidance","Players","Stats","Picture","Move","Sns"]);
		
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
	}).when("/Players", {
		templateUrl : "resources/views/index.html",
		controller : "players"
	}).when("/Stats", {
		templateUrl : "resources/views/index.html",
		controller : "stats"
	}).when("/Picture", {
		templateUrl : "resources/views/index.html",
		controller : "picture"
	}).when("/Move", {
		templateUrl : "resources/views/index.html",
		controller : "move"
	}).when("/Sns", {
		templateUrl : "resources/views/index.html",
		controller : "sns"
	}).when("/Events", {
		templateUrl : "resources/views/index.html",
		controller : "events"
	}).otherwise({redirectTo: "/Intro"});
	
});

app.run(function($rootScope){
	$rootScope.nav = 'resources/views/nav.html';
	$rootScope.footer = 'resources/views/footer.html';
	$rootScope.navEvent = function(){
		$rootScope.navDis = location.hash;
	};
});

app.controller("events", function($scope, $rootScope){
	
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Events/Events.html";
});






