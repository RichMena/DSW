var app=angular.module("app",[]);
app.controller("gameController", function($scope) {
	$scope.recom="Juegos que te puedan gustar";
	$scope.comprarTodo=function(){
	alert("Todos los juegos se han comprado");	

	}
	$scope.comprar=function(){
	alert("Juego comprado");
	}
		$scope.games=[
		{
			imagen:"img/tw3wh.jpg",
			nombre:"The Witcher 3",
			desarrollador:"CD project",
			precio:59.99,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/tloz.jpg",
			nombre:"The Legend of Zelda",
			desarrollador:"Nintendo",
			precio:60,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/gow.jpg",
			nombre:"God of War II",
			desarrollador:"Sony Santa Monica",
			precio:29.99,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/mkx.jpg",
			nombre:"Mortal Kombat X",
			desarrollador:"Netherland studios",
			precio:39.99,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/smb.jpg",
			nombre:"Super Mario Bros.",
			desarrollador:"Nintendo",
			precio:10,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/f4.jpg",
			nombre:"Fallout 4",
			desarrollador:"Bethesda",
			precio:45,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/jc3.jpg",
			nombre:"Just Cause 3",
			desarrollador:"Avalanche Studios",
			precio:43,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/pkmx.jpg",
			nombre:"Pokemón X",
			desarrollador:"Nintendo",
			precio:28,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/rdr.jpg",
			nombre:"Red Dead Redemptiom",
			desarrollador:"Rockstar",
			precio:43,
			oferta:45,
			showGame:1
		},
		{
			imagen:"img/h4.jpg",
			nombre:"Halo 4",
			desarrollador:"Microsoft",
			precio:43,
			oferta:45,
			showGame:1
		}];
	$scope.sugeridos=[
		{
			imagen:"img/tw3wh.jpg"
		},
		{
			imagen:"img/tloz.jpg"
		},
		{
			imagen:"img/gow.jpg"
		},
		{
			imagen:"img/mkx.jpg"
		},
		{
			imagen:"img/smb.jpg"
		},
		{
			imagen:"img/f4.jpg"
		},
		{
			imagen:"img/jc3.jpg"
		},
		{
			imagen:"img/pkmx.jpg"
		},
		{
			imagen:"img/rdr.jpg"
		},
		{
			imagen:"img/h4.jpg"		
		}];
})
