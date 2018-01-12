var app = angular.module("Sns",[]);
app.controller("sns", function($scope, $rootScope){
	$rootScope.navEvent();
	
	$scope.contents = "resources/views/Fans/Sns.html";
	
	$scope.Sns = [{a_tag:"https://www.facebook.com/heroesbaseballclub/",     fimg:"resources/images/sns/imgSNS01.png", alt:"페이스북",   alt2:"Facebook" , simg:"resources/images/sns/titSNS01.png", text:"페이스북에서 넥센히어로즈의 최신사진과 소식을 확인하세요."},
				  {a_tag:"https://www.youtube.com/user/heroesbaseballclub/", fimg:"resources/images/sns/imgSNS02.png", alt:"유튜브",    alt2:"Youtube" ,   simg:"resources/images/sns/titSNS02.png", text:"유투브를 통해 넥센히어로즈의 영상메시지를 구독하세요."},
				  {a_tag:"https://www.instagram.com/heroesbaseballclub/",    fimg:"resources/images/sns/imgSNS04.png", alt:"인스타그램", alt2:"Instagram" , simg:"resources/images/sns/titSNS04.png", text:"인스타그램에서 넥센히어로즈의 최신사진과 소식을 확인하세요."}];
	
});