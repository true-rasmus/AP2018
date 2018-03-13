let thing;
let target;

var timer, metatimer, points;

function setup(){
  createCanvas(1000,700);
  thing = new Thing();
  target = new Target();
  points = 0;
  timer = 100; // in-game-time
  metatimer = 60; // syncs timer to framerate
}

function draw(){
  background('#222222');
  thing.show();
  thing.collapse();
  target.show2()
  target.xpos -= 10; // makes the target move across the screen
                    // could've made a class function, but I didn't :D
  textSize(50);
  text('points  '+points,200,400);
  text('time   '+timer,200,500);

  //collision/position check. could've been made better (map or vertex etc.
  if (thing.xpos >= target.xpos && thing.xpos <= target.xpos+70){
    if (thing.ypos < 197){
      points += 1;
    }
    if (thing.ypos > 198 && thing.ypos < 240){
      points -= 10;
    }
  }

  //timer
  metatimer -=1;
  if (metatimer <= 0){
    timer -=1;
    metatimer = 60;
  }
  if (timer <= 0){
    timer = 0;
    text('game over, score: '+points,300,120);
    thing.xpos = 1200;
  }
}

function keyPressed(){

    thing.extend();

}

// the "player"
class Thing{
  constructor(xpos, ypos){
    this.xpos = width/2;
    this.ypos = height/2;
  }
  extend(){
    this.ypos = this.ypos - 250  // makes it "jump"

  }
  collapse(){
    this.ypos += 50;
    if (this.ypos > 600){
      this.ypos = 600; // makes it "fall down again"
    }
  }
  show(){
    stroke(200);
    strokeWeight(4);
    fill(random(150,200));
    rect(this.xpos, this.ypos, 50, 50)
  }
}


// the obstacle
class Target{
  constructor(xpos,ypos){
    this.xpos = 1050;
    this.ypos = 200;
  }
  show2(){
    stroke(200);
    strokeWeight(4);
    fill('green');
    rect(this.xpos, this.ypos, 70, 40);
    if (this.xpos < 10){
      this.xpos = 1050;
      // ^returns the target to the right of the screen.
      // of course optimal way to this would've been to add new i's to an array.
    }
  }
}
