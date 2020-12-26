var rect1,rect2;
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect2 = createSprite(600,200,100,70);
}

function draw() {
  background("black"); 

rect1.y=mouseY;
rect1.x=mouseX;
console.log(rect2.y-rect1.y);

if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 && rect1.x-rect2.x<rect1.width/2+rect2.width/2 &&
  rect2.y-rect1.y<rect1.height/2+rect2.height/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2){
  rect1.shapeColor="red";
}
else {rect1.shapeColor="grey";}


  drawSprites();
}