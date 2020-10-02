var car,wall;
var car2,wall2;
var car3,wall3;
var car4,wall4;
var Cline;
var Cline2;
var Cline3;
var speed,weight;
var speed2,weight2;
function setup() {
  createCanvas(1600,400);
  Cline=createSprite(70,100,3200,5);
  Cline.shapeColor="white";
  Cline2=createSprite(70,200,3200,5);
  Cline2.shapeColor="white";
  Cline3=createSprite(70,300,3200,5);
  Cline3.shapeColor="white";
  speed=random(5,5);
  weight=random(222,1300);
  speed2=random(10,10);
  weight2=random(222,1300);
  car=createSprite(100,50,10,10);
  car.shapeColor="white";
  car2=createSprite(100,150,10,10);
  car2.shapeColor="yellow";
  car3=createSprite(100,250,10,10);
  car3.shapeColor="red";
  car4=createSprite(100,350,10,10);
  car4.shapeColor="green";
  wall=createSprite(1500,50,10,height/8);
  wall.shapeColor=color("white");
  wall2=createSprite(1500,150,10,height/8);
  wall2.shapeColor=color("white");
  wall3=createSprite(1500,250,10,height/8);
  wall3.shapeColor=color("white");
  wall4=createSprite(1500,350,10,height/8);
  wall4.shapeColor=color("white");
  car.velocityX=speed;
  car2.velocityX=speed2; 
  car3.velocityX=speed2;
  car4.velocityX=speed2;
}

function draw() {
  background("black");  
 
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    car.shapeColor="yellow";
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformatin<180 &&deformation>100)
    {
      car.shapeColor=(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=(0,255,0);
    }
    console.log();
  }
   
  if(wall2.x-car2.x<(car2.width+wall2.width)/2)
  {
    car2.velocityX=0;
    car2.shapeColor="yellow";
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0);
    }
    if(deformatin<180 &&deformation>100)
    {
      car2.shapeColor=(230,230,0);
    }
    if(deformation<100)
    {
      car2.shapeColor=(0,255,0);
    }
    console.log();
  }
   
  if(wall3.x-car3.x<(car3.width+wall3.width)/2)
  {
    car3.velocityX=0;
    car3.shapeColor="yellow";
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car3.shapeColor=color(255,0,0);
    }
    if(deformatin<180 &&deformation>100)
    {
      car3.shapeColor=(230,230,0);
    }
    if(deformation<100)
    {
      car3.shapeColor=(0,255,0);
    }
    console.log();
  }
  if(wall4.x-car4.x<(car4.width+wall4.width)/2)
  {
    car4.velocityX=0;
    car4.shapeColor="yellow";
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car4.shapeColor=color(255,0,0);
    }
    if(deformatin<180 &&deformation>100)
    {
      car4.shapeColor=(230,230,0);
    }
    if(deformation<100)
    {
      car4.shapeColor=(0,255,0);
    }
    console.log();
  }
  drawSprites();
}