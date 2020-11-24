const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, box;
var box2;


function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

   box=new Box(100,200,50,50);
   box2=new Box(130,100,50,100);
   ground=new Ground(200,390,400,10);



    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(myEngine);
    ground.display();
    box.display();
    box2.display();


}