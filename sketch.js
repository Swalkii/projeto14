var bow , arrow,  background, balãoazul, balãoverde, balãorosa, balãovermelho;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  
  bow.y = World.mouseY
  
   
  if (keyDown("space")) {
    createArrow();
    
  }
  
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 80 == 0) {
   switch(select_balloon){
    case 1: redBalloon();
    break;
    case 2: blueBalloon();
    break; 
    case 3: greenBalloon();
    break;
    case 4: pinkBalloon();
break;
default: break;

  }

}

  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var balãovermelho = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balãovermelho.addImage(red_balloonImage);
  balãovermelho.velocityX = 3;
  balãovermelho.lifetime = 150;
  balãovermelho.scale = 0.1;

}

function blueBalloon() {
  var balãoazul = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balãoazul.addImage(blue_balloonImage);
  balãoazul.velocityX = 3;
  balãoazul.lifetime = 150;
  balãoazul.scale = 0.1;
}

function greenBalloon() {
  var balãoverde = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balãoverde.addImage(green_balloonImage);
  balãoverde.velocityX = 3;
  balãoverde.lifetime = 150;
  balãoverde.scale = 0.1;
}

function pinkBalloon() {
  var balãorosa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  balãorosa.addImage(pink_balloonImage);
  balãorosa.velocityX = 3;
  balãorosa.lifetime = 150;
  balãorosa.scale = 0.1;
}
