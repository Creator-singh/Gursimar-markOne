var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;
var userName = readlineSync.question(chalk.black.bgYellow(" Enter your name : \n"));

console.log(chalk.black.bgCyan(" Welcome ") + chalk.black.bgCyan(userName) + chalk.black.bgCyan(" to HOW WELL YOU KNOW LADAKH QUIZ\n"));
console.log("Let us Start the quiz\n");

function quiz(question, answer, correctAns)
{
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.black.bgGreen(" Yay! You are correct. "));
    score += 1;
  }

  else 
  {
    console.log(chalk.black.bgRed(" OHHH! You are wrong. "));
  }

  console.log();
  console.log(chalk.black.bgGreen(" The correct answer is " + correctAns + " "));
  console.log();
  console.log(chalk.black.bgWhite(" Your Current Score is " + score + " "));
  console.log("***************************************************");
  console.log();
}

var quesBank = [
  {
    question: "Is Ladakh a part of J&K?\n",
    answer: "No",
    correctAnswer: "No",
  },

  {
    question: "Which is the State Animal of Ladakh?\n",
    answer: "Snow Leopard",
    correctAnswer: "Snow Leopard",
  },

  {
    question: "Which is the State Bird of Ladakh?\n",
    answer: "Black-necked Crane",
    correctAnswer: "Black-necked Crane",
  },
  
  {
    question: "Who is the first LG(Lieutenant Governor) of Ladakh?\n",
    answer: "Radha Krishna Mathur",
    correctAnswer: "Radha Krishna Mathur",
  },

  {
    question: "Ladakh is also known as Little ______\n",
    answer: "Tibet",
    correctAnswer: "Tibet"
  }
]

for(var i=0; i<quesBank.length; i++)
{
  var currentQuestion = quesBank[i];
  quiz(currentQuestion.question, currentQuestion.answer, currentQuestion.correctAnswer);
}

console.log(chalk.black.bgYellowBright(" " + userName + " Your Final Score is " + score + " "));
