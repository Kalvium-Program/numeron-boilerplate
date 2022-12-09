// Iteration 5: Store the player score and display it on the game over screen
let playAgain=document.getElementById('play-again-button')
let scoreBoard=document.getElementById('score-board')
playAgain.onclick=()=>{
    window.location='game.html'
}
scoreBoard.innerHTML=sessionStorage.getItem("score");