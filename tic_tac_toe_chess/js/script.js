let playerOneScore = 0;
let playerTwoScore = 0;
let turns = 0;
let playerOne = '♙';
let playerTwo = '♟';
let playerOneArray = [];
let playerTwoArray = [];

const victorySquares = [
	['square_1', 'square_2', 'square_3'],
	['square_1', 'square_5', 'square_9'],
	['square_1', 'square_4', 'square_7'],
	['square_2', 'square_5', 'square_8'],
	['square_3', 'square_6', 'square_9'],
	['square_3', 'square_5', 'square_7'],
	['square_4', 'square_5', 'square_6'],
	['square_7', 'square_8', 'square_9']
];

//update board on clicks
const squareClicked = document.querySelector('.board');
const pOneScore = document.querySelector('.scoreOne');
const pTwoScore = document.querySelector('.scoreTwo');
let clearSpot = document.querySelectorAll('.square');

squareClicked.addEventListener('click', updateClick);

function updateClick(evt) {
	let clickedSquare = document.getElementById(evt.target.id);
	if (turns % 2 === 0) {
		clickedSquare.innerText = playerOne;
		clickedSquare.style.pointerEvents = 'none';
		playerOneArray.push(clickedSquare.id);
		turns++;
		if (checkWinner(playerOneArray) === 1) {
			playerOneScore++;
			pOneScore.innerText = playerOneScore;
			resetBoard();
		}
	} else if (turns % 2 === 1) {
		clickedSquare.innerText = playerTwo;
		clickedSquare.style.pointerEvents = 'none';
		playerTwoArray.push(clickedSquare.id);
		turns++;
		if (checkWinner(playerTwoArray) === 1) {
			playerTwoScore++;
			pTwoScore.innerText = playerTwoScore;
			resetBoard();
		}
	}
	if (turns >= 9) {
		resetBoard();
	}
}

// have check for winners
function checkWinner(playerArr) {
	let win = 0;
	for (let i = 0; i < victorySquares.length; i++) {
		let count = 0;
		for (let j = 0; j < victorySquares[i].length; j++) {
			if (playerArr.indexOf(victorySquares[i][j]) > -1) {
				count++;
			}
			if (count === 3) {
				win++;
			}
		}
	}
	if (win > 0) {
		return 1;
	}
}

// reset the board

function resetBoard() {
	turns = 0;
	playerOneArray = [];
	playerTwoArray = [];
	squareClicked.innerHTML = `<div class="square" id="square_1"></div>
			<div class="square" id="square_2"></div>
			<div class="square" id="square_3"></div>
			<div class="square" id="square_4"></div>
			<div class="square" id="square_5"></div>
			<div class="square" id="square_6"></div>
			<div class="square" id="square_7"></div>
			<div class="square" id="square_8"></div>
			<div class="square" id="square_9"></div>`;
}
