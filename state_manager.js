const ROWS = 6;

const COLS = 12;

const players = ["red","blue","green","yellow"];

let currentPlayer = 0;

let board = [];

let gamePaused = false;

let gameOver = false;

let bombMode = false;

let gameTime = 300;

let turnTime = 15;

let moveNumber = 1;

let moveHistory = [];

function initializeBoard(){

    board = [];

    for(let row=0; row<ROWS; row++){

        let currentRow = [];

        for(let col=0; col<COLS; col++){

            currentRow.push({

                count:0,

                owner:null
            });
        }

        board.push(currentRow);
    }
}

initializeBoard();
