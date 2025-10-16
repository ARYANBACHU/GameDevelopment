var road, roadImg
var mouse, mouseImg;
var catGroup, cat1, cat2, cat3, cat4
var gameState = "play"


function preload(){
    roadImg = loadImage("road.png")
    mouseImg = loadImage("mouse.png")

    cat1 = loadImage("cat1.png")
    cat2 = loadImage("cat2.png")
    cat3 = loadImage("cat3.png")
    cat4 = loadImage("cat4.png")
}

function setup() {
    createCanvas(400,400);
    road = createSprite(200,200,40,40)
    road.addImage(roadImg)
    road.scale = 2.5
    road.velocityY = 3
    
    mouse = createSprite(200,350,40,40)
    mouse.addImage(mouseImg)
    mouse.scale = 0.03

    catGroup = new Group()
}

function draw() {
    background("lightblue")
  if(gameState==="play"){  
    if(road.y>550){
        road.y = 250
    }
    
    if(keyDown("Left_Arrow")){
        mouse.x = mouse.x-5;
      }
    if(keyDown("Right_Arrow")){
        mouse.x = mouse.x+5;
      }
    spawnCats();
    
    if(catGroup.isTouching(mouse)){
        gameState = "end"
      }
      
      mouse.setCollider("rectangle",1,1)
  }
      drawSprites();
      
      if(gameState==="end"){
        text("Gameover",200,200)
        catGroup.setVelocityYEach = 0
        road.velocityY = 0
      }
}

function spawnCats() {
    if(frameCount % 60 === 0){
        var cat = createSprite(Math.round(random(30,370)),0,20,20);
        cat.velocityY = 6;
        cat.scale = 0.5
        
        var rand = Math.round(random(1,4));
        switch(rand) {
            case 1: cat.addImage(cat1);
              break;
            case 2: cat.addImage(cat2);
              break;
            case 3: cat.addImage(cat3);
              break;
            case 4: cat.addImage(cat4);
              break;
              default: break;
    }
        cat.lifetime = 300
        catGroup.add(cat)
}
}