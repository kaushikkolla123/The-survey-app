function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  database = firebase.database();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}