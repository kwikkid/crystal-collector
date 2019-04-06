$(document).ready(function() {

var randomNumber = 0;
var count = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var isWinner = false;
var wins = 0;
var losses = 0;


//use a function to start the game
	function startGame() {
	
		isWinner = false;

		// $("#gem1", "#gem2", "#gem3", "#gem4", "#randon-number", "#count").empty(); 
		$("#random-number").empty();
		$("#count").empty();
		count = 0;
		console.log("count: ", count);
		console.log("empty div: ", )
		//creates a random number generator that displays the number in id random-number between 19-120//
		// randomNumber = Math.floor(Math.random() * 102 + 19);
		randomNumber = Math.floor(Math.random() * 102 + 19);
		console.log("random number: " ,randomNumber);
		$("#random-number").text(randomNumber);

		//randomly assigns a value to each gem between 1-12//
		gem1 = Math.floor(Math.random() * 11 + 1);
		gem2 = Math.floor(Math.random() * 11 + 1);
		gem3 = Math.floor(Math.random() * 11 + 1);
		gem4 = Math.floor(Math.random() * 11 + 1);
		console.log(gem1,gem2,gem3,gem4);
		console.log(typeof gem1);
		result(randomNumber);
	};
	startGame();

	
	function result(randomNumber) {
		$("#gem1").click(function() {
			count = gem1 + count
			$("#count").text(count);
			console.log("first");
			console.log(count);
			checkWin(randomNumber, count);
		});
		$("#gem2").click(function() {
			count = gem2 + count
			$("#count").text(count);
			console.log("first");
			checkWin(randomNumber, count);
		});
		$("#gem3").click(function() {
			count = gem3 + count
			$("#count").text(count);
			console.log("first");
			checkWin(randomNumber, count);
		});
		$("#gem4").click(function() {
			count = gem4 + count
			$("#count").text(count);
			console.log("first");
			checkWin(randomNumber, count);

		});	
		

	};

	function checkWin(randomNumber, count) {
		console.log("inside checkWin");
		console.log("random number, count:" ,randomNumber, count);
		if(count>randomNumber){
			console.log("second")
			alert("sorry");
			losses++;
			$("#losses").html(losses);
			console.log("losses:", losses)
		startGame();
		}
		else if(count == randomNumber){
			console.log("second");
			alert("yaya");
			wins++;
			$("#wins").html(wins);
		startGame();
			
		}
	};


});






