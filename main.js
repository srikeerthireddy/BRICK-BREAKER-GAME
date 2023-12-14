const submitBtn=document.getElementById("submit-button");
submitBtn.onclick=()=>{
    window.location.href= "./game.html";
}
document.getElementById("submit-button").addEventListener("click",function(){
    var name= document.getElementById("input1").value;

    localStorage.setItem("playerName",name);
    
});