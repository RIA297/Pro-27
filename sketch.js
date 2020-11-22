const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,roof,rope;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

  bob1 = new Bob(100,650,40);
	roof = new Roof(width/2,100,width/2,20);
	rope = new Rope(bob1.body,roof.body);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  roof.display();
  rope.display();
}



