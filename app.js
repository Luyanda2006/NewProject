let currentScore = 0;
let highScore = localStorage.getItem('arcadeHighScore') || 0;
let clickPower = 1;
let timeLeft = 10;
let timerInterval = null;
let gameStarted = false;

const scoreDisplay = document.getElementById('scoreDisplay');
const highScoreDisplay = document.getElementById('highScoreDisplay');
const timerDisplay = document.getElementById('timerDisplay');
const multiplierDisplay = document.getElementById('multiplierDisplay');

const clickButton = document.getElementById('actionButton');
const resetButton = document.getElementById('resetButton');
const buyX2Button = document.getElementById('buyX2');
const buyX5Button = document.getElementById('buyX5');

highScoreDisplay.textContent = `High Score: ${highScore}`;

function startTimer() {
    gameStarted = true;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timerInterval);
    clickButton.disabled = true;
    buyX2Button.disabled = true;
    buyX5Button.disabled = true;
    timerDisplay.textContent = "Game Over!";

    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreDisplay.textContent = `High Score: ${highScore}`;
        localStorage.setItem('arcadeHighScore', highScore);
    }
}

// Click Button Action
clickButton.addEventListener('click', () => {
    if (!gameStarted) {
        startTimer();
    }

    currentScore += clickPower;
    scoreDisplay.textContent = `Score: ${currentScore}`;
});

buyX2Button.addEventListener('click', () => {
    if (currentScore >= 15) {
        currentScore -= 15;
        clickPower += 2;
        scoreDisplay.textContent = `Score: ${currentScore}`;
        multiplierDisplay.textContent = `Current Power: +${clickPower} per click`;
    } else {
        alert("Not enough points!");
    }
});

buyX5Button.addEventListener('click', () => {
    if (currentScore >= 40) {
        currentScore -= 40;
        clickPower += 5;
        scoreDisplay.textContent = `Score: ${currentScore}`;
        multiplierDisplay.textContent = `Current Power: +${clickPower} per click`;
    } else {
        alert("Not enough points!");
    }
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    currentScore = 0;
    clickPower = 1;
    timeLeft = 10;
    gameStarted = false;

    scoreDisplay.textContent = `Score: 0`;
    timerDisplay.textContent = `Time Left: 10s`;
    multiplierDisplay.textContent = `Current Power: +1 per click`;

    clickButton.disabled = false;
    buyX2Button.disabled = false;
    buyX5Button.disabled = false;
});

