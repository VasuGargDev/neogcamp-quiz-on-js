//Do you know me quiz?
var readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question(chalk.bgYellow("What's your name? "));
console.log(chalk.bgRed("Welcome "+ userName + ", let's see how well do you know me"));

var score = 0;

var highScores = [
  {
    name: "Ojas",
    score: 5
  },
  {
    name: "Suryansh",
    score: 2
  }
]


//internal gameplay function
function gameLogic(question, answer) {
  
  var userAnswer = readlineSync.question(chalk.magenta(question));  //this line prints our question to user
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green("right!"));
    score+=1;
  }
  else {
    console.log(chalk.red("wrong!"));
  }

  console.log(chalk.bold("current score: ", score));
  console.log(chalk.dim("-/-/-/-/-\n")); 
}


var questions = [
	{
		question: `  
  Javascript is an _______ language?
	a: Object-Oriented
	b: Object-Based
      c: Procedural
	d: None of the above\n`,
		answer: "a"
	},
	{
		question: `
	Which of the following keywords is used to define a variable in Javascript?
	a: var
      b: let
	c: Both A and B\n`,
		answer: "c"
	},
	{
		question: `
	Which of the following methods is used to access HTML elements using Javascript?
	a: getElementbyId()
	b: getElementsByClassName()
	c: Both A and B
	d: None of the above\n`,
		answer: "c"
	},
	{
		question: `
	Upon encountering empty statements, what does the Javascript Interpreter do?
	a: Throws an error
	b: Ignores the statements
      c: Gives a warning
	d: None of the above\n`,
		answer: "b"
	},
  {
		question: `
	Which of the following methods can be used to display data in some form using Javascript?
	a: document.write()
      b: console.log()
      c: window.alert()
	d: All of the above\n`,
		answer: "d"
	},
	{
		question: `  
	How can a datatype be declared to be a constant type?
	a: const
	b: var
      c: let
	d: constant\n`,
		answer: "a"
	}
]; 


function gamePlay() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    gameLogic(currentQuestion.question,currentQuestion.answer);
  }
}  

function results() {
  console.log(chalk.bgCyan("Your final score:", score));

  for (var j=0; j<highScores.length; j++) {
    var high = highScores[j];
    if(score > high.score){
      console.log(chalk.inverse("Conratulations!You achieved a new high score. Please ping me a screenshot and I'll update it in high scores database"));
      break;
    }
  }
}

gamePlay();
results();
