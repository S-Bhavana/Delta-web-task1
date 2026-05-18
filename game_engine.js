function placeOrb(row,col)
{

    let cell = board[row][col];

    let player = players[currentPlayer];

    if(

        cell.owner !== null &&
        cell.owner !== player

    ){

        return;
    }

    cell.count++;

    cell.owner = player;

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

    currentPlayer++;

    currentPlayer %= players.length;

    renderBoard();
}
