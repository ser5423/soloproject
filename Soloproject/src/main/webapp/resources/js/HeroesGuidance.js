var app = angular.module("Heroesguidance",[]);
app.controller("heroesguidance", function($scope, $rootScope){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Heroes-Guidance.html";
	
	$scope.bGArry = [{text:"고척 스카이돔",  type:"gochuck", toggle: true, html: "resources/views/Guidance/gochuck.html"},
				     {text:"화성 베이스볼파크", type:"hwaseong", toggle: false, html: "resources/views/Guidance/hwaseong.html"}];
	
	$scope.bGGArry = [{text:"고척 스카이돔",  type:"go", toggle: true, html: "resources/views/Guidance/Details/go.html"},
					  {text:"편의시설",  type:"fa", toggle: false, html: "resources/views/Guidance/Details/fa.html"},
					  {text:"찾아오시는 길",  type:"way", toggle: false, html: "resources/views/Guidance/Details/way.html"},
	     			  {text:"주차안내", type:"parking", toggle: false, html: "resources/views/Guidance/Details/parking.html"}];

	$scope.bGGFArry = [{text:"내야 2층",  type:"in-two", toggle: true, html: "resources/views/Guidance/Details/floar/in-two.html"},
					  {text:"내야 4층",  type:"in-four", toggle: false, html: "resources/views/Guidance/Details/floar/in-four.html"},
					  {text:"외야 3층",  type:"out-third", toggle: false, html: "resources/views/Guidance/Details/floar/out-third.html"},
					  {text:"외야 4층", type:"out-four", toggle: false, html: "resources/views/Guidance/Details/floar/out-four.html"}];
	
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
	
	$scope.viewDivF = function(index){
		for(var i = 0; i < $scope.bGGFArry.length; i++){
			$scope.bGGFArry[i].toggle = false;
		}
		$scope.bGGFArry[index].toggle = true;
	}
	
	

	$scope.bGGFFArry = [{no:"1",  title:"스테프핫도그",	 text:"스테프 핫도그, 메디스터 소시지",    text2:"11번 통로 맞은편",  url:"resources/images/guidance/fa/staff.png"},
					   {no:"2",   title:"편의점",		 text:"캔맥주, 음료, 각종 스낵",        text2:"11번 통로 맞은편",  url:"resources/images/guidance/fa/store.png"},
					   {no:"3",   title:"올떡볶이",	 text:"떡볶이, 튀김, 순대",           text2:"9번 통로 맞은편",   url:"resources/images/guidance/fa/all.jpg"},
					   {no:"4",   title:"찡오랑",		 text:"버터구이 오징어, 수제 닭꼬치",     text2:"8번 통로 맞은편",   url:"resources/images/guidance/fa/jjing.png"},
					   {no:"5",   title:"원정팀용품",	 text:"선수 레플리카, 모자, 응원도구",    text2:"7번 통로 맞은편",   url:"resources/images/guidance/fa/away.png"},
					   {no:"5-1", title:"히어로즈용품점", text:"선수 레플리카, 모자, 응원도구",    text2:"7번 통로 맞은편",   url:"resources/images/guidance/fa/home.jpg"},
					   {no:"6",   title:"피자헛",		 text:"리치골드 베이컨 포테이토 피자 등",    text2:"6번 통로 맞은편",   url:"resources/images/guidance/fa/pizzahut.png"},
					   {no:"7",   title:"뉴욕핫도그",	 text:"치즈텐더샌드, 뉴용칠리 핫도그",     text2:"6번 통로 맞은편",   url:"resources/images/guidance/fa/ny.png"},
					   {no:"8",   title:"공씨네 주먹밥",  text:"참치김치, 구운스팸 주먹밥 등",     text2:"5번 통로 맞은편",   url:"resources/images/guidance/fa/gong.png"},
					   {no:"9",   title:"타코비",       text:"타코야끼, 통통 오징어튀김",       text2:"4번 통로 맞은편",   url:"resources/images/guidance/fa/tako.jpg"},
					   {no:"10",  title:"편의점",       text:"캔맥주, 음료, 각종 스낵",       text2:"2번통 로 맞은편",    url:"resources/images/guidance/fa/store.png"},
					   {no:"11",  title:"더블핸스테이크",  text:"테이크 아웃 스테이크",          text2:"2번통 로 맞은편",    url:"resources/images/guidance/fa/double.jpg"},
					   {no:"12",  title:"탐앤탐스",      text:"아메리카노, 스무디, 도그프레즐",  text2:"9번 10번 통로 사이", url:"resources/images/guidance/fa/tom.png"},
					   {no:"13",  title:"차이나플레인",   text:"자장면, 탕수육",              text2:"9번 10번 통로 사이", url:"resources/images/guidance/fa/china.jpg"},
					   {no:"14",  title:"뉴욕버거",      text:"뉴욕버거, 뉴욕돔구장팩",        text2:"9번 10번 통로 사이", url:"resources/images/guidance/fa/nyb.jpg"},
					   {no:"15",  title:"더블핸스테이크",  text:"테이크 아웃 스테이크",           text2:"9번 10번 통로 사이", url:"resources/images/guidance/fa/double.jpg"},
					   {no:"16",  title:"안전용품대여소",  text:"안전용품 대여",               text2:"6번 7번 통로 사이",  url:"resources/images/guidance/fa/safety.png"},
					   {no:"17",  title:"케밥",         text:"닭고기 케밥, 아이란",          text2:"3번 4번 통로 사이",  url:"resources/images/guidance/fa/bap.jpg"},
					   {no:"18",  title:"탐앤탐스",      text:"아메리카노, 스무디, 도그프레즐",  text2:"3번 4번 통로 사이",  url:"resources/images/guidance/fa/tom.png"},
					   {no:"19",  title:"올떡뽂이",      text:"떡볶이, 튀김, 순대",           text2:"3번 4번 통로 사이",  url:"resources/images/guidance/fa/all.jpg"},
					   {no:"20",  title:"뉴욕버거",      text:"뉴욕버거, 뉴욕 돔구장팩",        text2:"3번 4번 통로 사이",  url:"resources/images/guidance/fa/nyb.jpg"},
					   {no:"21",  title:"BBQ(가판)",    text:"황금 올리브 치킨, 순살 크래커 치킨", text2:"7번 통로 맞은편",   url:"resources/images/guidance/fa/bbq.jpg"},
					   {no:"22",  title:"BBQ(가판)",    text:"황금 올리브 치킨, 순살 크래커 치킨", text2:"5번 통로 맞은편",   url:"resources/images/guidance/fa/bbq.jpg"}];
});