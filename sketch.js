const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,500);

	engine = Engine.create();
	world = engine.world;

throwe = new Ball(100,50);
grounda = new ground(400,475,800,50);
chain = new SlingShot(throwe.body,{x:200, y:200});

Engine.run(engine);
}

function draw() {
  background(255,255,255);
  
  Engine.update(engine);

  throwe.display();
  grounda.display();
  chain.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(throwe.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
