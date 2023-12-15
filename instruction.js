const playBtn=document.getElementById("play-button");
playBtn.onclick=()=>{
    window.location.href="./main.html";
    // console.log(playBtn);
};
var backgroundSound =new Audio("8-bit-halloween-story-166454.mp3.")
backgroundSound.play()
backgroundSound.loop()