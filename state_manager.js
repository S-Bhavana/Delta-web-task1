const ROWS = 6;

const COLS = 12;

const players = ["red","blue"];

let currentPlayer = 0;

let board = [];

function initializeBoard(){

    board = [];

    for(let row = 0; row < ROWS; row++){

        let currentRow = [];

        for(let col = 0; col < COLS; col++){

            currentRow.push({

                count:0,

                owner:null
            });
        }

        board.push(currentRow);
    }
}

initializeBoard();
