var app = angular.module("Players",[]);
app.controller("players", function($scope, $rootScope, $http){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Players/Players.html";
	$scope.playersViews = "resources/views/Players/All.html";
	
	$scope.playersDataSources = [];
	$scope.bSPArry = [{text:"전체",    type:"All", toggle: true},
	      			  {text:"코칭스태프", type:"Staff", toggle: false},
	      			  {text:"투수",    type:"Pitcher", toggle: false},
	      			  {text:"포수",    type:"Catcher", toggle: false},
	      			  {text:"내야수",   type:"Infielder", toggle: false},
	      			  {text:"외야수",   type:"Outfielder", toggle: false}];
	$scope.bSPType = {};
	$scope.viewDiv = function(rows, index){
		for(var i = 0; i < $scope.bSPArry.length; i++){
			$scope.bSPArry[i].toggle = false;
		}
		$scope.bSPArry[index].toggle = true;
		
		if(rows.type == "All"){
			$scope.bSPType = {};
		} else {
			$scope.bSPType.type = rows.text;
		}
	}
	
	$scope.all = function(){
		$http.post("all")
			.then(function(result){
				$scope.playersDataSources = result.data.all;
//				console.log(result.data, $scope.playersDataSources);
//				console.log(result.data.all[0]);
			},function(result){
				console.log("실패");
			})
	}
	$scope.all();	
	
});