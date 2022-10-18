let score = localStorage.getItem("score");
var scoreBoard = document.getElementById("score-board");
var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (e) => {
    location.href = "./game.html";
};