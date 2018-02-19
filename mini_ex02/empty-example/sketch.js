
// variables for faders
var fade1, fade2, fade3, fade4, fade5, fade6, fade7, fade8, fade9
var fadetimer;
// var for soundfiles
var soundBass, soundMelodi, soundPercs, soundDog, soundDuck, soundChicken;
var soundSheep, soundHorse, soundFrog, soundCow

function preload() {
  soundBass = loadSound('assets/bund.mp3');
  soundMelodi = loadSound('assets/technomelodi.mp3');
  soundPercs = loadSound('assets/technorytme.mp3');
  soundDog = loadSound('assets/dogbark.mp3');
  soundDuck = loadSound('assets/duck.mp3');
  soundChicken = loadSound('assets/chicken.mp3');
  soundSheep = loadSound('assets/sheep.mp3');
  soundHorse = loadSound('assets/horse.mp3');
  soundFrog = loadSound('assets/frog.mp3');
  soundCow = loadSound('assets/cow.mp3');

  fade1 = 405;
  fade2 = 405;
  fade3 = 405;
  fade4 = 405;
  fade5 = 405;
  fade6 = 405;
  fade7 = 405;
  fade8 = 405;
  fade9 = 405;
  fadetimer = 60

}

function setup() {

      sel = -100;
  createCanvas(1250,650);

   // start soundfiles
  soundBass.setVolume(1);
  soundBass.play();
  soundBass.loop();
  soundMelodi.setVolume(0);
  soundMelodi.play();
  soundMelodi.loop();
  soundPercs.setVolume(0);
  soundPercs.play();
  soundPercs.loop();
  soundDog.setVolume(0);
  soundDog.play();
  soundDog.loop();
  soundDuck.setVolume(0);
  soundDuck.play();
  soundDuck.loop();
  soundCow.setVolume(0);
  soundCow.play();
  soundCow.loop();
  soundChicken.setVolume(0);
  soundChicken.play();
  soundChicken.loop();
  soundSheep.setVolume(0);
  soundSheep.play();
  soundSheep.loop();
  soundFrog.setVolume(0);
  soundFrog.play();
  soundFrog.loop();
  soundHorse.setVolume(0);
  soundHorse.play();
  soundHorse.loop();
}

function draw() {

  fadetimer-- // set timer for mousePressed precision

  background('rgb(100,100,100)');
  color('black')
  //draw lines
  line(10,325,1240,325); // center

  line(80,225,80,425);
  line(216.25,225,216.25,425);
  line(352.50,225,352.50,425);
  line(488.75,225,488.75,425);
  line(624,225,624,425);

  //right half
  line(1170,225,1170,425);
  line(1033.75,225,1033.75,425);
  line(897.5,225,897.5,425);
  line(761.25,225,761.25,425);

  //draw faders, calling variables instead of Y
  rect(60,fade1,40,20);
  rect(196.25,fade2,40,20);
  rect(332.5,fade3,40,20);
  rect(468.75,fade4,40,20);
  rect(604,fade5,40,20);
  rect(741.25,fade6,40,20);
  rect(877.5,fade7,40,20);
  rect(1013.75,fade8,40,20);
  rect(1150,fade9,40,20);




  //some text
  textSize(40);
  fill(0,120,150);
  text('DakkeDakDyr ENKOMMANUL',10,50);
  fill(10,10,10);
  textSize(22);
  text('Dogs',55,205);
  text('Duck',192,205);
  text('Sheep',327,205);
  text('Cow',465,205);
  text('Chickens',597,205);
  text('Frog',738,205);
  text('Horse',872,205);
  text('RythmShit',994,205);
  text('Synth',1150 ,205);

    //selection box

    noFill()
    color('white')
    rect(sel,220,60,220)

  if (mouseX < 100 && mouseX > 60 && mouseY < 430 && mouseY > 220){
    sel = 50;
  } else {sel = -100}
  if (mouseX < 236.25 && mouseX > 196.25 && mouseY < 430 && mouseY > 220){
    sel = 186.25;
  }
  if (mouseX < 372.5 && mouseX > 332.5 && mouseY < 430 && mouseY > 220){
    sel = 322.5;
  }
  if (mouseX < 508.75 && mouseX > 468.75 && mouseY < 430 && mouseY > 220){
    sel = 458.75;
  }
  if (mouseX < 645 && mouseX > 605 && mouseY < 430 && mouseY > 220){
    sel = 595;
  }
  if (mouseX < 781.25 && mouseX > 741.25 && mouseY < 430 && mouseY > 220){
    sel = 731.25;
  }
  if (mouseX < 917.5 && mouseX > 877.5 && mouseY < 430 && mouseY > 220){
    sel = 867.5;
  }
  if (mouseX < 1053.75 && mouseX > 1013.75 && mouseY < 430 && mouseY > 220){
    sel = 1003.75;
  }
  if (mouseX < 1190 && mouseX > 1150 && mouseY < 430 && mouseY > 220){
    sel = 1140;
  }


}

