const questions = require('./questions');
const prompt = require("prompt-sync")();
// helper object to track the relevant details about the game 
const gameState = {
  currentQuestionIndex: 0,
  score: 0
};

function startGame() {
    const currentQuestion = questions[gameState.currentQuestionIndex];
    
    askQuestion(currentQuestion);
}

function askQuestion(currentQuestion) {
    console.log(currentQuestion.question);
    
    currentQuestion.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
    });

    const userInput = prompt("Your answer: ")
    const selected = currentQuestion.choices[parseInt(userInput) - 1];
    
    // returning a value for testing
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
    console.log("Game over!");
    console.log(`Your final score is: ${gameState.score}/${questions.length}`);
}

let timerId;

function startTimer(durationInSeconds) {
    let remaining = durationInSeconds;

    timerId = setInterval(() => {
        remaining -= 1;
        console.log(`Time remaining: ${remaining}s`);

        if (remaining <= 0) {
            stopTimer();
            endGame();
        }
  }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
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

if (require.main === module) {
  // starting the timer for 30 seconds
  startTimer(5);

  // starting the game
  startGame();
}