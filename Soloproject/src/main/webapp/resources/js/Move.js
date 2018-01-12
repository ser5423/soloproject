var app = angular.module("Move",[]);
app.controller("move", function($scope, $rootScope, $sce){
	$rootScope.navEvent();
	$scope.contents = "resources/views/Story/Movingpicture.html";
	
	$scope.move = [{murl:"https://www.youtube.com/watch?v=ligXVO2vkWk&feature=youtu.be", h5:"[새해메시지] 해피뉴이어",     st:"2017.12.20", pp:"2018년이 시작되었습니다. 히어로즈와 함께 올 한해 행복만 가득하시길 기원합니다! 새해 복 많이 받으세요!!"},
				   {murl:"https://www.youtube.com/watch?v=wm7QT9ubk1Y&feature=youtu.be", h5:"[성탄메시지] 메리 크리스마스!", st:"2017.12.20", pp:"따뜻한 크리스마스를 맞이하고 계신가요? 팬 여러분 모두 행복한 성탄절을 보내시길 바라며 히어로즈 선수단이 인사를 전합니다."},
				   {murl:"https://www.youtube.com/watch?v=kn3dhS5I0cw&feature=youtu.be", h5:"No.22 밴 헤켄, 당신을 기억하겠습니다", st:"2017.10.26", pp:"2012 - 2017 함께 했던 우리의 영웅 밴 헤켄 선수의 영상입니다."},
				   {murl:"https://www.youtube.com/watch?v=AUjLxkBYAxE&feature=youtu.be", h5:"[컴백홈! 히어로즈] 마지막 홈경기를 돌아보며", st:"2017.09.15", pp:"지난 수요일(13일) 이번 시즌 고척홈경기가 막을 내렸습니다. 다시 홈으로 돌아오라는 응원의 마음을 담아 팬 여러분과 함께 다양한 행사를 진행하였습니다. 그 날을, 우리들의 소망을 다시 한 번 돌아보며 오늘 하루도 선수단을 응원하겠습니다. "}];

});
app.filter('trusted', ['$sce', function ($sce) {
    return function(murl) {
            var move_id = murl.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + move_id);
    };
}]);