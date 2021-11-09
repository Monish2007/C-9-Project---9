var box


function setup() {
  createCanvas(500,500);
  box = createSprite(250,250,30,30);
  
}

function draw() 
{
  background("yellow");
  drawSprites()

  if(keyDown("RIGHT_ARROW")){

   background("red")

  }

 
}




