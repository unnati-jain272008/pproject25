const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinObj2, paperObject,groundObject,plasticBottleObj	
var world;


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	dustbinObj2=new Dustbin2(950,650);
    plasticBottleObj=new PlasticBottle(100,450,70);


	//Create a Ground
	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  dustbinObj2.display();
  plasticBottleObj.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-135});

    	}
	 if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(plasticBottleObj.body,plasticBottleObj.body.position,{x:140,y:-155});

	}
}









