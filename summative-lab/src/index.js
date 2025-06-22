const questions = require('./questions');

// prompt-sync is synchronous so trying node's readline module instead
// const prompt = require("prompt-sync")();
const readline = require("readline");

// helper object to track the relevant details about the game 
const gameState = {
  currentQuestionIndex: 0,
  score: 0
};

async function startGame() {
    while (gameState.currentQuestionIndex < questions.length) {
        const currentQuestion = questions[gameState.currentQuestionIndex];
        const result = await askQuestion(currentQuestion);

    if (result.type === "timeout") {
        console.log("You didn't answer in time.");
    } else if (result.type === "invalid") {
        console.log("Invalid input. Please try to enter a number from the list next time.");
    } else if (result.type === "answer") {
        const check = checkAnswer(result.value, currentQuestion.answer);
        console.log(check.feedback);
        
            if (check.isCorrect) {
                        gameState.score += 1;
                    }
                }

    gameState.currentQuestionIndex += 1;
    }

    endGame();
}

function askQuestion(currentQuestion, timeoutMs = 5000) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        let resolved = false;

        console.log(currentQuestion.question);

        currentQuestion.choices.forEach((choice, index) => {
            console.log(`${index + 1}. ${choice}`);
        });

        const timer = setTimeout(() => {
            if (!resolved) {
                resolved = true;
                console.log("\nTime's up!");
                rl.close();
                resolve({ type: "timeout" });
                }
            }, timeoutMs);

        rl.question("Your answer: ", (input) => {
            if (resolved) return;
            resolved = true;
            clearTimeout(timer); // prevent timeout from firing if the user answers in time

            const selected = currentQuestion.choices[parseInt(input.trim()) - 1];
            
            rl.close(); // close the readline interface after reading user input
            // returns user input if valid, returns invalid if user input is invalid
            if (!selected) {
                resolve({ type: "invalid" });
            } else {
                resolve({ type: "answer", value: selected });
            }
        });
    });
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