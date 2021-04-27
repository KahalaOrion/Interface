// second test


var mic;
var fft;
var n = 0;


var sizeSlider;
var textSlider;
var waveButton;



function setup(){
	colorMode(HSB);
	let cnv = createCanvas(816, 1056);
  cnv.position(width/2);
  cnv.mousePressed(userStartAudio)


	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT(0.9,64);
	smooth(0.6)
	fft.setInput(mic);


  sizeSlider = createSlider(0.5,100,4);

  var cButton = select("#cButton");
  cButton.mousePressed(selectColor)

   var speakButton = select("#speakButton");
  speakButton.mousePressed(speechText); 

  var saveButton = select("#saveButton");
  saveButton.mousePressed(saveWork);

  // var waveButton = select("waveButton")
  // waveButton.mousePressed(showWave) 
   

 

  textSlider = createSlider(0,1056,400); 

  



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
      textSize(120)
      fill(colors[n])
      noStroke()
      text(vText.toUpperCase(), 50,textSlider.value(),765,990)

    }

  }

}

function selectColor(){
   n = n + 1;
   if (n > 4) {
    n = 0
  
  }

}

function showWave(){

}



function saveWork() {
  saveCanvas("soundvisualizer","png")
}



function draw(){
 
	

  var vol = mic.getLevel();
  // console.log(vol)

  rainbow = color(vol*360,100,100)
  redish = color(vol*90,100,100)
  greenish = color(90+(vol*90),100,100)
  turquoise = color(180+(vol*90),100,100)
  whites = color(0,0, vol*100)

  colors = [rainbow, redish, greenish, turquoise, whites];
  console.log(n)
  
  noStroke()
  fill(colors[n]);


    let spectrum = fft.analyze();


   for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width+80);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x-75, -h - 10, sizeSlider.value(), -h )
  }

    for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width+80);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x-75, height, sizeSlider.value(), h)
  }



  let waveform = fft.waveform();
  
  stroke(colors[n]);
  strokeWeight(sizeSlider.value());
  noFill()

  beginShape();
 
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width+100);
    let y = map( waveform[i], -1,1, 0, height);
    vertex(x,y)
  }
  endShape();

  



	
}
