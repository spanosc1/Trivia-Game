$(document).ready(function() {
  var timeQuestion = 30;
  var timeAnswer = 4;
  var game = {
  	correctNum: 0,
  	incorrectNum: 0,
  	unanswered: 0,
  	questions: ["Who is the creator of Super Mario Brothers, The Legend of Zelda, and Starfox?",
  							"Nintendo was involved in what type of business before they made video games?",
  							"Which of these characters was not a fighter in the original Super Smash Bros. for Nintendo 64?",
  							"What is the name of the second Legend of Zelda game?",
  							"Which of the following Pokemon does not belong to the first generation of Pokemon? (Red/Blue/Yellow)",
  							"Kirby is known for being pink, but he wasn't always portrayed that way.  What color was he in his original game?",
  							"Wario is Mario's \"rival\", but what is the name of Luigi's rival?",
  							"What is the name of Fox McCloud and the Starfox team's nemesis?"],
  	answers: [["Satoru Iwata", "Shigeru Miyamoto", "Reggie Fils", "Bill Trinen"],
  						["Playing cards", "Hotels", "Cab services", "All of the above"],
  						["Donkey Kong", "Bowser", "Captain Falcon", "Jigglypuff"],
  						["Zelda II: The Adventure of Link", "Zelda II: Ganon's Revenge", "The Legend of Zelda: Ocarina of Time",
  							 "The Hyrule Fantasy"],
  						["Mew", "Porygon", "Pichu", "Snorlax"],
  						["Yellow", "Blue", "Gray", "Kirby was always pink!"],
  						["Waluigi", "Wuigi", "Bluigi", "Giovanni"],
  						["Galaxy Dog", "Wolf O'Donnel", "King Koopa", "Andross"]],
  	gifs: ["tanooki.gif", "hanafuda.jpg", "bowser.gif", "zelda.gif", "pichu.gif", "kirby.gif", "waluigi.gif", "andross.gif"],
  	key: [1, 3, 1, 0, 2, 2, 0, 3],
  	currentQ: -1,
		start: function() {
  		$("#press-start").html("");
  		this.question();
  	},
  	question: function() {
  		timeQuestion = 30;
  		timeAnswer = 4;
  		this.currentQ++;
  		var displayQ = this.currentQ + 1;
  		$("#qspace").html('<p id="timeLeft">Time: 30 seconds</p>');
  		$("#qspace").append('<img id= "lakitu" src="assets/images/lakitu.gif">');
  		$("#qspace").append('<p id="question">' + displayQ + '. ' + this.questions[this.currentQ] + '</p>');
  		for(var i = 0; i < 4; i++)
  		{
  			if(i==0)
  			{
  				$("#qspace").append('<div class="aspace" id="zero"><p class="answer" id="' + this.currentQ + '">' + this.answers[this.currentQ][i] + '</p></div>');
  			}
  			if(i==1)
  			{
  				$("#qspace").append('<div class="aspace" id="one"><p class="answer" id="' + this.currentQ + '">' + this.answers[this.currentQ][i] + '</p></div>');
  			}
  			if(i==2)
  			{
  				$("#qspace").append('<div class="aspace" id="two"><p class="answer" id="' + this.currentQ + '">' + this.answers[this.currentQ][i] + '</p></div>');
  			}
  			if(i==3)
  			{
  				$("#qspace").append('<div class="aspace" id="three"><p class="answer" id="' + this.currentQ + '">' + this.answers[this.currentQ][i] + '</p></div>');
  			}
  		}
  		timerQuestion = setInterval(game.countQuestion, 1000);
  		$("#zero").click(function() {
  			if(game.key[game.currentQ] == 0)
  			{
  				game.correct();
  			}
  			else
  			{
  				game.incorrect();
  			}
			});
			$("#one").click(function() {
  			if(game.key[game.currentQ] == 1)
  			{
  				game.correct();
  			}
  			else
  			{
  				game.incorrect();
  			}
			});
			$("#two").click(function() {
  			if(game.key[game.currentQ] == 2)
  			{
  				game.correct();
  			}
  			else
  			{
  				game.incorrect();
  			}
			});
			$("#three").click(function() {
  			if(game.key[game.currentQ] == 3)
  			{
  				game.correct();
  			}
  			else
  			{
  				game.incorrect();
  			}
			});
  	},
  	countQuestion: function() {
  		timeQuestion--;
  		$("#timeLeft").text("Time: " + timeQuestion + " seconds");
  		console.log(timeQuestion);
  		if(timeQuestion == 0)
  		{
  			clearTimeout(timerQuestion);
  			game.questionUnanswered();
  		}
  	},
  	countAnswer: function() {
  		timeAnswer--;
  		console.log(timeAnswer);
  		if(timeAnswer == 0)
  		{
  			clearTimeout(timerAnswer);
  			if(game.currentQ < game.questions.length - 1)
  			{
  				game.question();
  			}
  			else
  			{
  				game.over();
  			}
  		}
  	},
  	questionUnanswered: function() {
  		$("#qspace").html('<p id="question">Time\'s up!  The correct answer is ' + this.answers[this.currentQ][this.key[this.currentQ]] + '</p>');
  		$("#qspace").append('<img id="gif" src="assets/images/' + this.gifs[this.currentQ] + '">');
  		timerAnswer = setInterval(game.countAnswer, 1000);
  		this.unanswered++;
  	},
  	correct: function() {
  		clearTimeout(timerQuestion);
  		$("#qspace").html('<p id="question">Correct!  It\'s ' + this.answers[this.currentQ][this.key[this.currentQ]]);
  		$("#qspace").append('<img id="gif" src="assets/images/' + this.gifs[this.currentQ] + '">');
  		if(this.currentQ == 5)
  		{
  			$("#qspace").html('<p id="question">Correct!  It\'s ' + this.answers[this.currentQ][this.key[this.currentQ]]);
  			$("#qspace").append('<img id="gif2" src="assets/images/' + this.gifs[this.currentQ] + '">');
  			$("#qspace").append('<img id="gif2" src="assets/images/' + this.gifs[this.currentQ] + '">');
  			$("#qspace").append('<img id="gif2" src="assets/images/' + this.gifs[this.currentQ] + '">');
  		}
  		timerAnswer = setInterval(game.countAnswer, 1000);
  		this.correctNum++;
  	},
  	incorrect: function() {
  		clearTimeout(timerQuestion);
  		$("#qspace").html('<p id="question">Sorry!  The answer is ' + this.answers[this.currentQ][this.key[this.currentQ]]);
  		$("#qspace").append('<img id="gif" src="assets/images/' + this.gifs[this.currentQ] + '">');
  		timerAnswer = setInterval(game.countAnswer, 1000);
  		this.incorrectNum++;
  	},
  	over: function() {
  		$("#qspace").html('<p id="title">Game Over<p><br><p>You got ' + this.correctNum + ' questions right.</p><br><p>You got '
  			 + this.incorrectNum + ' questions wrong.</p><br><p>You left ' + this.unanswered + ' questions unanswered.');
  		$("#qspace").append('<img id="gif3" src="assets/images/thankyou.gif">');
  		$("#qspace").append('<p>Click the image to start over</p>');
  		$("#gif3").click(function() {
				game.reset();
			});
  	},
  	reset: function() {
  		timeQuestion = 30;
  		timeAnswer = 4;
  		this.correctNum = 0;
  		this.incorrectNum = 0;
  		this.unanswered = 0;
  		this.currentQ = -1;
  		$("#qspace").html("");
  		$("#press-start").html('<p id="title">Nintendo<br>Trivia!!</p><img id="dance" src="assets/images/dance.gif"><p id="start">Click Mario and Luigi to start</p><p id="copyright">&copy Chris Spanos 2016</p>');
			$("#dance").click(function() {
				game.start();
			});
  	}
  }
  $("#dance").click(function() {
		game.start();
	});
});