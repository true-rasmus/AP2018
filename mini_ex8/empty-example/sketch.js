//Variables

//gradient
var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;

//API & Button
var weather;
var appid = '&APPID=1a6ad9c1f0d00bac01c7a5e616de18dc';
var unit = '&units=metric'
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var input;


function setup(){
  createCanvas(700,500)
  // Gradient
  c1 = color(150, 200, 255);
  c2 = color(40, 255, 153);
  noLoop();
  //Button
  setInterval(weatherReq,500)
  input = select('#city');
}

function sun(x,y){
fill(255,255,100);
ellipse(60,60,100,100)
}

// Load data from API
function weatherReq(){
  var url = api+input.value()+appid+unit
  loadJSON (url, gotData);
}
// Function for gradient
function setGradient(x, y, w, h, c1, c2, axis){
  noFill();
  if (axis == Y_AXIS) {
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0.01, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
}
// Function, drawing a cloud
function cloud1(x,y){
  ellipse(x,y,50);
  ellipse(x-10,y+30,50);
  ellipse(x+20,y+40,60);
  ellipse(x+50,y,70);
  ellipse(x+80,y+30,40);
  ellipse(x+50,y+30,45);

}
// Function for API + drawing Gradient
function gotData(data){
  setGradient(0, 0, 700, 500, c1, c2, Y_AXIS);
  sun(20,20);

  // Text
  fill(255);
  textAlign(CENTER);
  textSize(35);
  text('How cloudy is the weather in your city?',350,400);

  weather = data;
  if (weather){
    noStroke();
    for(let i=0; i<weather.clouds.all; i++){
      fill(i/0.03);
      cloud1(random(0,700),i+100,50,50);
    }
  }
}
