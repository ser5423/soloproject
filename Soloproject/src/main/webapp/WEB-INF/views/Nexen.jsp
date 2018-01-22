<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-ng-app="Nexen"><!-- 사이트 등록 -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Nexen Heroes</title>
<link rel="shortcut icon" type="image/x-icon" href="resources/images/favicon.jpg" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel='stylesheet prefetch' href='//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css">
    <script src="https://unpkg.com/isotope-layout@3.0.5/dist/isotope.pkgd.min.js"></script>
	

	
	<script type="text/javascript" src="resources/angular/angular.min.js"></script> <!-- 스크립트로 링크검 -->
	<script type="text/javascript" src="resources/angular/angular-route.min.js"></script> <!-- angular.min이 항상 위에 있어야됨 -->
<!-- 위 두개의 스크립트로 싱글페이지가 구성됨 -->
	
	<link rel="stylesheet" href="resources/css/main.css">
	<link rel="stylesheet" href="resources/css/heroes.css">
	<link rel="stylesheet" href="resources/css/stats.css">
	<link rel="stylesheet" href="resources/css/events.css">
	<link rel="stylesheet" href="resources/css/nav.css">
	<link rel="stylesheet" href="resources/css/picture.css">
	<link rel="stylesheet" href="resources/css/movepicture.css">
	<link rel="stylesheet" href="resources/css/fans.css">
	<link rel="stylesheet" href="resources/css/players.css">
	<link rel="stylesheet" href="resources/css/history.css">
	
	
	<script type="text/javascript" src="resources/js/Nexen.js"></script>
	<script type="text/javascript" src="resources/js/Heroes.js"></script>
	<script type="text/javascript" src="resources/js/HeroesBI.js"></script>
	<script type="text/javascript" src="resources/js/HeroesGuidance.js"></script>
	<script type="text/javascript" src="resources/js/Stats.js"></script>
	<script type="text/javascript" src="resources/js/Picture.js"></script>
	<script type="text/javascript" src="resources/js/Move.js"></script>
	<script type="text/javascript" src="resources/js/Sns.js"></script>
	<script type="text/javascript" src="resources/js/Players.js"></script>
	
	
</head>
<body>

<div data-ng-view></div><!-- ng-view는 한번만 사용하고 다른 것들을 조합할 때는 include를 사용한다. -->

</body>
</html>