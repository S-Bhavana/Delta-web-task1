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

            cell.innerText = cellData.count;

            cell.addEventListener("click",function(){

                placeOrb(row,col);
            });

            boardDiv.appendChild(cell);
        }
    }
}

renderBoard();
