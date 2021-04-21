var mic;
var button;
var colors;
var n = 0 


function setup() {
  colorMode(HSB)
  let cnv = createCanvas(816, 1056);
  cnv.mousePressed(userStartAudio)
  mic = new p5.AudioIn();
  mic.start();

  

  button = createButton("color");
  button.mousePressed(getColor)  

 
}

// function getColor(){
//   n=n+1
   
  

// }

function getColor(){
   n = n + 1;
   if (n > 4) {
    n = 0
  
  }
  console.log(n)
}


function draw() {
  var vol = mic.getLevel();
  purple = color(vol*360,100,100)
  bluish = color(vol*90,100,100)
  reddish = color(90+(vol*90),100,100)
  greenish = color(180+(vol*90),100,100)
  brown = color(100)

  colors = [purple, bluish, greenish, reddish, brown];
  
  fill(colors[n])
  rect(50,50,500,500)

 

  
}