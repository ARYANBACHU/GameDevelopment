
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	var ground_options={
		isStatic:true
	}

	ground = Bodies.rectangle(width/2, 670, width, 20, ground_options);
  	World.add(world, ground);

	left = Bodies.rectangle(800, 600, 20, 120, ground_options);
  	World.add(world, left);

	right = Bodies.rectangle(1000, 600, 20, 120, ground_options);
  	World.add(world, right);

	ball = Bodies.circle(100,20,40,ball_options);
	World.add(world, ball);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(ground.position.x, ground.position.y, width, 20);
  rect(left.position.x, left.position.y, 20, 120);
  rect(right.position.x, right.position.y, 20, 120);
  ellipse(ball.position.x,ball.position.y,40)

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:4,y:0},{x:300,y:-300});
	}

}



