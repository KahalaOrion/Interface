// second test


var mic;
var fft;
var n = 0;
var speakButton;

var cButton;
var saveButton;
var strokeSlider;
var textSlider;


function setup(){
	colorMode(HSB);
	let cnv = createCanvas(816, 1056);
  cnv.mousePressed(userStartAudio)

	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT(0.9,64);
	smooth(0.6)
	fft.setInput(mic);


  strokeSlider = createSlider(0.5,30,0.5);

  cButton = createButton("color");
  cButton.mousePressed(selectColor)  

  speakButton = createButton("text");
  speakButton.mousePressed(speechText);

  textSlider = createSlider(0,1056,300); 

  saveButton = createButton("save");
  saveButton.mousePressed(saveWork);



  background(0);
	
}

function speechText(){
  let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang,gotSpeech);
  speechRec.start();

  function gotSpeech(){
    console.log(speechRec)
    if (speechRec.resultValue){
      let vText = speechRec.resultString;
      textAlign(CENTER);
      textFont("helvetica")
      textSize(150)
      fill(colors[n])
      noStroke()
      text(vText, 50,textSlider.value(),765,990)

    }

  }

}

function selectColor(){
   n = n + 1;
   if (n > 4) {
    n = 0
  
  }
  console.log(n)
}

function saveWork() {
  saveCanvas("soundart","png")
}



function draw(){
 
	

  var vol = mic.getLevel();
  // console.log(vol)

  rainbow = color(vol*360,100,100)
  redish = color(vol*90,100,100)
  greenish = color(90+(vol*90),100,100)
  turquoise = color(180+(vol*90),100,100)
  whites = color(100)

  colors = [rainbow, redish, greenish, turquoise, whites];
  console.log(n)
  
  stroke(colors[n]);
  strokeWeight(strokeSlider.value());
  noFill();


    let spectrum = fft.analyze();

  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width-500);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    ellipse(x*4, -h, width / spectrum.length, -h )
  }

    for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width-500);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    ellipse(x*4, height, width / spectrum.length, h )
  }

  
   for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width/spectrum.length, h*x)
  }

  let waveform = fft.waveform();
  
  beginShape();
  stroke(0)
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width+100);
    let y = map( waveform[i], -1,1, 0, height);
    vertex(x,y)
  }
  endShape();



	
}
