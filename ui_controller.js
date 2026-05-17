const boardDiv = document.getElementById("board");

function renderBoard(){

    boardDiv.innerHTML = "";

    for(let row = 0; row < ROWS; row++){

        for(let col = 0; col < COLS; col++){

            let cellData = board[row][col];

            let cell = document.createElement("div");

            cell.classList.add("cell");

            if(cellData.owner){

                cell.classList.add(cellData.owner);
            }

            if(cellData.count > 0){

                cell.innerText = cellData.count;
            }

            cell.addEventListener("click",function(){

                placeOrb(row,col);
            });

            boardDiv.appendChild(cell);
        }
    }

    document.getElementById("currentPlayer")
    .innerText =
    "Current Player : " +
    players[currentPlayer].toUpperCase();

    renderMoveHistory();
}

function renderMoveHistory(){

    let historyList =
    document.getElementById("moveHistory");

    historyList.innerHTML = "";

    for(

        let i = moveHistory.length - 1;

        i >= 0;

        i--

    ){

        let li =
        document.createElement("li");

        li.innerText =
        moveHistory[i];

        historyList.appendChild(li);
    }
}

renderBoard();
