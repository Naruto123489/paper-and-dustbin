
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj1,dustbinObj2,dustbinObj3,groundObject	
var world;
var ball

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(800,650,1600,15);
	dustbinObj1=new Ground(1200,550,30,180);
	dustbinObj2=new Ground(800,550,30,180)
	dustbinObj3=new Ground(1000,640,430,30)
    ball=new Ball(100,620,50,50);
	Engine.run(engine);
  
}


function draw() {





  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj1.display();
  dustbinObj2.display();
  dustbinObj3.display();
  ball.display();
}

