 // globally mock the user selecting "Paris"
jest.mock('prompt-sync', () => {
  return () => {
    return jest.fn(() => "3");
  };
});

const index = require('../src/index');
const {
  gameState,
  startGame,
  askQuestion,
  checkAnswer,
  nextQuestion,
  endGame,
  startTimer,
  stopTimer,
} = index;
const questions = require('../src/questions');

describe("Trivia Game", () => {
    // setting the global variable
    let game;

    beforeEach(() => {
        // placeholder for a setup test to reset or reinitialize the game state before each test
        // probably something like `game = new TriviaGame();` or reset score/timer/etc
    });

    afterEach(() => {
        // placeholder for a teardown test to reset things like clearing timers after each game ends
        // for example maybe something like `clearInterval(timer);`
    });

    describe("startGame", () => {
        it("should initialize game state and display the first question", () => {
        // test game start
            startGame()
        
        });
    });

    describe("askQuestion", () => {
        it("should display the current question and choices", () => {
        // test question rendering
        
            const currentQuestion = questions[1]; // "What is the capital of France?"
            const selected = askQuestion(currentQuestion);
            
            expect(typeof selected).toBe("string");
        });

        it("should accept user input and validate it", () => {
        // test input handling
            
            const selected = askQuestion(questions[1]);
            
            expect(selected).toBe("Paris");
        });
    });

    describe("checkAnswer", () => {
        it("should return true if the answer is correct", () => {
        // test correct answer logic
            const result = checkAnswer("Paris", "Paris");

            expect(result.isCorrect).toBe(true);
        });

        it("should return false if the answer is incorrect", () => {
        // test incorrect answer logic

            const result = checkAnswer("Madrid", "Paris");

            expect(result.isCorrect).toBe(false);
        });

        it("should provide feedback after answering", () => {
        // test feedback output

        // correct response
        const correctFeedback = checkAnswer("Paris", "Paris").feedback;
        
        expect(correctFeedback).toBe("Correct!");
        
        // incorrect response
        const incorrectFeedback = checkAnswer("Madrid", "Paris").feedback;
        
        expect(incorrectFeedback).toBe("Incorrect. The correct answer is Paris.");
        });
    });

    describe("nextQuestion", () => {
        let originalAskQuestion;
        let originalEndGame;
        
        beforeEach(() => {
            // backup originals
            originalAskQuestion = index.askQuestion;
            originalEndGame = index.endGame;
            
            // reset game state before each test
            gameState.currentQuestionIndex = 0;
            global.lastQuestionAsked = null;
            global.endGameCalled = false;
        });

        afterEach(() => {
            // restore originals to avoid side effects on other tests
            index.askQuestion = originalAskQuestion;
            index.endGame = originalEndGame;
        });
        
        it("should move to the next question in the quiz", () => {
        // test question progression
            // replace askQuestion with mock behavior for this test only
            global.askQuestion = (q) => {
                global.lastQuestionAsked = q;
            };

            nextQuestion();

            expect(gameState.currentQuestionIndex).toBe(1);
            expect(global.lastQuestionAsked).toEqual(questions[1]);
        });

        it("should end the game if there are no more questions", () => {
        // test game-ending logic
        // Set index to last question
            gameState.currentQuestionIndex = questions.length - 1;

            index.endGame = () => {
                global.endGameCalled = true;
            };

            nextQuestion();

            expect(gameState.currentQuestionIndex).toBe(questions.length);
            expect(global.endGameCalled).toBe(true);
        });
    });

    describe("endGame", () => {
        xit("should display the final score and ending feedback", () => {
        // test end-of-game summary
        });
    });

    describe("timers", () => {
        xit("should start a countdown timer when the game begins", () => {
        
        });

        xit("should stop the timer when the game ends", () => {
        
        });

        describe("startTimer", () => {
            xit("should begin countdown at specified duration", () => {
            // test timer start
            });

            xit("should update remaining time correctly", () => {

            });
        });

        describe("stopTimer", () => {
            xit("should stop the countdown", () => {
            // test timer stop
            });

            xit("should prevent further time changes after stopping", () => {

            });
        });


        xit("should end the game if time runs out", () => {
        // test time-based ending
        });
    });

});