var hour,minute,second;
var scangle;
var sh;
function setup() {
  createCanvas(800,400);
  hr = hour();
}

function draw() {
  background(0);
  angleMode(DEGREES);
  
  sc = second();
  scangle = map(sc,0,60,0,360);
  push();
  translate(400,200);
  rotate(scangle+180);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,10,100);
  pop();

  mn = minute();
  mnangle = map(mn,0,60,0,360);
  push();
  translate(400,200);
  rotate(mnangle+180);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,10,50);
  pop();

  hr = hour();
  hrangle = map(hr,0,60,0,360);
  push();
  translate(400,200);
  rotate(hrangle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,10,50);
  pop();
  drawSprites();
}