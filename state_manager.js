const ROWS = 6;

const COLS = 12;

const players = [

    "red",
    "blue",
    "green",
    "yellow"
];

let currentPlayer = 0;

let board = [];

let gamePaused = false;

let gameOver = false;

let gameTime = 300;

let turnTime = 15;

let moveNumber = 1;

let moveHistory = [];

let scores = {

    red : 0,

    blue : 0,

    green : 0,

    yellow : 0
};

let bombMode = false;

function initializeBoard(){

    board = [];

    for(let row = 0; row < ROWS; row++){

        let currentRow = [];

        for(let col = 0; col < COLS; col++){

            currentRow.push({

                count : 0,

                owner : null
            });
        }

        board.push(currentRow);
    }
}

initializeBoard();

const placeSound = new Audio("sounds/place.mp3");

const explodeSound = new Audio("sounds/explode.mp3");

const winSound = new Audio("sounds/win.mp3");
