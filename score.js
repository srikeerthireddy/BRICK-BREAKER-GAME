const playAgainBtn=document.getElementById("playAgain-button");
playAgainBtn.onclick=()=>{
    window.location.href="./game.html";
};
const finalScore=localStorage.getItem('finalScore');

const finalScoreDisplay=document.getElementById('playerScore');
finalScoreDisplay.textContent=finalScore;


var playerName = localStorage.getItem("playerName");

// Display the name on the score page
document.getElementById("playerName").textContent = playerName;  


