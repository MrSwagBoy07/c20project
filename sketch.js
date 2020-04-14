
var r = 0;
var g = 50;
var b=255;


var canvas1,canvas2,canvas3
var ball

function setup(){

  createCanvas(1200,400);
  
 /*canvas1=createSprite(300,200,400,400);
 canvas2=createSprite(600,200,400,400);
 canvas3=createSprite(900,200,400,400);
 canvas1.shapeColor="black";
 canvas2.shapeColor="black";
 canvas3.shapeColor="black";
 ball=createSprite(600,200,10,10);
 ball.shapeColor="white";*/

}


function draw(){
  background(r,g,b);
 // ellipse(600,200,10,10);
 /*ball.x=World.mouseX;
 ball.y=World.mouseY;
drawSprites();
if(ball.isTouching(canvas1)){
canvas1.shapeColor="red";
canvas2.shapeColor="black";
canvas3.shapeColor="black";
}
if(ball.isTouching(canvas2)){
canvas2.shapeColor="green";
canvas1.shapeColor="black";
canvas3.shapeColor="black";
}
if(ball.isTouching(canvas3)){
  canvas3.shapeColor="blue";
  canvas1.shapeColor="black";
  canvas2.shapeColor="black";
  }*/
 r=map(mouseX,0,1200,0,255);
 g=map(mouseX,50,900,0,255);
 b=map(mouseX,100,600,0,255);
 fill("white")
 ellipse(mouseX,mouseY,10,10);


}