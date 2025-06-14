const questions = require('./questions');
const prompt = require("prompt-sync")();
// helper object to track the relevant details about the game 
const gameState = {
  currentQuestionIndex: 0,
  score: 0
};

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
    gameState.currentQuestionIndex += 1;

    if (gameState.currentQuestionIndex < questions.length) {
        const next = questions[gameState.currentQuestionIndex];
        
        askQuestion(next);
    } else {
        endGame();
    }
}

function endGame() {

}

function startTimer() {

}

function stopTimer() {

}

module.exports = {
    gameState,
    startGame,
    askQuestion,
    checkAnswer,
    nextQuestion,
    endGame,
    startTimer,
    stopTimer,
};