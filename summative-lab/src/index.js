const questions = require('./questions');
const promptSync = require("prompt-sync")();

function startGame() {
    const currentQuestion = questions[1];
    
    askQuestion(currentQuestion);
}

function askQuestion(currentQuestion) {
    console.log(currentQuestion.question);
    
    currentQuestion.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
    });

    const userInput = promptSync("Your answer: ")
    const selected = currentQuestion.choices[parseInt(userInput) - 1];
 
    return selected
}

function checkAnswer(selected, correct) {
  return selected === correct;
}

function nextQuestion() {

}

function endGame() {

}

function startTimer() {

}

function stopTimer() {

}

module.exports = {
  startGame,
  askQuestion,
  checkAnswer,
  nextQuestion,
  endGame,
  stopTimer,
};