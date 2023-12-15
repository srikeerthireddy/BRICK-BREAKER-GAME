const startBtn=document.getElementById("start-button");
startBtn.onclick=() => {
    window.location.href="./instruction.html";
};
function playBackgroundMusic(){
    var backgroundMusic=new Audio('8-bit-halloween-story-166454.mp3');
    backgroundMusic.volume=0.5;
    backgroundMusic.loop=true;
    backgroundMusic.play();
}
document.getElementById("start-button").addEventListener(click,function(){
    
})
playBackgroundMusic();