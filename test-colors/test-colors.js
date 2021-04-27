var mic;
var button;
var colors;
var n = 0 

var wbutton;
var s = 0;


function setup() {
  colorMode(HSB)
  
  let cnv = createCanvas(816, 1056);
  cnv.mousePressed(userStartAudio)
  mic = new p5.AudioIn();
  mic.start();

  

  button = createButton("color");
  button.mousePressed(getColor) 
  button.style('background-color','black') 

  wbutton = createButton("wave");
  wbutton.mousePressed(getWave)  

 
}

// function getColor(){
//   n=n+1
   
  

// }

function getColor(){
   n = n + 1;
   if (n > 4) {
    n = 0
  
  }
  // console.log(n)
}

function getWave(){
  s = s + 1
  if (s > 1){
    s = 0
    console.log(s)
  }
}


function draw() {
  var vol = mic.getLevel();
  purple = color(vol*360,100,100)
  bluish = color(vol*90,100,100)
  reddish = color(90+(vol*90),100,100)
  greenish = color(180+(vol*90),100,100)
  brown = color(100)

  colors = [purple, bluish, greenish, reddish, brown];
  
if(s = 0){
  fill(colors[n])
  rect(50,50,500,500)
} else {
  stroke(colors[n])
    ellipse (40,40,300,300)
  }
}

