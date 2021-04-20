const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var sbox1,sbox2,sbox3,sbox4,sbox5;
var rope;
var ball;

function setup() {
  createCanvas(1200,630);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600);

  box1 = new Box(600,100);
  box2 = new Box(600,100);
  box3 = new Box(600,100);
  box4 = new Box(600,100);
  box5 = new Box(600,100);
  box6 = new Box(600,100);
  box7 = new Box(600,100);
  box8 = new Box(600,100);

  sbox1 = new Box(680,100);
  sbox2 = new Box(680,100);
  sbox3 = new Box(680,100);
  sbox4 = new Box(680,100);
  sbox5 = new Box(680,100);

  ball = new Ball(400,500);

  rope = new Rope(ball.body,{x:500,y:100});

  Engine.run(engine);
}

function draw() {
  background(0);  

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  sbox1.display();
  sbox2.display();
  sbox3.display();
  sbox4.display();
  sbox5.display();

  ball.display();

  rope.display();
  
}

function mouseDragged(){
   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}