const submitBtn=document.getElementById("submit-button");
var userName =document.getElementById("input1");
var nickName=document.getElementById("input2");
submitBtn.onclick=()=>{
    console.log("start");
    if((userName.value!="" )&& (nickName.value!="")){
        window.location.href= "./game.html";
   }else{
       alert("Please enter valid details")
   }
    
}
document.getElementById("submit-button").addEventListener("click",function(){
    var name= document.getElementById("input1").value;

    localStorage.setItem("playerName",name);
    
});