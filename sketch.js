var path,rabbit,sword,melon,carrot;
var pathImg,rabbitImg,melonImgswordImg,carrotImg;
var treasureCollection = 0;
var swordGroup,melonGroup,carrotGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  rabbitImg = loadImage("Rabbit-01.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  melonImg =  loadImage("melon.png");
  carrotImg = loadImage("carrot.png")
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
rabbit = createSprite(70,580,20,20);
rabbit.addAnimation(rabbitImg);

rabbit.scale=0.08;

melonGroup=new Group();
swordGroup=new Group();
carrotGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }

    createSword();

    if (carrotG.isTouching(rabbit)) {
       carrotG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (melonG.isTouching(rabbit)) {
      melonG.destroyEach();
      treasureCollection=treasureCollection+50;
      
    }

      
    }else
      if(swordGroup.isTouching(rabbit)) {
      rabbit.addAnimation(endImg)
        gameState = END
    }
    

     else if(gameState===END){
  
         rabbit.addAnnimation(endImg);
          rabbit.x = 200;
          rabbit.y = 300;
         swordGroup.destroyEach();
           
            melonG.destroyEach();
           treasureCollection=0
            }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
  

}

function createMelon() {
  if (World.frameCount % 200 == 0) {
  var melon = createSprite(Math.round(random(50, 350),40, 10, 10));
  melon.addImage(melonImg);
  melon.scale=0.12;
  melon.velocityY = 3;
  melon.lifetime = 150;
  melonG.add(melon);
  }
}



function createCarrot() {
  if (World.frameCount % 410 == 0) {
  var carrot = createSprite(Math.round(random(50, 350),40, 10, 10));
  carrot.addImage(carrotImg);
  carrot.scale=0.13;
  carrot.velocityY = 3;
  carrot.lifetime = 150;
  carrotG.add(carrot);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
//treasure hunt