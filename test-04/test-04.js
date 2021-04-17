//microphone input + getting volume level The Coding Train 17.8: Microphone Input - p5.js Sound Tutorial 

var mic;



function setup(){
	let cnv = createCanvas(200, 200);
  	cnv.mousePressed(userStartAudio);
	mic = new p5.AudioIn();
	mic.start();



}


function draw(){
	background(0);

	var vol = mic.getLevel();
	ellipse (100,100, 200, vol*600);
	console.log(vol)
	
}

