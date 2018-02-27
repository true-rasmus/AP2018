var rectWidth;
var rectExpand;



function preload(){

}

function setup() {
  rectExpand = 1;
  createCanvas(700,500);
}




function draw() {
  background('#222222');
  rectExpand++ // making the value incremental
  rectWidth = rectExpand; // recWwidth both shows speed and loadprogress
  p = rectExpand/2.3 // drawing the value as text
  drawThrobber(9);


// setting up marks for change in time/speed
  if (rectExpand > 1){
    rectExpand = rectExpand-0.5;
  }
  if (rectExpand > 150){
    rectExpand = rectExpand-0.25;
  }
  if (rectExpand > 300){
    rectExpand = rectExpand-0.125;
  }
  if (rectExpand > 350){
    rectExpand = rectExpand-0.0625;
  }
  if (rectExpand > 380){
    rectExpand = rectExpand-0.03125;
  }
  if (rectExpand > 400){
    rectExpand = rectExpand-0.015125;
  }
  if (rectExpand > 415){
    rectExpand = rectExpand-0.0055;
  }
  if (rectExpand > 420){
    rectExpand = rectExpand-0.001;
  }




  rect(98,98,502,44); // loading bar frame
  stroke('white');

fill(random(200),20);
  rect(100,100,rectWidth,40); // loading bar
    fill('#222222');
    textSize(30);
    text(p,(width/3)*2,330); // see line 22

  if (p>100){ // text to indicate that it's not out of 100
    text('/?',178,280)
  }
  if (rectWidth > 510){
    text(':( :( :( :(', 607,115)
  }

  function drawThrobber(num){
// throbber, based and inspired from class02 example
    push();
    translate(width/2, height/2);
    // using the incremental value, rectExpand, instead of framecount.
    // makes it possible to slow down the throbber over time.
    var cir = 360/num*((rectExpand/2)%num);
    rotate(radians(cir));
    stroke(random(100,200),150);
    noFill();
    ellipse(150,0,80,80);
    pop();



  }



}
