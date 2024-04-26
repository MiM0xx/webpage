
let angle = 0;
let spacing = 10;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(220);
}

function draw() {
  background(220);
  stroke(255,0,0);
  strokeWeight(3)
  translate(width / 2, height / 2);
  spiral(0, 0, 0, 0);
  angle += 0.1; // Change the angle over time
  spacing = map(mouseX, 0, width, 2, 20); // Control with mouse

  stroke(0,0, 255);
  strokeWeight(2)
  translate(width /130, height /130);
  spiral(0, 0, 0, 0);
  angle += 0.1;
  spacing = map(mouseX, 0, width, 2, 20); // Control with mouse
} 



function spiral(x, y, startAngle, level) {
  if (level > 500 || dist(x, y, 0, 0) > 200) {
    return;
  }

  let endX = x + cos(startAngle) * level;
  let endY = y + sin(startAngle) * level;

  line(x, y, endX, endY);

  spiral(endX, endY, startAngle + angle, level + spacing);
}




