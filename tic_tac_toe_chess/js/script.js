let userOneScore = 0;
let usertwoScore = 0;
let turns = 0;
let playerOne = '♙';
let playerTwo = '♟';
let playerOneArray = [];
let playerTwoArray = [];

const victorySquares = [
	[1, 2, 3],
	[1, 5, 9],
	[1, 4, 7],
	[2, 5, 8],
	[3, 6, 9],
	[3, 5, 7],
	[4, 5, 6],
	[7, 8, 9]
];

//update board on clicks

const squareClicked = document.querySelector('.board');

squareClicked.addEventListener('click', updateClick);

function updateClick(evt) {
	let clickedSquare = document.getElementById(evt.target.id);
	if (turns % 2 === 0) {
		clickedSquare.innerText = playerOne;
		clickedSquare.style.pointerEvents = 'none';

		turns++;
	} else if (turns % 2 === 1) {
		clickedSquare.innerText = playerTwo;
		clickedSquare.style.pointerEvents = 'none';
		turns++;
	}
}

// have check for winners
function checkWinner() {}
