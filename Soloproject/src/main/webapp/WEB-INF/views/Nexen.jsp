<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-ng-app="Nexen"><!-- 사이트 등록 -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Nexen</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel='stylesheet prefetch' href='//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
	<script type="text/javascript" src="resources/angular/angular.min.js"></script> <!-- 스크립트로 링크검 -->
	<script type="text/javascript" src="resources/angular/angular-route.min.js"></script> <!-- angular.min이 항상 위에 있어야됨 -->
<!-- 위 두개의 스크립트로 싱글페이지가 구성됨 -->
	<link rel="stylesheet" href="resources/css/nav.css">
	<link rel="stylesheet" href="resources/css/main.css">
	<link rel="stylesheet" href="resources/css/heroes.css">
<!-- 	<link rel="stylesheet" href="resources/css/22.css" /> -->
	<script type="text/javascript" src="resources/js/Nexen.js"></script>
	<script type="text/javascript" src="resources/js/Heroes.js"></script>
	<script type="text/javascript" src="resources/js/HeroesBI.js"></script>
	<script type="text/javascript" src="resources/js/HeroesGuidance.js"></script>
</head>
<body>

<div data-ng-view></div><!-- ng-view는 한번만 사용하고 다른 것들을 조합할 때는 include를 사용한다. -->

</body>
</html>