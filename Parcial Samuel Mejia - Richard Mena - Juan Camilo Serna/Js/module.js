var app= angular.module('myGameList', ['ngAnimate']);
app.controller('ctrlGameList', function($scope) {
	$scope.gameList = [
	{ name: "img/The Witcher III", price:9.99, genero:"rpg,aventura",categoria:"Un Solo Jugador",os:"Windows" },
	{name: "img/Fallout 4", price: 199, genero:"aventura,accion",categoria:"un solo jugador,cooperativo",os:"Windows,Mac"},
	{name: "img/Gran turismo", price:9.9, genero:"carreras",categoria:"multijugador",os:"Windows,mac" },
	{name: "img/Gta V", price:9.9, genero:"carreras,aventura,accion",categoria:"multijugador,cooperativo",os:"windows, linux" },
	
	
	];
	$scope.isDisabled="enabled";
	$scope.orderByMe = function(x) {
        $scope.myOrderBy = x;

    }
    $scope.order=function(y){
    	$scope.myorder=(y)
    }
    $scope.activar=function(){
    	
         $scope.isDisabled='disabled';
  }
});

