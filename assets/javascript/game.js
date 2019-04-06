$(document).ready(function() {

var randomNumber = 0;
var count = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var wins = 0;
var losses = 0;


//use a function to start the game
	function startGame() {
		reset();
		// result(randomNumber);// console.log(typeof gem1);
		$("#gem1").click(function() {
			count = gem1 + count
			$("#count").text(count);
			console.log("new count ", count );
			checkWin(randomNumber, count);
		});
		$("#gem2").click(function() {
			count = gem2 + count
			$("#count").text(count);
			checkWin(randomNumber, count);
		});
		$("#gem3").click(function() {
			count = gem3 + count
			$("#count").text(count);
			checkWin(randomNumber, count);
		});
		$("#gem4").click(function() {
			count = gem4 + count
			$("#count").text(count);
			checkWin(randomNumber, count);



		});	
		

		//If user clicks Start Over, execute startGame function//

	};

	startGame();


	
	function result(randomNumber) {
		$("#gem1").click(function() {
			count = gem1 + count
			$("#count").text(count);
			console.log("new count ", count );
			checkWin(randomNumber, count);
		});
		$("#gem2").click(function() {
			count = gem2 + count
			$("#count").text(count);
			checkWin(randomNumber, count);
		});
		$("#gem3").click(function() {
			count = gem3 + count
			$("#count").text(count);
			checkWin(randomNumber, count);
		});
		$("#gem4").click(function() {
			count = gem4 + count
			$("#count").text(count);
			checkWin(randomNumber, count);

		});	
	

	};

	function checkWin(randomNumber, count) {
		console.log("random number, count:" ,randomNumber, count);
		if(count > randomNumber) {
			alert("sorry, you lost!"); 
			losses++
			$("#losses").html(losses)
			console.log("losses:", losses)
			reset();
		}
		else if(count == randomNumber) {
			alert("congrats, you win!")
			wins++;
			$("#wins").html(wins)
			reset()
		}

	};

	$("#startover").click(reset);

	function reset() {
		$("#random-number").empty();
		$("#count").empty();
		count = 0;
		console.log("count: ", count);
		//creates a random number generator that displays the number in id random-number between 19-120//
		randomNumber = Math.floor(Math.random() * 102 + 19);
		console.log("random number: " ,randomNumber);
		$("#random-number").text(randomNumber);

		//randomly assigns a value to each gem between 1-12//
		gem1 = Math.floor(Math.random() * 11 + 1);
		gem2 = Math.floor(Math.random() * 11 + 1);
		gem3 = Math.floor(Math.random() * 11 + 1);
		gem4 = Math.floor(Math.random() * 11 + 1);
		console.log(gem1,gem2,gem3,gem4);

	}


});






