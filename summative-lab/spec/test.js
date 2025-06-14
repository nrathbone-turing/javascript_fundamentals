const {
  startGame,
  askQuestion,
  checkAnswer,
  nextQuestion,
  endGame,
  stopTimer,
} = require('../src/index');


describe("Trivia Game", () => {
    // setting the global variable
    let game;

    beforeEach(() => {
        // Placeholder for a setup test to reset or reinitialize the game state before each test
        // probably something like `game = new TriviaGame();` or reset score/timer/etc
    });

    afterEach(() => {
        // Placeholder for a teardown test to reset things like clearing timers after each game ends
        // for example maybe something like `clearInterval(timer);`
    });

    describe("startGame", () => {
        it("should initialize game state and display the first question", () => {
        // test game start
        startGame()
        
        expect(askQuestion()).toBe("What is the capital of France?");
        
        });
    });

    describe("askQuestion", () => {
        it("should display the current question and choices", () => {
        // test question rendering
        });

        it("should accept user input and validate it", () => {
        // test input handling
        });
    });

    describe("checkAnswer", () => {
        it("should return true if the answer is correct", () => {
        // test correct answer logic
        });

        it("should return false if the answer is incorrect", () => {
        // test incorrect answer logic
        });

        it("should provide feedback after answering", () => {
        // test feedback output
        });
    });

    describe("nextQuestion", () => {
        it("should move to the next question in the quiz", () => {
        // test question progression
        });

        it("should end the game if there are no more questions", () => {
        // test game-ending logic
        });
    });

    describe("endGame", () => {
        it("should display the final score and ending feedback", () => {
        // test end-of-game summary
        });
    });

    describe("timers", () => {
        it("should start a countdown timer when the game begins", () => {
        
        });

        it("should stop the timer when the game ends", () => {
        
        });

        describe("startTimer", () => {
        it("should begin countdown at specified duration", () => {
        // test timer start
        });
        it("should update remaining time correctly", () => {

        });
        });

        describe("stopTimer", () => {
        it("should stop the countdown", () => {
        // test timer stop
        });
        it("should prevent further time changes after stopping", () => {

        });
        });


        it("should end the game if time runs out", () => {
        // test time-based ending
        });
    });

});