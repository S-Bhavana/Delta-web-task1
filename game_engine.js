function getCapacity(row,col){

    let capacity = 0;

    if(row > 0){

        capacity++;
    }

    if(row < ROWS - 1){

        capacity++;
    }

    if(col > 0){

        capacity++;
    }

    if(col < COLS - 1){

        capacity++;
    }

    return capacity;
}

function explode(row,col,player){

    explodeSound.play();

    let directions = [

        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ];

    /* Empty current cell */

    board[row][col].count = 0;

    board[row][col].owner = null;

    /* Spread to neighbours */

    for(let i = 0; i < directions.length; i++){

        let newRow = row + directions[i][0];

        let newCol = col + directions[i][1];

        if(

            newRow >= 0 &&
            newRow < ROWS &&
            newCol >= 0 &&
            newCol < COLS

        ){

            board[newRow][newCol].count++;

            board[newRow][newCol].owner = player;

            /* Chain reaction */

            if(

                board[newRow][newCol].count >=
                getCapacity(newRow,newCol)

            ){

                explode(newRow,newCol,player);
            }
        }
    }
}

function activateBomb(row,col){

    for(

        let r = row - 1;

        r <= row + 1;

        r++

    ){

        for(

            let c = col - 1;

            c <= col + 1;

            c++

        ){

            if(

                r >= 0 &&
                r < ROWS &&
                c >= 0 &&
                c < COLS

            ){

                board[r][c].count = 0;

                board[r][c].owner = null;
            }
        }
    }
}

function placeOrb(row,col){

    if(bombMode){

        activateBomb(row,col);

        bombMode = false;

        renderBoard();

        return;
    }

    if(gamePaused || gameOver){

        return;
    }

    let player = players[currentPlayer];

    let cell = board[row][col];

    if(

        cell.owner !== null &&
        cell.owner !== player

    ){

        return;
    }

    cell.count++;

    cell.owner = player;

    placeSound.play();

    /* SCORE UPDATE */

    scores[player] = scores[player] + 1;

    /* MOVE HISTORY */

    moveHistory.push(

        "Move " +
        moveNumber +
        " : " +
        player.toUpperCase() +
        " -> (" +
        row +
        "," +
        col +
        ")"
    );

    moveNumber++;

    if(

        cell.count >= getCapacity(row,col)

    ){

        explode(row,col,player);
    }

    currentPlayer++;

    currentPlayer %= players.length;

    renderBoard();

    checkWinner();
} 
function checkWinner(){

    let activePlayers = [];

    for(let row = 0; row < ROWS; row++){

        for(let col = 0; col < COLS; col++){

            let owner = board[row][col].owner;

            if(

                owner !== null &&

                !activePlayers.includes(owner)

            ){

                activePlayers.push(owner);
            }
        }
    }

    if(moveNumber <= players.length){

        return;
    }

    if(activePlayers.length === 1){

        gameOver = true;

        winSound.play();

        alert(

            activePlayers[0].toUpperCase() +

            " WINS"
        );
    }

    if(gameTime <= 0){

        gameOver = true;

        alert("TIME OVER");
    }
}
