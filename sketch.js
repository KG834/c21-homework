
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 600, 800, 50);
	groundObj = new Ground(600, 515, 20, 120);
	leftSide = new Ground(400,515,20,120);
	
	//Create the Bodies Here.
	
	var ball_options={
		isStatic : false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  groundObj.show();
  leftSide.show();
	ellipse(ball.position.x,ball.position.y,20);
	
	
  Engine.update(engine);
  drawSprites();
 
}

class Ground {
	constructor(x, y, w, h) {
		var options = {
			isStatic:true
		};
		this.body = Bodies.rectangle(x, y, w, h, options);
		this.w = w;
		this.h = h;
		this.x = x;
		this.y = y;
		World.add(world, this.body)
	}
	show() {
		var pos = this.body.position;
		push();
		rectMode(CENTER);
		rect(pos.x, pos.y, this.w, this.h)
		pop()
	}
}



function keyPressed() {
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.position, {x:5.05, y:-60.5})
	
		 }
}