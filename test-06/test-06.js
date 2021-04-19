// FFTS!!! The Coding Train 17.11: Sound Visualization: Frequency Analysis with FFT - p5.js Sound Tutorial


var song;
var button;
var fft;

var volhistory = [];
var w;

function preload(){
	song = loadSound('assets/startrek.mp3')

}



function setup(){
	angleMode(DEGREES);
	let cnv = createCanvas(200, 200);
  	button = createButton("play/pause")
  	button.mousePressed(togglePlaying)

  	fft = new p5.FFT(0.9,64);
  	w = width / 64;
  	background(0);


}

function togglePlaying(){
	if(!song.isPlaying()){
	song.play();
	button.html("pause");
	} else {
		song.pause();
		button.html("play");
	}
}


function draw(){
	
	var spectrum = fft.analyze();
	stroke(255)
	fill(0)
	for (var i = 0; i < spectrum.length; i++){
		var amp = spectrum [i];
		var y = map(amp,0,256,height,0);
		rect(i * w, y, w, height - y);
	}

	
	
	noFill()
	
}

