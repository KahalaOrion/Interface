// first test


var mic;
var fft;
var w;


function setup(){
	colorMode(HSB);
	let cnv = createCanvas(816, 1056);
  	cnv.mousePressed(userStartAudio)
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT(0.9,64);
	// smooth()
	fft.setInput(mic);
	
  	
	

}

function draw(){
background(0);


	
	var vol = mic.getLevel();
	console.log(vol)
	strokeWeight(5)
	stroke(vol*100,100,100)
	noFill()

	// rect(vol*1000,vol*2000, 200, 200);
	


    let spectrum = fft.analyze();
//  stroke(255);
//  noFill();

beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i*20, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();


  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  let waveform = fft.waveform();
  
  beginShape();
  // stroke(200);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();



	
}
