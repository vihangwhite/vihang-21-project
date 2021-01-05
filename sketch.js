var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  //createSprite(400,200,50,50);

  speed=random(55,90);
  weight=random(400,1500);
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapecolor=color(255);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapecolor=color(80,80,80)
}

function draw() {
  background(0);
  
  if(hascollided(bullet,wall)) {
      bullet.velocityx=0;
      var damage=0.5*weight*speed* speed/(thickness *thickness *thickness);
    } 
  
    if(damage>10) {
      wall.shapecolor=color(255,0,0);
    }
  
    if(damage<10) {
      wall.shapecolor=color(0,255,0);
    } 
  drawSprites();
  }

function hascollided(Lbullet,Lwall)
{
  bulletRightEdge=Lbullet.x +Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true
  }
  else{
    return false;
  }

}
