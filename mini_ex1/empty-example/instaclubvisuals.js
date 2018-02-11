function setup() {
  createCanvas(1200, 700, WEBGL);
  frameRate(60);
  }

var rx, ry;
var r, g, b;
var maxintX = 24;
var minintX = 1;
var intX = maxintX;
var maxintY = 16;
var minintY = 1;
var intY = maxintY;
var thicc = random(500)
// min & max values + setting default
// 24 & 16 is the p5 default number for the detail xy value  of the torus shape


function draw() {
  background('#222222');
  rotateX(frameCount * rx);
  rotateY(frameCount * ry);
  stroke(r, g, b);
  fill(r, g, b, 127);
  torus(800,thicc,intX,intY);
  torus(100,50,intX,intY);
  // calling the variables instead of a fixed value. this makes it possible to
  // modify the amount of detail in the torus shape.


  if (intX > 24)  {
    intX = maxintX;
  }
  if (intY > 16) {
    intY = maxintY;
  }
  if (intX < 1)  {
    intX = minintX;
  }
  if (intY < 1) {
    intY = minintY;
  }
  // setting up constraints. throught interaction the values will revert if they
  // succeed the default p5 numbers or go below 1.
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    intX--
  } else if (keyCode === RIGHT_ARROW) {
    intX++
  }
  if (keyCode === UP_ARROW) {
    intY++
  } else if (keyCode === DOWN_ARROW) {
    intY--
  }
  // setting up interaction with arrow keys. L/R adds og subtracts value
  // from the detail x value and U/D the detail y value
  r = random(255);
  g = random(255);
  b = random(255);
  rx = random(500)*0.0001;
  ry = random(500)*0.0004;
  thicc = random(900)
  return false;

  // everytime a key is pressed, the color values are randomized
}
