var mic;
var fft;
var spectrum;
var x, h;

function setup(){
  createCanvas(800,400);
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  mic.connect(fft);

}

function draw(){
  background(250);

  spectrum = fft.analyze();
  noStroke();

  for (var i = 0; i< spectrum.length; i++){
    x = map(i, 0, spectrum.length, 0, width*4);
    h = -height + map(spectrum[i], 0, 255, height, 0);
    fill(x+50,h,i);
    rect(x, height, width / spectrum.length, h);
  }


}
