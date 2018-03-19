
var x = 0;
var y = 0;
var fr = 60

function setup() {
  createCanvas(750,500);
  background(0);
  frameRate(fr)
}

function draw() {

  noFill();

  //start loop
  for (i = 0; i<200; i++){

    translate(width/2,height);
    // purposefully didn't devide height as I like the visual impact.

    rotate(mouseX/mouseY, mouseY/mouseX);
    // rotational values are calculated from mouse.pos

    strokeWeight(random(4));
    // random stroke weight to add a level of chaos

    if (random(1) <0.5) { // randomlys chose between if or else statement
      stroke(random(50),random(40),random(30));
      // dark color values to contrast the many drawn colors
      arc(mouseX,mouseY,x,y,mouseX,mouseY);


    } else {

      stroke(random(255),random(i),random(200),random(200));
      // i use 'i' as green value, to make it less dominant
      arc(mouseX,mouseY,x,y,mouseX,mouseY+y);
      //a mix of mouse.pos and hard values on shapes.
      //gives both the ability to impact the 'print' and a set of rules the 'print' follows
  }
  }
  x+=1;
  if (x > width) {
  x = 0;
  y = random(50);

  // this makes the shapes grow for some time before returning and 'changing behaviour'
    
   

  }
}
