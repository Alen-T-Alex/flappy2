var bird,obstacle,bottomBoundry



function preload(){
  birdImg =loadImage("bird.png");
  pipeImg=loadImage("flappy pipe.png")

}

function setup() {
  createCanvas(400,400);


obstacle=createSprite(300,200);
obstacle.addImage(pipeImg);

bird=createSprite(100,200,);
bird.addImage(birdImg);
bird.scale=0.12;





}

function draw() 
{

  background(30);



  if(keyDown("space")&& bird.y >=-400) {
    bird.velocityY = -5;
}

bird.velocityY=bird.velocityY+0.5;








drawSprites();
}

 

