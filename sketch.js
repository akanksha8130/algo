var mrect,frect
function setup() {
  createCanvas(800,400);
 mrect = createSprite(400,100,80,40)
 mrect.shapeColor="green"
 mrect.debug=true
frect=createSprite(200,100,40,80)
frect.shapeColor="green"
frect.debug=true
 
}

function draw() {
  background(0);  
  mrect.x=World.mouseX
  mrect.y=World.mouseY

  if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
    frect.x-mrect.x<mrect.width/2+frect.width/2 &&
    mrect.y-frect.y<mrect.height/2+frect.height/2 &&
    frect.y-mrect.y<mrect.height/2+frect.height/2)
  {

    frect.shapeColor="red"
    mrect.shapeColor="red"
  }
  else{
    
    frect.shapeColor="green"
    mrect.shapeColor="green"
  }
  drawSprites();
}