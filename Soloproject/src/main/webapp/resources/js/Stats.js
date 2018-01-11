var app = angular.module("Stats",[]);
app.controller("stats", function($scope, $rootScope){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Stats/Stats.html";
	
	$scope.bSTTArry = [{text:"1군 (넥센히어로즈)",  type:"Nexen", toggle: true, html: "resources/views/Stats/team/NexenHeroes.html"},
				      {text:"2군 (화성히어로즈)", type:"Hwaseong", toggle: false, html: "resources/views/Stats/team/HwaseongHeroes.html"}];

	$scope.viewDiv = function(index){
		for(var i = 0; i < $scope.bSTTArry.length; i++){
			$scope.bSTTArry[i].toggle = false;
		}
		$scope.bSTTArry[index].toggle = true;
	}
	
	$scope.team = [{ranking:1, club:"KIA", victory:87, loss:56, draw:1, winningrate:0.608, continuous:"2승", hit:1554, homerun:170, steal:76, goal:906, lp:743, blunder:98},
		           {ranking:2, club:"두산", victory:84, loss:57, draw:3, winningrate:0.596, continuous:"1패", hit:1499, homerun:178, steal:69, goal:849, lp:678, blunder:90},
		           {ranking:3, club:"롯데", victory:80, loss:62, draw:2, winningrate:0.563, continuous:"5승", hit:1425, homerun:151, steal:92, goal:743, lp:701, blunder:86},
		           {ranking:4, club:"NC",  victory:79, loss:62, draw:3, winningrate:0.56,  continuous:"4승", hit:1489, homerun:149, steal:93, goal:786, lp:745, blunder:108},
		           {ranking:5, club:"SK",  victory:75, loss:68, draw:1, winningrate:0.524, continuous:"2승", hit:1337, homerun:234, steal:53, goal:761, lp:767, blunder:108},
		           {ranking:6, club:"LG",  victory:69, loss:72, draw:3, winningrate:0.489, continuous:"2패", hit:1390, homerun:110, steal:77, goal:699, lp:677, blunder:103},
		           {ranking:7, club:"넥센", victory:69, loss:73, draw:2, winningrate:0.486, continuous:"4패", hit:1479, homerun:141, steal:70, goal:789, lp:764, blunder:91},
		           {ranking:8, club:"한화", victory:61, loss:81, draw:2, winningrate:0.43,  continuous:"5패", hit:1445, homerun:150, steal:64, goal:737, lp:820, blunder:91},
		           {ranking:9, club:"삼성", victory:55, loss:84, draw:5, winningrate:0.396, continuous:"2승", hit:1419, homerun:145, steal:98, goal:757, lp:911, blunder:95},
		           {ranking:10, club:"KT", victory:50, loss:94, draw:0, winningrate:0.347, continuous:"2패", hit:1360, homerun:119, steal:86, goal:655, lp:876, blunder:112}];
	
	$scope.farmteam = [{ranking:1, club:"상무",  victory:62, loss:28, draw:4,  winningrate:0.689,  continuous:"1승", hit:1004, homerun:113, steal:130, goal:659, lp:405, blunder:84},
				       {ranking:1, club:"경찰",  victory:55, loss:34, draw:6,  winningrate:0.618,  continuous:"1승", hit:1040, homerun:99,  steal:88,  goal:669, lp:524, blunder:100},
				       {ranking:2, club:"KIA",  victory:48, loss:40, draw:5,  winningrate:0.545,  continuous:"2승", hit:939,  homerun:87,  steal:87,  goal:565, lp:513, blunder:90},
				       {ranking:2, club:"SK",   victory:46, loss:38, draw:7,  winningrate:0.548,  continuous:"1패", hit:904,  homerun:101, steal:131, goal:538, lp:459, blunder:93},
				       {ranking:3, club:"화성",  victory:44, loss:41, draw:8,  winningrate:0.518,  continuous:"5승", hit:1013, homerun:119, steal:165, goal:617, lp:702, blunder:110},
				       {ranking:3, club:"KT",   victory:42, loss:37, draw:13, winningrate:0.532,  continuous:"1패", hit:984,  homerun:82,  steal:113, goal:579, lp:580, blunder:81},
				       {ranking:4, club:"고양",  victory:43, loss:48, draw:2,  winningrate:0.473,  continuous:"1승", hit:935,  homerun:88,  steal:115, goal:552, lp:612, blunder:101},
				       {ranking:4, club:"한화",  victory:44, loss:46, draw:5,  winningrate:0.489,  continuous:"2승", hit:947,  homerun:87,  steal:102, goal:543, lp:555, blunder:74},
				       {ranking:5, club:"LG",   victory:41, loss:48, draw:6,  winningrate:0.461,  continuous:"1승", hit:972,  homerun:53,  steal:107, goal:508, lp:527, blunder:86},
				       {ranking:5, club:"삼성",  victory:40, loss:48, draw:6,  winningrate:0.455,  continuous:"4패", hit:1026, homerun:109, steal:118, goal:592, lp:644, blunder:101},
				       {ranking:6, club:"롯데",  victory:34, loss:57, draw:3,  winningrate:0.374,  continuous:"1패", hit:920,  homerun:106, steal:114, goal:537, lp:650, blunder:108},
				       {ranking:6, club:"두산",  victory:27, loss:61, draw:7,  winningrate:0.307,  continuous:"9패", hit:847,  homerun:102, steal:137, goal:521, lp:709, blunder:127}];

	$scope.sortBy = function(propertyName) {
	    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
	    $scope.propertyName = propertyName;
	  };
});