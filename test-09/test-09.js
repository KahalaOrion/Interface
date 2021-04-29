// second test


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
	smooth(0.6)
	fft.setInput(mic);
	

	

}

function draw(){
  background(0);
	

	
	var vol = mic.getLevel();
	console.log(vol)
	strokeWeight(5)
	// stroke(vol*360,100,100) //rainbow colors
  stroke(vol*90,100,100) //red to green
  // stroke(90+(vol*90),100,100) //green to turqoise
  // stroke(180+(vol*90),100,100) //turqoiuse to purple
	noFill()

	// rect(vol*1000,vol*2000, 200, 200);
	


    let spectrum = fft.analyze();
//  stroke(255);
//  noFill();


  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width-500);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    ellipse(x*4, -h, width / spectrum.length, -h )
  }

    for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width-600);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x*10, height, width / spectrum.length, h )
  }

  strokeWeight(2)
   for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width/spectrum.length, h*x)
  }

  let waveform = fft.waveform();
  
  beginShape();
  stroke(0)
  strokeWeight(10)
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width+100);
    let y = map( waveform[i], -1,1, 0, height);
    vertex(x,y)
  }
  endShape();



	
}
