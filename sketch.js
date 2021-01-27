var bg,bgImg;
var bob, bobImg;
var eyebob,eyebobImg;
var bubblebass,bubblebassImg;
var dirtybubble,dirtybubbleImg;
var dutchman,dutchmanImg;
var gameover, gameoverImg;
var jelly,jellyImg;
var karen,karenImg;
var logo, logoImg;
var plankton, planktonImg;
var reset, resetImg;
var squid, squidImg;
var start,startImg;
var gameState=PLAY;
var PLAY=1;
var END=0;
var score=0;


function preload (){
  bgImg=loadImage("background.png");
  eyebobImg=loadImage("bob4.png");
  bobImg=loadImage("bob3.png");
  bubblebassImg=loadImage("bubblebass.png");
  dirtybubbleImg=loadImage("dirtybubble.png");
  dutchmanImg=loadImage("dutchman.jpg");
  gameoverImg=loadImage("gameover.jpeg");
  jellyImg=loadImage("jellyfish.jpg");
  karenImg=loadImage("karen.png");
  logoImg=loadImage("logo.png");
  planktonImg=loadAnimation("plankton1.png","plankton2.png");
  resetImg=loadImage("reset.png");
  squidImg=loadImage("squidward.png");
  startImg=loadImage("start.png");
}

function setup(){
createCanvas(1200,700);
bg=createSprite(0,250,1100,700);
bg.addImage(bgImg);
bg.x=bg.width/2;
bgvelocityX=-3;

bob=createSprite(150,450,30,60);
bob.addImage("RUNNING",bobImg);
bob.scale=0.5;

ground=createSprite(1150,500,1200,700);
ground.x=ground.width/2
ground.velocityX=-3;
ground.visible=true;

start=createSprite(600,450,60,60);
start.addImage(startImg);
start.scale=0.4;

logo=createSprite(600,250,80,80);
logo.addImage(logoImg);
logo.scale=0.3;

gameover=createSprite(600,250,40,40);
gameover.addImage(gameoverImg)
gameover.scale=0.2;
gameover.visible=false;

reset=createSprite(600,450,60,60);
reset.addImage(resetImg);
reset.scale=0.3;
reset.visible=false;
}

function draw(){
  if (mousePressedOver(start)){
    gameState=PLAY;
    start.visible=false;
    logo.visible=false;
    bob.velocityY=-3
  }
  if(bg.x<0){  
  bg.x=bg.width/2;
  }
  bg.velocityX=-3;
if (gameState===PLAY){


  if (keyDown("space")){
bob.velocityY=-11
}
bob.velocityY=bob.velocityY+1.5;
}
else if (gameState===END){
  gameover.visible=true;
  reset.visible=true;
  bob.velocityX=0;
  bob.velocityY=0;
  ground.velocityX=0;
  bob.x=150;
  bob.y=450;
}
bob.collide(ground);
drawSprites();
}
