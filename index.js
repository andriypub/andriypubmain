// Array of words for the player to guess
const words = ["apple", "banana", "orange", "grape", "pineapple", "watermelon"];

// Function to select a random word from the array
function selectWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Function to initialize the game state
function initializeGame() {
    return {
        secretWord: selectWord(),
        attempts: 0,
        guessedLetters: [],
        displayWord: ""
    };
}

// Function to check if the entire word has been guessed
function isWordGuessed(secretWord, displayWord) {
    return displayWord === secretWord;
}

// Function to display the current state of the game
function displayGameState(displayWord, guessedLetters) {
    alert(`Word: ${displayWord}\nGuessed Letters: ${guessedLetters.join(', ')}`);
}

// Function to process a player's guess
function processGuess(gameState) {
    const guess = prompt("Guess a letter:").toLowerCase();
    gameState.attempts++;

    if (gameState.guessedLetters.includes(guess)) {
        alert("You've already guessed that letter. Try again.");
        return processGuess(gameState);
    }

    gameState.guessedLetters.push(guess);

    for (let i = 0; i < gameState.secretWord.length; i++) {
        if (gameState.secretWord[i] === guess) {
            gameState.displayWord = gameState.displayWord.substring(0, i) + guess + gameState.displayWord.substring(i + 1);
        }
    }

    displayGameState(gameState.displayWord, gameState.guessedLetters);

    if (isWordGuessed(gameState.secretWord, gameState.displayWord)) {
        alert(`Congratulations! You guessed the word "${gameState.secretWord}" in ${gameState.attempts} attempts.`);
        return;
    }

    processGuess(gameState);
}

// Function to start the game
function startGame() {
    const gameState = initializeGame();
    gameState.displayWord = "_".repeat(gameState.secretWord.length);
    displayGameState(gameState.displayWord, gameState.guessedLetters);
    processGuess(gameState);
}

// Start the game
startGame();
