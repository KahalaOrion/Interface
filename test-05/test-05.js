//graphing amplitude The Coding Train 17.9: Sound Visualization: Graphing Amplitude - p5.js Sound Tutorial


var song;
var button;
var amp;

var volhistory = [];

function preload(){
	song = loadSound('assets/startrek.mp3')

}



function setup(){
	angleMode(DEGREES);
	let cnv = createCanvas(200, 200);
  	button = createButton("play/pause")
  	button.mousePressed(togglePlaying)

  	amp = new p5.Amplitude();


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
	background(0);
	var vol = amp.getLevel();
	volhistory.push(vol);
	stroke(255)
	noFill()


	translate(width/2, height/2);
	beginShape();
	for (var i = 0; i < 360; i++){
		var r = map(volhistory[i], 0, 1, 10, 200);;
		var x = r * cos(i);
		var y = r * sin(i);
		// var y = map(volhistory[i], 0, 1, height/2, 0);
		vertex (x, y);
	}
	endShape();

	// beginShape();
	// for (var i = 0; i < volhistory.length; i++){
	// 	var y = map(volhistory[i], 0, 1, height/2, 0);
	// 	vertex (i, y);
	// }
	// endShape();

	if (volhistory.length > 360){
		volhistory.splice(0,1);
	}

	// ellipse (100,100, 200, vol*400);
	
}

