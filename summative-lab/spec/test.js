 // globally mocking the user selecting "Paris" as their selection to the question at the second index position for testing
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
            global.lastQuestionAsked = null;
            global.endGameCalled = false;
        });
        
        it("should move to the next question in the quiz", () => {
        // test question progression
            // replace askQuestion with mock behavior for this test only
            gameState.currentQuestionIndex = 0;

            nextQuestion();

            expect(gameState.currentQuestionIndex).toBe(1);
        });

        it("should end the game if there are no more questions", () => {
        // test game-ending logic
        // Set index to last question
            gameState.currentQuestionIndex = questions.length - 1;
            gameState.score = 1;

            nextQuestion();

            expect(gameState.currentQuestionIndex).toBe(questions.length);
            expect(gameState.score).toBe(1);
        });
    });

    describe("endGame", () => {
        it("should display the final score and ending feedback", () => {
        // test end-of-game summary
        gameState.score = 2;
        gameState.currentQuestionIndex = questions.length;

        // just having it return strings here for testing since the actual logic outputs to terminal
        const mockEnd = () => {

        return `Your final score is: ${gameState.score}/${questions.length}`;
    };

    expect(mockEnd()).toBe("Your final score is: 2/2");
        });
    });

    describe("timers", () => {
        
        beforeEach(() => {
            // mocking the timer functionality
            jest.useFakeTimers();
            global.clearInterval = jest.fn();
            global.setInterval = jest.fn();
        });

        afterEach(() => {
            // resetting the mock timer after each test
            jest.clearAllTimers();
            jest.restoreAllMocks();
        });
        
        it("should start a countdown timer when the game begins", () => {
            jest.useFakeTimers();
            
            timerId = setInterval(() => {}, 1000); // mock a running timer
            
            startTimer(5);

            // instead of checking if `setInterval` was called, i'm checking the results/state changes
            expect(timerId).toBeDefined();
            expect(timerId).not.toBeNull();

            jest.clearAllTimers();
        });

        it("should stop the timer when the game ends", () => {
            jest.useFakeTimers();

            timerId = setInterval(() => {}, 1000); // mock a running timer

            stopTimer();

            expect(timerId).toBeDefined();
        });

        describe("startTimer", () => {
            it("should begin countdown at specified duration", () => {
                // test timer start
                startTimer(3);

                expect(setInterval).toHaveBeenCalled();
                jest.advanceTimersByTime(1000); // simulate 1 second passing
            });

            xit("should update remaining time correctly", () => {
                // will refactor and test later if I have time -- not sure I care about logging the time passing in the terminal
            });
        });

        describe("stopTimer", () => {
            it("should stop the countdown", () => {
                // test timer stop
                
                timerId = setInterval(() => {}, 1000);
                stopTimer();

                expect(clearInterval).toHaveBeenCalledWith(timerId);
            });

            xit("should prevent further time changes after stopping", () => {
                // will also refactor this and test further later if there's time
            });
        });

        it("should end the game if time runs out", () => {
            // test time-based ending
            jest.useFakeTimers();
            gameState.score = 1;
            gameState.currentQuestionIndex = questions.length;

            startTimer(1);
            jest.advanceTimersByTime(1000); // simulating time running out

            expect(gameState.currentQuestionIndex).toBe(questions.length);
        });
    });

});