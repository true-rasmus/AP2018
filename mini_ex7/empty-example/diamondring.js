function preload(){
  img = loadImage('sparkle2.png');
  dialogue = loadSound('dialogue.mp3');
}

function setup() {
  createCanvas(630,650);
  dialogue.play();
  dialogue.loop();
}

function draw() {
  background(0);

  //diamond
  strokeWeight(5);
  stroke(255);
  noFill();
  beginShape();
  vertex(270,327);
  vertex(220,260);
  vertex(255,225);
  vertex(346,225);
  vertex(380,260);
  vertex(335,327);
  endShape();

  strokeWeight(2);
  line(220,260,380,260);
  line(255,225,300,260);
  line(300,260,346,225);
  line()

  //ring
  strokeWeight(10);
  stroke('gold');
  noFill();
  ellipse(303,400,150,150);

  image(img,327,210,100,100);

}
