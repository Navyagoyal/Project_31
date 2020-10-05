const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine, world;
var groundObj,division1,division2,diviaion3,division4,division5,division6,division6,division7,division8;
var particles = [];
var plinkos = [];
var divisions =[];
var DivisionHeight = 300;
function setup() {
  createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    groundObj = new Ground(0,790,960,10);
    for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height+DivisionHeight/2,10,DivisionHeight));
  }
  for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
}

function draw() {
  background("black"); 
   Engine.update(engine); 
  groundObj.display();
  for(var d=0;d<=divisions.length;d=d+1){
    divisions[d].display();
  }
  for(var p=0;p<=plinkos.length;p=p+1){
    plinkos[p].display();
  }
  for(var p=0;d<=plinkos.length;p=p+1){
    plinkos[p].display();
  }
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2+10,width/2+10,10,50)));
  }
  drawSprites();
}