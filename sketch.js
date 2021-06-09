const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    

    plane = new Plane(350,200,50,50)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200,200,50)
    stone= new Stone(300,200,50,50)

   

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();

 
}