var tankBody, tankHead, cannon, target, randX, randY, score, nukeIMG,tankIMG;

function preload(){
  nukeIMG = loadImage("nuke.png");
  tankIMG = loadImage("tank.png");
}

function setup() {
  createCanvas(942, 202);
  
  score = 0;
  
  randX = random(300,900);
  randY = random(50,150);
  
  tankBody = createSprite(100,100,100,100);
  tankBody.shapeColor = "green";
  tankBody.addImage(tankIMG);
  tankBody.scale = 0.6;
  tankHead = createSprite(140,100,100,25);
  tankHead.shapeColor = "green";
  tankHead.visible = false;
  
  target = createSprite(0,0,50,50);
  target.shapeColor = "red";
  
  cannon = createSprite(tankHead.x,tankHead.y,25,25);
  cannon.shapeColor = "red";
  cannon.scale = 0.15;
  cannon.addImage(nukeIMG);
}
  
function draw() {
  background(250);
  
  if(cannon.x === tankHead.x){
  cannon.visible = false;
  }else{
  cannon.visible = true;         
  }
  
  if(cannon.isTouching(tankHead) && mouseX > 200){
  tankHead.pointTo(mouseX,mouseY);
  cannon.pointTo(mouseX,mouseY);
  }
  
  target.x = randX;
  target.y = randY;
  
  if(mouseIsPressed){
  cannon.setSpeedAndDirection(9);
  }
  
  if(cannon.isTouching(target)){
  cannon.x = tankHead.x;
  cannon.y = tankHead.y;
  cannon.setSpeedAndDirection(0);
  randX = random(300,900);
  randY = random(50,150);
  score++;
  }
  
  if(cannon.x > 942 || cannon.y > 202 || cannon.x < 0 || cannon.y < 0){
  cannon.x = tankHead.x;
  cannon.y = tankHead.y;
  cannon.setSpeedAndDirection(0);
  randX = random(300,900);
  randY = random(50,150);
  score--;
  }
  
  fill("black");
  textSize(75);
  text(score,470,130);
  
  drawSprites();
}