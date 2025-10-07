
let range = 100;
let attempts = 5;
let secretNumber = Math.floor(Math.random() * range) + 1;
let remainingAttempts = attempts;

document.getElementById('range-value').innerText = range;
document.getElementById('attempts-left').innerText = `Attempts left: ${remainingAttempts}`;

document.getElementById('submit-btn').addEventListener('click', function() {
    let guess = Number(document.getElementById('guess').value);
    let feedback = document.getElementById('feedback');

    if(guess < 1 || guess > range) {
        feedback.innerText = "Invalid guess!! Out of range.";
    } else {
        remainingAttempts--;
        if(guess === secretNumber) {
            feedback.innerText = "🎉 Correct! You guessed the number!";
            endGame();
        } else if(guess < secretNumber) {
            feedback.innerText = "⬆️ Too low!";
        } else {
            feedback.innerText = "⬇️ Too high!";
        }

        document.getElementById('attempts-left').innerText = `Attempts left: ${remainingAttempts}`;

        if(remainingAttempts === 0 && guess !== secretNumber) {
            feedback.innerText = `Game Over! The secret number was ${secretNumber}`;
            endGame();
        }
    }

    document.getElementById('guess').value = '';
});

function endGame() {
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'inline-block';
}

document.getElementById('restart-btn').addEventListener('click', function() {
    secretNumber = Math.floor(Math.random() * range) + 1;
    remainingAttempts = attempts;
    document.getElementById('feedback').innerText = '';
    document.getElementById('attempts-left').innerText = `Attempts left: ${remainingAttempts}`;
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('restart-btn').style.display = 'none';
});
