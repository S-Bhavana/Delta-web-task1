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

    initializeBoard();

    currentPlayer = 0;

    gameOver = false;

    moveHistory = [];

    moveNumber = 1;

    renderBoard();
});

document
.getElementById("bombBtn")
.addEventListener("click",function(){

    bombMode = true;

    alert("Bomb Activated! Click a cell.");
});
