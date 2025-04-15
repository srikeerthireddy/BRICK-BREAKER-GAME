let videoElem = document.getElementById('123');
if (videoElem) {
  let playAttempt = setInterval(() => {
    document.getElementById('123').play()
      .then(() => {
        clearInterval(playAttempt);
      })
      .catch(error => { });
  }, 3000);
}
document.body.addEventListener('click', () => {
  document.getElementById('123').play()
})


const startBtn=document.getElementById("start-button");

startBtn.onclick=()=>{    
  window.location.href="./instruction.html";
}
