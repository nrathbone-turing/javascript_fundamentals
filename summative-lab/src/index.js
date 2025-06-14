const questions = require('./questions');
const prompt = require("prompt-sync")();

function startGame() {
    const currentQuestion = questions[1];
    
    askQuestion(currentQuestion);
}

function askQuestion(currentQuestion) {
    console.log(currentQuestion.question);
    
    currentQuestion.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
    });

    const userInput = prompt("Your answer: ")
    const selected = currentQuestion.choices[parseInt(userInput) - 1];
 
    return selected
}

function checkAnswer(selected, correct) {
    let isCorrect;
    let feedback;
    
    if (selected === correct) {
        isCorrect = true;
        feedback = "Correct!";
    } else {
        isCorrect = false;
        feedback = `Incorrect. The correct answer is ${correct}.`;
    }

    return {
        isCorrect: isCorrect,
        feedback: feedback
    };
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