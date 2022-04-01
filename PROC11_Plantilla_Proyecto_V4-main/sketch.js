var sea;
var sea_image;
var ship;
var ship_image;
function preload(){
sea_image=loadImage("sea.png");
ship_image=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(sea_image)
  sea.velocityX=-5
  ship=createSprite(130,260,30,30);
  ship.addAnimation("barco",ship_image);
  ship.scale=0.3;

}

function draw() {
  background("blue");
  if (sea.x < 0){sea.x=sea.width/9}
drawSprites();
}