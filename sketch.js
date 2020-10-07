const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

     ground = new Ground(600,height,1200,20);
     platform = new Ground(150, 305, 300, 170);
     pig1 = new Pig(810, 350);
     pig3 = new Pig(810, 220);
     bird = new Bird(100,100);
     slingShot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
     ground.display();
     pig1.display();
     pig3.display();
     bird.display();
     platform.display();
     slingShot.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingShot.fly()

}