function mousePressed(){
  console.log(mouseX,mouseY);
  if (mouseX < 100 && mouseX > 60 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade1 > 300){
      soundDog.setVolume(1);
      fade1 = 225;
      fadetimer = 60;
    } else if (fade1 < 300) {
      soundDog.setVolume(0);
      fade1 = 405;
      fadetimer = 60;
    }
  }
  //fader 2
  if (mouseX < 236.25 && mouseX > 196.25 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade2 > 300){
      soundDuck.setVolume(0.8);
      fade2 = 225;
      fadetimer = 60;
    } else if (fade2 < 300) {
      soundDuck.setVolume(0);
      fade2 = 405;
      fadetimer = 60;
    }
  }
  //fader 3
  if (mouseX < 372.5 && mouseX > 332.5 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade3 > 300){
      soundSheep.setVolume(1);
      fade3 = 225;
      fadetimer = 60;
    } else if (fade3 < 300) {
      soundSheep.setVolume(0);
      fade3 = 405;
      fadetimer = 60;
    }
  }
  //fader 4
  if (mouseX < 508.75 && mouseX > 468.75 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade4 > 300){
      soundCow.setVolume(1);
      fade4 = 225;
      fadetimer = 60;
    } else if (fade4 < 300) {
      soundCow.setVolume(0);
      fade4 = 405;
      fadetimer = 60;
    }
  }
  //fader 5
  if (mouseX < 645 && mouseX > 605 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade5 > 300){
      soundChicken.setVolume(1);
      fade5 = 225;
      fadetimer = 60;
    } else if (fade5 < 300) {
      soundChicken.setVolume(0);
      fade5 = 405;
      fadetimer = 60;
    }
  }
  //fader 6
  if (mouseX < 781.25 && mouseX > 741.25 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade6 > 300){
      soundFrog.setVolume(1);
      fade6 = 225;
      fadetimer = 60;
    } else if (fade6 < 300) {
      soundFrog.setVolume(0);
      fade6 = 405;
      fadetimer = 60;
    }
  }
  //fader 7
  if (mouseX < 917.5 && mouseX > 877.5 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade7 > 300){
      soundHorse.setVolume(1);
      fade7= 225;
      fadetimer = 60;
    } else if (fade7 < 300) {
      soundHorse.setVolume(0);
      fade7 = 405;
      fadetimer = 60;
    }
  }
  //fader 8
  if (mouseX < 1053.75 && mouseX > 1013.75 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade8 > 300){
      soundPercs.setVolume(0.7);
      fade8 = 225;
      fadetimer = 60;
    } else if (fade8 < 300) {
      soundPercs.setVolume(0);
      fade8 = 405;
      fadetimer = 60;
    }
  }
  //fader 9
  if (mouseX < 1190 && mouseX > 1150 && mouseY < 430 && mouseY > 220 && fadetimer < 58){
    if (fade9 > 300){
      soundMelodi.setVolume(0.8 );
      fade9 = 225;
      fadetimer = 60;
    } else if (fade9 < 300) {
      soundMelodi.setVolume(0);
      fade9 = 405;
      fadetimer = 60;
    }
  }
}
