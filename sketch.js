var engine, world;
var wall,thickness;
var bellet,speed,weight;
var damage;

function setup() {
  createCanvas(1200,400);
  bullet = createSprite(25, 200, 30, 10);


  thickness = random(22,83);
  wall = createSprite(1140,200,thickness,height/2);
  speed=random(55,90);
  weight=random(30,52);
  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);
  wall.shapeColor=color(80,80,80);
  if(wall.x-bullet.x<(bullet.width+wall.width)/1.0){
    bullet.velocityX=0;
    damage = 0.5*weight*speed*speed/(thickness*1.5);
    if(damage<10){
      wall.shapeColor=color("green");
    }
    if(damage>10){
      wall.shapeColor=color("red");
    }
  }
  
  drawSprites();
}