let userOneScore = 0;
let usertwoScore = 0;
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

squareClicked.addEventListener('click', updateClick);

function updateClick(evt) {
	let clickedSquare = document.getElementById(evt.target.id);
	if (turns % 2 === 0) {
		clickedSquare.innerText = playerOne;
		clickedSquare.style.pointerEvents = 'none';
		playerOneArray.push(clickedSquare.id);
		checkWinner(playerOneArray);
		turns++;
	} else if (turns % 2 === 1) {
		clickedSquare.innerText = playerTwo;
		clickedSquare.style.pointerEvents = 'none';
		playerTwoArray.push(clickedSquare.id);
		checkWinner(playerTwoArray);

		turns++;
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
	}
}
