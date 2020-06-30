const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var plinkos = [];
var divs = [];



function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 500, 20)

  for (var i = 0; i <= width; i = i + 80) {
    divs.push(new Division(i, 730, 10, 100))
  }

  for (var i = 20; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 100, 5))
  }

  for (var i = 40; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 150, 5))
  }
 
  for (var i = 20; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 200, 5))
  }

  for (var i = 40; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 250, 5))
  }

  for (var i = 20; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 300, 5))
  }

  for (var i = 40; i <= width; i = i + 50) {
    plinkos.push(new Plinko(i, 350, 5))
  }


}


function draw() {
  background(0);
  Engine.update(engine);
  world.gravity.y = 1.5;

  ground.display();

  for (var i = 0; i < divs.length; i++) {
    divs[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (frameCount % 50 == 0) {
    particles.push(new Particles(random(200,400), 50, 10))
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  

}