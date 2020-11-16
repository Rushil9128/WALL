
//variables
var bullet,wall;
var speed,weight;
var thickness;
var sound =  new Audio("8bit_explosion.mp3");
var quality = "unknown";
function setup() {
  createCanvas(800,400);
  bullet = createSprite(100, 200, 50, 50);
  wall = createSprite(700,200,40,height/2);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  sound.play();
}

function draw() {
  background(0); 
  textSize(18); 
  text("QUALITY OF WALL: "+ quality,140,20);
  text("PRESS F5 TO RESTART",410,20);
  if(isTouching(wall,bullet)){
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed *speed/(thickness*thickness*thickness);
    if(deformation>10){
      wall.shapeColor = color(255,0,0);
      quality = "BAD"
      quality.shapeColor= color(255,0,0);
    }
    if (deformation<10){
      wall.shapeColor=color(0,255,0);
      quality = "GOOD";
    }
  }
  drawSprites();
}
function isTouching(obj1,obj2){
    if(obj1.x-obj2.x<obj1.width/2+obj2.width/2){
      return true;
    }
    else{
      return false;
    }
}