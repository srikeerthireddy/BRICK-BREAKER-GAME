//board
let board;
let boardWidth=1345;
let boardHeight=640;
let context;
//player
let playerWidth=150;
let playerHeight=20;
let playerVelocityX=10;

let player={
    x:boardWidth/2-playerWidth/2,
    y:boardHeight-playerHeight-5,
    width:playerWidth,
    height:playerHeight,
    velocityX:playerVelocityX,
}
//ball

let ballWidth=20;
let ballHeight=20;
let ballRadius=50;
let ballVelocityX=3;
let ballVelocityY=2;


let ball={
    x:boardWidth/2,
    y:boardHeight/2,
    width:ballWidth,
    height:ballHeight,
    velocityX:ballVelocityX,
    velocityY:ballVelocityY,
    radius:ballRadius/5
}
//blocks
let blockArray=[ ];
let blockWidth=83;
let blockHeight=30;
let blockColumns=15;
let blockRows=6;
let blockMaxRows=10;
let blockCount=0;

//starting block corner top left
let blockX=15;
let blockY=45;

let score=0;
let gameOver=false;
let c=blockColumns;
let r=blockRows;


window.onload=function(){
    board=document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;
    context=board.getContext("2d");

    context.fillStyle="skyblue";
    context.fillRect(player.x,player.y,player.width,player.height);

    requestAnimationFrame(update);
    document.addEventListener("keydown",movePlayer);

    //create blocks
    createBlocks();
}



function update(){
    requestAnimationFrame(update);
    context.clearRect(0,0,board.width,board.height);

    //player
    context.fillStyle="skyblue";
    context.fillRect(player.x,player.y,player.width,player.height);

    // context.fillStyle="white";
    
    // context.fillRect(ball.x,ball.y,ball.width,ball.height);
    context.fillStyle = "white";
    context.beginPath();
    context.arc(ball.x + ball.radius, ball.y + ball.radius, ball.radius, 0, Math.PI * 2);
    context.fill();
    ball.x+=ball.velocityX;
    ball.y+=ball.velocityY;
    

    //bounce ball off walls
    if(ball.y<=0){
        //if ball touches top of canvas
        ball.velocityY*=-1 //reverse direction
    }
    else if(ball.x<=0 || (ball.x+ball.width)>=boardWidth){
        //if ball touches left or right of canvas
        ball.velocityX*=-1;//reverse direction
    }
    else if(ball.y+ball.height>= boardHeight){
        //if ball touches bottom of canvas
        //game over
        const finalScore=score;

        
        localStorage.setItem('finalScore',finalScore);
        window.location.href="./score.html";
        gameOver=true;
    }

    //bounce the ball off player paddle
    if(topCollision(ball,player)||rightCollision(ball,player)){
        ball.velocityY*=-1; //flip y direction up or down
    }
    else if(leftCollision(ball,player)|| rightCollision(ball,player)){
        ball.velocityX*=-1;//flip x direction up or down
    }

    //blocks
    // context.fillStyle="brown";
    
    for(let i=0; i< blockArray.length;i++){
        let block = blockArray[i];
        if(!block.break){
            if(topCollision(ball,block)||bottomCollision(ball,block)){
                block.break=true;
                ball.velocityY*=-1;//flip y direction up or down
                blockCount-=1;
                score +=100;
        
            }
            else if(leftCollision(ball,block)||rightCollision(ball,block)){
                block.break=true;
                ball.velocityX*=-1;//flip x direction left or right
                blockCount-=1;
                score +=100;
    
            }
            context.fillStyle=block.color;
            context.fillRect(block.x,block.y,block.width,block.height);
        }
    }
    //scorce
    context.font="35px Poppins";
    context.fillStyle="white";
    context.fillText("Score: "+score,10,30);
}
function outOfBounds(xPosition){
    return(xPosition < 0 || xPosition + playerWidth > boardWidth);
}
function movePlayer(e){
    if(e.code == "ArrowLeft"){
        // player.x-= player.velocityX;
        let nextPlayerX = player.x - player.velocityX;
        if(!outOfBounds(nextPlayerX)){
            player.x=nextPlayerX;
        }
    } else if(e.code == "ArrowRight"){
        // player.x+=player.velocityX;
        let nextPlayerX=player.x+player.velocityX;
        if(!outOfBounds(nextPlayerX)){
            player.x=nextPlayerX;
        }
    }

    }

function detectCollision(a,b){
    return a.x<b.x + b.width && //a's top left corner doesn't reach b's top right corner
           a.x+a.width > b.x &&//a's top right corner passess b's top left corner
           a.y<b.y + b.height &&//a's top left corner doesn't reach b's bottom left corner
           a.y+a.height>b.y;//a's bottom left corner passes b's top left corner

}   

function topCollision(ball,block){ // a is above b (ball is above block)
    return detectCollision(ball,block) && (block.y+block.height) >= ball.y;
}
function bottomCollision(ball,block){ // a is below b (ball is below block)
    return detectCollision(ball,block) && (ball.y+ball.height) >= block.y;
}
function leftCollision(ball,block){ // a is left of b (ball is left of block)
    return detectCollision(ball,block) && (ball.x+ball.width) >= block.x;
}
function rightCollision(ball,block){ // a is right of b (ball is right of block)
    return detectCollision(ball,block) && (block.x+block.width) >= ball.x;
}



function createBlocks(){
    blockArray = []; //clear blockArray
    let color="red";
    for (let c=0; c< blockColumns; c++){
        for(let r=0; r<blockRows ; r++){
          color=(color=='red')? 'brown':'red';
            let block={
                x: blockX + c*blockWidth + c*5,
                y: blockY +r*blockHeight + r*5,
                width: blockWidth,
                height:blockHeight,
                break:false,
                color: color
               
            }
            blockArray.push(block);
            
        }
        color=(color==='red')?'brown':'red';
       
    blockCount = blockArray.length;
   
}
}

    
