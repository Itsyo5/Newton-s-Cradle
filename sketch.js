
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

  marble1 = new Marble(300,350,50);
  marble2 = new Marble(350,350,50);
  marble3 = new Marble(400,350,50);
  marble4 = new Marble(450,350,50);
  marble5 = new Marble(500,350,50);

  ground1 = new Ground(400,100,300,40);
  sling1 = new Suspender(marble1.body,ground1.body,-50*2,0);
  sling2 = new Suspender(marble2.body,ground1.body,-25*2,0);
  sling3 = new Suspender(marble3.body,ground1.body,-0*2,0);
  sling4 = new Suspender(marble4.body,ground1.body,25*2,0);
  sling5 = new Suspender(marble5.body,ground1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  background(100);

  rectMode(CENTER);
  Engine.update(engine);
  marble1.display();
  marble2.display();
  marble3.display();
  marble3.display();
  marble4.display();
  marble5.display();

  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();


  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(marble1.body,marble1.body.position,{x:-100,y:-100}); } 
} 




