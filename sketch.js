var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var orangeLeaf, orangeLeaf1;
var redLeaf, redLeaf1;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeaf1 = loadImage("orangeLeaf.png");
  
  
}

function setup(){
  
  createCanvas(500,500);


  // Moving background
  garden=createSprite(250,250);
  garden.scale = 1.15
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,360,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  
}


function draw() {
  background(180);
  rabbit.x = mouseX;
  var select_sprites = Math.round(random(1, 3));
  if(frameCount%140 == 0){
  if(select_sprites == 1) {
      
  }
  }
  if(frameCount%140 == 0){
    if(select_sprites == 2){
    spawnApple();
  }
  }
  if(frameCount%140 == 0){
  if(select_sprites == 3) {
    spawnOrangeLeaf();
  }
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function spawnApple() {
  apple = createSprite(random (50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.velocityY = 3;
  rabbit.depth = apple.depth;
  rabbit.depth = apple.depth + 4;
}
function spawnOrangeLeaf() {
  orangeLeaf = createSprite(random (50, 350), 40, 10,10);
  orangeLeaf.addImage(orangeLeaf1);
  orangeLeaf.scale = 0.06;
  orangeLeaf.velocityY = 3;  
}  


  
 