let min = 1;
let max = 10;
let guessesLeft = 3;
let winningNumber = getWinningNumber();

let game;
let minNumber;
let maxNumber;
let guessBtn;
let guessInput;
let guessMessage;

function findElements() {
	game = document.querySelector('#game');
	minNumber = document.querySelector('.min-num');
	maxNumber = document.querySelector('.max-num');
	guessBtn = document.querySelector('#guess-btn');
	guessInput = document.querySelector('#guess-input');
	guessMessage = document.querySelector('.message');
}

function getWinningNumber() {
	return Math.floor(Math.random() * 10);
}

function setMessage(msg, color) {
	guessMessage.style.color = color;
	guessMessage.textContent = msg;
}

function onClick() {
	let guess = parseInt(guessInput.value);
	if(isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	} 
	else if (guess === winningNumber) {
		gameOver(true, `${winningNumber} is correct. You are win!`)
}
	else {
		guessesLeft -= 1;

		if (guessesLeft === 0) {
			gameOver(false, `Game is over, you lost. the correct nimber is ${winningNumber} `)
		}
		else {
			setMessage(` ${guess} is not correct. ${guessesLeft} guesses left`, 'red');
		}
	}
}

function gameOver(won, msg) {
	let color;
		won === true ? color = 'green' : color = 'red';
		guessInput.disabled = true;
		guessInput.style.borderColor = color;
		setMessage(msg, color);
		guessBtn.value = 'Play Again';
		guessBtn.className += 'play-again';
}

function restartGame(event) {
	const { target } = event;
	if(target.className === 'play-again') {
		window.location.reload();
	}

}

function subscribe() {
	guessBtn.addEventListener('click', onClick);
	game.addEventListener('mousedown', restartGame);
}

function init() {
	findElements();
	subscribe();
}

window.onload = init;