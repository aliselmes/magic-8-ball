$(document).ready(function(){

var magic8Ball = {};

magic8Ball.listOfAnswers =  ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

$("#answer").hide();

magic8Ball.askQuestion = function(question) {
	//make the answer fade in
	$("#answer").fadeIn(4000);
	//create a random number
	var randomNumber = Math.random();
	//make the random number between 0 and the list length
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	//round down the number to be a whole number
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	//use that number to get a random index from the array
	var answer = this.listOfAnswers[randomIndex];
	//log the response
	console.log(question);
	console.log(answer);

	$("#answer").text(answer);

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
};

var onClick = function() {

	$("#8ball").effect("shake");

	$("#answer").hide();

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

	setTimeout(
		function() {
	var question = prompt("Ask a YES/NO question!");
	magic8Ball.askQuestion(question);
		}, 500);

};

$("#questionButton").click(onClick);
});
