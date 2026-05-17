document
.getElementById("pauseBtn")
.addEventListener("click",function(){

    gamePaused = true;
});

document
.getElementById("resumeBtn")
.addEventListener("click",function(){

    gamePaused = false;
});

document
.getElementById("restartBtn")
.addEventListener("click",function(){

    currentPlayer = 0;

    gamePaused = false;

    gameOver = false;

    gameTime = 300;

    turnTime = 15;

    moveNumber = 1;

    moveHistory = [];

    initializeBoard();

    renderBoard();
});

setInterval(function(){

    if(gamePaused || gameOver){

        return;
    }

    gameTime--;

    turnTime--;

    if(turnTime <= 0){

        currentPlayer++;

        currentPlayer %= players.length;

        turnTime = 15;
    }

    checkWinner();

    renderBoard();

},1000);
